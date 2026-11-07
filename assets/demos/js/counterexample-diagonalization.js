(function (root) {
  "use strict";

  // All calculations use integers. In dimension three, minors determine rank
  // exactly and cross products give an integer basis for a rank-two kernel.
  const MAX_ENTRY_DIGITS = 1000;
  const abs = (value) => value < 0n ? -value : value;

  function gcd(a, b) {
    a = abs(a);
    b = abs(b);
    while (b !== 0n) [a, b] = [b, a % b];
    return a;
  }

  function primitive(vector) {
    const divisor = vector.reduce(gcd, 0n);
    if (divisor === 0n) return vector.slice();
    const first = vector.find((entry) => entry !== 0n);
    const signedDivisor = first < 0n ? -divisor : divisor;
    return vector.map((entry) => entry / signedDivisor);
  }

  function determinant(matrix) {
    const [[a, b, c], [d, e, f], [g, h, i]] = matrix;
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
  }

  function rank(matrix) {
    if (determinant(matrix) !== 0n) return 3;
    for (let r = 0; r < 3; r += 1) {
      for (let s = r + 1; s < 3; s += 1) {
        for (let c = 0; c < 3; c += 1) {
          for (let d = c + 1; d < 3; d += 1) {
            if (matrix[r][c] * matrix[s][d] - matrix[r][d] * matrix[s][c] !== 0n) return 2;
          }
        }
      }
    }
    return matrix.some((row) => row.some((entry) => entry !== 0n)) ? 1 : 0;
  }

  function shift(matrix, eigenvalue) {
    return matrix.map((row, r) => row.map((entry, c) => entry - (r === c ? eigenvalue : 0n)));
  }

  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  function nullspaceBasis(matrix) {
    const matrixRank = rank(matrix);
    if (matrixRank === 3) return [];
    if (matrixRank === 0) return [[1n, 0n, 0n], [0n, 1n, 0n], [0n, 0n, 1n]];
    if (matrixRank === 2) {
      for (let r = 0; r < 3; r += 1) {
        for (let s = r + 1; s < 3; s += 1) {
          const vector = cross(matrix[r], matrix[s]);
          if (vector.some((entry) => entry !== 0n)) return [primitive(vector)];
        }
      }
    }
    const row = matrix.find((entries) => entries.some((entry) => entry !== 0n));
    const pivot = row.findIndex((entry) => entry !== 0n);
    return [0, 1, 2].filter((column) => column !== pivot).map((column) => {
      const vector = [0n, 0n, 0n];
      vector[pivot] = -row[column];
      vector[column] = row[pivot];
      return primitive(vector);
    });
  }

  function parseEntries(values) {
    if (!Array.isArray(values) || values.length !== 9) throw new TypeError("Enter nine matrix entries.");
    const errors = [];
    let hasParseError = false;
    const entries = values.map((value, index) => {
      const entry = String(value).trim().replace(/^−/, "-");
      const location = `Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}`;
      let kind = null;
      let message = "";
      if (entry === "") {
        kind = "blank";
        message = `${location}: enter an integer.`;
      } else if (!/^[+-]?\d+$/.test(entry)) {
        kind = "integer";
        message = `${location}: use an integer, such as −3 or 2; decimals, fractions, and exponents are not accepted.`;
      } else if (entry.replace(/^[+-]/, "").length > MAX_ENTRY_DIGITS) {
        kind = "length";
        message = `${location}: use at most ${MAX_ENTRY_DIGITS.toLocaleString("en-US")} digits.`;
      }
      if (kind) {
        errors.push({ index, kind, message });
        hasParseError = true;
        return 0n;
      }
      const integer = BigInt(entry);
      if (integer === 0n) errors.push({ index, kind: "zero", message: `${location}: replace 0 with a nonzero integer.` });
      return integer;
    });
    return {
      matrix: hasParseError ? null : [entries.slice(0, 3), entries.slice(3, 6), entries.slice(6, 9)],
      errors
    };
  }

  /** Analyze a 3 × 3 array of BigInts, with no floating-point arithmetic. */
  function analyzeMatrix(matrix) {
    if (!Array.isArray(matrix) || matrix.length !== 3 || matrix.some((row) => !Array.isArray(row) || row.length !== 3 || row.some((entry) => typeof entry !== "bigint"))) {
      throw new TypeError("Expected a 3 × 3 matrix of BigInt entries.");
    }
    const trace = matrix[0][0] + matrix[1][1] + matrix[2][2];
    const principalMinorSum = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
      + matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]
      + matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1];
    const matrixDeterminant = determinant(matrix);
    const shiftedRank = rank(shift(matrix, 1n));
    const targetPolynomial = trace === 4n && principalMinorSum === 5n && matrixDeterminant === 2n;
    const allNonzero = matrix.every((row) => row.every((entry) => entry !== 0n));
    return {
      trace,
      principalMinorSum,
      determinant: matrixDeterminant,
      characteristicCoefficients: [1n, -trace, principalMinorSum, -matrixDeterminant],
      shiftedRank,
      shiftedNullity: 3 - shiftedRank,
      targetPolynomial,
      allNonzero,
      accepted: targetPolynomial && allNonzero && shiftedRank === 2,
      // These are called eigenspaces only after 1 and 2 are known eigenvalues.
      basisE1: targetPolynomial ? nullspaceBasis(shift(matrix, 1n)) : null,
      basisE2: targetPolynomial ? nullspaceBasis(shift(matrix, 2n)) : null
    };
  }

  const api = Object.freeze({ parseEntries, analyzeMatrix, determinant, rank, nullspaceBasis, MAX_ENTRY_DIGITS });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.CounterexampleDiagonalization = api;
  if (typeof document === "undefined") return;

  function init() {
    const form = document.getElementById("matrix-form");
    if (!form) return;
    const inputs = Array.from(form.querySelectorAll("[data-matrix-entry]"));
    const status = document.getElementById("feedback-status");
    const errorsList = document.getElementById("input-errors");
    const results = document.getElementById("results");
    const conditions = document.getElementById("condition-results");
    const facts = document.getElementById("matrix-facts");
    const showVerification = document.getElementById("show-verification");
    const verification = document.getElementById("verification");
    const verificationContent = document.getElementById("verification-content");
    const hint = document.getElementById("hint");
    const hintButton = document.getElementById("toggle-hint");
    let acceptedAnalysis = null;
    let acceptedMatrix = null;
    let hasChecked = false;

    function element(tag, text, className) {
      const node = document.createElement(tag);
      if (text !== undefined) node.textContent = text;
      if (className) node.className = className;
      return node;
    }

    const displayInteger = (integer) => integer.toString().replace(/^-/, "−");

    function math(text) {
      // Only fixed, local expressions enter this helper; user values use textContent.
      const node = element("span");
      node.innerHTML = text;
      return node;
    }

    function polynomial(coefficients) {
      const node = element("span", undefined, "polynomial");
      coefficients.forEach((coefficient, index) => {
        if (coefficient === 0n) return;
        const degree = 3 - index;
        const magnitude = abs(coefficient);
        const first = node.childNodes.length === 0;
        node.append(document.createTextNode(coefficient < 0n ? (first ? "−" : " − ") : (first ? "" : " + ")));
        if (degree === 0 || magnitude !== 1n) node.append(document.createTextNode(magnitude.toString()));
        if (degree > 0) node.append(element("var", "t"));
        if (degree > 1) node.append(element("sup", String(degree)));
      });
      if (!node.childNodes.length) node.textContent = "0";
      return node;
    }

    function clearInvalid() {
      inputs.forEach((input) => {
        input.removeAttribute("aria-invalid");
        input.setAttribute("aria-describedby", "entry-help");
      });
      errorsList.replaceChildren();
      errorsList.hidden = true;
    }

    function clearResults() {
      acceptedAnalysis = null;
      acceptedMatrix = null;
      results.hidden = true;
      facts.replaceChildren();
      conditions.replaceChildren();
      showVerification.hidden = true;
      showVerification.setAttribute("aria-expanded", "false");
      showVerification.textContent = "Show verification";
      verification.hidden = true;
      verificationContent.replaceChildren();
    }

    function showErrors(errors) {
      errors.forEach((error) => {
        const errorItem = element("li", error.message);
        errorItem.id = `entry-error-${error.index}`;
        errorsList.append(errorItem);
        inputs[error.index].setAttribute("aria-invalid", "true");
        inputs[error.index].setAttribute("aria-describedby", `entry-help ${errorItem.id}`);
      });
      errorsList.hidden = errors.length === 0;
    }

    function condition(name, passed, label, detail) {
      const item = element("li");
      item.dataset.condition = name;
      item.dataset.passed = String(passed);
      item.append(element("span", passed ? "Pass" : "Revise", "condition-mark"));
      const title = element("strong");
      title.append(label);
      item.append(title, element("span", detail, "condition-detail"));
      conditions.append(item);
    }

    function showAnalysis(analysis) {
      const characteristic = element("p");
      characteristic.append(math("det(<var>tI</var> − <var>A</var>) = "), polynomial(analysis.characteristicCoefficients));
      const determinantLine = element("p");
      determinantLine.append(math("det(<var>A</var>) = "), document.createTextNode(displayInteger(analysis.determinant)));
      facts.append(characteristic, determinantLine);
      if (analysis.targetPolynomial) {
        facts.append(math("The characteristic polynomial is (<var>t</var> − 1)<sup>2</sup>(<var>t</var> − 2), so the eigenvalues are 1 and 2, both positive."));
      }
      condition("entries", analysis.allNonzero, document.createTextNode("Nine nonzero integer entries"), analysis.allNonzero ? "Every entry meets the entry requirement." : "Zero is an integer, but this challenge requires every entry to be nonzero.");
      condition("trace", analysis.trace === 4n, math("tr(<var>A</var>) = 4"), `Your trace is ${displayInteger(analysis.trace)}. This determines the coefficient of t², with its sign reversed.`);
      condition("principal-minors", analysis.principalMinorSum === 5n, document.createTextNode("Sum of the three principal 2 × 2 minors = 5"), `Your sum is ${displayInteger(analysis.principalMinorSum)}. This is the coefficient of t.`);
      condition("determinant", analysis.determinant === 2n, math("det(<var>A</var>) = 2"), `Your determinant is ${displayInteger(analysis.determinant)}. Its negative is the constant term.`);
      let rankDetail = `Your rank is ${analysis.shiftedRank}, so dim ker(A − I) = 3 − ${analysis.shiftedRank} = ${analysis.shiftedNullity}.`;
      if (analysis.targetPolynomial && analysis.shiftedRank === 1) rankDetail += " The eigenspace for 1 has dimension 2; together with the eigenvector for 2, this matrix is diagonalizable.";
      if (!analysis.targetPolynomial && analysis.shiftedRank === 2) rankDetail += " The characteristic polynomial must also match before this is the requested counterexample.";
      condition("rank", analysis.shiftedRank === 2, math("rank(<var>A</var> − <var>I</var>) = 2"), rankDetail);
      results.hidden = false;
      if (analysis.accepted) {
        acceptedAnalysis = analysis;
        showVerification.hidden = false;
      }
    }

    function vectorNode(vector) {
      const node = element("span", undefined, "math-matrix");
      node.dataset.vector = vector.join(",");
      node.setAttribute("role", "img");
      node.setAttribute("aria-label", `Column vector (${vector.map(displayInteger).join(", ")})`);
      vector.forEach((entry) => {
        const cell = element("span", displayInteger(entry));
        cell.setAttribute("aria-hidden", "true");
        node.append(cell);
      });
      return node;
    }

    function basisCard(eigenvalue, basis, matrix) {
      const card = element("div", undefined, "basis-card");
      const heading = element("h3");
      heading.append(math(`Eigenvalue ${eigenvalue}: <var>E</var><sub>${eigenvalue}</sub>`));
      const equation = element("div", undefined, "basis-equation");
      equation.append(math(`<var>E</var><sub>${eigenvalue}</sub> = ker(<var>A</var> − ${eigenvalue === 1 ? "" : "2"}<var>I</var>) = span {`));
      const vectors = element("span", undefined, "basis-vectors");
      vectors.id = `basis-e${eigenvalue}`;
      basis.forEach((vector) => vectors.append(vectorNode(vector)));
      equation.append(vectors, element("span", "}"));
      const vector = basis[0];
      const image = matrix.map((row) => row.reduce((sum, entry, column) => sum + entry * vector[column], 0n));
      const check = element("p");
      check.append(document.createTextNode(`Multiplying A by this vector gives (${image.map(displayInteger).join(", ")})ᵀ, which is ${eigenvalue} times the vector. `));
      check.append(math(`Thus dim <var>E</var><sub>${eigenvalue}</sub> = ${basis.length}.`));
      card.append(heading, equation, check);
      return card;
    }

    function renderVerification(analysis) {
      verificationContent.replaceChildren();
      const opening = element("p");
      opening.append(math("Your characteristic polynomial is (<var>t</var> − 1)<sup>2</sup>(<var>t</var> − 2). Its only roots, 1 and 2, are positive. Also, det(<var>A</var>) = 2 ≠ 0, so <var>A</var> is invertible. Solving the two homogeneous systems gives these eigenspaces:"));
      verificationContent.append(opening, basisCard(1, analysis.basisE1, acceptedMatrix), basisCard(2, analysis.basisE2, acceptedMatrix));
      const conclusion = element("p", undefined, "conclusion");
      conclusion.append(math("Eigenvectors for distinct eigenvalues are linearly independent. These two one-dimensional eigenspaces therefore supply exactly <strong>two independent eigenvectors</strong>. A 3 × 3 matrix needs three independent eigenvectors to be diagonalizable. Your matrix has only positive eigenvalues and is <strong>not diagonalizable</strong>, so it refutes the claim."));
      verificationContent.append(conclusion);
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      clearInvalid();
      clearResults();
      hasChecked = true;
      const parsed = parseEntries(inputs.map((input) => input.value));
      showErrors(parsed.errors);
      if (!parsed.matrix) {
        const hasBlank = parsed.errors.some((error) => error.kind === "blank");
        const hasMalformed = parsed.errors.some((error) => error.kind === "integer" || error.kind === "length");
        status.textContent = hasBlank && !hasMalformed ? "Fill every entry with a nonzero integer, then check again." : "Some entries are not valid integers. Correct the marked entries, then check again.";
        status.dataset.state = "error";
      } else {
        const analysis = analyzeMatrix(parsed.matrix);
        showAnalysis(analysis);
        if (analysis.accepted) {
          acceptedMatrix = parsed.matrix;
          status.textContent = "Counterexample found! Your matrix meets every condition. Choose Show verification to see why it works.";
          status.dataset.state = "success";
        } else if (!analysis.allNonzero) {
          status.textContent = "Every entry must be nonzero. Replace the marked zeros, and use the checks below to refine your matrix.";
          status.dataset.state = "error";
        } else if (analysis.targetPolynomial && analysis.shiftedRank === 1) {
          status.textContent = "The eigenvalues are correct, but this matrix is diagonalizable. The eigenspace for 1 needs dimension 1.";
          status.dataset.state = "error";
        } else {
          status.textContent = "Keep working: revise the conditions marked below, then check again.";
          status.dataset.state = "error";
        }
      }
      if (parsed.errors.length) inputs[parsed.errors[0].index].focus();
    });

    inputs.forEach((input) => input.addEventListener("input", () => {
      clearInvalid();
      clearResults();
      if (hasChecked) {
        status.textContent = "Your matrix has changed. Check it again to update the results.";
        delete status.dataset.state;
      }
    }));

    form.addEventListener("reset", () => {
      clearInvalid();
      clearResults();
      hint.hidden = true;
      hintButton.setAttribute("aria-expanded", "false");
      status.textContent = "";
      delete status.dataset.state;
      hasChecked = false;
      inputs[0].focus();
    });

    hintButton.addEventListener("click", () => {
      hint.hidden = !hint.hidden;
      hintButton.setAttribute("aria-expanded", String(!hint.hidden));
    });

    showVerification.addEventListener("click", () => {
      if (!acceptedAnalysis) return;
      if (verification.hidden) renderVerification(acceptedAnalysis);
      verification.hidden = !verification.hidden;
      showVerification.setAttribute("aria-expanded", String(!verification.hidden));
      showVerification.textContent = verification.hidden ? "Show verification" : "Hide verification";
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})(typeof globalThis !== "undefined" ? globalThis : this);
