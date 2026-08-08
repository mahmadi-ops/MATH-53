var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-systems-of-linear-equations",
  "level": "1",
  "url": "sec-systems-of-linear-equations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations   Linear algebra begins with a very concrete question: given several linear equations in several unknowns, which assignments of values to the unknowns satisfy all of them at once? This section fixes the vocabulary and looks at what the answer can look like.    Systems, Solutions, and Consistency   The Parts of a System  The following is a system of linear equations :      The variables are , , .    The coefficients are the numbers multiplying the variables: in the first equation and in the second.    The constant terms are the numbers on the right-hand sides: and .       Solution of a System   A solution to a system of linear equations is an assignment of values to the variables that is a solution to every equation in the system.     Checking Candidate Solutions   For the system of , decide which of the following are solutions:      (a) is a solution. Substituting,    (b) is also a solution. Substituting,    (c) is not a solution. The first equation gives . It fails the first equation, and a solution must satisfy every equation in the system.     Consistent and Inconsistent Systems   A system of linear equations is consistent if it has at least one solution, and inconsistent if it has no solutions.     An Inconsistent System   The system of is consistent, since we exhibited two solutions above. By contrast, consider Why is the above system inconsistent?    The two equations have identical left-hand sides. Any assignment of values to produces one and the same number , and that single number cannot equal both and . Hence no assignment satisfies both equations, and the system has no solutions.      Graphical Solutions   Two Equations in Two Variables   Consider the system of linear equations in two variables   A solution to this system is a pair of real numbers satisfying these two equations. Graphically, a solution to this system is the point of intersection of these two lines.    Add the equations: Substitute into one of the equations: The unique solution is , which is exactly the point where the two lines cross.     The lines and meet at the single point , the unique solution of the system.          (0,1)  x+y=1  y-x=1       Given a system of two equations in two variables, graphed on the -coordinate plane, there are three possibilities.   The three possibilities for a system of two linear equations in two variables.    No solution: the lines are parallel and never meet.               A unique solution: the lines cross at exactly one point.                Infinitely many solutions: the two equations describe the same line.                 A System with Infinitely Many Solutions  The system illustrates the third case. The second equation is just twice the first, so both equations describe the same line . Every point on that line is a solution, and there are infinitely many of them.     Parametric Form of a Solution Set   Describing Infinitely Many Solutions   The system of linear equations in three variables that we saw earlier, has solutions , , , where is any real number ( ).    The number is called a parameter , and is called the solution set in parametric form .  Notice that the two solutions we found in are recovered by taking and :      Question: What is the graphical interpretation of the solution set in this example?  Each of the two equations describes a plane in . The intersection of two planes is a line, whose parametric equations are the solution set for the above system of linear equations.   This raises the central computational problem of the chapter.   Problem  Find all solutions to a system of linear equations in variables, i.e., solve a system of linear equations .    "
},
{
  "id": "eg-system-vocabulary",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-system-vocabulary",
  "type": "Example",
  "number": "1.1",
  "title": "The Parts of a System.",
  "body": " The Parts of a System  The following is a system of linear equations :      The variables are , , .    The coefficients are the numbers multiplying the variables: in the first equation and in the second.    The constant terms are the numbers on the right-hand sides: and .     "
},
{
  "id": "def-solution",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#def-solution",
  "type": "Definition",
  "number": "1.2",
  "title": "Solution of a System.",
  "body": " Solution of a System   A solution to a system of linear equations is an assignment of values to the variables that is a solution to every equation in the system.   "
},
{
  "id": "eg-checking-solutions",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-checking-solutions",
  "type": "Example",
  "number": "1.3",
  "title": "Checking Candidate Solutions.",
  "body": " Checking Candidate Solutions   For the system of , decide which of the following are solutions:      (a) is a solution. Substituting,    (b) is also a solution. Substituting,    (c) is not a solution. The first equation gives . It fails the first equation, and a solution must satisfy every equation in the system.   "
},
{
  "id": "def-consistent",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#def-consistent",
  "type": "Definition",
  "number": "1.4",
  "title": "Consistent and Inconsistent Systems.",
  "body": " Consistent and Inconsistent Systems   A system of linear equations is consistent if it has at least one solution, and inconsistent if it has no solutions.   "
},
{
  "id": "eg-inconsistent",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-inconsistent",
  "type": "Example",
  "number": "1.5",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   The system of is consistent, since we exhibited two solutions above. By contrast, consider Why is the above system inconsistent?    The two equations have identical left-hand sides. Any assignment of values to produces one and the same number , and that single number cannot equal both and . Hence no assignment satisfies both equations, and the system has no solutions.   "
},
{
  "id": "eg-two-lines",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-two-lines",
  "type": "Example",
  "number": "1.6",
  "title": "Two Equations in Two Variables.",
  "body": " Two Equations in Two Variables   Consider the system of linear equations in two variables   A solution to this system is a pair of real numbers satisfying these two equations. Graphically, a solution to this system is the point of intersection of these two lines.    Add the equations: Substitute into one of the equations: The unique solution is , which is exactly the point where the two lines cross.   "
},
{
  "id": "fig-two-lines-intersect",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#fig-two-lines-intersect",
  "type": "Figure",
  "number": "1.7",
  "title": "",
  "body": " The lines and meet at the single point , the unique solution of the system.          (0,1)  x+y=1  y-x=1      "
},
{
  "id": "fig-three-possibilities",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#fig-three-possibilities",
  "type": "Figure",
  "number": "1.8",
  "title": "",
  "body": " The three possibilities for a system of two linear equations in two variables.    No solution: the lines are parallel and never meet.               A unique solution: the lines cross at exactly one point.                Infinitely many solutions: the two equations describe the same line.               "
},
{
  "id": "eg-coincident-lines",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-coincident-lines",
  "type": "Example",
  "number": "1.9",
  "title": "A System with Infinitely Many Solutions.",
  "body": " A System with Infinitely Many Solutions  The system illustrates the third case. The second equation is just twice the first, so both equations describe the same line . Every point on that line is a solution, and there are infinitely many of them.  "
},
{
  "id": "eg-parametric-solution",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#eg-parametric-solution",
  "type": "Example",
  "number": "1.10",
  "title": "Describing Infinitely Many Solutions.",
  "body": " Describing Infinitely Many Solutions   The system of linear equations in three variables that we saw earlier, has solutions , , , where is any real number ( ).    The number is called a parameter , and is called the solution set in parametric form .  Notice that the two solutions we found in are recovered by taking and :    "
},
{
  "id": "rem-geometric-interpretation",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#rem-geometric-interpretation",
  "type": "Remark",
  "number": "1.11",
  "title": "Question: What is the graphical interpretation of the solution set in this example?",
  "body": " Question: What is the graphical interpretation of the solution set in this example?  Each of the two equations describes a plane in . The intersection of two planes is a line, whose parametric equations are the solution set for the above system of linear equations.  "
},
{
  "id": "rem-central-problem",
  "level": "2",
  "url": "sec-systems-of-linear-equations.html#rem-central-problem",
  "type": "Remark",
  "number": "1.12",
  "title": "Problem.",
  "body": " Problem  Find all solutions to a system of linear equations in variables, i.e., solve a system of linear equations .  "
},
{
  "id": "sec-elementary-operations",
  "level": "1",
  "url": "sec-elementary-operations.html",
  "type": "Section",
  "number": "1.2",
  "title": "Elementary Operations",
  "body": " Elementary Operations   The strategy for solving a system is to replace it, step by step, with a simpler system that has exactly the same solutions. This section identifies the three operations that are guaranteed to preserve the solution set.    Equivalent Systems   Two systems of linear equations are equivalent if they have exactly the same solutions.     Two Equivalent Systems  The following systems of linear equations have the same solutions and hence they are equivalent:   Indeed, each has the single solution . The second system is visibly easier to read the solution off of, and that is the whole idea: we solve a system of linear equations by using elementary operations to transform the system into an equivalent but simpler system from which the solution can be easily obtained.    Elementary Operations     Interchange two equations.  Multiply an equation by a nonzero number.  Add a multiple of one equation to a different equation.       Each elementary operation can be undone by another elementary operation of the same type: interchanging the same two equations again, multiplying by the reciprocal, or subtracting the same multiple. This is why applying an elementary operation always produces an equivalent system nothing is lost and nothing is gained.    The Three Operations in Action   Consider the system of linear equations Apply each of the three elementary operations to it.     Interchange the first two equations.     Multiply the first equation by .     Add times the second equation to the first equation.  Here the first equation became , i.e., . Notice that has been eliminated from that equation this is exactly the effect we will exploit systematically.  Each of the three displays above is obtained from the original system by a single operation; they are not applied one after another.    "
},
{
  "id": "def-equivalent-systems",
  "level": "2",
  "url": "sec-elementary-operations.html#def-equivalent-systems",
  "type": "Definition",
  "number": "1.13",
  "title": "Equivalent Systems.",
  "body": " Equivalent Systems   Two systems of linear equations are equivalent if they have exactly the same solutions.   "
},
{
  "id": "eg-equivalent-systems",
  "level": "2",
  "url": "sec-elementary-operations.html#eg-equivalent-systems",
  "type": "Example",
  "number": "1.14",
  "title": "Two Equivalent Systems.",
  "body": " Two Equivalent Systems  The following systems of linear equations have the same solutions and hence they are equivalent:   Indeed, each has the single solution . The second system is visibly easier to read the solution off of, and that is the whole idea: we solve a system of linear equations by using elementary operations to transform the system into an equivalent but simpler system from which the solution can be easily obtained.  "
},
{
  "id": "def-elementary-operations",
  "level": "2",
  "url": "sec-elementary-operations.html#def-elementary-operations",
  "type": "Definition",
  "number": "1.15",
  "title": "Elementary Operations.",
  "body": " Elementary Operations     Interchange two equations.  Multiply an equation by a nonzero number.  Add a multiple of one equation to a different equation.     "
},
{
  "id": "rem-operations-reversible",
  "level": "2",
  "url": "sec-elementary-operations.html#rem-operations-reversible",
  "type": "Remark",
  "number": "1.16",
  "title": "",
  "body": " Each elementary operation can be undone by another elementary operation of the same type: interchanging the same two equations again, multiplying by the reciprocal, or subtracting the same multiple. This is why applying an elementary operation always produces an equivalent system nothing is lost and nothing is gained.  "
},
{
  "id": "eg-elementary-operations",
  "level": "2",
  "url": "sec-elementary-operations.html#eg-elementary-operations",
  "type": "Example",
  "number": "1.17",
  "title": "The Three Operations in Action.",
  "body": " The Three Operations in Action   Consider the system of linear equations Apply each of the three elementary operations to it.     Interchange the first two equations.     Multiply the first equation by .     Add times the second equation to the first equation.  Here the first equation became , i.e., . Notice that has been eliminated from that equation this is exactly the effect we will exploit systematically.  Each of the three displays above is obtained from the original system by a single operation; they are not applied one after another.   "
},
{
  "id": "sec-augmented-matrix",
  "level": "1",
  "url": "sec-augmented-matrix.html",
  "type": "Section",
  "number": "1.3",
  "title": "The Augmented Matrix and Echelon Forms",
  "body": " The Augmented Matrix and Echelon Forms   When we apply elementary operations, the variable names never change only the coefficients and constants do. So we may as well drop the variables and record just the numbers. This bookkeeping device is the augmented matrix.    The Augmented Matrix   Forming the Augmented Matrix  The system of linear equations is represented by the augmented matrix    Two other matrices associated with a system of linear equations are the coefficient matrix and the constant matrix :    The three elementary operations of become elementary row operations on the augmented matrix. We use the following notation, where denotes row :    Row Operations on an Augmented Matrix   Consider the system of linear equations with augmented matrix . Carry out the operations of in matrix form.     Interchange the first two equations (two rows),  :    Add times the second equation to the first equation,  :       Row-Echelon and Reduced Row-Echelon Matrices   Row-Echelon Matrix   A matrix is a row-echelon matrix (REM) if  All rows consisting entirely of zeros are at the bottom.   The first nonzero entry in each nonzero row is called a leading entry .    Each leading entry is to the right of all leading entries in rows above it.        The Shape of a Row-Echelon Matrix   Here can be any nonzero real number, and can be any real number.    Reduced Row-Echelon Matrix   A matrix is a reduced row-echelon matrix (RREM) if  It is a row-echelon matrix.  The leading entry in each nonzero row is .  Each leading is the only nonzero entry in its column.       The Shape of a Reduced Row-Echelon Matrix   Here can be any real number.     Pivots, Basic Variables, and Free Variables   Pivots and Variables      A pivot position is a location corresponding to a leading , and a pivot column is the column containing the pivot position.    The basic variables are the variables that correspond to columns containing leading ones.    The remaining variables are called free variables .        Identifying Pivots and Free Variables   Suppose that the following matrix is the augmented matrix of a system of linear equations: Identify the pivot columns, the basic variables, and the free variables.    Note that the matrix is a row-echelon matrix. The leading ones sit in positions , , , and , so the pivot columns are columns , , , and .  Accordingly, , , , and are the basic variables, and the remaining variables (columns , , and ) that is, , , and  are the free variables.    We will use elementary row operations to transform a matrix to row-echelon or reduced row-echelon form. The next section gives the algorithm that does it.   "
},
{
  "id": "eg-augmented-matrix",
  "level": "2",
  "url": "sec-augmented-matrix.html#eg-augmented-matrix",
  "type": "Example",
  "number": "1.18",
  "title": "Forming the Augmented Matrix.",
  "body": " Forming the Augmented Matrix  The system of linear equations is represented by the augmented matrix    Two other matrices associated with a system of linear equations are the coefficient matrix and the constant matrix :   "
},
{
  "id": "subsec-augmented-matrix-3",
  "level": "2",
  "url": "sec-augmented-matrix.html#subsec-augmented-matrix-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operations "
},
{
  "id": "eg-row-operations",
  "level": "2",
  "url": "sec-augmented-matrix.html#eg-row-operations",
  "type": "Example",
  "number": "1.19",
  "title": "Row Operations on an Augmented Matrix.",
  "body": " Row Operations on an Augmented Matrix   Consider the system of linear equations with augmented matrix . Carry out the operations of in matrix form.     Interchange the first two equations (two rows),  :    Add times the second equation to the first equation,  :    "
},
{
  "id": "def-row-echelon",
  "level": "2",
  "url": "sec-augmented-matrix.html#def-row-echelon",
  "type": "Definition",
  "number": "1.20",
  "title": "Row-Echelon Matrix.",
  "body": " Row-Echelon Matrix   A matrix is a row-echelon matrix (REM) if  All rows consisting entirely of zeros are at the bottom.   The first nonzero entry in each nonzero row is called a leading entry .    Each leading entry is to the right of all leading entries in rows above it.      "
},
{
  "id": "eg-row-echelon-shape",
  "level": "2",
  "url": "sec-augmented-matrix.html#eg-row-echelon-shape",
  "type": "Example",
  "number": "1.21",
  "title": "The Shape of a Row-Echelon Matrix.",
  "body": " The Shape of a Row-Echelon Matrix   Here can be any nonzero real number, and can be any real number.  "
},
{
  "id": "def-reduced-row-echelon",
  "level": "2",
  "url": "sec-augmented-matrix.html#def-reduced-row-echelon",
  "type": "Definition",
  "number": "1.22",
  "title": "Reduced Row-Echelon Matrix.",
  "body": " Reduced Row-Echelon Matrix   A matrix is a reduced row-echelon matrix (RREM) if  It is a row-echelon matrix.  The leading entry in each nonzero row is .  Each leading is the only nonzero entry in its column.     "
},
{
  "id": "eg-reduced-row-echelon-shape",
  "level": "2",
  "url": "sec-augmented-matrix.html#eg-reduced-row-echelon-shape",
  "type": "Example",
  "number": "1.23",
  "title": "The Shape of a Reduced Row-Echelon Matrix.",
  "body": " The Shape of a Reduced Row-Echelon Matrix   Here can be any real number.  "
},
{
  "id": "def-pivot",
  "level": "2",
  "url": "sec-augmented-matrix.html#def-pivot",
  "type": "Definition",
  "number": "1.24",
  "title": "Pivots and Variables.",
  "body": " Pivots and Variables      A pivot position is a location corresponding to a leading , and a pivot column is the column containing the pivot position.    The basic variables are the variables that correspond to columns containing leading ones.    The remaining variables are called free variables .      "
},
{
  "id": "eg-identifying-pivots",
  "level": "2",
  "url": "sec-augmented-matrix.html#eg-identifying-pivots",
  "type": "Example",
  "number": "1.25",
  "title": "Identifying Pivots and Free Variables.",
  "body": " Identifying Pivots and Free Variables   Suppose that the following matrix is the augmented matrix of a system of linear equations: Identify the pivot columns, the basic variables, and the free variables.    Note that the matrix is a row-echelon matrix. The leading ones sit in positions , , , and , so the pivot columns are columns , , , and .  Accordingly, , , , and are the basic variables, and the remaining variables (columns , , and ) that is, , , and  are the free variables.   "
},
{
  "id": "sec-row-reduction",
  "level": "1",
  "url": "sec-row-reduction.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Row Reduction Algorithm",
  "body": " The Row Reduction Algorithm   We now have all the pieces: elementary row operations preserve the solution set, and echelon forms make the solution set easy to read off. The row reduction algorithm ties them together into a procedure that solves any system of linear equations.    The Algorithm   The Row Reduction Algorithm     Identify the pivot column.   Choose a nonzero entry in the pivot column and (if necessary) move it to the pivot position.   Create zeros below the pivot using elementary row operations.   Repeat steps 1 3 for the sub-matrices obtained by ignoring the column corresponding to the previous pivot position and all the rows above it (if any).    Beginning with the rightmost pivot, create zeros above the pivots and make the pivot (if necessary).        Note that steps 1 4 will produce a row-echelon matrix, and step 5 will convert it to a reduced row-echelon matrix:    Steps 1 4: the forward phase , to obtain the REM.     Step 5: the backward phase , to obtain the RREM.        The Three Possible Outcomes  The three graphical possibilities of correspond to three outcomes of the algorithm. The next three examples illustrate each in turn.   A System with a Unique Solution   Solve the system     First rewrite each equation with the variables in the order and form the augmented matrix. The forward phase gives which is a row-echelon matrix.  Now the backward phase: a reduced row-echelon matrix.  Reading off the rows, a unique solution. Every column of the coefficient matrix is a pivot column, so there are no free variables.   The same system as a matrix transformation . The violet solution set of in the left pane is a single point : exactly one input produces this output. Click and drag the head of in the right pane the solution point moves, but it stays a single point, because every column of is a pivot column.       An Inconsistent System   Solve the system        The last row says which is impossible, and hence the system is inconsistent (no solution).   Here the first two columns of are multiples of one another, so the range of (teal, right pane) is only a plane inside . Click and drag the head of off that plane: the equation is marked inconsistent and the solution set vanishes, which is what the row records above.       In general, a system is inconsistent exactly when the row-echelon form of its augmented matrix has a row of the form with .    A System with Infinitely Many Solutions   Solve the system        Columns and are pivot columns, so and are basic variables, whereas is a free variable. Setting , the two nonzero rows read and therefore the solution set in parametric form is    With one free variable, the violet solution set in the left pane is a line rather than a point: every input on that line has the same image. Click and drag the head of along the line and watch stay put; drag instead and the whole solution line moves with it.       The pattern is now clear. If a system is consistent, then it has a unique solution when there are no free variables, and infinitely many solutions when there is at least one free variable one parameter for each free variable.     Systems Depending on Parameters   Conditions on the Coefficients   Find all values of , and (or conditions on , and ) so that the system has (i) a unique solution, (ii) no solutions, and (iii) infinitely many solutions. In (i) and (iii), find the solution(s).    Row reduce the augmented matrix, treating , , as constants: Everything now hinges on the entry .   Case (I): , i.e., . We may divide the third row by and continue. Writing for brevity, Hence when , there is a unique solution:    Case (II): and . The row-echelon matrix is whose last row asserts . Then the system has no solution.   Case (III): and . Now the last row is entirely zero, and is a free variable, so the system has infinitely many solutions. Setting , the second row gives , so , and the first row gives The solution set in parametric form is      "
},
{
  "id": "alg-row-reduction",
  "level": "2",
  "url": "sec-row-reduction.html#alg-row-reduction",
  "type": "Algorithm",
  "number": "1.26",
  "title": "The Row Reduction Algorithm.",
  "body": " The Row Reduction Algorithm     Identify the pivot column.   Choose a nonzero entry in the pivot column and (if necessary) move it to the pivot position.   Create zeros below the pivot using elementary row operations.   Repeat steps 1 3 for the sub-matrices obtained by ignoring the column corresponding to the previous pivot position and all the rows above it (if any).    Beginning with the rightmost pivot, create zeros above the pivots and make the pivot (if necessary).      "
},
{
  "id": "rem-forward-backward",
  "level": "2",
  "url": "sec-row-reduction.html#rem-forward-backward",
  "type": "Remark",
  "number": "1.27",
  "title": "",
  "body": " Note that steps 1 4 will produce a row-echelon matrix, and step 5 will convert it to a reduced row-echelon matrix:    Steps 1 4: the forward phase , to obtain the REM.     Step 5: the backward phase , to obtain the RREM.     "
},
{
  "id": "eg-unique-solution",
  "level": "2",
  "url": "sec-row-reduction.html#eg-unique-solution",
  "type": "Example",
  "number": "1.28",
  "title": "A System with a Unique Solution.",
  "body": " A System with a Unique Solution   Solve the system     First rewrite each equation with the variables in the order and form the augmented matrix. The forward phase gives which is a row-echelon matrix.  Now the backward phase: a reduced row-echelon matrix.  Reading off the rows, a unique solution. Every column of the coefficient matrix is a pivot column, so there are no free variables.   The same system as a matrix transformation . The violet solution set of in the left pane is a single point : exactly one input produces this output. Click and drag the head of in the right pane the solution point moves, but it stays a single point, because every column of is a pivot column.     "
},
{
  "id": "eg-no-solution-rr",
  "level": "2",
  "url": "sec-row-reduction.html#eg-no-solution-rr",
  "type": "Example",
  "number": "1.30",
  "title": "An Inconsistent System.",
  "body": " An Inconsistent System   Solve the system        The last row says which is impossible, and hence the system is inconsistent (no solution).   Here the first two columns of are multiples of one another, so the range of (teal, right pane) is only a plane inside . Click and drag the head of off that plane: the equation is marked inconsistent and the solution set vanishes, which is what the row records above.     "
},
{
  "id": "rem-inconsistency-test",
  "level": "2",
  "url": "sec-row-reduction.html#rem-inconsistency-test",
  "type": "Remark",
  "number": "1.32",
  "title": "",
  "body": " In general, a system is inconsistent exactly when the row-echelon form of its augmented matrix has a row of the form with .  "
},
{
  "id": "eg-infinitely-many-rr",
  "level": "2",
  "url": "sec-row-reduction.html#eg-infinitely-many-rr",
  "type": "Example",
  "number": "1.33",
  "title": "A System with Infinitely Many Solutions.",
  "body": " A System with Infinitely Many Solutions   Solve the system        Columns and are pivot columns, so and are basic variables, whereas is a free variable. Setting , the two nonzero rows read and therefore the solution set in parametric form is    With one free variable, the violet solution set in the left pane is a line rather than a point: every input on that line has the same image. Click and drag the head of along the line and watch stay put; drag instead and the whole solution line moves with it.     "
},
{
  "id": "rem-free-variables-count",
  "level": "2",
  "url": "sec-row-reduction.html#rem-free-variables-count",
  "type": "Remark",
  "number": "1.35",
  "title": "",
  "body": " The pattern is now clear. If a system is consistent, then it has a unique solution when there are no free variables, and infinitely many solutions when there is at least one free variable one parameter for each free variable.  "
},
{
  "id": "eg-parameters-abc",
  "level": "2",
  "url": "sec-row-reduction.html#eg-parameters-abc",
  "type": "Example",
  "number": "1.36",
  "title": "Conditions on the Coefficients.",
  "body": " Conditions on the Coefficients   Find all values of , and (or conditions on , and ) so that the system has (i) a unique solution, (ii) no solutions, and (iii) infinitely many solutions. In (i) and (iii), find the solution(s).    Row reduce the augmented matrix, treating , , as constants: Everything now hinges on the entry .   Case (I): , i.e., . We may divide the third row by and continue. Writing for brevity, Hence when , there is a unique solution:    Case (II): and . The row-echelon matrix is whose last row asserts . Then the system has no solution.   Case (III): and . Now the last row is entirely zero, and is a free variable, so the system has infinitely many solutions. Setting , the second row gives , so , and the first row gives The solution set in parametric form is    "
},
{
  "id": "sec-polynomial-interpolation",
  "level": "1",
  "url": "sec-polynomial-interpolation.html",
  "type": "Section",
  "number": "1.5",
  "title": "A First Application: Polynomial Interpolation",
  "body": " A First Application: Polynomial Interpolation   When studying a set of data that relates two variables and , it is often useful to find a polynomial that fits the data, that is, a polynomial whose graph passes exactly through every data point. Once such a polynomial is found, it can be used to estimate -values at points where no data was collected. Finding this polynomial may sound like a new kind of problem, but it is not: as we are about to see, it is a system of linear equations in disguise, and the row reduction algorithm of solves it.  Suppose we are given data points where the are distinct, and we look for a polynomial of degree at most satisfying for . The unknowns here are the coefficients , not : each condition substitutes a known number into , and so becomes a linear equation in . Imposing all conditions produces a system of linear equations in the unknown coefficients.    A Parabola Through Three Points   Find a polynomial of degree at most two whose graph passes through the points , and , and use it to estimate the value of .    We look for Substituting the three data points gives three linear equations in the unknowns , , :   We row reduce the augmented matrix:   Therefore , , , and As a check, , , and , as required. Finally, the estimate at is     Nothing in this method depended on having three points: any number of data points, and any degree of polynomial, can be handled in the same way.   The Interpolation Procedure  To fit a polynomial through the data points with distinct :   Write down with unknown coefficients .    Substitute each data point: the condition gives one linear equation in the coefficients, for a total of equations in unknowns.    Form the augmented matrix of the system and row reduce it, following .    Read off and write down . To estimate the -value at a point not in the data, evaluate there.       Polynomial Interpolation   Given data points with the distinct, there is a unique polynomial of degree at most such that for . The polynomial is called the interpolating polynomial for the data points.    In other words, the linear system produced by the procedure above always has exactly one solution the row reduction never ends in an inconsistent row, and never leaves a free variable. We do not yet have the tools to prove this; the reason will become clear in later chapters. For now we take the theorem as a promise and put it to work on a larger example.   A Cubic Through Four Points   Find the interpolating polynomial for the data points , , and , and use it to estimate the value of .    With four data points we look for a polynomial of degree at most three, Substituting the four points,   The augmented matrix is and row reduction (left as an exercise in following ) brings it to   Therefore , , , , and the interpolating polynomial is Notice that : the theorem promises a polynomial of degree at most  , and some coefficients may well turn out to be zero. The estimate is     A word of caution is in order. The interpolating polynomial passes exactly through the given data points, and estimates taken between data points are usually reasonable. Far outside the range of the data, however, polynomials grow rapidly, and the values of there should not be trusted as predictions.  "
},
{
  "id": "eg-interpolation-quadratic",
  "level": "2",
  "url": "sec-polynomial-interpolation.html#eg-interpolation-quadratic",
  "type": "Example",
  "number": "1.37",
  "title": "A Parabola Through Three Points.",
  "body": " A Parabola Through Three Points   Find a polynomial of degree at most two whose graph passes through the points , and , and use it to estimate the value of .    We look for Substituting the three data points gives three linear equations in the unknowns , , :   We row reduce the augmented matrix:   Therefore , , , and As a check, , , and , as required. Finally, the estimate at is    "
},
{
  "id": "rem-interpolation-steps",
  "level": "2",
  "url": "sec-polynomial-interpolation.html#rem-interpolation-steps",
  "type": "Remark",
  "number": "1.38",
  "title": "The Interpolation Procedure.",
  "body": " The Interpolation Procedure  To fit a polynomial through the data points with distinct :   Write down with unknown coefficients .    Substitute each data point: the condition gives one linear equation in the coefficients, for a total of equations in unknowns.    Form the augmented matrix of the system and row reduce it, following .    Read off and write down . To estimate the -value at a point not in the data, evaluate there.     "
},
{
  "id": "thm-interpolating-polynomial",
  "level": "2",
  "url": "sec-polynomial-interpolation.html#thm-interpolating-polynomial",
  "type": "Theorem",
  "number": "1.39",
  "title": "Polynomial Interpolation.",
  "body": " Polynomial Interpolation   Given data points with the distinct, there is a unique polynomial of degree at most such that for . The polynomial is called the interpolating polynomial for the data points.   "
},
{
  "id": "eg-interpolation-cubic",
  "level": "2",
  "url": "sec-polynomial-interpolation.html#eg-interpolation-cubic",
  "type": "Example",
  "number": "1.40",
  "title": "A Cubic Through Four Points.",
  "body": " A Cubic Through Four Points   Find the interpolating polynomial for the data points , , and , and use it to estimate the value of .    With four data points we look for a polynomial of degree at most three, Substituting the four points,   The augmented matrix is and row reduction (left as an exercise in following ) brings it to   Therefore , , , , and the interpolating polynomial is Notice that : the theorem promises a polynomial of degree at most  , and some coefficients may well turn out to be zero. The estimate is    "
},
{
  "id": "sec-vectors-in-rn",
  "level": "1",
  "url": "sec-vectors-in-rn.html",
  "type": "Section",
  "number": "2.1",
  "title": "Vectors in <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Vectors in   The columns of a matrix are objects worth studying in their own right. This section introduces them as vectors, together with the geometric picture that makes them intuitive in two and three dimensions.    Notation and Terminology   Column Vectors and     A column vector is a matrix with only one column.  denotes the set of real numbers .    denotes the set of all column vectors with two entries.     denotes the set of all column vectors with three entries.    In general, denotes the set of all column vectors with entries.       Vectors in and have convenient geometric representations as position vectors of points in the 2-dimensional plane and in 3-dimensional space, respectively.   The vector drawn as the position vector of the point .           (a,b)  \\vec{v}  a  b        The vector drawn as the position vector of the point .        Algebra in   Addition in      If and are in , then is obtained by adding together corresponding entries of the vectors.    The zero vector in is the zero matrix, and is denoted .        Adding Two Vectors  Let and . Then     Properties of Vector Addition   Let , , and be vectors in . Then the following properties hold.    (vector addition is commutative).  (vector addition is associative).  (existence of an additive identity).  (existence of an additive inverse).       Scalar Multiplication in   If is a vector in and is a scalar, then is obtained by multiplying every entry of by .     Properties of Scalar Multiplication   Let be vectors and be scalars. Then the following properties hold.    (scalar multiplication distributes over vector addition).  (addition distributes over scalar multiplication).  (scalar multiplication is associative).  (existence of a multiplicative identity).       Scaling a Vector  Let and . Then      The Geometry of Vector Addition  Let , be vectors. Then is the diagonal of the parallelogram defined by and , and having the same tail as and .   The parallelogram law. The sum is one diagonal of the parallelogram; the difference is obtained by adding to , and runs from the tip of to the tip of .            \\vec{u}  \\vec{v}  \\vec{u}+\\vec{v}  \\vec{u}-\\vec{v}        "
},
{
  "id": "def-rn",
  "level": "2",
  "url": "sec-vectors-in-rn.html#def-rn",
  "type": "Definition",
  "number": "2.1",
  "title": "Column Vectors and <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Column Vectors and     A column vector is a matrix with only one column.  denotes the set of real numbers .    denotes the set of all column vectors with two entries.     denotes the set of all column vectors with three entries.    In general, denotes the set of all column vectors with entries.      "
},
{
  "id": "subsec-vector-notation-3",
  "level": "2",
  "url": "sec-vectors-in-rn.html#subsec-vector-notation-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position vectors "
},
{
  "id": "fig-position-vector-r2",
  "level": "2",
  "url": "sec-vectors-in-rn.html#fig-position-vector-r2",
  "type": "Figure",
  "number": "2.2",
  "title": "",
  "body": " The vector drawn as the position vector of the point .           (a,b)  \\vec{v}  a  b      "
},
{
  "id": "fig-position-vector-r3",
  "level": "2",
  "url": "sec-vectors-in-rn.html#fig-position-vector-r3",
  "type": "Figure",
  "number": "2.3",
  "title": "",
  "body": " The vector drawn as the position vector of the point .     "
},
{
  "id": "def-vector-addition",
  "level": "2",
  "url": "sec-vectors-in-rn.html#def-vector-addition",
  "type": "Definition",
  "number": "2.4",
  "title": "Addition in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Addition in      If and are in , then is obtained by adding together corresponding entries of the vectors.    The zero vector in is the zero matrix, and is denoted .      "
},
{
  "id": "eg-vector-addition",
  "level": "2",
  "url": "sec-vectors-in-rn.html#eg-vector-addition",
  "type": "Example",
  "number": "2.5",
  "title": "Adding Two Vectors.",
  "body": " Adding Two Vectors  Let and . Then   "
},
{
  "id": "thm-vector-addition-properties",
  "level": "2",
  "url": "sec-vectors-in-rn.html#thm-vector-addition-properties",
  "type": "Theorem",
  "number": "2.6",
  "title": "Properties of Vector Addition.",
  "body": " Properties of Vector Addition   Let , , and be vectors in . Then the following properties hold.    (vector addition is commutative).  (vector addition is associative).  (existence of an additive identity).  (existence of an additive inverse).     "
},
{
  "id": "def-vector-scalar-multiplication",
  "level": "2",
  "url": "sec-vectors-in-rn.html#def-vector-scalar-multiplication",
  "type": "Definition",
  "number": "2.7",
  "title": "Scalar Multiplication in <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Scalar Multiplication in   If is a vector in and is a scalar, then is obtained by multiplying every entry of by .   "
},
{
  "id": "thm-vector-scalar-properties",
  "level": "2",
  "url": "sec-vectors-in-rn.html#thm-vector-scalar-properties",
  "type": "Theorem",
  "number": "2.8",
  "title": "Properties of Scalar Multiplication.",
  "body": " Properties of Scalar Multiplication   Let be vectors and be scalars. Then the following properties hold.    (scalar multiplication distributes over vector addition).  (addition distributes over scalar multiplication).  (scalar multiplication is associative).  (existence of a multiplicative identity).     "
},
{
  "id": "eg-vector-scalar",
  "level": "2",
  "url": "sec-vectors-in-rn.html#eg-vector-scalar",
  "type": "Example",
  "number": "2.9",
  "title": "Scaling a Vector.",
  "body": " Scaling a Vector  Let and . Then   "
},
{
  "id": "subsec-geometry-of-addition-2",
  "level": "2",
  "url": "sec-vectors-in-rn.html#subsec-geometry-of-addition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parallelogram defined by and "
},
{
  "id": "fig-parallelogram-law",
  "level": "2",
  "url": "sec-vectors-in-rn.html#fig-parallelogram-law",
  "type": "Figure",
  "number": "2.10",
  "title": "",
  "body": " The parallelogram law. The sum is one diagonal of the parallelogram; the difference is obtained by adding to , and runs from the tip of to the tip of .            \\vec{u}  \\vec{v}  \\vec{u}+\\vec{v}  \\vec{u}-\\vec{v}      "
},
{
  "id": "sec-vector-form",
  "level": "1",
  "url": "sec-vector-form.html",
  "type": "Section",
  "number": "2.2",
  "title": "Vector and Matrix Forms of a Linear System",
  "body": " Vector and Matrix Forms of a Linear System   A system of linear equations can be written in three equivalent ways: as a list of equations, as a single vector equation, and as a single matrix equation. Each form makes a different feature obvious, and we will move freely between them.    Vector Form   Vector Form of a System   Consider the system of linear equations   Such a system can be expressed in vector form , or as a vector equation , by using linear combinations of column vectors:      Writing a System in Vector Form   Express the following system of linear equations in vector form:            Matrix Form   The Product of a Matrix and a Vector   Let be an matrix with columns , written , and let be an column vector, .  Then the product of matrix and (column) vector is the column vector given by that is, is a linear combination of the columns of .     Writing a System in Matrix Form   Express the system of in matrix form.       Writing , , and , this is      The three forms say the same thing. In particular, is consistent precisely when can be written as a linear combination of the columns of . This observation is the bridge between solving systems and the geometric language of the next two sections.    "
},
{
  "id": "def-vector-form",
  "level": "2",
  "url": "sec-vector-form.html#def-vector-form",
  "type": "Definition",
  "number": "2.11",
  "title": "Vector Form of a System.",
  "body": " Vector Form of a System   Consider the system of linear equations   Such a system can be expressed in vector form , or as a vector equation , by using linear combinations of column vectors:    "
},
{
  "id": "eg-vector-form",
  "level": "2",
  "url": "sec-vector-form.html#eg-vector-form",
  "type": "Example",
  "number": "2.12",
  "title": "Writing a System in Vector Form.",
  "body": " Writing a System in Vector Form   Express the following system of linear equations in vector form:         "
},
{
  "id": "def-matrix-vector-product",
  "level": "2",
  "url": "sec-vector-form.html#def-matrix-vector-product",
  "type": "Definition",
  "number": "2.13",
  "title": "The Product of a Matrix and a Vector.",
  "body": " The Product of a Matrix and a Vector   Let be an matrix with columns , written , and let be an column vector, .  Then the product of matrix and (column) vector is the column vector given by that is, is a linear combination of the columns of .   "
},
{
  "id": "eg-matrix-form",
  "level": "2",
  "url": "sec-vector-form.html#eg-matrix-form",
  "type": "Example",
  "number": "2.14",
  "title": "Writing a System in Matrix Form.",
  "body": " Writing a System in Matrix Form   Express the system of in matrix form.       Writing , , and , this is    "
},
{
  "id": "rem-three-forms",
  "level": "2",
  "url": "sec-vector-form.html#rem-three-forms",
  "type": "Remark",
  "number": "2.15",
  "title": "",
  "body": " The three forms say the same thing. In particular, is consistent precisely when can be written as a linear combination of the columns of . This observation is the bridge between solving systems and the geometric language of the next two sections.  "
},
{
  "id": "sec-homogeneous-systems",
  "level": "1",
  "url": "sec-homogeneous-systems.html",
  "type": "Section",
  "number": "2.3",
  "title": "Homogeneous Systems",
  "body": " Homogeneous Systems   A system whose constant terms are all zero is never inconsistent setting every variable to zero always works. The interesting question is whether anything else works, and the answer turns out to control the behaviour of every related system.    Homogeneous Systems and the Trivial Solution   Homogeneous System   A homogeneous system has the form where are scalars and are variables, , .     Notice that is always a solution to a homogeneous system of equations. We call this the trivial solution . We are interested in finding, if possible, nontrivial solutions .    Solving a Homogeneous System   Solve the system        Here and are free variables. The two nonzero rows read so setting and ,       Linear Combinations and Basic Solutions   Linear Combination   If are columns with entries, and if are scalars, then is a linear combination of columns .     Basic Solutions of a Homogeneous System   Continuing , write the general solution as a linear combination.    Renaming the parameters and , the general solution is   The vectors are the basic solutions , and the general solution is a linear combination of the basic ones.     A Homogeneous System with a Parameter   Find all values of for which the system has nontrivial solutions, and determine the solutions.        Case (I): . The third row gives , so ; the second row then gives , so ; and the first row gives . This is the trivial solution, and hence when there is no nontrivial solution.   Case (II): . The matrix becomes so and , with free. Writing ,       The Structure of the Solution Set   Particular Plus Homogeneous   Suppose the matrix equation is consistent and let be a solution. Assume that is a solution of . Then the solution set of is the set of all the vectors of the form .     Comparing a Homogeneous System with Its Non-Homogeneous Partner   Solve the following systems and explain the relation between their solution sets.         The homogeneous system.  So and . With ,    The non-homogeneous system.  So and . With ,   Note that is a solution of the non-homogeneous system, whereas is the solution of the homogeneous system.  Geometrically, is a vector in , whereas corresponds to a line in . The solution set of the non-homogeneous system is that line translated by .   The picture to remember. The homogeneous solutions form a line through the origin (gray). Adding one particular solution of translates that line: every solution of the non-homogeneous system is (blue).            s\\vec{v}_h  \\vec{p} + s\\vec{v}_h  \\vec{p}          "
},
{
  "id": "def-homogeneous",
  "level": "2",
  "url": "sec-homogeneous-systems.html#def-homogeneous",
  "type": "Definition",
  "number": "2.16",
  "title": "Homogeneous System.",
  "body": " Homogeneous System   A homogeneous system has the form where are scalars and are variables, , .   "
},
{
  "id": "rem-trivial-solution",
  "level": "2",
  "url": "sec-homogeneous-systems.html#rem-trivial-solution",
  "type": "Remark",
  "number": "2.17",
  "title": "",
  "body": " Notice that is always a solution to a homogeneous system of equations. We call this the trivial solution . We are interested in finding, if possible, nontrivial solutions .  "
},
{
  "id": "eg-homogeneous-basic",
  "level": "2",
  "url": "sec-homogeneous-systems.html#eg-homogeneous-basic",
  "type": "Example",
  "number": "2.18",
  "title": "Solving a Homogeneous System.",
  "body": " Solving a Homogeneous System   Solve the system        Here and are free variables. The two nonzero rows read so setting and ,    "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "sec-homogeneous-systems.html#def-linear-combination",
  "type": "Definition",
  "number": "2.19",
  "title": "Linear Combination.",
  "body": " Linear Combination   If are columns with entries, and if are scalars, then is a linear combination of columns .   "
},
{
  "id": "eg-basic-solutions",
  "level": "2",
  "url": "sec-homogeneous-systems.html#eg-basic-solutions",
  "type": "Example",
  "number": "2.20",
  "title": "Basic Solutions of a Homogeneous System.",
  "body": " Basic Solutions of a Homogeneous System   Continuing , write the general solution as a linear combination.    Renaming the parameters and , the general solution is   The vectors are the basic solutions , and the general solution is a linear combination of the basic ones.   "
},
{
  "id": "eg-homogeneous-parameter",
  "level": "2",
  "url": "sec-homogeneous-systems.html#eg-homogeneous-parameter",
  "type": "Example",
  "number": "2.21",
  "title": "A Homogeneous System with a Parameter.",
  "body": " A Homogeneous System with a Parameter   Find all values of for which the system has nontrivial solutions, and determine the solutions.        Case (I): . The third row gives , so ; the second row then gives , so ; and the first row gives . This is the trivial solution, and hence when there is no nontrivial solution.   Case (II): . The matrix becomes so and , with free. Writing ,    "
},
{
  "id": "thm-particular-plus-homogeneous",
  "level": "2",
  "url": "sec-homogeneous-systems.html#thm-particular-plus-homogeneous",
  "type": "Theorem",
  "number": "2.22",
  "title": "Particular Plus Homogeneous.",
  "body": " Particular Plus Homogeneous   Suppose the matrix equation is consistent and let be a solution. Assume that is a solution of . Then the solution set of is the set of all the vectors of the form .   "
},
{
  "id": "eg-structure-comparison",
  "level": "2",
  "url": "sec-homogeneous-systems.html#eg-structure-comparison",
  "type": "Example",
  "number": "2.23",
  "title": "Comparing a Homogeneous System with Its Non-Homogeneous Partner.",
  "body": " Comparing a Homogeneous System with Its Non-Homogeneous Partner   Solve the following systems and explain the relation between their solution sets.         The homogeneous system.  So and . With ,    The non-homogeneous system.  So and . With ,   Note that is a solution of the non-homogeneous system, whereas is the solution of the homogeneous system.  Geometrically, is a vector in , whereas corresponds to a line in . The solution set of the non-homogeneous system is that line translated by .   The picture to remember. The homogeneous solutions form a line through the origin (gray). Adding one particular solution of translates that line: every solution of the non-homogeneous system is (blue).            s\\vec{v}_h  \\vec{p} + s\\vec{v}_h  \\vec{p}        "
},
{
  "id": "sec-span",
  "level": "1",
  "url": "sec-span.html",
  "type": "Section",
  "number": "2.4",
  "title": "Span of a Set of Vectors",
  "body": " Span of a Set of Vectors   Several figures in this section and the next are interactive. Each shows a matrix transformation whose columns are the vectors under discussion, so the teal region in the right pane is exactly their span. Click and drag the head of the input vector or the output vector ; drag inside a three-dimensional pane to rotate it. The violet object in the left pane is the solution set of , which is a single point exactly when the vectors are linearly independent.    Span   Let be a set of vectors in . Then the collection of all linear combinations of these vectors is called the span of these vectors, written .     Describing a Span   Describe the span of the vectors and .    Note that any linear combination of and is of the form which can be thought of as a vector in the -plane.  Also, consider an arbitrary vector in the -plane. We can write any such vector as a linear combination of and . Solving amounts to row reducing giving and . That is,   Hence is the -plane.   The same span, as the range of with and as the columns of . Every output has first entry , so the teal range in the right pane is the -plane. Click and drag the head of in the left pane: the output sweeps out that plane and never leaves it. Drag off the plane instead and the equation is marked inconsistent.       What Happens When We Add a Third Vector?   Consider the previous example, where the span of and was the -plane. Suppose we add another vector , and consider the span of , , and . What would happen to the span?     Case (I): is also a vector in the -plane. For example, consider . Then is already in : Hence  adding gained us nothing.   Case (II): is not in the -plane. For example, . Notice that any vector in can be written as a linear combination of , , and : where Hence .  The moral: a new vector enlarges the span exactly when it is not already in the span. This is the idea that the next section makes precise.   Case (II), with , , and as the columns of . Because points off the -plane, the teal range now fills the whole output pane: . Click and drag the head of anywhere it is always reachable, and the violet solution set stays a single point. Compare : had we instead added the of Case (I), which already lies in the plane, the range would have stayed that same plane and the solution set would have grown to a line.       Seeing a Span  The examples above were settled by row reduction. The same facts can be seen directly: the span of two vectors in that are not multiples of one another is a plane through the origin, and a vector lies in that span exactly when it lies on that plane.   The columns of are and , so the teal region in the right pane is   a plane through the origin. Click and drag the head of in the left pane: the output sweeps that plane and never leaves it. The starting values reach .     The same two vectors. Now click and drag the head of in the right pane off the teal plane: the equation is marked inconsistent, because such a is not a linear combination of and . So is a plane, not all of .     The plane in these two figures has a compact description. A vector is perpendicular to both and exactly when it is perpendicular to the whole plane, and is such a vector. So Substituting confirms the two figures: gives , while gives .     A Harder Example   When Does a Third Vector Fail to Enlarge the Span?   Let where is a real number.     For which values of is ?    For the exceptional value of , describe the span by an equation and write explicitly in terms of and .        (1) The three vectors span exactly when is consistent for every , where . By , for a square matrix that happens exactly when is invertible, i.e., when . Expanding along the first row, So precisely when , and therefore    (2) Take , so . Solving gives and , hence and ; the third coordinate checks out, since . So which means adds nothing: , a plane.  A vector perpendicular to both and is , since and . Hence, when , and indeed satisfies .     The exceptional case of , with as the columns. Even with three vectors the teal range is only the plane . Click and drag the head of : the output never escapes that plane, because contributes no new direction.     "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-span.html#def-span",
  "type": "Definition",
  "number": "2.25",
  "title": "Span.",
  "body": " Span   Let be a set of vectors in . Then the collection of all linear combinations of these vectors is called the span of these vectors, written .   "
},
{
  "id": "eg-span-plane",
  "level": "2",
  "url": "sec-span.html#eg-span-plane",
  "type": "Example",
  "number": "2.26",
  "title": "Describing a Span.",
  "body": " Describing a Span   Describe the span of the vectors and .    Note that any linear combination of and is of the form which can be thought of as a vector in the -plane.  Also, consider an arbitrary vector in the -plane. We can write any such vector as a linear combination of and . Solving amounts to row reducing giving and . That is,   Hence is the -plane.   The same span, as the range of with and as the columns of . Every output has first entry , so the teal range in the right pane is the -plane. Click and drag the head of in the left pane: the output sweeps out that plane and never leaves it. Drag off the plane instead and the equation is marked inconsistent.     "
},
{
  "id": "eg-span-adding-vector",
  "level": "2",
  "url": "sec-span.html#eg-span-adding-vector",
  "type": "Example",
  "number": "2.28",
  "title": "What Happens When We Add a Third Vector?",
  "body": " What Happens When We Add a Third Vector?   Consider the previous example, where the span of and was the -plane. Suppose we add another vector , and consider the span of , , and . What would happen to the span?     Case (I): is also a vector in the -plane. For example, consider . Then is already in : Hence  adding gained us nothing.   Case (II): is not in the -plane. For example, . Notice that any vector in can be written as a linear combination of , , and : where Hence .  The moral: a new vector enlarges the span exactly when it is not already in the span. This is the idea that the next section makes precise.   Case (II), with , , and as the columns of . Because points off the -plane, the teal range now fills the whole output pane: . Click and drag the head of anywhere it is always reachable, and the violet solution set stays a single point. Compare : had we instead added the of Case (I), which already lies in the plane, the range would have stayed that same plane and the solution set would have grown to a line.     "
},
{
  "id": "fig-span-plane-hit",
  "level": "2",
  "url": "sec-span.html#fig-span-plane-hit",
  "type": "Figure",
  "number": "2.30",
  "title": "",
  "body": " The columns of are and , so the teal region in the right pane is   a plane through the origin. Click and drag the head of in the left pane: the output sweeps that plane and never leaves it. The starting values reach .   "
},
{
  "id": "fig-span-plane-miss",
  "level": "2",
  "url": "sec-span.html#fig-span-plane-miss",
  "type": "Figure",
  "number": "2.31",
  "title": "",
  "body": " The same two vectors. Now click and drag the head of in the right pane off the teal plane: the equation is marked inconsistent, because such a is not a linear combination of and . So is a plane, not all of .   "
},
{
  "id": "rem-span-normal",
  "level": "2",
  "url": "sec-span.html#rem-span-normal",
  "type": "Remark",
  "number": "2.32",
  "title": "",
  "body": " The plane in these two figures has a compact description. A vector is perpendicular to both and exactly when it is perpendicular to the whole plane, and is such a vector. So Substituting confirms the two figures: gives , while gives .  "
},
{
  "id": "eg-span-parameter",
  "level": "2",
  "url": "sec-span.html#eg-span-parameter",
  "type": "Example",
  "number": "2.33",
  "title": "When Does a Third Vector Fail to Enlarge the Span?",
  "body": " When Does a Third Vector Fail to Enlarge the Span?   Let where is a real number.     For which values of is ?    For the exceptional value of , describe the span by an equation and write explicitly in terms of and .        (1) The three vectors span exactly when is consistent for every , where . By , for a square matrix that happens exactly when is invertible, i.e., when . Expanding along the first row, So precisely when , and therefore    (2) Take , so . Solving gives and , hence and ; the third coordinate checks out, since . So which means adds nothing: , a plane.  A vector perpendicular to both and is , since and . Hence, when , and indeed satisfies .   "
},
{
  "id": "fig-span-three-coplanar",
  "level": "2",
  "url": "sec-span.html#fig-span-three-coplanar",
  "type": "Figure",
  "number": "2.34",
  "title": "",
  "body": " The exceptional case of , with as the columns. Even with three vectors the teal range is only the plane . Click and drag the head of : the output never escapes that plane, because contributes no new direction.   "
},
{
  "id": "sec-linear-independence",
  "level": "1",
  "url": "sec-linear-independence.html",
  "type": "Section",
  "number": "2.5",
  "title": "Linear Independence",
  "body": " Linear Independence   Definition and First Examples   Linearly Independent Set of Vectors   Let be a set of vectors in . This set is linearly independent if no vector in the set is in the span of the other vectors of that set.     Testing Independence from the Definition   Consider the vectors Is the set linearly independent?     (I) We can easily see that is not in , since that span is the -plane by , while the first entry of is .   (II) Solving leads to which has no solution. Hence is not in .   (III) Similarly, one can show that has no solution, which means is not in .  From (I), (II), and (III), we can conclude that is a linearly independent set.      Linear Independence as a Linear Combination  Checking every vector against the span of all the others, as we just did, is laborious. The following theorem provides a familiar way to check if a set of vectors is linearly independent.   Independence and the Trivial Solution   The collection of vectors in is linearly independent if and only if whenever it follows that each .  Thus in is linearly independent exactly when the system of linear equations has only the trivial solution, where is the matrix having these vectors as columns.    If some , we may solve for in terms of the other vectors, exhibiting as a member of the span of the others. Conversely, if some lies in the span of the others, say , then is a nontrivial relation, since the coefficient of is .     Expressing a Vector as a Linear Combination   Let Express as a linear combination of the columns of , or show that this is impossible.    Consider . As stated in , if has only the trivial solution, then is a linearly independent set. If this is the case, we will not be able to write as a linear combination of the columns of .  Also, if has a nontrivial solution, then we have and if , then   Row reducing,   With and free, back-substitution gives   For and we get , , , , , so Since , we may solve for . As an example, can be written as the following linear combination of the columns of :      Too Many Vectors   Any set in is linearly dependent if .     In above, the set in was shown to be a linearly dependent set. Note that the number of vectors in the set is more than the number of entries in each vector.  The reason is that the associated homogeneous system has equations in unknowns; with there are at most pivots and hence at least one free variable, so a nontrivial solution exists.     Seeing Dependence  Geometrically, dependence is a collapse. Two vectors in normally span a plane; if one is a multiple of the other, the span drops to a line. Three vectors normally span all of ; if they happen to lie on a common plane through the origin, the span drops to that plane. In each case the set is dependent exactly when the span is smaller than it ought to be.    and as the columns of . They are linearly independent, and the violet solution set in the left pane is a single point : the only way to write as a combination of them is the trivial one. Click and drag the head of along the teal plane and the solution point follows, always alone.     Now . The set is linearly dependent, and two things collapse at once: the teal range drops from a plane to a line , and the violet solution set grows from a point to a line . Click and drag the head of along that violet line the output never moves, which is precisely a nontrivial dependence relation.     Three vectors , , with . The teal range is a plane rather than , and the violet solution set is a line: dragging the head of along it leaves fixed, exhibiting the relation .     This is made visible. In the second figure lies in ; in the third, lies in . Each redundant vector is one the span was already reaching, which is why adding it buys no new dimension.     A Harder Example   Independence of the Pairwise Sums   Let , , be vectors in . Show that     Both directions rest on one computation. For scalars , regrouping gives    ( ) Suppose is linearly independent, and suppose the left-hand side above is . Then all three coefficients on the right must vanish: The first two give and ; substituting into the third gives , so and then . Only the trivial combination gives , so the pairwise sums are linearly independent by .   ( ) We prove the contrapositive. Suppose is linearly dependent , so there are scalars , not all zero, with . We want , not all zero, with , , . That is the system and the coefficient matrix has determinant . By it is invertible, so the system has a unique solution ; and since , that solution is not either.  For this choice of the displayed identity gives a nontrivial dependence among the pairwise sums. So dependence of forces dependence of the sums, which is the contrapositive of the direction we wanted.   A warning. The in that determinant is doing real work. The same argument with four vectors and the cyclic sums fails: those four sums always satisfy so they are dependent no matter how independent the are.     "
},
{
  "id": "def-linear-independence",
  "level": "2",
  "url": "sec-linear-independence.html#def-linear-independence",
  "type": "Definition",
  "number": "2.35",
  "title": "Linearly Independent Set of Vectors.",
  "body": " Linearly Independent Set of Vectors   Let be a set of vectors in . This set is linearly independent if no vector in the set is in the span of the other vectors of that set.   "
},
{
  "id": "eg-independence-by-definition",
  "level": "2",
  "url": "sec-linear-independence.html#eg-independence-by-definition",
  "type": "Example",
  "number": "2.36",
  "title": "Testing Independence from the Definition.",
  "body": " Testing Independence from the Definition   Consider the vectors Is the set linearly independent?     (I) We can easily see that is not in , since that span is the -plane by , while the first entry of is .   (II) Solving leads to which has no solution. Hence is not in .   (III) Similarly, one can show that has no solution, which means is not in .  From (I), (II), and (III), we can conclude that is a linearly independent set.   "
},
{
  "id": "thm-independence-trivial-solution",
  "level": "2",
  "url": "sec-linear-independence.html#thm-independence-trivial-solution",
  "type": "Theorem",
  "number": "2.37",
  "title": "Independence and the Trivial Solution.",
  "body": " Independence and the Trivial Solution   The collection of vectors in is linearly independent if and only if whenever it follows that each .  Thus in is linearly independent exactly when the system of linear equations has only the trivial solution, where is the matrix having these vectors as columns.    If some , we may solve for in terms of the other vectors, exhibiting as a member of the span of the others. Conversely, if some lies in the span of the others, say , then is a nontrivial relation, since the coefficient of is .   "
},
{
  "id": "eg-express-as-combination",
  "level": "2",
  "url": "sec-linear-independence.html#eg-express-as-combination",
  "type": "Example",
  "number": "2.38",
  "title": "Expressing a Vector as a Linear Combination.",
  "body": " Expressing a Vector as a Linear Combination   Let Express as a linear combination of the columns of , or show that this is impossible.    Consider . As stated in , if has only the trivial solution, then is a linearly independent set. If this is the case, we will not be able to write as a linear combination of the columns of .  Also, if has a nontrivial solution, then we have and if , then   Row reducing,   With and free, back-substitution gives   For and we get , , , , , so Since , we may solve for . As an example, can be written as the following linear combination of the columns of :    "
},
{
  "id": "thm-too-many-vectors",
  "level": "2",
  "url": "sec-linear-independence.html#thm-too-many-vectors",
  "type": "Theorem",
  "number": "2.39",
  "title": "Too Many Vectors.",
  "body": " Too Many Vectors   Any set in is linearly dependent if .   "
},
{
  "id": "rem-too-many-vectors",
  "level": "2",
  "url": "sec-linear-independence.html#rem-too-many-vectors",
  "type": "Remark",
  "number": "2.40",
  "title": "",
  "body": " In above, the set in was shown to be a linearly dependent set. Note that the number of vectors in the set is more than the number of entries in each vector.  The reason is that the associated homogeneous system has equations in unknowns; with there are at most pivots and hence at least one free variable, so a nontrivial solution exists.  "
},
{
  "id": "fig-indep-two-plane",
  "level": "2",
  "url": "sec-linear-independence.html#fig-indep-two-plane",
  "type": "Figure",
  "number": "2.41",
  "title": "",
  "body": "  and as the columns of . They are linearly independent, and the violet solution set in the left pane is a single point : the only way to write as a combination of them is the trivial one. Click and drag the head of along the teal plane and the solution point follows, always alone.   "
},
{
  "id": "fig-dep-two-line",
  "level": "2",
  "url": "sec-linear-independence.html#fig-dep-two-line",
  "type": "Figure",
  "number": "2.42",
  "title": "",
  "body": " Now . The set is linearly dependent, and two things collapse at once: the teal range drops from a plane to a line , and the violet solution set grows from a point to a line . Click and drag the head of along that violet line the output never moves, which is precisely a nontrivial dependence relation.   "
},
{
  "id": "fig-dep-three-plane",
  "level": "2",
  "url": "sec-linear-independence.html#fig-dep-three-plane",
  "type": "Figure",
  "number": "2.43",
  "title": "",
  "body": " Three vectors , , with . The teal range is a plane rather than , and the violet solution set is a line: dragging the head of along it leaves fixed, exhibiting the relation .   "
},
{
  "id": "rem-collapse",
  "level": "2",
  "url": "sec-linear-independence.html#rem-collapse",
  "type": "Remark",
  "number": "2.44",
  "title": "",
  "body": " This is made visible. In the second figure lies in ; in the third, lies in . Each redundant vector is one the span was already reaching, which is why adding it buys no new dimension.  "
},
{
  "id": "eg-independence-sums",
  "level": "2",
  "url": "sec-linear-independence.html#eg-independence-sums",
  "type": "Example",
  "number": "2.45",
  "title": "Independence of the Pairwise Sums.",
  "body": " Independence of the Pairwise Sums   Let , , be vectors in . Show that     Both directions rest on one computation. For scalars , regrouping gives    ( ) Suppose is linearly independent, and suppose the left-hand side above is . Then all three coefficients on the right must vanish: The first two give and ; substituting into the third gives , so and then . Only the trivial combination gives , so the pairwise sums are linearly independent by .   ( ) We prove the contrapositive. Suppose is linearly dependent , so there are scalars , not all zero, with . We want , not all zero, with , , . That is the system and the coefficient matrix has determinant . By it is invertible, so the system has a unique solution ; and since , that solution is not either.  For this choice of the displayed identity gives a nontrivial dependence among the pairwise sums. So dependence of forces dependence of the sums, which is the contrapositive of the direction we wanted.   A warning. The in that determinant is doing real work. The same argument with four vectors and the cyclic sums fails: those four sums always satisfy so they are dependent no matter how independent the are.   "
},
{
  "id": "sec-transformations",
  "level": "1",
  "url": "sec-transformations.html",
  "type": "Section",
  "number": "3.1",
  "title": "Transformations and Linear Transformations",
  "body": " Transformations and Linear Transformations   Transformations   Transformation   A transformation is a function , sometimes written , and is called a transformation from to . The sets and are known as the domain and codomain of . If , then we say is a transformation of .     What do we mean by a function?  Informally, a function is a rule that assigns exactly one vector of to each vector of . We use the notation to mean the transformation applied to the vector .    A Transformation from to  Consider defined by This transformation transforms to .  In the language of the definition, with , where and .    Matrix Transformation   If acts by matrix multiplication of a matrix , we call a matrix transformation , and write . The vector is called the image of , and the set of all images is called the range of .     The Previous Transformation Is a Matrix Transformation  Continuing , we can write     Equality of Transformations   Suppose and are transformations. Then if and only if for every .     Transformation by Matrix Multiplication   Consider the matrix . By matrix multiplication, transforms vectors in into vectors in . Describe the effect on a general vector, and compute the image of .    Transforming a general vector by looks like this: For example,      A transformation sends a vector in 3-space to its image in the plane.        Linear Transformations   Linear Transformation   A transformation is a linear transformation if it satisfies the following two properties for all and all scalars .      (preservation of addition).     (preservation of scalar multiplication).        Properties of Linear Transformations   Let be a linear transformation, and let .      , implying , so preserves the zero vector.     , implying , so preserves the negative of a vector.    Suppose are vectors in and for some . Then i.e., preserves linear combinations.        Determining a Transformation from Two Values   Let be a linear transformation such that Find .    First, we need to see if can be written as a linear combination of and . Solving : so and ; that is,   Then we use property (3) of :       Matrix Transformations Are Linear   Every Matrix Transformation Is a Linear Transformation   Every matrix transformation is a linear transformation.    Consider the matrix transformation . We will show that such a transformation is in fact linear, i.e., it preserves addition and scalar multiplication.   (1) Preservation of addition. Let be with columns , and let . Then    (2) Preservation of scalar multiplication. Let and . Then      Transformations That Are Not Matrix Transformations   Can you come up with an example of a transformation that is NOT a matrix transformation? Explain why it is not a matrix transformation.    As an example, consider defined by . You can easily check that does not preserve , since , and hence it is not a linear transformation.  Also, we cannot find a matrix such that for all we have . Again consider . Then , which is impossible.  As another example, consider defined by . If such an existed, then would require for all , which is not possible.     "
},
{
  "id": "def-transformation",
  "level": "2",
  "url": "sec-transformations.html#def-transformation",
  "type": "Definition",
  "number": "3.1",
  "title": "Transformation.",
  "body": " Transformation   A transformation is a function , sometimes written , and is called a transformation from to . The sets and are known as the domain and codomain of . If , then we say is a transformation of .   "
},
{
  "id": "rem-what-is-a-function",
  "level": "2",
  "url": "sec-transformations.html#rem-what-is-a-function",
  "type": "Remark",
  "number": "3.2",
  "title": "What do we mean by a function?",
  "body": " What do we mean by a function?  Informally, a function is a rule that assigns exactly one vector of to each vector of . We use the notation to mean the transformation applied to the vector .  "
},
{
  "id": "eg-transformation",
  "level": "2",
  "url": "sec-transformations.html#eg-transformation",
  "type": "Example",
  "number": "3.3",
  "title": "A Transformation from <span class=\"process-math\">\\(\\R^3\\)<\/span> to <span class=\"process-math\">\\(\\R^4\\)<\/span>.",
  "body": " A Transformation from to  Consider defined by This transformation transforms to .  In the language of the definition, with , where and .  "
},
{
  "id": "def-matrix-transformation",
  "level": "2",
  "url": "sec-transformations.html#def-matrix-transformation",
  "type": "Definition",
  "number": "3.4",
  "title": "Matrix Transformation.",
  "body": " Matrix Transformation   If acts by matrix multiplication of a matrix , we call a matrix transformation , and write . The vector is called the image of , and the set of all images is called the range of .   "
},
{
  "id": "eg-matrix-transformation",
  "level": "2",
  "url": "sec-transformations.html#eg-matrix-transformation",
  "type": "Example",
  "number": "3.5",
  "title": "The Previous Transformation Is a Matrix Transformation.",
  "body": " The Previous Transformation Is a Matrix Transformation  Continuing , we can write   "
},
{
  "id": "def-equality-of-transformations",
  "level": "2",
  "url": "sec-transformations.html#def-equality-of-transformations",
  "type": "Definition",
  "number": "3.6",
  "title": "Equality of Transformations.",
  "body": " Equality of Transformations   Suppose and are transformations. Then if and only if for every .   "
},
{
  "id": "eg-transformation-by-multiplication",
  "level": "2",
  "url": "sec-transformations.html#eg-transformation-by-multiplication",
  "type": "Example",
  "number": "3.7",
  "title": "Transformation by Matrix Multiplication.",
  "body": " Transformation by Matrix Multiplication   Consider the matrix . By matrix multiplication, transforms vectors in into vectors in . Describe the effect on a general vector, and compute the image of .    Transforming a general vector by looks like this: For example,    "
},
{
  "id": "fig-transformation-schematic",
  "level": "2",
  "url": "sec-transformations.html#fig-transformation-schematic",
  "type": "Figure",
  "number": "3.8",
  "title": "",
  "body": " A transformation sends a vector in 3-space to its image in the plane.     "
},
{
  "id": "def-linear-transformation",
  "level": "2",
  "url": "sec-transformations.html#def-linear-transformation",
  "type": "Definition",
  "number": "3.9",
  "title": "Linear Transformation.",
  "body": " Linear Transformation   A transformation is a linear transformation if it satisfies the following two properties for all and all scalars .      (preservation of addition).     (preservation of scalar multiplication).      "
},
{
  "id": "thm-linear-transformation-properties",
  "level": "2",
  "url": "sec-transformations.html#thm-linear-transformation-properties",
  "type": "Theorem",
  "number": "3.10",
  "title": "Properties of Linear Transformations.",
  "body": " Properties of Linear Transformations   Let be a linear transformation, and let .      , implying , so preserves the zero vector.     , implying , so preserves the negative of a vector.    Suppose are vectors in and for some . Then i.e., preserves linear combinations.      "
},
{
  "id": "eg-transformation-from-values",
  "level": "2",
  "url": "sec-transformations.html#eg-transformation-from-values",
  "type": "Example",
  "number": "3.11",
  "title": "Determining a Transformation from Two Values.",
  "body": " Determining a Transformation from Two Values   Let be a linear transformation such that Find .    First, we need to see if can be written as a linear combination of and . Solving : so and ; that is,   Then we use property (3) of :    "
},
{
  "id": "thm-matrix-transformations-linear",
  "level": "2",
  "url": "sec-transformations.html#thm-matrix-transformations-linear",
  "type": "Theorem",
  "number": "3.12",
  "title": "Every Matrix Transformation Is a Linear Transformation.",
  "body": " Every Matrix Transformation Is a Linear Transformation   Every matrix transformation is a linear transformation.    Consider the matrix transformation . We will show that such a transformation is in fact linear, i.e., it preserves addition and scalar multiplication.   (1) Preservation of addition. Let be with columns , and let . Then    (2) Preservation of scalar multiplication. Let and . Then    "
},
{
  "id": "eg-not-a-matrix-transformation",
  "level": "2",
  "url": "sec-transformations.html#eg-not-a-matrix-transformation",
  "type": "Example",
  "number": "3.13",
  "title": "Transformations That Are Not Matrix Transformations.",
  "body": " Transformations That Are Not Matrix Transformations   Can you come up with an example of a transformation that is NOT a matrix transformation? Explain why it is not a matrix transformation.    As an example, consider defined by . You can easily check that does not preserve , since , and hence it is not a linear transformation.  Also, we cannot find a matrix such that for all we have . Again consider . Then , which is impossible.  As another example, consider defined by . If such an existed, then would require for all , which is not possible.   "
},
{
  "id": "sec-injections-surjections",
  "level": "1",
  "url": "sec-injections-surjections.html",
  "type": "Section",
  "number": "3.2",
  "title": "One-to-One and Onto Transformations",
  "body": " One-to-One and Onto Transformations   Two questions can be asked of any transformation: does it ever send two different inputs to the same output, and does it reach every possible output? For matrix transformations both questions reduce to facts about the matrix that we already know how to check.  Several figures in this section are interactive. Click and drag the head of the input vector or the output vector to explore the transformation; drag inside a three-dimensional pane to rotate it. The handle can also be moved with the keyboard (press Tab to reach it, then the arrow keys), and the animate button plays a short demonstration. The violet objects always show the solution set of , and the teal objects show the range of .    One-to-One Transformations   Injective (One-to-One) Linear Transformation   Let be a linear transformation, and let and be in . We say that is an injection or is one-to-one if implies . Equivalently, if , then .     Which transformation is an injection? On the left, two different inputs share an output, so the transformation is not one-to-one. On the right, distinct inputs have distinct outputs.                         \\text{not one-to-one}  \\text{one-to-one}        One-to-One and the Trivial Solution   Let be an matrix and let be a vector of length . Then the transformation induced by , , is one-to-one (1) if and only if implies (2).     (1) (2). Let be an element of such that . Then, since is a one-to-one linear transformation, we have and hence .   (2) (1). Let and be elements in such that . Then , which implies , or . Hence we have shown that if then , which means is one-to-one.     True or False?   Let , where is an matrix. If we also assume that is injective, then which statement is true and which one is false?     For every , there exists one solution for the equation .   has only the trivial solution.  The columns of are linearly independent.       (I) False. For example, let and , which is a one-to-one transformation. Now, for , the system has no solution, since the augmented matrix is and therefore the system is inconsistent.   (II) True. See .   (III) True. Note that If has only the trivial solution, it means that none of the columns of can be written as a linear combination of the rest of them, since if for example could be written as a linear combination this gives , which contradicts the fact that has only the trivial solution.     Which Transformation Is an Injection?     Reflection in the -axis in .  Projection into the -axis in .    .        (A) The corresponding matrix is and the system has only the trivial solution, hence this is an injection.   (B) Similarly, , whereas has non-trivial solutions, hence this is NOT an injection.   (C) Again ; however, has a free parameter and therefore (C) is not an injection. For example,      A One-to-One Transformation, Seen Geometrically   Let be the matrix transformation , where . Is one-to-one?    Row reducing gives so there is a pivot in every column. Hence has only the trivial solution, and is one-to-one by .   The transformation for . Click and drag the head of the input vector on the left: different inputs always produce different outputs on the right, so is one-to-one. The violet dot on the left is the solution set of : it is a single point. The teal plane on the right is the range of .     The same transformation on a white background: drag either vector, or use the arrow keys after focusing the head of .       A Transformation That Is Not One-to-One, Seen Geometrically   Let be the matrix transformation , where . Is one-to-one?    The matrix is already in reduced row echelon form, and the third column has no pivot. Solving with free variable gives and , so the solution set is Taking produces the nontrivial solution so two different inputs share the output , and is not one-to-one.   The transformation for . The violet line on the left is the solution set of , namely all multiples of . Click and drag the head of along this line: the output stays at , so sends infinitely many inputs to the same output.       Wide Matrices Are Never One-to-One  If is an matrix with more columns than rows ( ), then cannot have a pivot in every column: there is at most one pivot per row, and there are fewer rows than columns. Hence has a free variable, and the transformation is never one-to-one. This is why the transformation in the previous example had no chance: a transformation from a bigger space to a smaller space must collapse different inputs together.     Onto Transformations   Surjection (Onto)   Let be a linear transformation. We say that is a surjection or onto if, for every , there exists an such that .     Which transformation is a surjection? On the left every element of the codomain is hit; on the right one element is missed, so the transformation is not onto.                         \\text{onto}  \\text{not onto}        A Transformation That Is Not Onto   Let be the linear transformation defined by for all . Determine whether is a surjective transformation or not.    Every image has second entry , so no vector with a nonzero second entry is in the range. For instance, is never an image. Hence is not a surjection.     Which Transformation Is a Surjection?       with .     , where .        (I) The matrix is The system , or will always have a solution, since has two leading ones and three variables, one of which is a free variable. Hence is a surjection.   (II) The system , or has no solution for , which means is not a surjection.     An Onto Transformation, Seen Geometrically   Let be the matrix transformation , where . Is onto?    The matrix is already in reduced row echelon form and has a pivot in every row. Therefore the augmented matrix of can never have a pivot in its last column, and the system is consistent for every . Concretely, for any , the input satisfies . Hence is onto.   The transformation for . Click and drag the head of the output vector anywhere on the right: the demo always finds an input with , because every vector in is an output of .       A Transformation That Is Not Onto, Seen Geometrically   Let be the matrix transformation , where . Is onto?    Every output of is a linear combination of the two columns of : The middle entry of every output is the sum of the other two, so the range of is the plane in  a two-dimensional slice of the three-dimensional codomain. For instance, has , so it is not an output of , and is not onto. Alternatively: has only two pivots, so it cannot have a pivot in every one of its three rows.   The transformation for . The range of is the teal plane on the right, which is smaller than the codomain . Click and drag the head of off the teal plane: the equation becomes inconsistent, so such a is not an output of .       Tall Matrices Are Never Onto  If is an matrix with more rows than columns ( ), then cannot have a pivot in every row: there is at most one pivot per column, and there are fewer columns than rows. Hence the transformation is never onto. This is the mirror image of : a transformation from a smaller space into a bigger space cannot fill up its codomain.     One-to-One and Onto Together  Both properties are read off from the pivots of :      is one-to-one if and only if has a pivot in every column , that is, if and only if the columns of are linearly independent.     is onto if and only if has a pivot in every row , that is, if and only if the columns of span .     A transformation can have either property without the other, both, or neither. The two examples below complete the picture.   A Transformation That Is Neither One-to-One Nor Onto   Let be the matrix transformation , where . Show that is neither one-to-one nor onto.    Row reducing, so has a single pivot. There is no pivot in the second or third column, so has two free variables and is not one-to-one: the solution set of is the entire plane . There is also no pivot in the second row, so is not onto: the range is , a line in , since every column of is a multiple of . For example, is not on this line, so has no solution.   The transformation for . The violet plane on the left is the solution set of for the current ; since it contains more than one point, is not one-to-one. The teal line on the right is the range of ; since it is smaller than , is not onto. Click and drag the head of off the line to make the equation inconsistent.       Projection into the -Plane Is Neither   Let be projection into the -plane, that is, Show that is neither one-to-one nor onto.    First find the matrix. Since , and ,    Not one-to-one. The system reads , , and , so is a free variable and the solutions are the whole -axis. There are nontrivial solutions, so by  is not one-to-one. Concretely, two different inputs with the same image. This is exactly what projection does: it forgets the height .   Not onto. Every output has third entry , so the range of is the -plane , which is smaller than the codomain . For instance has no preimage: the third equation of reads , so the system is inconsistent.  Both failures are visible in : by , a square matrix that is not invertible is neither one-to-one nor onto, consistent with .   Projection into the -plane, with . The violet vertical line on the left is the solution set of : an entire line of inputs shares one image, so is not one-to-one. The teal horizontal plane on the right is the range of , which is smaller than . Click and drag the head of off that plane and the equation becomes inconsistent, so is not onto either.       A Transformation That Is Both One-to-One and Onto   Let be the matrix transformation , where . Show that is both one-to-one and onto.    Row reducing, so has a pivot in every column ( is one-to-one) and in every row ( is onto). In fact, for every the equation has exactly one solution, as can be checked by multiplying the two matrices. (We will study such invertible matrices in detail later.)   The transformation for . Click and drag the head of either vector: every output comes from exactly one input , so is one-to-one and onto. The teal region on the right is the range of , which is all of .       Rotation Is Both One-to-One and Onto   Let denote counterclockwise rotation about the origin through an angle . Show that is both one-to-one and onto, for every .    Rotating counterclockwise through lands on the point of the unit circle at angle , and rotating lands a further quarter turn along: (This matrix is studied further in .)  Now so is invertible for every angle . By , has only the trivial solution, so is one-to-one by ; and the columns of span , so is onto.  The geometry says the same thing more directly: rotating back through undoes the rotation. Indeed which is the matrix of . So every has exactly one preimage, namely  which is precisely the statement that is one-to-one and onto.   The quarter turn , with matrix . Click and drag the head of either vector: the violet solution set on the left is always a single point, so each output comes from exactly one input, and the teal region on the right fills all of , so every output is achieved. Rotation loses nothing and misses nothing.       Square Matrices: One-to-One Equals Onto  For an matrix , having a pivot in every column is the same as having pivots, which is the same as having a pivot in every row. So for a square matrix, the transformation is one-to-one if and only if it is onto. For non-square matrices the two properties are independent except that, by and , a wide matrix is never one-to-one and a tall matrix is never onto.    "
},
{
  "id": "def-injective",
  "level": "2",
  "url": "sec-injections-surjections.html#def-injective",
  "type": "Definition",
  "number": "3.14",
  "title": "Injective (One-to-One) Linear Transformation.",
  "body": " Injective (One-to-One) Linear Transformation   Let be a linear transformation, and let and be in . We say that is an injection or is one-to-one if implies . Equivalently, if , then .   "
},
{
  "id": "fig-injection-schematic",
  "level": "2",
  "url": "sec-injections-surjections.html#fig-injection-schematic",
  "type": "Figure",
  "number": "3.15",
  "title": "",
  "body": " Which transformation is an injection? On the left, two different inputs share an output, so the transformation is not one-to-one. On the right, distinct inputs have distinct outputs.                         \\text{not one-to-one}  \\text{one-to-one}      "
},
{
  "id": "thm-injective-iff-trivial",
  "level": "2",
  "url": "sec-injections-surjections.html#thm-injective-iff-trivial",
  "type": "Theorem",
  "number": "3.16",
  "title": "One-to-One and the Trivial Solution.",
  "body": " One-to-One and the Trivial Solution   Let be an matrix and let be a vector of length . Then the transformation induced by , , is one-to-one (1) if and only if implies (2).     (1) (2). Let be an element of such that . Then, since is a one-to-one linear transformation, we have and hence .   (2) (1). Let and be elements in such that . Then , which implies , or . Hence we have shown that if then , which means is one-to-one.   "
},
{
  "id": "eg-injective-true-false",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-injective-true-false",
  "type": "Example",
  "number": "3.17",
  "title": "True or False?",
  "body": " True or False?   Let , where is an matrix. If we also assume that is injective, then which statement is true and which one is false?     For every , there exists one solution for the equation .   has only the trivial solution.  The columns of are linearly independent.       (I) False. For example, let and , which is a one-to-one transformation. Now, for , the system has no solution, since the augmented matrix is and therefore the system is inconsistent.   (II) True. See .   (III) True. Note that If has only the trivial solution, it means that none of the columns of can be written as a linear combination of the rest of them, since if for example could be written as a linear combination this gives , which contradicts the fact that has only the trivial solution.   "
},
{
  "id": "eg-which-are-injections",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-which-are-injections",
  "type": "Example",
  "number": "3.18",
  "title": "Which Transformation Is an Injection?",
  "body": " Which Transformation Is an Injection?     Reflection in the -axis in .  Projection into the -axis in .    .        (A) The corresponding matrix is and the system has only the trivial solution, hence this is an injection.   (B) Similarly, , whereas has non-trivial solutions, hence this is NOT an injection.   (C) Again ; however, has a free parameter and therefore (C) is not an injection. For example,    "
},
{
  "id": "eg-injective-geometric",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-injective-geometric",
  "type": "Example",
  "number": "3.19",
  "title": "A One-to-One Transformation, Seen Geometrically.",
  "body": " A One-to-One Transformation, Seen Geometrically   Let be the matrix transformation , where . Is one-to-one?    Row reducing gives so there is a pivot in every column. Hence has only the trivial solution, and is one-to-one by .   The transformation for . Click and drag the head of the input vector on the left: different inputs always produce different outputs on the right, so is one-to-one. The violet dot on the left is the solution set of : it is a single point. The teal plane on the right is the range of .     The same transformation on a white background: drag either vector, or use the arrow keys after focusing the head of .     "
},
{
  "id": "eg-not-injective-geometric",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-not-injective-geometric",
  "type": "Example",
  "number": "3.22",
  "title": "A Transformation That Is Not One-to-One, Seen Geometrically.",
  "body": " A Transformation That Is Not One-to-One, Seen Geometrically   Let be the matrix transformation , where . Is one-to-one?    The matrix is already in reduced row echelon form, and the third column has no pivot. Solving with free variable gives and , so the solution set is Taking produces the nontrivial solution so two different inputs share the output , and is not one-to-one.   The transformation for . The violet line on the left is the solution set of , namely all multiples of . Click and drag the head of along this line: the output stays at , so sends infinitely many inputs to the same output.     "
},
{
  "id": "rem-wide-never-injective",
  "level": "2",
  "url": "sec-injections-surjections.html#rem-wide-never-injective",
  "type": "Remark",
  "number": "3.24",
  "title": "Wide Matrices Are Never One-to-One.",
  "body": " Wide Matrices Are Never One-to-One  If is an matrix with more columns than rows ( ), then cannot have a pivot in every column: there is at most one pivot per row, and there are fewer rows than columns. Hence has a free variable, and the transformation is never one-to-one. This is why the transformation in the previous example had no chance: a transformation from a bigger space to a smaller space must collapse different inputs together.  "
},
{
  "id": "def-surjective",
  "level": "2",
  "url": "sec-injections-surjections.html#def-surjective",
  "type": "Definition",
  "number": "3.25",
  "title": "Surjection (Onto).",
  "body": " Surjection (Onto)   Let be a linear transformation. We say that is a surjection or onto if, for every , there exists an such that .   "
},
{
  "id": "fig-surjection-schematic",
  "level": "2",
  "url": "sec-injections-surjections.html#fig-surjection-schematic",
  "type": "Figure",
  "number": "3.26",
  "title": "",
  "body": " Which transformation is a surjection? On the left every element of the codomain is hit; on the right one element is missed, so the transformation is not onto.                         \\text{onto}  \\text{not onto}      "
},
{
  "id": "eg-surjection-simple",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-surjection-simple",
  "type": "Example",
  "number": "3.27",
  "title": "A Transformation That Is Not Onto.",
  "body": " A Transformation That Is Not Onto   Let be the linear transformation defined by for all . Determine whether is a surjective transformation or not.    Every image has second entry , so no vector with a nonzero second entry is in the range. For instance, is never an image. Hence is not a surjection.   "
},
{
  "id": "eg-which-are-surjections",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-which-are-surjections",
  "type": "Example",
  "number": "3.28",
  "title": "Which Transformation Is a Surjection?",
  "body": " Which Transformation Is a Surjection?       with .     , where .        (I) The matrix is The system , or will always have a solution, since has two leading ones and three variables, one of which is a free variable. Hence is a surjection.   (II) The system , or has no solution for , which means is not a surjection.   "
},
{
  "id": "eg-surjective-geometric",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-surjective-geometric",
  "type": "Example",
  "number": "3.29",
  "title": "An Onto Transformation, Seen Geometrically.",
  "body": " An Onto Transformation, Seen Geometrically   Let be the matrix transformation , where . Is onto?    The matrix is already in reduced row echelon form and has a pivot in every row. Therefore the augmented matrix of can never have a pivot in its last column, and the system is consistent for every . Concretely, for any , the input satisfies . Hence is onto.   The transformation for . Click and drag the head of the output vector anywhere on the right: the demo always finds an input with , because every vector in is an output of .     "
},
{
  "id": "eg-not-surjective-geometric",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-not-surjective-geometric",
  "type": "Example",
  "number": "3.31",
  "title": "A Transformation That Is Not Onto, Seen Geometrically.",
  "body": " A Transformation That Is Not Onto, Seen Geometrically   Let be the matrix transformation , where . Is onto?    Every output of is a linear combination of the two columns of : The middle entry of every output is the sum of the other two, so the range of is the plane in  a two-dimensional slice of the three-dimensional codomain. For instance, has , so it is not an output of , and is not onto. Alternatively: has only two pivots, so it cannot have a pivot in every one of its three rows.   The transformation for . The range of is the teal plane on the right, which is smaller than the codomain . Click and drag the head of off the teal plane: the equation becomes inconsistent, so such a is not an output of .     "
},
{
  "id": "rem-tall-never-surjective",
  "level": "2",
  "url": "sec-injections-surjections.html#rem-tall-never-surjective",
  "type": "Remark",
  "number": "3.33",
  "title": "Tall Matrices Are Never Onto.",
  "body": " Tall Matrices Are Never Onto  If is an matrix with more rows than columns ( ), then cannot have a pivot in every row: there is at most one pivot per column, and there are fewer columns than rows. Hence the transformation is never onto. This is the mirror image of : a transformation from a smaller space into a bigger space cannot fill up its codomain.  "
},
{
  "id": "eg-neither-injective-nor-surjective",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-neither-injective-nor-surjective",
  "type": "Example",
  "number": "3.34",
  "title": "A Transformation That Is Neither One-to-One Nor Onto.",
  "body": " A Transformation That Is Neither One-to-One Nor Onto   Let be the matrix transformation , where . Show that is neither one-to-one nor onto.    Row reducing, so has a single pivot. There is no pivot in the second or third column, so has two free variables and is not one-to-one: the solution set of is the entire plane . There is also no pivot in the second row, so is not onto: the range is , a line in , since every column of is a multiple of . For example, is not on this line, so has no solution.   The transformation for . The violet plane on the left is the solution set of for the current ; since it contains more than one point, is not one-to-one. The teal line on the right is the range of ; since it is smaller than , is not onto. Click and drag the head of off the line to make the equation inconsistent.     "
},
{
  "id": "eg-projection-xy-plane",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-projection-xy-plane",
  "type": "Example",
  "number": "3.36",
  "title": "Projection into the <span class=\"process-math\">\\(xy\\)<\/span>-Plane Is Neither.",
  "body": " Projection into the -Plane Is Neither   Let be projection into the -plane, that is, Show that is neither one-to-one nor onto.    First find the matrix. Since , and ,    Not one-to-one. The system reads , , and , so is a free variable and the solutions are the whole -axis. There are nontrivial solutions, so by  is not one-to-one. Concretely, two different inputs with the same image. This is exactly what projection does: it forgets the height .   Not onto. Every output has third entry , so the range of is the -plane , which is smaller than the codomain . For instance has no preimage: the third equation of reads , so the system is inconsistent.  Both failures are visible in : by , a square matrix that is not invertible is neither one-to-one nor onto, consistent with .   Projection into the -plane, with . The violet vertical line on the left is the solution set of : an entire line of inputs shares one image, so is not one-to-one. The teal horizontal plane on the right is the range of , which is smaller than . Click and drag the head of off that plane and the equation becomes inconsistent, so is not onto either.     "
},
{
  "id": "eg-both-injective-and-surjective",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-both-injective-and-surjective",
  "type": "Example",
  "number": "3.38",
  "title": "A Transformation That Is Both One-to-One and Onto.",
  "body": " A Transformation That Is Both One-to-One and Onto   Let be the matrix transformation , where . Show that is both one-to-one and onto.    Row reducing, so has a pivot in every column ( is one-to-one) and in every row ( is onto). In fact, for every the equation has exactly one solution, as can be checked by multiplying the two matrices. (We will study such invertible matrices in detail later.)   The transformation for . Click and drag the head of either vector: every output comes from exactly one input , so is one-to-one and onto. The teal region on the right is the range of , which is all of .     "
},
{
  "id": "eg-rotation-bijective",
  "level": "2",
  "url": "sec-injections-surjections.html#eg-rotation-bijective",
  "type": "Example",
  "number": "3.40",
  "title": "Rotation Is Both One-to-One and Onto.",
  "body": " Rotation Is Both One-to-One and Onto   Let denote counterclockwise rotation about the origin through an angle . Show that is both one-to-one and onto, for every .    Rotating counterclockwise through lands on the point of the unit circle at angle , and rotating lands a further quarter turn along: (This matrix is studied further in .)  Now so is invertible for every angle . By , has only the trivial solution, so is one-to-one by ; and the columns of span , so is onto.  The geometry says the same thing more directly: rotating back through undoes the rotation. Indeed which is the matrix of . So every has exactly one preimage, namely  which is precisely the statement that is one-to-one and onto.   The quarter turn , with matrix . Click and drag the head of either vector: the violet solution set on the left is always a single point, so each output comes from exactly one input, and the teal region on the right fills all of , so every output is achieved. Rotation loses nothing and misses nothing.     "
},
{
  "id": "rem-square-injective-iff-surjective",
  "level": "2",
  "url": "sec-injections-surjections.html#rem-square-injective-iff-surjective",
  "type": "Remark",
  "number": "3.42",
  "title": "Square Matrices: One-to-One Equals Onto.",
  "body": " Square Matrices: One-to-One Equals Onto  For an matrix , having a pivot in every column is the same as having pivots, which is the same as having a pivot in every row. So for a square matrix, the transformation is one-to-one if and only if it is onto. For non-square matrices the two properties are independent except that, by and , a wide matrix is never one-to-one and a tall matrix is never onto.  "
},
{
  "id": "sec-special-transformations",
  "level": "1",
  "url": "sec-special-transformations.html",
  "type": "Section",
  "number": "3.3",
  "title": "Special Transformations of <span class=\"process-math\">\\(\\R^2\\)<\/span>",
  "body": " Special Transformations of   Rotations, reflections, projections, and shears are the geometric transformations of the plane one meets most often. Each is linear, and so each is given by a matrix. Because a linear transformation preserves linear combinations, that matrix is completely determined by what the transformation does to the two standard basis vectors and .    Rotations in   Rotation   The transformation denotes counterclockwise rotation about the origin through an angle of .     Question: Is a linear transformation?  Yes. Rotating the whole plane rigidly about the origin carries the parallelogram determined by and to the parallelogram determined by and , so ; preserves vector addition. Likewise, rotating a vector and then scaling it by gives the same result as scaling first and then rotating, so ; preserves scalar multiplication.   To find the matrix, we only need the images of and . Rotating counterclockwise through lands on the point at angle on the unit circle, and rotating lands a further quarter turn along:    The images of the standard basis vectors under . These two columns are exactly the columns of the rotation matrix.            \\vec{e}_1  \\vec{e}_2  R_\\theta(\\vec{e}_1)  R_\\theta(\\vec{e}_2)  \\theta       Therefore the matrix of is    A Quarter Turn   The transformation denotes a counterclockwise rotation about the origin through an angle of radians. Find the matrix of .     so that   For instance, with we get . As expected for a quarter turn, the dot product is zero:      A quarter turn sends to ; the two vectors are perpendicular.         \\vec{x}  R_{\\pi\/2}(\\vec{x})         Reflections in   Reflection in the -Axis  In , reflection in the -axis, which transforms to , is a matrix transformation. Since and ,     Reflection in the Line  Reflection in the line transforms to . This is a matrix transformation: here and , so i.e., where and .    Reflection in the Line   The reflection in the line is a linear transformation. Find the matrix corresponding to this transformation.    Let us denote the reflection in the line by . We need to compute and .  Let be the angle the line makes with the positive -axis. The point lies on the line and is at distance from the origin, so   Reflecting in that line rotates it through , so    Exercise. Show that , and hence that the matrix corresponding to is      Reflection in the line . The line makes an angle with the -axis, so is carried to the vector at angle .            \\vec{e}_1  Q_m(\\vec{e}_1)  y=mx  \\theta  2\\theta         Reflection through the Origin, Projections, and Shears   Reflection through the Origin  Reflection through the origin sends to , so This can also be thought of as , since     Projection into the -Axis  Projection into the -axis sends to , flattening the whole plane onto the -axis. Since and ,   Note the contrast with : a reflection is one-to-one, while this projection is not, since every vector has the same image regardless of .    Projection into the -axis, . The violet vertical line on the left is the set of all inputs with the same image as ; the teal line on the right is the range, just the -axis. Click and drag either vector.     Vertical Shear  A vertical shear fixes and tilts : so that A shear leaves the vertical direction alone and slides each point vertically by an amount proportional to its -coordinate, carrying a square to a parallelogram of the same area.    A vertical shear with carries the unit square to a parallelogram.          T(\\vec{e}_1)        A vertical shear with , so . Drag : vertical vectors are fixed, everything else slides vertically. The solution set (violet) is always a single point and the range (teal) is all of , so a shear is one-to-one and onto.     "
},
{
  "id": "def-rotation",
  "level": "2",
  "url": "sec-special-transformations.html#def-rotation",
  "type": "Definition",
  "number": "3.43",
  "title": "Rotation.",
  "body": " Rotation   The transformation denotes counterclockwise rotation about the origin through an angle of .   "
},
{
  "id": "rem-rotation-is-linear",
  "level": "2",
  "url": "sec-special-transformations.html#rem-rotation-is-linear",
  "type": "Remark",
  "number": "3.44",
  "title": "Question: Is <span class=\"process-math\">\\(R_\\theta : \\R^2 \\to \\R^2\\)<\/span> a linear transformation?",
  "body": " Question: Is a linear transformation?  Yes. Rotating the whole plane rigidly about the origin carries the parallelogram determined by and to the parallelogram determined by and , so ; preserves vector addition. Likewise, rotating a vector and then scaling it by gives the same result as scaling first and then rotating, so ; preserves scalar multiplication.  "
},
{
  "id": "fig-rotation-basis",
  "level": "2",
  "url": "sec-special-transformations.html#fig-rotation-basis",
  "type": "Figure",
  "number": "3.45",
  "title": "",
  "body": " The images of the standard basis vectors under . These two columns are exactly the columns of the rotation matrix.            \\vec{e}_1  \\vec{e}_2  R_\\theta(\\vec{e}_1)  R_\\theta(\\vec{e}_2)  \\theta      "
},
{
  "id": "eg-rotation-quarter-turn",
  "level": "2",
  "url": "sec-special-transformations.html#eg-rotation-quarter-turn",
  "type": "Example",
  "number": "3.46",
  "title": "A Quarter Turn.",
  "body": " A Quarter Turn   The transformation denotes a counterclockwise rotation about the origin through an angle of radians. Find the matrix of .     so that   For instance, with we get . As expected for a quarter turn, the dot product is zero:    "
},
{
  "id": "fig-rotation-example",
  "level": "2",
  "url": "sec-special-transformations.html#fig-rotation-example",
  "type": "Figure",
  "number": "3.47",
  "title": "",
  "body": " A quarter turn sends to ; the two vectors are perpendicular.         \\vec{x}  R_{\\pi\/2}(\\vec{x})      "
},
{
  "id": "eg-reflection-x-axis",
  "level": "2",
  "url": "sec-special-transformations.html#eg-reflection-x-axis",
  "type": "Example",
  "number": "3.48",
  "title": "Reflection in the <span class=\"process-math\">\\(x\\)<\/span>-Axis.",
  "body": " Reflection in the -Axis  In , reflection in the -axis, which transforms to , is a matrix transformation. Since and ,   "
},
{
  "id": "eg-reflection-y-equals-x",
  "level": "2",
  "url": "sec-special-transformations.html#eg-reflection-y-equals-x",
  "type": "Example",
  "number": "3.49",
  "title": "Reflection in the Line <span class=\"process-math\">\\(y = x\\)<\/span>.",
  "body": " Reflection in the Line  Reflection in the line transforms to . This is a matrix transformation: here and , so i.e., where and .  "
},
{
  "id": "eg-reflection-y-mx",
  "level": "2",
  "url": "sec-special-transformations.html#eg-reflection-y-mx",
  "type": "Example",
  "number": "3.50",
  "title": "Reflection in the Line <span class=\"process-math\">\\(y = mx\\)<\/span>.",
  "body": " Reflection in the Line   The reflection in the line is a linear transformation. Find the matrix corresponding to this transformation.    Let us denote the reflection in the line by . We need to compute and .  Let be the angle the line makes with the positive -axis. The point lies on the line and is at distance from the origin, so   Reflecting in that line rotates it through , so    Exercise. Show that , and hence that the matrix corresponding to is    "
},
{
  "id": "fig-reflection-y-mx",
  "level": "2",
  "url": "sec-special-transformations.html#fig-reflection-y-mx",
  "type": "Figure",
  "number": "3.51",
  "title": "",
  "body": " Reflection in the line . The line makes an angle with the -axis, so is carried to the vector at angle .            \\vec{e}_1  Q_m(\\vec{e}_1)  y=mx  \\theta  2\\theta      "
},
{
  "id": "eg-reflection-origin",
  "level": "2",
  "url": "sec-special-transformations.html#eg-reflection-origin",
  "type": "Example",
  "number": "3.52",
  "title": "Reflection through the Origin.",
  "body": " Reflection through the Origin  Reflection through the origin sends to , so This can also be thought of as , since   "
},
{
  "id": "eg-projection-x-axis",
  "level": "2",
  "url": "sec-special-transformations.html#eg-projection-x-axis",
  "type": "Example",
  "number": "3.53",
  "title": "Projection into the <span class=\"process-math\">\\(x\\)<\/span>-Axis.",
  "body": " Projection into the -Axis  Projection into the -axis sends to , flattening the whole plane onto the -axis. Since and ,   Note the contrast with : a reflection is one-to-one, while this projection is not, since every vector has the same image regardless of .  "
},
{
  "id": "fig-projection-x-interactive",
  "level": "2",
  "url": "sec-special-transformations.html#fig-projection-x-interactive",
  "type": "Figure",
  "number": "3.54",
  "title": "",
  "body": " Projection into the -axis, . The violet vertical line on the left is the set of all inputs with the same image as ; the teal line on the right is the range, just the -axis. Click and drag either vector.   "
},
{
  "id": "eg-vertical-shear",
  "level": "2",
  "url": "sec-special-transformations.html#eg-vertical-shear",
  "type": "Example",
  "number": "3.55",
  "title": "Vertical Shear.",
  "body": " Vertical Shear  A vertical shear fixes and tilts : so that A shear leaves the vertical direction alone and slides each point vertically by an amount proportional to its -coordinate, carrying a square to a parallelogram of the same area.  "
},
{
  "id": "fig-vertical-shear",
  "level": "2",
  "url": "sec-special-transformations.html#fig-vertical-shear",
  "type": "Figure",
  "number": "3.56",
  "title": "",
  "body": " A vertical shear with carries the unit square to a parallelogram.          T(\\vec{e}_1)      "
},
{
  "id": "fig-shear-interactive",
  "level": "2",
  "url": "sec-special-transformations.html#fig-shear-interactive",
  "type": "Figure",
  "number": "3.57",
  "title": "",
  "body": " A vertical shear with , so . Drag : vertical vectors are fixed, everything else slides vertically. The solution set (violet) is always a single point and the range (teal) is all of , so a shear is one-to-one and onto.   "
},
{
  "id": "sec-matrix-operations",
  "level": "1",
  "url": "sec-matrix-operations.html",
  "type": "Section",
  "number": "4.1",
  "title": "Matrix Operations",
  "body": " Matrix Operations   We begin by fixing notation for matrices and defining the two most basic operations on them: addition and multiplication by a scalar.    Matrices and Terminology   Matrix   Let and be positive integers.  An matrix is a rectangular array of numbers having rows and columns. Such a matrix is said to have size  .  The number is the -entry of a matrix, which is the entry in row and column :      Diagonal, Identity, and Zero Matrices   Let be an matrix.    The entries are the diagonal entries of , and together they form the main diagonal of .  A matrix is square if .  The identity matrix  is the square matrix whose diagonal entries are all and whose other entries are all .  The zero matrix  is the matrix all of whose entries are .       Reading Entries off a Matrix   Let Identify the size of , the entry , and the main diagonal of .     is a matrix. The entry sits in row and column , so .  The main diagonal consists of the entries , , and , running from the upper-left corner to the lower-right corner of .     Zero and Identity Matrices  The zero matrix and the identity matrix are      Matrix Addition   Matrix Addition   Let and be two matrices. Then , where is the matrix defined by     Notice that matrix addition is only defined when the two matrices have the same size , and that addition is performed entry by entry.   Adding Two Matrices   Let and . Compute .       For instance, the -entry is .     Properties of Matrix Addition   Let , , and be matrices. Then the following properties hold.     (matrix addition is commutative).    (matrix addition is associative).    There exists an zero matrix, , such that (existence of an additive identity).    There exists an matrix such that (existence of an additive inverse).       Proof of (2)  The -entry of is which is equal to the -entry of , i.e., The two matrices therefore agree entry by entry, so they are equal.     Each of these properties is inherited from the corresponding property of addition of real numbers, applied one entry at a time. The proof of (2) above is the model for the proofs of (1), (3), and (4).     Scalar Multiplication   Scalar Multiplication   Let be an matrix and let be a scalar. Then      Multiplying by a Scalar  If , then     Properties of Scalar Multiplication   Let , be matrices and let (scalars). Then the following properties hold.      (scalar multiplication distributes over matrix addition).     (addition distributes over scalar multiplication).     (scalar multiplication is associative).        Combining Scalar Multiples   Simplify     Every matrix appearing here is a scalar multiple of ; indeed, . So by (2),      "
},
{
  "id": "def-matrix",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix",
  "type": "Definition",
  "number": "4.1",
  "title": "Matrix.",
  "body": " Matrix   Let and be positive integers.  An matrix is a rectangular array of numbers having rows and columns. Such a matrix is said to have size  .  The number is the -entry of a matrix, which is the entry in row and column :    "
},
{
  "id": "def-matrix-vocabulary",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-vocabulary",
  "type": "Definition",
  "number": "4.2",
  "title": "Diagonal, Identity, and Zero Matrices.",
  "body": " Diagonal, Identity, and Zero Matrices   Let be an matrix.    The entries are the diagonal entries of , and together they form the main diagonal of .  A matrix is square if .  The identity matrix  is the square matrix whose diagonal entries are all and whose other entries are all .  The zero matrix  is the matrix all of whose entries are .     "
},
{
  "id": "eg-matrix-entries",
  "level": "2",
  "url": "sec-matrix-operations.html#eg-matrix-entries",
  "type": "Example",
  "number": "4.3",
  "title": "Reading Entries off a Matrix.",
  "body": " Reading Entries off a Matrix   Let Identify the size of , the entry , and the main diagonal of .     is a matrix. The entry sits in row and column , so .  The main diagonal consists of the entries , , and , running from the upper-left corner to the lower-right corner of .   "
},
{
  "id": "eg-zero-identity",
  "level": "2",
  "url": "sec-matrix-operations.html#eg-zero-identity",
  "type": "Example",
  "number": "4.4",
  "title": "Zero and Identity Matrices.",
  "body": " Zero and Identity Matrices  The zero matrix and the identity matrix are   "
},
{
  "id": "def-matrix-addition",
  "level": "2",
  "url": "sec-matrix-operations.html#def-matrix-addition",
  "type": "Definition",
  "number": "4.5",
  "title": "Matrix Addition.",
  "body": " Matrix Addition   Let and be two matrices. Then , where is the matrix defined by    "
},
{
  "id": "eg-matrix-addition",
  "level": "2",
  "url": "sec-matrix-operations.html#eg-matrix-addition",
  "type": "Example",
  "number": "4.6",
  "title": "Adding Two Matrices.",
  "body": " Adding Two Matrices   Let and . Compute .       For instance, the -entry is .   "
},
{
  "id": "thm-matrix-addition-properties",
  "level": "2",
  "url": "sec-matrix-operations.html#thm-matrix-addition-properties",
  "type": "Theorem",
  "number": "4.7",
  "title": "Properties of Matrix Addition.",
  "body": " Properties of Matrix Addition   Let , , and be matrices. Then the following properties hold.     (matrix addition is commutative).    (matrix addition is associative).    There exists an zero matrix, , such that (existence of an additive identity).    There exists an matrix such that (existence of an additive inverse).       Proof of (2)  The -entry of is which is equal to the -entry of , i.e., The two matrices therefore agree entry by entry, so they are equal.   "
},
{
  "id": "rem-addition-inherits",
  "level": "2",
  "url": "sec-matrix-operations.html#rem-addition-inherits",
  "type": "Remark",
  "number": "4.8",
  "title": "",
  "body": " Each of these properties is inherited from the corresponding property of addition of real numbers, applied one entry at a time. The proof of (2) above is the model for the proofs of (1), (3), and (4).  "
},
{
  "id": "def-scalar-multiplication",
  "level": "2",
  "url": "sec-matrix-operations.html#def-scalar-multiplication",
  "type": "Definition",
  "number": "4.9",
  "title": "Scalar Multiplication.",
  "body": " Scalar Multiplication   Let be an matrix and let be a scalar. Then    "
},
{
  "id": "eg-scalar-multiplication",
  "level": "2",
  "url": "sec-matrix-operations.html#eg-scalar-multiplication",
  "type": "Example",
  "number": "4.10",
  "title": "Multiplying by a Scalar.",
  "body": " Multiplying by a Scalar  If , then   "
},
{
  "id": "thm-scalar-multiplication-properties",
  "level": "2",
  "url": "sec-matrix-operations.html#thm-scalar-multiplication-properties",
  "type": "Theorem",
  "number": "4.11",
  "title": "Properties of Scalar Multiplication.",
  "body": " Properties of Scalar Multiplication   Let , be matrices and let (scalars). Then the following properties hold.      (scalar multiplication distributes over matrix addition).     (addition distributes over scalar multiplication).     (scalar multiplication is associative).      "
},
{
  "id": "eg-combining-scalars",
  "level": "2",
  "url": "sec-matrix-operations.html#eg-combining-scalars",
  "type": "Example",
  "number": "4.12",
  "title": "Combining Scalar Multiples.",
  "body": " Combining Scalar Multiples   Simplify     Every matrix appearing here is a scalar multiple of ; indeed, . So by (2),    "
},
{
  "id": "sec-matrix-multiplication",
  "level": "1",
  "url": "sec-matrix-multiplication.html",
  "type": "Section",
  "number": "4.2",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication   Unlike addition, the product of two matrices is not computed entry by entry. We define it one column at a time, and then extract a formula for a single entry of the product.    The Product of Two Matrices   Product of Two Matrices   Let be an matrix and let be an matrix, whose columns are . The product of and is      Question: What is the size of ?  Each column of is an vector, so each product is an vector. There are such columns, so is an matrix.  In particular, the product is defined only when the number of columns of equals the number of rows of : The two inner dimensions must match, and the outer dimensions give the size of the product.    Computing a Product Column by Column   Find the product of the matrices     Since is and is , the product is defined and has size . We compute for each of the three columns of :   Assembling these as the columns of the product gives       Computing the -Entry of a Product   The -Entry of a Product   Let be an matrix and be an matrix. Then the -entry of is given by     In words: the -entry of is obtained by pairing off row of against column of , multiplying corresponding terms, and adding the results.   Computing a Single Entry   Let Compute the entry without computing all of .    We pair row of against column of : This agrees with the -entry of the product computed in .      When Does a Product Exist?   A Product That Exists in Only One Order   Let   Does exist? If so, compute it.  Does exist? If so, compute it.       The product . The number of columns of is , which matches the number of rows of . So is defined and its size will be :    The product .  is not defined, since the number of columns in (namely ) is not the same as the number of rows in (namely ).     Matrix Multiplication Is Not Commutative   Let and .  Does exist? If so, compute it.  Does exist? If so, compute it.      Both matrices are , so both products are defined and both are :   Note that and are both defined; however, . Matrix multiplication is not commutative.      Properties of Matrix Multiplication   Properties of Matrix Multiplication   Let , , and be matrices of the appropriate sizes, and let be a scalar. Then the following properties hold.      (matrix multiplication distributes over matrix addition).     (matrix multiplication distributes over matrix addition).     (matrix multiplication is associative).    .        Commuting Matrices   Two matrices and are said to commute if .     A Sum of Commuting Matrices   Let and be matrices, and let be an matrix. Prove that if and commute with , then commutes with .    Suppose and . Then where properties (1) and (2) are those of . Hence and commute.     "
},
{
  "id": "def-matrix-product",
  "level": "2",
  "url": "sec-matrix-multiplication.html#def-matrix-product",
  "type": "Definition",
  "number": "4.13",
  "title": "Product of Two Matrices.",
  "body": " Product of Two Matrices   Let be an matrix and let be an matrix, whose columns are . The product of and is    "
},
{
  "id": "rem-product-size",
  "level": "2",
  "url": "sec-matrix-multiplication.html#rem-product-size",
  "type": "Remark",
  "number": "4.14",
  "title": "Question: What is the size of <span class=\"process-math\">\\(AB\\text{?}\\)<\/span>",
  "body": " Question: What is the size of ?  Each column of is an vector, so each product is an vector. There are such columns, so is an matrix.  In particular, the product is defined only when the number of columns of equals the number of rows of : The two inner dimensions must match, and the outer dimensions give the size of the product.  "
},
{
  "id": "eg-product-by-columns",
  "level": "2",
  "url": "sec-matrix-multiplication.html#eg-product-by-columns",
  "type": "Example",
  "number": "4.15",
  "title": "Computing a Product Column by Column.",
  "body": " Computing a Product Column by Column   Find the product of the matrices     Since is and is , the product is defined and has size . We compute for each of the three columns of :   Assembling these as the columns of the product gives    "
},
{
  "id": "thm-ij-entry-of-product",
  "level": "2",
  "url": "sec-matrix-multiplication.html#thm-ij-entry-of-product",
  "type": "Theorem",
  "number": "4.16",
  "title": "The <span class=\"process-math\">\\((i,j)\\)<\/span>-Entry of a Product.",
  "body": " The -Entry of a Product   Let be an matrix and be an matrix. Then the -entry of is given by    "
},
{
  "id": "eg-single-entry",
  "level": "2",
  "url": "sec-matrix-multiplication.html#eg-single-entry",
  "type": "Example",
  "number": "4.17",
  "title": "Computing a Single Entry.",
  "body": " Computing a Single Entry   Let Compute the entry without computing all of .    We pair row of against column of : This agrees with the -entry of the product computed in .   "
},
{
  "id": "eg-ab-exists-ba-does-not",
  "level": "2",
  "url": "sec-matrix-multiplication.html#eg-ab-exists-ba-does-not",
  "type": "Example",
  "number": "4.18",
  "title": "A Product That Exists in Only One Order.",
  "body": " A Product That Exists in Only One Order   Let   Does exist? If so, compute it.  Does exist? If so, compute it.       The product . The number of columns of is , which matches the number of rows of . So is defined and its size will be :    The product .  is not defined, since the number of columns in (namely ) is not the same as the number of rows in (namely ).   "
},
{
  "id": "eg-ab-not-ba",
  "level": "2",
  "url": "sec-matrix-multiplication.html#eg-ab-not-ba",
  "type": "Example",
  "number": "4.19",
  "title": "Matrix Multiplication Is Not Commutative.",
  "body": " Matrix Multiplication Is Not Commutative   Let and .  Does exist? If so, compute it.  Does exist? If so, compute it.      Both matrices are , so both products are defined and both are :   Note that and are both defined; however, . Matrix multiplication is not commutative.   "
},
{
  "id": "thm-matrix-product-properties",
  "level": "2",
  "url": "sec-matrix-multiplication.html#thm-matrix-product-properties",
  "type": "Theorem",
  "number": "4.20",
  "title": "Properties of Matrix Multiplication.",
  "body": " Properties of Matrix Multiplication   Let , , and be matrices of the appropriate sizes, and let be a scalar. Then the following properties hold.      (matrix multiplication distributes over matrix addition).     (matrix multiplication distributes over matrix addition).     (matrix multiplication is associative).    .      "
},
{
  "id": "def-commute",
  "level": "2",
  "url": "sec-matrix-multiplication.html#def-commute",
  "type": "Definition",
  "number": "4.21",
  "title": "Commuting Matrices.",
  "body": " Commuting Matrices   Two matrices and are said to commute if .   "
},
{
  "id": "eg-sum-commutes",
  "level": "2",
  "url": "sec-matrix-multiplication.html#eg-sum-commutes",
  "type": "Example",
  "number": "4.22",
  "title": "A Sum of Commuting Matrices.",
  "body": " A Sum of Commuting Matrices   Let and be matrices, and let be an matrix. Prove that if and commute with , then commutes with .    Suppose and . Then where properties (1) and (2) are those of . Hence and commute.   "
},
{
  "id": "sec-transpose",
  "level": "1",
  "url": "sec-transpose.html",
  "type": "Section",
  "number": "4.3",
  "title": "Matrix Transposition",
  "body": " Matrix Transposition   Transposing a matrix interchanges its rows and columns. This simple operation interacts with addition, scalar multiplication, and multiplication in ways that we will use repeatedly.    The Transpose   Transpose   If is an matrix, then its transpose , denoted , is the matrix whose th row is the th column of . That is, if , then i.e., the -entry of is the -entry of .     Transposing a Matrix  If , then     Properties of the Transpose of a Matrix   Let and be matrices, be an matrix, and a scalar. Then     .    .    .    .        Property (4) deserves attention: transposing a product reverses the order of the factors. Note also that the sizes work out — is and is , so is , which is exactly the size of .     Symmetric Matrices   Symmetric Matrix   A matrix is called symmetric if and only if .     A Symmetric Combination   Show that if and are symmetric, then is symmetric.    If and are symmetric, then and . Using ,   Since , we know that is symmetric by definition.     Question  Let and be symmetric matrices. Is symmetric?  Property (4) of gives so is symmetric exactly when  that is, exactly when and commute. Since matrix multiplication is not commutative in general, the product of two symmetric matrices need not be symmetric.     Solving Equations Involving the Transpose   Solving for an Unknown Matrix   Find the matrix if     Transpose both sides of the equation. By property (1) of , the left-hand side becomes the matrix itself: that is,   Now solve for :      "
},
{
  "id": "def-transpose",
  "level": "2",
  "url": "sec-transpose.html#def-transpose",
  "type": "Definition",
  "number": "4.23",
  "title": "Transpose.",
  "body": " Transpose   If is an matrix, then its transpose , denoted , is the matrix whose th row is the th column of . That is, if , then i.e., the -entry of is the -entry of .   "
},
{
  "id": "eg-transpose",
  "level": "2",
  "url": "sec-transpose.html#eg-transpose",
  "type": "Example",
  "number": "4.24",
  "title": "Transposing a Matrix.",
  "body": " Transposing a Matrix  If , then   "
},
{
  "id": "thm-transpose-properties",
  "level": "2",
  "url": "sec-transpose.html#thm-transpose-properties",
  "type": "Theorem",
  "number": "4.25",
  "title": "Properties of the Transpose of a Matrix.",
  "body": " Properties of the Transpose of a Matrix   Let and be matrices, be an matrix, and a scalar. Then     .    .    .    .      "
},
{
  "id": "rem-transpose-reverses-order",
  "level": "2",
  "url": "sec-transpose.html#rem-transpose-reverses-order",
  "type": "Remark",
  "number": "4.26",
  "title": "",
  "body": " Property (4) deserves attention: transposing a product reverses the order of the factors. Note also that the sizes work out — is and is , so is , which is exactly the size of .  "
},
{
  "id": "def-symmetric",
  "level": "2",
  "url": "sec-transpose.html#def-symmetric",
  "type": "Definition",
  "number": "4.27",
  "title": "Symmetric Matrix.",
  "body": " Symmetric Matrix   A matrix is called symmetric if and only if .   "
},
{
  "id": "eg-symmetric-combination",
  "level": "2",
  "url": "sec-transpose.html#eg-symmetric-combination",
  "type": "Example",
  "number": "4.28",
  "title": "A Symmetric Combination.",
  "body": " A Symmetric Combination   Show that if and are symmetric, then is symmetric.    If and are symmetric, then and . Using ,   Since , we know that is symmetric by definition.   "
},
{
  "id": "rem-is-ab-symmetric",
  "level": "2",
  "url": "sec-transpose.html#rem-is-ab-symmetric",
  "type": "Remark",
  "number": "4.29",
  "title": "Question.",
  "body": " Question  Let and be symmetric matrices. Is symmetric?  Property (4) of gives so is symmetric exactly when  that is, exactly when and commute. Since matrix multiplication is not commutative in general, the product of two symmetric matrices need not be symmetric.  "
},
{
  "id": "eg-solve-for-a",
  "level": "2",
  "url": "sec-transpose.html#eg-solve-for-a",
  "type": "Example",
  "number": "4.30",
  "title": "Solving for an Unknown Matrix.",
  "body": " Solving for an Unknown Matrix   Find the matrix if     Transpose both sides of the equation. By property (1) of , the left-hand side becomes the matrix itself: that is,   Now solve for :    "
},
{
  "id": "sec-inverse",
  "level": "1",
  "url": "sec-inverse.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Inverse of a Matrix",
  "body": " The Inverse of a Matrix   For a nonzero real number there is a reciprocal with . We now ask the analogous question for matrices: given a square matrix , is there a matrix that undoes it? Unlike the situation for real numbers, the answer can be no even when is not the zero matrix.    Definition and Uniqueness   Inverse of a Matrix   Let be an matrix. Then is an inverse of if and only if and .     Question: What does this imply about the size of ?  Let us assume is a matrix. Then for to be defined we have . Also, for to be defined we have , which means is an matrix.  So only square matrices can have inverses, and an inverse of an matrix is again .    Uniqueness of an Inverse   If is a square matrix and and are inverses of , then .    Since and are both inverses of , we have Therefore where the middle equality uses the associativity of matrix multiplication.     Invertible Matrix   Let be a square matrix.      The inverse of , if it exists, is denoted by , and     If has an inverse, then we say that is invertible .         is what entitles us to say the inverse rather than an inverse, and to give it the name .     The Inverse of a Matrix   The Inverse of a Matrix   Suppose and . Then     Sketch  Finding amounts to solving the two systems and at once, so we row reduce the augmented matrix   Replacing the first row by and the second by gives If , we may divide each row by to obtain with as claimed. If instead , the reduction produces a row of zeros on the left, the systems are inconsistent, and no inverse exists.     In HW5, students will prove that the inverse of a matrix is in the form above.    A Matrix with No Inverse   Show that , where , does not have an inverse.    If exists, write . Then which cannot be , since the two rows of the product are identical while the rows of are not.  This is consistent with : here .      The Matrix Inversion Algorithm   Questions  Suppose that is any matrix.  How do we know whether or not exists?  If exists, how do we find it?    For both questions, we use the matrix inversion algorithm.    The Matrix Inversion Algorithm   Let be an matrix. To find , if it exists:     Take the matrix obtained by augmenting with the identity matrix, .    Perform elementary row operations to transform into a reduced row-echelon matrix.     If the result has the form , then is invertible and . If the left half cannot be reduced to , then is not invertible.     The Algorithm on a Matrix   Let . Find .    Augment with and row reduce:   Therefore   Note that for a matrix we can instead use . Here , so in agreement with the algorithm.     Although the above formula for is much quicker for matrices, as we will see later, the general formula for matrices ( ) is less efficient and more complicated to use when compared to the matrix inversion algorithm.    Matrix Inverses   Let be an matrix. Then the following conditions are equivalent.    is invertible.  The reduced row-echelon form of is .    can be transformed into using the Matrix Inversion Algorithm.       Assume that can be transformed into using elementary row operations. This means the reduced row-echelon matrix of is .  Writing the columns of as and the columns of as , the reduction is   Then, for each , the reduction is possible, which means has the solution , or . Hence   Later we will show that if , then and hence . This will be shown when we study .     Seeing Column by Column   Let . Run the Matrix Inversion Algorithm and verify directly that for each column.       So , with columns and . Checking directly, and therefore In this example happens to be its own inverse.     The Algorithm on a Matrix   Let . Find the inverse of , if it exists.    Augment with and row reduce:   Therefore       The Inverse and the Matrix Equation  If is invertible, the matrix equation can be solved in one stroke by multiplying both sides on the left by :    Solving a System Using the Inverse   Consider the system of linear equations and use the concept of the inverse of a matrix to solve the system.    We can write the matrix equation as follows:   We computed in , so That is, and is a unique solution for this system.   How do we know is a unique solution? Let us assume that there exists more than one solution. For example, if is another solution, then we can repeat the above process to show that . Also, since , we get , which means and are the same.      Inverses of Transposes and Products   Inverses of Transposes and Products      If is an invertible matrix, then .    If and are invertible matrices, then is invertible and .    If are invertible, then is invertible and        Proof of (1)  If is an invertible matrix, then , which means Also, since ,   Both equations together say that is an inverse of , and so      The proofs of (2) and (3) are left to the reader. For (2), it suffices to verify that and ; part (3) then follows by induction on . Note that, as with the transpose of a product, taking inverses reverses the order of the factors.    "
},
{
  "id": "def-inverse",
  "level": "2",
  "url": "sec-inverse.html#def-inverse",
  "type": "Definition",
  "number": "4.31",
  "title": "Inverse of a Matrix.",
  "body": " Inverse of a Matrix   Let be an matrix. Then is an inverse of if and only if and .   "
},
{
  "id": "rem-inverse-size",
  "level": "2",
  "url": "sec-inverse.html#rem-inverse-size",
  "type": "Remark",
  "number": "4.32",
  "title": "Question: What does this imply about the size of <span class=\"process-math\">\\(B\\text{?}\\)<\/span>",
  "body": " Question: What does this imply about the size of ?  Let us assume is a matrix. Then for to be defined we have . Also, for to be defined we have , which means is an matrix.  So only square matrices can have inverses, and an inverse of an matrix is again .  "
},
{
  "id": "thm-inverse-unique",
  "level": "2",
  "url": "sec-inverse.html#thm-inverse-unique",
  "type": "Theorem",
  "number": "4.33",
  "title": "Uniqueness of an Inverse.",
  "body": " Uniqueness of an Inverse   If is a square matrix and and are inverses of , then .    Since and are both inverses of , we have Therefore where the middle equality uses the associativity of matrix multiplication.   "
},
{
  "id": "def-invertible",
  "level": "2",
  "url": "sec-inverse.html#def-invertible",
  "type": "Definition",
  "number": "4.34",
  "title": "Invertible Matrix.",
  "body": " Invertible Matrix   Let be a square matrix.      The inverse of , if it exists, is denoted by , and     If has an inverse, then we say that is invertible .      "
},
{
  "id": "rem-the-inverse",
  "level": "2",
  "url": "sec-inverse.html#rem-the-inverse",
  "type": "Remark",
  "number": "4.35",
  "title": "",
  "body": "  is what entitles us to say the inverse rather than an inverse, and to give it the name .  "
},
{
  "id": "thm-two-by-two-inverse",
  "level": "2",
  "url": "sec-inverse.html#thm-two-by-two-inverse",
  "type": "Theorem",
  "number": "4.36",
  "title": "The Inverse of a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> Matrix.",
  "body": " The Inverse of a Matrix   Suppose and . Then     Sketch  Finding amounts to solving the two systems and at once, so we row reduce the augmented matrix   Replacing the first row by and the second by gives If , we may divide each row by to obtain with as claimed. If instead , the reduction produces a row of zeros on the left, the systems are inconsistent, and no inverse exists.   "
},
{
  "id": "rem-hw5",
  "level": "2",
  "url": "sec-inverse.html#rem-hw5",
  "type": "Remark",
  "number": "4.37",
  "title": "",
  "body": " In HW5, students will prove that the inverse of a matrix is in the form above.  "
},
{
  "id": "eg-no-inverse",
  "level": "2",
  "url": "sec-inverse.html#eg-no-inverse",
  "type": "Example",
  "number": "4.38",
  "title": "A Matrix with No Inverse.",
  "body": " A Matrix with No Inverse   Show that , where , does not have an inverse.    If exists, write . Then which cannot be , since the two rows of the product are identical while the rows of are not.  This is consistent with : here .   "
},
{
  "id": "rem-inverse-questions",
  "level": "2",
  "url": "sec-inverse.html#rem-inverse-questions",
  "type": "Remark",
  "number": "4.39",
  "title": "Questions.",
  "body": " Questions  Suppose that is any matrix.  How do we know whether or not exists?  If exists, how do we find it?    For both questions, we use the matrix inversion algorithm.  "
},
{
  "id": "alg-matrix-inversion",
  "level": "2",
  "url": "sec-inverse.html#alg-matrix-inversion",
  "type": "Algorithm",
  "number": "4.40",
  "title": "The Matrix Inversion Algorithm.",
  "body": " The Matrix Inversion Algorithm   Let be an matrix. To find , if it exists:     Take the matrix obtained by augmenting with the identity matrix, .    Perform elementary row operations to transform into a reduced row-echelon matrix.     If the result has the form , then is invertible and . If the left half cannot be reduced to , then is not invertible.   "
},
{
  "id": "eg-inversion-algorithm-2x2",
  "level": "2",
  "url": "sec-inverse.html#eg-inversion-algorithm-2x2",
  "type": "Example",
  "number": "4.41",
  "title": "The Algorithm on a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> Matrix.",
  "body": " The Algorithm on a Matrix   Let . Find .    Augment with and row reduce:   Therefore   Note that for a matrix we can instead use . Here , so in agreement with the algorithm.   "
},
{
  "id": "rem-which-method",
  "level": "2",
  "url": "sec-inverse.html#rem-which-method",
  "type": "Remark",
  "number": "4.42",
  "title": "",
  "body": " Although the above formula for is much quicker for matrices, as we will see later, the general formula for matrices ( ) is less efficient and more complicated to use when compared to the matrix inversion algorithm.  "
},
{
  "id": "thm-matrix-inverses-equivalences",
  "level": "2",
  "url": "sec-inverse.html#thm-matrix-inverses-equivalences",
  "type": "Theorem",
  "number": "4.43",
  "title": "Matrix Inverses.",
  "body": " Matrix Inverses   Let be an matrix. Then the following conditions are equivalent.    is invertible.  The reduced row-echelon form of is .    can be transformed into using the Matrix Inversion Algorithm.       Assume that can be transformed into using elementary row operations. This means the reduced row-echelon matrix of is .  Writing the columns of as and the columns of as , the reduction is   Then, for each , the reduction is possible, which means has the solution , or . Hence   Later we will show that if , then and hence . This will be shown when we study .   "
},
{
  "id": "eg-ab-equals-i",
  "level": "2",
  "url": "sec-inverse.html#eg-ab-equals-i",
  "type": "Example",
  "number": "4.44",
  "title": "Seeing <span class=\"process-math\">\\(AB = I\\)<\/span> Column by Column.",
  "body": " Seeing Column by Column   Let . Run the Matrix Inversion Algorithm and verify directly that for each column.       So , with columns and . Checking directly, and therefore In this example happens to be its own inverse.   "
},
{
  "id": "eg-inversion-algorithm-3x3",
  "level": "2",
  "url": "sec-inverse.html#eg-inversion-algorithm-3x3",
  "type": "Example",
  "number": "4.45",
  "title": "The Algorithm on a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " The Algorithm on a Matrix   Let . Find the inverse of , if it exists.    Augment with and row reduce:   Therefore    "
},
{
  "id": "eg-solve-with-inverse",
  "level": "2",
  "url": "sec-inverse.html#eg-solve-with-inverse",
  "type": "Example",
  "number": "4.46",
  "title": "Solving a System Using the Inverse.",
  "body": " Solving a System Using the Inverse   Consider the system of linear equations and use the concept of the inverse of a matrix to solve the system.    We can write the matrix equation as follows:   We computed in , so That is, and is a unique solution for this system.   How do we know is a unique solution? Let us assume that there exists more than one solution. For example, if is another solution, then we can repeat the above process to show that . Also, since , we get , which means and are the same.   "
},
{
  "id": "thm-inverses-transposes-products",
  "level": "2",
  "url": "sec-inverse.html#thm-inverses-transposes-products",
  "type": "Theorem",
  "number": "4.47",
  "title": "Inverses of Transposes and Products.",
  "body": " Inverses of Transposes and Products      If is an invertible matrix, then .    If and are invertible matrices, then is invertible and .    If are invertible, then is invertible and        Proof of (1)  If is an invertible matrix, then , which means Also, since ,   Both equations together say that is an inverse of , and so    "
},
{
  "id": "rem-prove-2-and-3",
  "level": "2",
  "url": "sec-inverse.html#rem-prove-2-and-3",
  "type": "Remark",
  "number": "4.48",
  "title": "",
  "body": " The proofs of (2) and (3) are left to the reader. For (2), it suffices to verify that and ; part (3) then follows by induction on . Note that, as with the transpose of a product, taking inverses reverses the order of the factors.  "
},
{
  "id": "sec-elementary-matrices",
  "level": "1",
  "url": "sec-elementary-matrices.html",
  "type": "Section",
  "number": "4.5",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices   Row reduction has so far been a procedure we carry out on a matrix. In this section we see that each elementary row operation can itself be encoded as a matrix, so that performing the operation becomes multiplication by that matrix. This turns the matrix inversion algorithm into a factorization.    Elementary Matrices and Row Operations   Elementary Matrix   An elementary matrix is a matrix obtained from an identity matrix by performing a single elementary row operation.     Reminder: Elementary Row Operations    Interchange two rows.  Multiply a row by a nonzero number.  Add a (nonzero) multiple of one row to a different row.      Three Elementary Matrices  Each of the following is obtained from by a single elementary row operation:   Specifically,     The Effect of Left Multiplication   Let us examine the effect of left multiplication of by the elementary matrices , , and of .     which is with rows and interchanged.   which is with row multiplied by .   which is with times row added to row .     Left multiplication of a matrix by an elementary matrix induces the same row operation that was used to obtain that elementary matrix from the identity matrix.     Inverses of Elementary Matrices   Inverting an Elementary Matrix by Inspection   Without using the matrix inversion algorithm, find the inverse of the elementary matrix    Hint. What row operation can be applied to to transform it to ?     was obtained from by the row operation . The row operation that undoes it is , so applying that inverse row operation to gives :      For finding the inverse of an elementary matrix , we can apply to the inverse of the row operation applied to to obtain . This will be more efficient than the matrix inversion algorithm.  In particular, every elementary matrix is invertible, and its inverse is again an elementary matrix.     A Matrix as a Product of Elementary Matrices   Factoring a Matrix into Elementary Matrices   Express as a product of elementary matrices and, if possible, find .    We need to keep track of the elementary row operations performed in the matrix inversion algorithm. Each step below records the elementary matrix obtained by applying that step's row operation to .     The corresponding elementary matrices are    By , applying these five row operations in order is the same as multiplying on the left by , then , and so on. Since the reduction carried to , Multiplying both sides on the right by gives so agreeing with the right half of the reduced augmented matrix above.  Finally, taking inverses of both sides and using (3), that is, where each factor was obtained from the corresponding by .     "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "sec-elementary-matrices.html#def-elementary-matrix",
  "type": "Definition",
  "number": "4.49",
  "title": "Elementary Matrix.",
  "body": " Elementary Matrix   An elementary matrix is a matrix obtained from an identity matrix by performing a single elementary row operation.   "
},
{
  "id": "rem-eros",
  "level": "2",
  "url": "sec-elementary-matrices.html#rem-eros",
  "type": "Remark",
  "number": "4.50",
  "title": "Reminder: Elementary Row Operations.",
  "body": " Reminder: Elementary Row Operations    Interchange two rows.  Multiply a row by a nonzero number.  Add a (nonzero) multiple of one row to a different row.    "
},
{
  "id": "eg-elementary-matrices",
  "level": "2",
  "url": "sec-elementary-matrices.html#eg-elementary-matrices",
  "type": "Example",
  "number": "4.51",
  "title": "Three Elementary Matrices.",
  "body": " Three Elementary Matrices  Each of the following is obtained from by a single elementary row operation:   Specifically,   "
},
{
  "id": "eg-left-multiplication",
  "level": "2",
  "url": "sec-elementary-matrices.html#eg-left-multiplication",
  "type": "Example",
  "number": "4.52",
  "title": "The Effect of Left Multiplication.",
  "body": " The Effect of Left Multiplication   Let us examine the effect of left multiplication of by the elementary matrices , , and of .     which is with rows and interchanged.   which is with row multiplied by .   which is with times row added to row .   "
},
{
  "id": "obs-left-multiplication",
  "level": "2",
  "url": "sec-elementary-matrices.html#obs-left-multiplication",
  "type": "Observation",
  "number": "4.53",
  "title": "",
  "body": " Left multiplication of a matrix by an elementary matrix induces the same row operation that was used to obtain that elementary matrix from the identity matrix.  "
},
{
  "id": "eg-inverse-of-elementary",
  "level": "2",
  "url": "sec-elementary-matrices.html#eg-inverse-of-elementary",
  "type": "Example",
  "number": "4.54",
  "title": "Inverting an Elementary Matrix by Inspection.",
  "body": " Inverting an Elementary Matrix by Inspection   Without using the matrix inversion algorithm, find the inverse of the elementary matrix    Hint. What row operation can be applied to to transform it to ?     was obtained from by the row operation . The row operation that undoes it is , so applying that inverse row operation to gives :    "
},
{
  "id": "obs-inverse-elementary",
  "level": "2",
  "url": "sec-elementary-matrices.html#obs-inverse-elementary",
  "type": "Observation",
  "number": "4.55",
  "title": "",
  "body": " For finding the inverse of an elementary matrix , we can apply to the inverse of the row operation applied to to obtain . This will be more efficient than the matrix inversion algorithm.  In particular, every elementary matrix is invertible, and its inverse is again an elementary matrix.  "
},
{
  "id": "eg-product-of-elementary",
  "level": "2",
  "url": "sec-elementary-matrices.html#eg-product-of-elementary",
  "type": "Example",
  "number": "4.56",
  "title": "Factoring a Matrix into Elementary Matrices.",
  "body": " Factoring a Matrix into Elementary Matrices   Express as a product of elementary matrices and, if possible, find .    We need to keep track of the elementary row operations performed in the matrix inversion algorithm. Each step below records the elementary matrix obtained by applying that step's row operation to .     The corresponding elementary matrices are    By , applying these five row operations in order is the same as multiplying on the left by , then , and so on. Since the reduction carried to , Multiplying both sides on the right by gives so agreeing with the right half of the reduced augmented matrix above.  Finally, taking inverses of both sides and using (3), that is, where each factor was obtained from the corresponding by .   "
},
{
  "id": "sec-invertible-matrix-theorem",
  "level": "1",
  "url": "sec-invertible-matrix-theorem.html",
  "type": "Section",
  "number": "4.6",
  "title": "The Invertible Matrix Theorem",
  "body": " The Invertible Matrix Theorem   We already discussed , and in what follows we will be building on it. The result below gathers together, in a single list, every characterization of invertibility we have met so far: in terms of row reduction, pivots, linear independence, spanning, solvability of , one-sided inverses, and the transpose.  Throughout this section, denotes the linear transformation associated with the matrix .    Statement of the Theorem   The Invertible Matrix Theorem   Let be an matrix, and let , be vectors. The following conditions are equivalent.    is invertible.    has only the trivial solution, . (Equivalently, is one-to-one.)     can be transformed to by elementary row operations.   has pivot positions.  The columns of are linearly independent.   The columns of span . (Equivalently, is onto.)    The system has a unique solution for any choice of .    There exists an matrix with the property that .    There exists an matrix with the property that .   is invertible.       Conditions (8) and (9) are worth pausing over. They say that for square matrices, a one-sided inverse is automatically a two-sided inverse. This is what completes the argument left unfinished in the proof of .     Proof of the Equivalences   (1) (2). We already discussed that if (1) holds, then the reduced row-echelon matrix of will be , which means implies , which is (2). Conversely, if (2) holds, then the system has no free variables, so after row reduction there is a leading one in every row. Since the matrix is , its reduced row-echelon matrix is therefore , and hence is invertible.   (1) (3). We already discussed this equivalence.   (1) (4). We have also already discussed this equivalence. Note that the reduced row-echelon matrix being is the same as having pivot positions.   (2) (5). We proved a few sessions ago that the columns of are linearly independent if and only if implies .   (3) (6). If can be transformed to , then is a consistent system of linear equations for all , and hence the columns of span ; i.e., for all in we can find a linear combination Conversely, if the columns of span , then is a consistent system for all , and the last row of the row-echelon matrix cannot be all zeros. This means there are leading ones, and hence the reduced row-echelon matrix is .   (3) (7). If can be reduced to , then we know that the solution to exists uniquely for all . Conversely, if has a unique solution for any , then the reduced row-echelon matrix cannot have a row of zeros, which means is the reduced row-echelon matrix.   (1) (8). If is invertible, by definition we have , so we may take .  Now let us assume there exists an matrix with the property that . We can show that is onto and hence invertible: for any , we can write or . This means that for any there exists such that , and hence is onto and therefore is invertible, by the equivalence of (1) and (6).   (1) (9). If is invertible, by definition we have , so we may take .  Now assume . We can show that is one-to-one and hence is invertible. If , then and so , which gives since . Hence is injective and is invertible.   (1) (10). If is invertible, then so is invertible and .  Conversely, if is invertible, then transposing each of and gives so and is invertible.    Using the Theorem   The theorem, geometrically, for the invertible matrix . Drag anywhere: the system always has a solution (the columns span , teal), and the solution set (violet) is always a single point (the columns are independent). Every statement of the theorem is a different way of saying what you see here.     Detecting Non-Invertibility from the Columns   Is the following matrix invertible?     Label the columns . Since we know that the columns are not linearly independent, and hence the matrix is not invertible by condition (5) of .     True or False?      Invertible transformations map the zero vector to itself.    Non-invertible matrices cannot be written as a product of elementary matrices.        (a) True. Condition (2) of says that for invertible matrices we have implies . This means .   (b) True. If we assume that a non-invertible matrix can be written as a product of elementary matrices, , we can easily see that the product is invertible since each elementary matrix is invertible: which means we reach a contradiction. Hence non-invertible matrices cannot be written as a product of elementary matrices.     An Inverse from a Polynomial Identity   Suppose is a square matrix which satisfies the following: Find , if possible.    Divide the identity by and isolate :   Factoring out on the left gives so by condition (8) of , is invertible and      "
},
{
  "id": "thm-invertible-matrix-theorem",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#thm-invertible-matrix-theorem",
  "type": "Theorem",
  "number": "4.57",
  "title": "The Invertible Matrix Theorem.",
  "body": " The Invertible Matrix Theorem   Let be an matrix, and let , be vectors. The following conditions are equivalent.    is invertible.    has only the trivial solution, . (Equivalently, is one-to-one.)     can be transformed to by elementary row operations.   has pivot positions.  The columns of are linearly independent.   The columns of span . (Equivalently, is onto.)    The system has a unique solution for any choice of .    There exists an matrix with the property that .    There exists an matrix with the property that .   is invertible.     "
},
{
  "id": "rem-imt-one-sided",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#rem-imt-one-sided",
  "type": "Remark",
  "number": "4.58",
  "title": "",
  "body": " Conditions (8) and (9) are worth pausing over. They say that for square matrices, a one-sided inverse is automatically a two-sided inverse. This is what completes the argument left unfinished in the proof of .  "
},
{
  "id": "subsec-imt-proof-2",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (2). "
},
{
  "id": "subsec-imt-proof-3",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (3). "
},
{
  "id": "subsec-imt-proof-4",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (4). "
},
{
  "id": "subsec-imt-proof-5",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(2) (5). "
},
{
  "id": "subsec-imt-proof-6",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(3) (6). "
},
{
  "id": "subsec-imt-proof-7",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(3) (7). "
},
{
  "id": "subsec-imt-proof-8",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (8). "
},
{
  "id": "subsec-imt-proof-10",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (9). "
},
{
  "id": "subsec-imt-proof-12",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#subsec-imt-proof-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "(1) (10). "
},
{
  "id": "fig-imt-interactive",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#fig-imt-interactive",
  "type": "Figure",
  "number": "4.59",
  "title": "",
  "body": " The theorem, geometrically, for the invertible matrix . Drag anywhere: the system always has a solution (the columns span , teal), and the solution set (violet) is always a single point (the columns are independent). Every statement of the theorem is a different way of saying what you see here.   "
},
{
  "id": "eg-not-invertible-by-columns",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#eg-not-invertible-by-columns",
  "type": "Example",
  "number": "4.60",
  "title": "Detecting Non-Invertibility from the Columns.",
  "body": " Detecting Non-Invertibility from the Columns   Is the following matrix invertible?     Label the columns . Since we know that the columns are not linearly independent, and hence the matrix is not invertible by condition (5) of .   "
},
{
  "id": "eg-true-false",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#eg-true-false",
  "type": "Example",
  "number": "4.61",
  "title": "True or False?",
  "body": " True or False?      Invertible transformations map the zero vector to itself.    Non-invertible matrices cannot be written as a product of elementary matrices.        (a) True. Condition (2) of says that for invertible matrices we have implies . This means .   (b) True. If we assume that a non-invertible matrix can be written as a product of elementary matrices, , we can easily see that the product is invertible since each elementary matrix is invertible: which means we reach a contradiction. Hence non-invertible matrices cannot be written as a product of elementary matrices.   "
},
{
  "id": "eg-inverse-from-polynomial",
  "level": "2",
  "url": "sec-invertible-matrix-theorem.html#eg-inverse-from-polynomial",
  "type": "Example",
  "number": "4.62",
  "title": "An Inverse from a Polynomial Identity.",
  "body": " An Inverse from a Polynomial Identity   Suppose is a square matrix which satisfies the following: Find , if possible.    Divide the identity by and isolate :   Factoring out on the left gives so by condition (8) of , is invertible and    "
},
{
  "id": "sec-subspaces",
  "level": "1",
  "url": "sec-subspaces.html",
  "type": "Section",
  "number": "5.1",
  "title": "Subspaces",
  "body": " Subspaces   Some subsets of are closed under the two operations we care about: adding two of their vectors, or scaling one, never takes you outside the subset. These are the subspaces, and they turn out to be exactly the spans.    Definition and Examples   Subspace   Let be a nonempty collection of vectors in . Then is a subspace if whenever and are scalars and and are vectors in , is also in .     Which of These Is a Subspace?   Among the collection of vectors described below, which one is a subspace of ?    A plane through the origin in .  A line not containing the origin in .       (A) Yes, this is a subspace.   This subset of contains the zero vector.   If two vectors are on this plane, so is any linear combination of them.      (B) No, this is not a subspace. Note that, for example, is in the subset of vectors drawn along the line, however is not. Hence this subset of vectors in is NOT a subspace of .     A plane through the origin in is closed under linear combinations: if and lie in , so does .       A line in that misses the origin is not a subspace: lies on the line but does not.          \\vec{u}  -\\vec{u}        True or False?   Any subspace of contains the zero vector.    This is true. Note that since a subspace is nonempty, it has at least one element . But then is in since is closed under scalar multiplication.     A Set That Misses the Origin   Is the set a subspace of ?    No. Clearly , since is an inconsistent system: it would need and at once.     A Line through the Origin Is a Subspace   Is the set a subspace of ?    Yes.   (I) Choose to see that .   (II) For any and in , is also in . If and , then      Examples of Subspaces of   (I)  . Note that this is a line that passes through the origin and can be thought of as .   (II)  . Note that this is a plane that passes through the origin and can be thought of as .   (III)  since      Subspaces Are Spans   Subspaces Are Spans and Spans Are Subspaces   Let be a nonempty collection of vectors in . Then is a subspace of if and only if there exist vectors in such that     We only show that if is a subspace, then .  Pick a vector . If , then we are done. If , then there exists another vector which is not in . Now consider . If , then we are done. Otherwise, pick .  If we continue this way, the process must stop with , where , and thus . The process must terminate because, as we discussed in , in , if then the set is linearly dependent.     Subspaces Are Spans of Linearly Independent Vectors   If is a subspace of , then there exist linearly independent vectors of such that     Since the vectors we picked in the proof above are not in the span of the previous vectors, they must be linearly independent.     Recognizing a Subspace from a Parametrization   Is the set a subspace of ?    Yes, since which means .  Hence, from , we can conclude that is a subspace of . The set is a linearly independent spanning set for .  Note that can also be written as where this spanning set is not linearly independent, since .     "
},
{
  "id": "def-subspace",
  "level": "2",
  "url": "sec-subspaces.html#def-subspace",
  "type": "Definition",
  "number": "5.1",
  "title": "Subspace.",
  "body": " Subspace   Let be a nonempty collection of vectors in . Then is a subspace if whenever and are scalars and and are vectors in , is also in .   "
},
{
  "id": "eg-subspace-or-not",
  "level": "2",
  "url": "sec-subspaces.html#eg-subspace-or-not",
  "type": "Example",
  "number": "5.2",
  "title": "Which of These Is a Subspace?",
  "body": " Which of These Is a Subspace?   Among the collection of vectors described below, which one is a subspace of ?    A plane through the origin in .  A line not containing the origin in .       (A) Yes, this is a subspace.   This subset of contains the zero vector.   If two vectors are on this plane, so is any linear combination of them.      (B) No, this is not a subspace. Note that, for example, is in the subset of vectors drawn along the line, however is not. Hence this subset of vectors in is NOT a subspace of .   "
},
{
  "id": "fig-plane-subspace",
  "level": "2",
  "url": "sec-subspaces.html#fig-plane-subspace",
  "type": "Figure",
  "number": "5.3",
  "title": "",
  "body": " A plane through the origin in is closed under linear combinations: if and lie in , so does .     "
},
{
  "id": "fig-line-not-subspace",
  "level": "2",
  "url": "sec-subspaces.html#fig-line-not-subspace",
  "type": "Figure",
  "number": "5.4",
  "title": "",
  "body": " A line in that misses the origin is not a subspace: lies on the line but does not.          \\vec{u}  -\\vec{u}      "
},
{
  "id": "eg-subspace-contains-zero",
  "level": "2",
  "url": "sec-subspaces.html#eg-subspace-contains-zero",
  "type": "Example",
  "number": "5.5",
  "title": "True or False?",
  "body": " True or False?   Any subspace of contains the zero vector.    This is true. Note that since a subspace is nonempty, it has at least one element . But then is in since is closed under scalar multiplication.   "
},
{
  "id": "eg-not-subspace-affine",
  "level": "2",
  "url": "sec-subspaces.html#eg-not-subspace-affine",
  "type": "Example",
  "number": "5.6",
  "title": "A Set That Misses the Origin.",
  "body": " A Set That Misses the Origin   Is the set a subspace of ?    No. Clearly , since is an inconsistent system: it would need and at once.   "
},
{
  "id": "eg-subspace-line",
  "level": "2",
  "url": "sec-subspaces.html#eg-subspace-line",
  "type": "Example",
  "number": "5.7",
  "title": "A Line through the Origin Is a Subspace.",
  "body": " A Line through the Origin Is a Subspace   Is the set a subspace of ?    Yes.   (I) Choose to see that .   (II) For any and in , is also in . If and , then    "
},
{
  "id": "eg-subspaces-of-r3",
  "level": "2",
  "url": "sec-subspaces.html#eg-subspaces-of-r3",
  "type": "Example",
  "number": "5.8",
  "title": "Examples of Subspaces of <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Examples of Subspaces of   (I)  . Note that this is a line that passes through the origin and can be thought of as .   (II)  . Note that this is a plane that passes through the origin and can be thought of as .   (III)  since   "
},
{
  "id": "thm-subspaces-are-spans",
  "level": "2",
  "url": "sec-subspaces.html#thm-subspaces-are-spans",
  "type": "Theorem",
  "number": "5.9",
  "title": "Subspaces Are Spans and Spans Are Subspaces.",
  "body": " Subspaces Are Spans and Spans Are Subspaces   Let be a nonempty collection of vectors in . Then is a subspace of if and only if there exist vectors in such that     We only show that if is a subspace, then .  Pick a vector . If , then we are done. If , then there exists another vector which is not in . Now consider . If , then we are done. Otherwise, pick .  If we continue this way, the process must stop with , where , and thus . The process must terminate because, as we discussed in , in , if then the set is linearly dependent.   "
},
{
  "id": "cor-subspaces-independent-spans",
  "level": "2",
  "url": "sec-subspaces.html#cor-subspaces-independent-spans",
  "type": "Corollary",
  "number": "5.10",
  "title": "Subspaces Are Spans of Linearly Independent Vectors.",
  "body": " Subspaces Are Spans of Linearly Independent Vectors   If is a subspace of , then there exist linearly independent vectors of such that     Since the vectors we picked in the proof above are not in the span of the previous vectors, they must be linearly independent.   "
},
{
  "id": "eg-subspace-of-r3-parametrized",
  "level": "2",
  "url": "sec-subspaces.html#eg-subspace-of-r3-parametrized",
  "type": "Example",
  "number": "5.11",
  "title": "Recognizing a Subspace from a Parametrization.",
  "body": " Recognizing a Subspace from a Parametrization   Is the set a subspace of ?    Yes, since which means .  Hence, from , we can conclude that is a subspace of . The set is a linearly independent spanning set for .  Note that can also be written as where this spanning set is not linearly independent, since .   "
},
{
  "id": "sec-basis-dimension",
  "level": "1",
  "url": "sec-basis-dimension.html",
  "type": "Section",
  "number": "5.2",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension   Basis of a Subspace   Basis   Let be a subspace of . Then is called a basis for if the following conditions hold:    ;  is linearly independent.       Two Different Bases for the Same Subspace   Consider the -plane, i.e., .    The most obvious basis is , since and   But it is not the only one. Take . Then and   A subspace has many bases but, as we are about to see, they all have the same size.     Two different bases for the -plane in : on the left and on the right.        All Bases Have the Same Size   Spanning Sets Are at Least as Large as Independent Sets   Suppose is a linearly independent set of vectors in , and each is contained in . Then .  In words, spanning sets have at least as many vectors as linearly independent sets.    Since each is in , there exist scalars such that   Suppose for a contradiction that . Then the matrix has fewer rows, , than columns, . Then the system has a nontrivial solution ; that is, there is a such that . In other words,   Therefore which contradicts the assumption that is linearly independent, because not all the are zero. Thus this contradiction indicates that .     Any Two Bases Have the Same Size   Let be a subspace of and suppose and are two bases for . Then .    Note that any spanning set has at least as many vectors as a basis, by . Also, any basis is itself a spanning set. Hence:      is a basis and is a spanning set, therefore .     is a basis and is a spanning set, therefore .     Together these give .      Dimension   Dimension   Let be a subspace of . Then the dimension of is the number of vectors in a basis of .     This definition makes sense only because of : different bases could otherwise give different answers.    Computing Dimensions   What is the dimension of the following subspaces of ?        is a line through the origin with the direction vector and , hence   For , write . Then , which is a plane through the origin, and Note that any two vectors on the plane that are linearly independent can be used here. Hence      "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-basis-dimension.html#def-basis",
  "type": "Definition",
  "number": "5.12",
  "title": "Basis.",
  "body": " Basis   Let be a subspace of . Then is called a basis for if the following conditions hold:    ;  is linearly independent.     "
},
{
  "id": "eg-two-bases",
  "level": "2",
  "url": "sec-basis-dimension.html#eg-two-bases",
  "type": "Example",
  "number": "5.13",
  "title": "Two Different Bases for the Same Subspace.",
  "body": " Two Different Bases for the Same Subspace   Consider the -plane, i.e., .    The most obvious basis is , since and   But it is not the only one. Take . Then and   A subspace has many bases but, as we are about to see, they all have the same size.   "
},
{
  "id": "fig-two-bases",
  "level": "2",
  "url": "sec-basis-dimension.html#fig-two-bases",
  "type": "Figure",
  "number": "5.14",
  "title": "",
  "body": " Two different bases for the -plane in : on the left and on the right.     "
},
{
  "id": "thm-spanning-vs-independent",
  "level": "2",
  "url": "sec-basis-dimension.html#thm-spanning-vs-independent",
  "type": "Theorem",
  "number": "5.15",
  "title": "Spanning Sets Are at Least as Large as Independent Sets.",
  "body": " Spanning Sets Are at Least as Large as Independent Sets   Suppose is a linearly independent set of vectors in , and each is contained in . Then .  In words, spanning sets have at least as many vectors as linearly independent sets.    Since each is in , there exist scalars such that   Suppose for a contradiction that . Then the matrix has fewer rows, , than columns, . Then the system has a nontrivial solution ; that is, there is a such that . In other words,   Therefore which contradicts the assumption that is linearly independent, because not all the are zero. Thus this contradiction indicates that .   "
},
{
  "id": "thm-bases-same-size",
  "level": "2",
  "url": "sec-basis-dimension.html#thm-bases-same-size",
  "type": "Theorem",
  "number": "5.16",
  "title": "Any Two Bases Have the Same Size.",
  "body": " Any Two Bases Have the Same Size   Let be a subspace of and suppose and are two bases for . Then .    Note that any spanning set has at least as many vectors as a basis, by . Also, any basis is itself a spanning set. Hence:      is a basis and is a spanning set, therefore .     is a basis and is a spanning set, therefore .     Together these give .   "
},
{
  "id": "def-dimension",
  "level": "2",
  "url": "sec-basis-dimension.html#def-dimension",
  "type": "Definition",
  "number": "5.17",
  "title": "Dimension.",
  "body": " Dimension   Let be a subspace of . Then the dimension of is the number of vectors in a basis of .   "
},
{
  "id": "rem-dimension-well-defined",
  "level": "2",
  "url": "sec-basis-dimension.html#rem-dimension-well-defined",
  "type": "Remark",
  "number": "5.18",
  "title": "",
  "body": " This definition makes sense only because of : different bases could otherwise give different answers.  "
},
{
  "id": "eg-dimension",
  "level": "2",
  "url": "sec-basis-dimension.html#eg-dimension",
  "type": "Example",
  "number": "5.19",
  "title": "Computing Dimensions.",
  "body": " Computing Dimensions   What is the dimension of the following subspaces of ?        is a line through the origin with the direction vector and , hence   For , write . Then , which is a plane through the origin, and Note that any two vectors on the plane that are linearly independent can be used here. Hence    "
},
{
  "id": "sec-column-null-space",
  "level": "1",
  "url": "sec-column-null-space.html",
  "type": "Section",
  "number": "5.3",
  "title": "Column Space, Null Space, and Rank",
  "body": " Column Space, Null Space, and Rank   Every matrix carries two subspaces with it: the span of its columns, and the set of vectors it sends to zero. Their dimensions are linked by a single identity, and together they let us restate the Invertible Matrix Theorem in geometric language.    Column Space and Rank   Column Space and Rank   Let be an matrix.     The column space of is the span of the columns of and is denoted by .    The rank of is the dimension of the column space of and is denoted by .        Finding the Rank and Column Space   Find the rank of the matrix and describe the column space efficiently:     Let us find the reduced row-echelon form of :   The pivots sit in columns and . Note that   Why does this work? Writing for the columns of the reduced row-echelon matrix, note that is a linearly independent set and . Also only has the trivial solution. Row operations do not change which linear relations hold among the columns, so similar statements hold for the columns of : and only has the trivial solution.     The rank of is equal to the number of pivots in . A basis for is given by the columns of the original matrix in the pivot positions.     Null Space   Null Space   Let be an matrix. The null space of , or kernel of , is defined as      Finding a Null Space   Find for .    We solve :   With free, the rows give and , so which is a line through the origin.  Also, since the spanning set of consists of a single vector, we have .   Both subspaces of this matrix at once, for with . The violet line on the left is : drag along it and the output never leaves . The teal plane on the right is : drag and only outputs on that plane are reachable. A line plus a plane makes dimensions the rank nullity relation of the next subsection. (Drag inside a pane to rotate it.)        The Rank Nullity Relation   Rank and Nullity   Let be an matrix. Then      Checking the Rank Nullity Relation   Consider from .    After row reduction, we saw that which has two leading s, hence .  Also, we saw that . Furthermore is , which means . Then       The Invertible Matrix Theorem (Continued)   The Invertible Matrix Theorem, Continued   Let be an matrix. The following conditions are equivalent.    is an invertible matrix.  .  .  .      In we discussed the following equivalences, which we can now express in terms of rank, null space, and column space of :      is an invertible matrix the columns of are linearly independent  .     is an invertible matrix the columns of span   .     is an invertible matrix  has only the trivial solution  .        "
},
{
  "id": "def-column-space",
  "level": "2",
  "url": "sec-column-null-space.html#def-column-space",
  "type": "Definition",
  "number": "5.20",
  "title": "Column Space and Rank.",
  "body": " Column Space and Rank   Let be an matrix.     The column space of is the span of the columns of and is denoted by .    The rank of is the dimension of the column space of and is denoted by .      "
},
{
  "id": "eg-rank-column-space",
  "level": "2",
  "url": "sec-column-null-space.html#eg-rank-column-space",
  "type": "Example",
  "number": "5.21",
  "title": "Finding the Rank and Column Space.",
  "body": " Finding the Rank and Column Space   Find the rank of the matrix and describe the column space efficiently:     Let us find the reduced row-echelon form of :   The pivots sit in columns and . Note that   Why does this work? Writing for the columns of the reduced row-echelon matrix, note that is a linearly independent set and . Also only has the trivial solution. Row operations do not change which linear relations hold among the columns, so similar statements hold for the columns of : and only has the trivial solution.   "
},
{
  "id": "obs-rank-is-pivots",
  "level": "2",
  "url": "sec-column-null-space.html#obs-rank-is-pivots",
  "type": "Observation",
  "number": "5.22",
  "title": "",
  "body": " The rank of is equal to the number of pivots in . A basis for is given by the columns of the original matrix in the pivot positions.  "
},
{
  "id": "def-null-space",
  "level": "2",
  "url": "sec-column-null-space.html#def-null-space",
  "type": "Definition",
  "number": "5.23",
  "title": "Null Space.",
  "body": " Null Space   Let be an matrix. The null space of , or kernel of , is defined as    "
},
{
  "id": "eg-null-space",
  "level": "2",
  "url": "sec-column-null-space.html#eg-null-space",
  "type": "Example",
  "number": "5.24",
  "title": "Finding a Null Space.",
  "body": " Finding a Null Space   Find for .    We solve :   With free, the rows give and , so which is a line through the origin.  Also, since the spanning set of consists of a single vector, we have .   Both subspaces of this matrix at once, for with . The violet line on the left is : drag along it and the output never leaves . The teal plane on the right is : drag and only outputs on that plane are reachable. A line plus a plane makes dimensions the rank nullity relation of the next subsection. (Drag inside a pane to rotate it.)     "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "sec-column-null-space.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "5.26",
  "title": "Rank and Nullity.",
  "body": " Rank and Nullity   Let be an matrix. Then    "
},
{
  "id": "eg-rank-nullity",
  "level": "2",
  "url": "sec-column-null-space.html#eg-rank-nullity",
  "type": "Example",
  "number": "5.27",
  "title": "Checking the Rank–Nullity Relation.",
  "body": " Checking the Rank Nullity Relation   Consider from .    After row reduction, we saw that which has two leading s, hence .  Also, we saw that . Furthermore is , which means . Then    "
},
{
  "id": "thm-imt-continued",
  "level": "2",
  "url": "sec-column-null-space.html#thm-imt-continued",
  "type": "Theorem",
  "number": "5.28",
  "title": "The Invertible Matrix Theorem, Continued.",
  "body": " The Invertible Matrix Theorem, Continued   Let be an matrix. The following conditions are equivalent.    is an invertible matrix.  .  .  .      In we discussed the following equivalences, which we can now express in terms of rank, null space, and column space of :      is an invertible matrix the columns of are linearly independent  .     is an invertible matrix the columns of span   .     is an invertible matrix  has only the trivial solution  .      "
},
{
  "id": "sec-cofactor-expansion",
  "level": "1",
  "url": "sec-cofactor-expansion.html",
  "type": "Section",
  "number": "6.1",
  "title": "Cofactor Expansion",
  "body": " Cofactor Expansion   The determinant attaches a single number to a square matrix, and that number decides invertibility. We define it recursively, by expressing an determinant in terms of determinants.  The number also has a geometric meaning: for a matrix, is the area of the parallelogram spanned by the columns of . That is the picture to keep in mind while we compute.   For , the columns and span a parallelogram of area . A matrix with determinant flattens the parallelogram to a segment exactly when it fails to be invertible.            \\vec{u}  \\vec{v}  |\\det A| = 5         Minors and Cofactors   Sign, Minor, and Cofactor   Let be an matrix.     The sign of the position is .    The th minor of , denoted , is the determinant of the matrix obtained from deleting the th row and the th column of .    The -cofactor of an matrix is .        Computing a Minor and a Cofactor   Let . Compute and .    For a matrix the signs are   Deleting row and column leaves and therefore       Cofactor Expansion Along a Row or Column   Cofactor Expansion Along Row or Column   If is an matrix, then (cofactor expansion along row ), and (cofactor expansion along column ).     Two Expansions, One Answer   Let . Compute by expanding along the first row and again along the third column.     Cofactor expansion along the first row.     Cofactor expansion along the third column.    Both expansions agree, as they must.     Since any row or column may be used, it pays to choose the one with the most zeros: each zero entry kills a whole minor.    A Determinant   Let . Find .    The fourth row is , with two zeros, so we expand along it:   Each remaining determinant also has a row with two zeros:       Determinants of Triangular Matrices   Triangular Matrices      An matrix is called upper triangular if all entries below the main diagonal are zero.    An matrix is called lower triangular if all entries above the main diagonal are zero.    An matrix is called triangular if it is upper triangular or lower triangular.        Determinant of a Triangular Matrix   If is an triangular matrix, then i.e., is the product of the entries of the main diagonal of .    For example, for an upper triangular matrix , expanding along the first column leaves a single term at each stage: The general case follows by induction on .     "
},
{
  "id": "fig-det-area",
  "level": "2",
  "url": "sec-cofactor-expansion.html#fig-det-area",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " For , the columns and span a parallelogram of area . A matrix with determinant flattens the parallelogram to a segment exactly when it fails to be invertible.            \\vec{u}  \\vec{v}  |\\det A| = 5      "
},
{
  "id": "def-minor-cofactor",
  "level": "2",
  "url": "sec-cofactor-expansion.html#def-minor-cofactor",
  "type": "Definition",
  "number": "6.2",
  "title": "Sign, Minor, and Cofactor.",
  "body": " Sign, Minor, and Cofactor   Let be an matrix.     The sign of the position is .    The th minor of , denoted , is the determinant of the matrix obtained from deleting the th row and the th column of .    The -cofactor of an matrix is .      "
},
{
  "id": "eg-minor-cofactor",
  "level": "2",
  "url": "sec-cofactor-expansion.html#eg-minor-cofactor",
  "type": "Example",
  "number": "6.3",
  "title": "Computing a Minor and a Cofactor.",
  "body": " Computing a Minor and a Cofactor   Let . Compute and .    For a matrix the signs are   Deleting row and column leaves and therefore    "
},
{
  "id": "def-cofactor-expansion",
  "level": "2",
  "url": "sec-cofactor-expansion.html#def-cofactor-expansion",
  "type": "Definition",
  "number": "6.4",
  "title": "Cofactor Expansion Along Row <span class=\"process-math\">\\(i\\)<\/span> or Column <span class=\"process-math\">\\(j\\)<\/span>.",
  "body": " Cofactor Expansion Along Row or Column   If is an matrix, then (cofactor expansion along row ), and (cofactor expansion along column ).   "
},
{
  "id": "eg-cofactor-expansion",
  "level": "2",
  "url": "sec-cofactor-expansion.html#eg-cofactor-expansion",
  "type": "Example",
  "number": "6.5",
  "title": "Two Expansions, One Answer.",
  "body": " Two Expansions, One Answer   Let . Compute by expanding along the first row and again along the third column.     Cofactor expansion along the first row.     Cofactor expansion along the third column.    Both expansions agree, as they must.   "
},
{
  "id": "rem-choose-row-with-zeros",
  "level": "2",
  "url": "sec-cofactor-expansion.html#rem-choose-row-with-zeros",
  "type": "Remark",
  "number": "6.6",
  "title": "",
  "body": " Since any row or column may be used, it pays to choose the one with the most zeros: each zero entry kills a whole minor.  "
},
{
  "id": "eg-four-by-four-det",
  "level": "2",
  "url": "sec-cofactor-expansion.html#eg-four-by-four-det",
  "type": "Example",
  "number": "6.7",
  "title": "A <span class=\"process-math\">\\(4 \\times 4\\)<\/span> Determinant.",
  "body": " A Determinant   Let . Find .    The fourth row is , with two zeros, so we expand along it:   Each remaining determinant also has a row with two zeros:    "
},
{
  "id": "def-triangular",
  "level": "2",
  "url": "sec-cofactor-expansion.html#def-triangular",
  "type": "Definition",
  "number": "6.8",
  "title": "Triangular Matrices.",
  "body": " Triangular Matrices      An matrix is called upper triangular if all entries below the main diagonal are zero.    An matrix is called lower triangular if all entries above the main diagonal are zero.    An matrix is called triangular if it is upper triangular or lower triangular.      "
},
{
  "id": "thm-triangular-determinant",
  "level": "2",
  "url": "sec-cofactor-expansion.html#thm-triangular-determinant",
  "type": "Theorem",
  "number": "6.9",
  "title": "Determinant of a Triangular Matrix.",
  "body": " Determinant of a Triangular Matrix   If is an triangular matrix, then i.e., is the product of the entries of the main diagonal of .    For example, for an upper triangular matrix , expanding along the first column leaves a single term at each stage: The general case follows by induction on .   "
},
{
  "id": "sec-determinants-row-operations",
  "level": "1",
  "url": "sec-determinants-row-operations.html",
  "type": "Section",
  "number": "6.2",
  "title": "Determinants and Row Operations",
  "body": " Determinants and Row Operations   Cofactor expansion is expensive for large matrices. Row reduction is cheap, and makes triangular determinants trivial. To combine the two, we need to know exactly what each elementary row operation does to a determinant.    How Do Elementary Row Operations Affect Determinants?   Let . Computing by cofactor expansion along row (or column) yields   Suppose , , and are obtained from by interchanging rows and , multiplying row by , and adding twice row to row , respectively, i.e., How do elementary operations affect the determinant?       So interchanging rows flipped the sign, scaling a row scaled the determinant, and adding a multiple of one row to another left it alone.     Row Operations and Determinants   Let be an matrix.     If is obtained from by exchanging two different rows of , then .    If is obtained from by multiplying a row of by a scalar , then .    If is obtained from by adding times one row of to a different row of , then .    If two different rows (or columns) of are identical, then . This follows from (3).        An analogous theorem holds for elementary column operations. If is a matrix, then an elementary column operation on is simply the corresponding elementary row operation performed on the transpose of , .  For instance, with as in , exchanging rows and of gives with ; correspondingly, exchanging columns and of gives with .    Computing a Determinant by Row Reduction   Let . Without using the cofactor expansion, find .    Reduce to triangular form, tracking the effect of each operation:   The first step was an interchange, so it flipped the sign; the remaining steps added multiples of one row to another, which changes nothing. Hence      Determinant of a Scalar Multiple   If is an matrix and is any scalar, then     Multiplying by multiplies every one of the rows by . Applying part (2) of once per row produces a factor of each time.     Scaling a Matrix   Suppose is a matrix with . What is ?    Every entry of gets multiplied by : so     "
},
{
  "id": "eg-row-ops-on-determinant",
  "level": "2",
  "url": "sec-determinants-row-operations.html#eg-row-ops-on-determinant",
  "type": "Example",
  "number": "6.10",
  "title": "How Do Elementary Row Operations Affect Determinants?",
  "body": " How Do Elementary Row Operations Affect Determinants?   Let . Computing by cofactor expansion along row (or column) yields   Suppose , , and are obtained from by interchanging rows and , multiplying row by , and adding twice row to row , respectively, i.e., How do elementary operations affect the determinant?       So interchanging rows flipped the sign, scaling a row scaled the determinant, and adding a multiple of one row to another left it alone.   "
},
{
  "id": "thm-row-ops-determinant",
  "level": "2",
  "url": "sec-determinants-row-operations.html#thm-row-ops-determinant",
  "type": "Theorem",
  "number": "6.11",
  "title": "Row Operations and Determinants.",
  "body": " Row Operations and Determinants   Let be an matrix.     If is obtained from by exchanging two different rows of , then .    If is obtained from by multiplying a row of by a scalar , then .    If is obtained from by adding times one row of to a different row of , then .    If two different rows (or columns) of are identical, then . This follows from (3).      "
},
{
  "id": "rem-column-operations",
  "level": "2",
  "url": "sec-determinants-row-operations.html#rem-column-operations",
  "type": "Remark",
  "number": "6.12",
  "title": "",
  "body": " An analogous theorem holds for elementary column operations. If is a matrix, then an elementary column operation on is simply the corresponding elementary row operation performed on the transpose of , .  For instance, with as in , exchanging rows and of gives with ; correspondingly, exchanging columns and of gives with .  "
},
{
  "id": "eg-det-by-row-reduction",
  "level": "2",
  "url": "sec-determinants-row-operations.html#eg-det-by-row-reduction",
  "type": "Example",
  "number": "6.13",
  "title": "Computing a Determinant by Row Reduction.",
  "body": " Computing a Determinant by Row Reduction   Let . Without using the cofactor expansion, find .    Reduce to triangular form, tracking the effect of each operation:   The first step was an interchange, so it flipped the sign; the remaining steps added multiples of one row to another, which changes nothing. Hence    "
},
{
  "id": "thm-det-scalar-multiple",
  "level": "2",
  "url": "sec-determinants-row-operations.html#thm-det-scalar-multiple",
  "type": "Theorem",
  "number": "6.14",
  "title": "Determinant of a Scalar Multiple.",
  "body": " Determinant of a Scalar Multiple   If is an matrix and is any scalar, then     Multiplying by multiplies every one of the rows by . Applying part (2) of once per row produces a factor of each time.   "
},
{
  "id": "eg-det-scalar-multiple",
  "level": "2",
  "url": "sec-determinants-row-operations.html#eg-det-scalar-multiple",
  "type": "Example",
  "number": "6.15",
  "title": "Scaling a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " Scaling a Matrix   Suppose is a matrix with . What is ?    Every entry of gets multiplied by : so    "
},
{
  "id": "sec-determinants-inverses-products",
  "level": "1",
  "url": "sec-determinants-inverses-products.html",
  "type": "Section",
  "number": "6.3",
  "title": "Determinants of Inverses, Products, and Transposes",
  "body": " Determinants of Inverses, Products, and Transposes   The Determinant Detects Invertibility   Invertibility and the Determinant   An matrix is invertible (Statement 1) if and only if (Statement 2). In this case,      Statement 1 Statement 2. If is invertible, then we know that can be carried to by elementary operations. We also know that elementary operations are reversible. Hence can be obtained from by performing a sequence of elementary operations. By , each such operation multiplies the determinant by a nonzero factor, so we conclude that , where and .   Statement 2 Statement 1. We show that if Statement 1 is NOT true, then Statement 2 is NOT true. If is not invertible, then must have fewer than pivot positions. This means the reduced row-echelon matrix will have at least one zero on its main diagonal, and since that matrix is upper triangular, its determinant is the product of the entries on the main diagonal, and hence .  The fact that is shown in , after we discuss .     True or False?   If and are two square matrices and is not invertible, then is not invertible.     True. We show the contrapositive: if is invertible, then is invertible. Note that if is invertible, then there exists a matrix such that , which means . By condition (8) of , is invertible with .      The Determinant of a Product   True or False?   For any elementary matrix and square matrix , we have      True. We check the three types of elementary matrix in turn, using (left multiplication by performs the corresponding row operation) together with .   (I) If represents exchange of two rows, then . Also, , since the product is equivalent to exchange of two rows. Hence .   (II) If represents the multiplication of the th row by a constant , then and .   (III) If represents adding times row to row , then and .     Determinant of a Product   Let and be matrices. Then      Case (I): is not invertible. If is not invertible, then . Also, if is not invertible, then is not invertible by , and so . Hence, in this case, .   Case (II): is invertible. Hence can be written as a product of elementary matrices, and . Next, we can use repeatedly to write   Now run the same identity backwards to reassemble :      Determinant of an Inverse   If is invertible, then .    Since , then hence      Determinant of a Transpose   If is an matrix, then the determinant of its transpose is given by       Putting the Rules Together   A Determinant of a Complicated Product   Suppose , and are matrices with , , and . Find .       Note where each rule was used: the factor comes from with ; the product splits by ; the reciprocals come from ; and by .     "
},
{
  "id": "thm-det-nonzero-iff-invertible",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#thm-det-nonzero-iff-invertible",
  "type": "Theorem",
  "number": "6.16",
  "title": "Invertibility and the Determinant.",
  "body": " Invertibility and the Determinant   An matrix is invertible (Statement 1) if and only if (Statement 2). In this case,      Statement 1 Statement 2. If is invertible, then we know that can be carried to by elementary operations. We also know that elementary operations are reversible. Hence can be obtained from by performing a sequence of elementary operations. By , each such operation multiplies the determinant by a nonzero factor, so we conclude that , where and .   Statement 2 Statement 1. We show that if Statement 1 is NOT true, then Statement 2 is NOT true. If is not invertible, then must have fewer than pivot positions. This means the reduced row-echelon matrix will have at least one zero on its main diagonal, and since that matrix is upper triangular, its determinant is the product of the entries on the main diagonal, and hence .  The fact that is shown in , after we discuss .   "
},
{
  "id": "eg-noninvertible-product",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#eg-noninvertible-product",
  "type": "Example",
  "number": "6.17",
  "title": "True or False?",
  "body": " True or False?   If and are two square matrices and is not invertible, then is not invertible.     True. We show the contrapositive: if is invertible, then is invertible. Note that if is invertible, then there exists a matrix such that , which means . By condition (8) of , is invertible with .   "
},
{
  "id": "eg-det-elementary-product",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#eg-det-elementary-product",
  "type": "Example",
  "number": "6.18",
  "title": "True or False?",
  "body": " True or False?   For any elementary matrix and square matrix , we have      True. We check the three types of elementary matrix in turn, using (left multiplication by performs the corresponding row operation) together with .   (I) If represents exchange of two rows, then . Also, , since the product is equivalent to exchange of two rows. Hence .   (II) If represents the multiplication of the th row by a constant , then and .   (III) If represents adding times row to row , then and .   "
},
{
  "id": "thm-det-product",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#thm-det-product",
  "type": "Theorem",
  "number": "6.19",
  "title": "Determinant of a Product.",
  "body": " Determinant of a Product   Let and be matrices. Then      Case (I): is not invertible. If is not invertible, then . Also, if is not invertible, then is not invertible by , and so . Hence, in this case, .   Case (II): is invertible. Hence can be written as a product of elementary matrices, and . Next, we can use repeatedly to write   Now run the same identity backwards to reassemble :    "
},
{
  "id": "cor-det-inverse",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#cor-det-inverse",
  "type": "Corollary",
  "number": "6.20",
  "title": "Determinant of an Inverse.",
  "body": " Determinant of an Inverse   If is invertible, then .    Since , then hence    "
},
{
  "id": "thm-det-transpose",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#thm-det-transpose",
  "type": "Theorem",
  "number": "6.21",
  "title": "Determinant of a Transpose.",
  "body": " Determinant of a Transpose   If is an matrix, then the determinant of its transpose is given by    "
},
{
  "id": "eg-det-big-expression",
  "level": "2",
  "url": "sec-determinants-inverses-products.html#eg-det-big-expression",
  "type": "Example",
  "number": "6.22",
  "title": "A Determinant of a Complicated Product.",
  "body": " A Determinant of a Complicated Product   Suppose , and are matrices with , , and . Find .       Note where each rule was used: the factor comes from with ; the product splits by ; the reciprocals come from ; and by .   "
},
{
  "id": "sec-vector-spaces",
  "level": "1",
  "url": "sec-vector-spaces.html",
  "type": "Section",
  "number": "7.1",
  "title": "Vector Spaces",
  "body": " Vector Spaces   Everything we proved about used only a short list of properties of addition and scalar multiplication. Taking that list as the definition frees us from columns of numbers: polynomials and matrices satisfy the same axioms, and so everything we know applies to them too.    Vector Space   A vector space  is a set of vectors with two operations defined, addition and scalar multiplication, which satisfy the following axioms for all , , and and for all .    .  .   There exists such that .    There exists such that .     .   .  .  .  .  .       The Vector Space of Polynomials   Let be the set of all polynomials of at most degree as well as the zero polynomial. Define addition to be the standard addition of polynomials, and scalar multiplication the usual multiplication of a polynomial by a number. Show that is a vector space.    We can write explicitly as Let and be two polynomials of at most degree , and let .   (I) Closure under addition.  since the sum is again a polynomial of degree at most .   (II) Commutativity.  , since addition of the coefficients is commutative.   (III) Additive identity. The zero polynomial for all is in , and    (IV) Additive inverse. Let . Then    (V) Associativity follows in the same way, one coefficient at a time.   (VI) Closure under scalar multiplication.     (VII) (X) are verified the same way. For instance, and .  Since the above axioms hold, we know that as described above is a vector space.     The Vector Space of Matrices   Let be the set of all matrices. Is a vector space?    Yes. Let , and let and .      (I)  , since the sum of two matrices is again .     (II), (III), (IV), and (V) follow from , the properties of matrix addition.     (VI)  .     (VII), (VIII), (IX), and (X) follow from , the properties of scalar multiplication for matrices.        Notice how little work the second example took. Once the axioms are isolated, a familiar theorem about matrices is the verification. This is the payoff of abstraction: results proved from the axioms alone hold in every vector space at once.   "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-vector-spaces.html#def-vector-space",
  "type": "Definition",
  "number": "7.1",
  "title": "Vector Space.",
  "body": " Vector Space   A vector space  is a set of vectors with two operations defined, addition and scalar multiplication, which satisfy the following axioms for all , , and and for all .    .  .   There exists such that .    There exists such that .     .   .  .  .  .  .     "
},
{
  "id": "eg-p2-vector-space",
  "level": "2",
  "url": "sec-vector-spaces.html#eg-p2-vector-space",
  "type": "Example",
  "number": "7.2",
  "title": "The Vector Space of Polynomials <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " The Vector Space of Polynomials   Let be the set of all polynomials of at most degree as well as the zero polynomial. Define addition to be the standard addition of polynomials, and scalar multiplication the usual multiplication of a polynomial by a number. Show that is a vector space.    We can write explicitly as Let and be two polynomials of at most degree , and let .   (I) Closure under addition.  since the sum is again a polynomial of degree at most .   (II) Commutativity.  , since addition of the coefficients is commutative.   (III) Additive identity. The zero polynomial for all is in , and    (IV) Additive inverse. Let . Then    (V) Associativity follows in the same way, one coefficient at a time.   (VI) Closure under scalar multiplication.     (VII) (X) are verified the same way. For instance, and .  Since the above axioms hold, we know that as described above is a vector space.   "
},
{
  "id": "eg-m22-vector-space",
  "level": "2",
  "url": "sec-vector-spaces.html#eg-m22-vector-space",
  "type": "Example",
  "number": "7.3",
  "title": "The Vector Space of <span class=\"process-math\">\\(2 \\times 2\\)<\/span> Matrices.",
  "body": " The Vector Space of Matrices   Let be the set of all matrices. Is a vector space?    Yes. Let , and let and .      (I)  , since the sum of two matrices is again .     (II), (III), (IV), and (V) follow from , the properties of matrix addition.     (VI)  .     (VII), (VIII), (IX), and (X) follow from , the properties of scalar multiplication for matrices.      "
},
{
  "id": "rem-why-abstract",
  "level": "2",
  "url": "sec-vector-spaces.html#rem-why-abstract",
  "type": "Remark",
  "number": "7.4",
  "title": "",
  "body": " Notice how little work the second example took. Once the axioms are isolated, a familiar theorem about matrices is the verification. This is the payoff of abstraction: results proved from the axioms alone hold in every vector space at once.  "
},
{
  "id": "sec-subspaces-of-vector-spaces",
  "level": "1",
  "url": "sec-subspaces-of-vector-spaces.html",
  "type": "Section",
  "number": "7.2",
  "title": "Subspaces and Bases in a Vector Space",
  "body": " Subspaces and Bases in a Vector Space   Subspace of a Vector Space   A subspace of a vector space is a subset that is itself a vector space under the operations defined on .     A Subspace of   Let be the set of all matrices. Previously, we showed that is a vector space. Is the following subset of a subspace?     Let , , and be in . Then:   (I)  is also in , since .   (II)  .   (III)  and .   (IV)  follows from the properties of matrix addition.   (V)  and .   (VI)  , hence . Then , since .  Similarly, you can check that (VII), (VIII), (IX), and (X) also hold.     Question  Can you modify such that the new subset of is no longer a subspace?    Spans Are Subspaces   In a vector space, the span of any subset is a subspace.     The Standard Basis for   Consider the vector space of quadratic polynomials .     Show that is a basis for . ( is known as the standard basis for .)    Is the span of the set a subspace of ? If so, is a basis for this subspace?        (1) Note that any quadratic polynomial is a linear combination of , , and : Also, clearly none of the elements of the set can be written as a linear combination of the rest of the elements. Hence the set is linearly independent, which means it is a basis for .   (2) Yes, the set is a subset of and hence its span is a subspace of by .  Also, the set is a linearly independent set neither is a scalar multiple of the other, since only one of them involves  and hence it is a basis for this subspace.     Reminders  The definitions of subspace and basis for , which we met in , , and , carry over verbatim to a general vector space: replace collection of vectors in by subset of throughout.   "
},
{
  "id": "def-general-subspace",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#def-general-subspace",
  "type": "Definition",
  "number": "7.5",
  "title": "Subspace of a Vector Space.",
  "body": " Subspace of a Vector Space   A subspace of a vector space is a subset that is itself a vector space under the operations defined on .   "
},
{
  "id": "eg-ml-subspace",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#eg-ml-subspace",
  "type": "Example",
  "number": "7.6",
  "title": "A Subspace of <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " A Subspace of   Let be the set of all matrices. Previously, we showed that is a vector space. Is the following subset of a subspace?     Let , , and be in . Then:   (I)  is also in , since .   (II)  .   (III)  and .   (IV)  follows from the properties of matrix addition.   (V)  and .   (VI)  , hence . Then , since .  Similarly, you can check that (VII), (VIII), (IX), and (X) also hold.   "
},
{
  "id": "rem-modify-ml",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#rem-modify-ml",
  "type": "Remark",
  "number": "7.7",
  "title": "Question.",
  "body": " Question  Can you modify such that the new subset of is no longer a subspace?  "
},
{
  "id": "thm-span-is-subspace",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#thm-span-is-subspace",
  "type": "Theorem",
  "number": "7.8",
  "title": "Spans Are Subspaces.",
  "body": " Spans Are Subspaces   In a vector space, the span of any subset is a subspace.   "
},
{
  "id": "eg-basis-p2",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#eg-basis-p2",
  "type": "Example",
  "number": "7.9",
  "title": "The Standard Basis for <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " The Standard Basis for   Consider the vector space of quadratic polynomials .     Show that is a basis for . ( is known as the standard basis for .)    Is the span of the set a subspace of ? If so, is a basis for this subspace?        (1) Note that any quadratic polynomial is a linear combination of , , and : Also, clearly none of the elements of the set can be written as a linear combination of the rest of the elements. Hence the set is linearly independent, which means it is a basis for .   (2) Yes, the set is a subset of and hence its span is a subspace of by .  Also, the set is a linearly independent set neither is a scalar multiple of the other, since only one of them involves  and hence it is a basis for this subspace.   "
},
{
  "id": "rem-subspace-reminders",
  "level": "2",
  "url": "sec-subspaces-of-vector-spaces.html#rem-subspace-reminders",
  "type": "Remark",
  "number": "7.10",
  "title": "Reminders.",
  "body": " Reminders  The definitions of subspace and basis for , which we met in , , and , carry over verbatim to a general vector space: replace collection of vectors in by subset of throughout.  "
},
{
  "id": "sec-isomorphisms",
  "level": "1",
  "url": "sec-isomorphisms.html",
  "type": "Section",
  "number": "7.3",
  "title": "Linear Transformations and Isomorphisms",
  "body": " Linear Transformations and Isomorphisms   Linear Transformations between Vector Spaces   Linear Transformation of Vector Spaces   A linear transformation from a vector space to another vector space is a rule that assigns to each a unique vector and it preserves vector addition and scalar multiplication.  Equivalently, for every and and , we have that is, preserves linear combinations.     The null space and the column space of an matrix are subspaces of and respectively.  Here we show that the null space of an matrix is a subspace of and we leave the column space as an exercise. Recall Assume and . Then Hence is a subspace of .     Isomorphisms   Isomorphism   A linear map is called an isomorphism if the following two conditions are satisfied.      is one to one. That is, if , then .     is onto. That is, if , there exists such that .     Two such spaces which have an isomorphism as described above are said to be isomorphic .     We consider isomorphic spaces to be the same, because there is a one-to-one correspondence between their elements and the structure of the vector space operations is preserved through linearity.    and Are Isomorphic   Show that and are isomorphic.    We can find an isomorphism between these two spaces. Consider defined by Note that is linear, one-to-one, and onto.     A Transformation from to   Consider the transformation defined as      Using the standard basis for and , find the matrix of .   Is one-to-one?       (A) Write , so that . Then   Using the isomorphism between and that sends to , the matrix of is and indeed    (B) No, since has non-trivial solutions:   For instance, so is NOT one-to-one.     "
},
{
  "id": "def-general-linear-transformation",
  "level": "2",
  "url": "sec-isomorphisms.html#def-general-linear-transformation",
  "type": "Definition",
  "number": "7.11",
  "title": "Linear Transformation of Vector Spaces.",
  "body": " Linear Transformation of Vector Spaces   A linear transformation from a vector space to another vector space is a rule that assigns to each a unique vector and it preserves vector addition and scalar multiplication.  Equivalently, for every and and , we have that is, preserves linear combinations.   "
},
{
  "id": "rem-nul-col-are-subspaces",
  "level": "2",
  "url": "sec-isomorphisms.html#rem-nul-col-are-subspaces",
  "type": "Remark",
  "number": "7.12",
  "title": "",
  "body": " The null space and the column space of an matrix are subspaces of and respectively.  Here we show that the null space of an matrix is a subspace of and we leave the column space as an exercise. Recall Assume and . Then Hence is a subspace of .  "
},
{
  "id": "def-isomorphism",
  "level": "2",
  "url": "sec-isomorphisms.html#def-isomorphism",
  "type": "Definition",
  "number": "7.13",
  "title": "Isomorphism.",
  "body": " Isomorphism   A linear map is called an isomorphism if the following two conditions are satisfied.      is one to one. That is, if , then .     is onto. That is, if , there exists such that .     Two such spaces which have an isomorphism as described above are said to be isomorphic .   "
},
{
  "id": "rem-isomorphic-same",
  "level": "2",
  "url": "sec-isomorphisms.html#rem-isomorphic-same",
  "type": "Remark",
  "number": "7.14",
  "title": "",
  "body": " We consider isomorphic spaces to be the same, because there is a one-to-one correspondence between their elements and the structure of the vector space operations is preserved through linearity.  "
},
{
  "id": "eg-rn-isomorphic-pn",
  "level": "2",
  "url": "sec-isomorphisms.html#eg-rn-isomorphic-pn",
  "type": "Example",
  "number": "7.15",
  "title": "<span class=\"process-math\">\\(\\R^n\\)<\/span> and <span class=\"process-math\">\\(\\mathbb{P}_{n-1}\\)<\/span> Are Isomorphic.",
  "body": " and Are Isomorphic   Show that and are isomorphic.    We can find an isomorphism between these two spaces. Consider defined by Note that is linear, one-to-one, and onto.   "
},
{
  "id": "eg-p2-to-r2",
  "level": "2",
  "url": "sec-isomorphisms.html#eg-p2-to-r2",
  "type": "Example",
  "number": "7.16",
  "title": "A Transformation from <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span> to <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " A Transformation from to   Consider the transformation defined as      Using the standard basis for and , find the matrix of .   Is one-to-one?       (A) Write , so that . Then   Using the isomorphism between and that sends to , the matrix of is and indeed    (B) No, since has non-trivial solutions:   For instance, so is NOT one-to-one.   "
},
{
  "id": "sec-coordinates",
  "level": "1",
  "url": "sec-coordinates.html",
  "type": "Section",
  "number": "7.4",
  "title": "Coordinates and Change of Basis",
  "body": " Coordinates and Change of Basis   Coordinates Relative to a Basis   Coordinates Are Unique   Let be a basis for a vector space . Then for each , there exists a unique set of scalars such that      Coordinate Vector and Coordinate Mapping   The coordinates of relative to the basis are denoted by and the mapping is known as the coordinate mapping .     The Same Vector in Two Coordinate Systems  Let be the standard basis of and let be a second basis, related to the first by   A vector with , i.e., , has The vector has not moved; only the grid we measure it against has changed.  Solving the two relations above for and gives so rules the plane with a grid of parallelograms rather than squares.   The same vector measured against two different bases. Its coordinates change because the grid changes, not because the vector moves. In each panel the two scaled basis vectors are laid tip to tail, and is the diagonal of the parallelogram they span.    In : , so .                \\vec{e}_1  \\vec{e}_2  2\\vec{e}_2  \\vec{x}                  In : , so .                            \\vec{b}_1  \\vec{b}_2  \\tfrac{3}{2}\\vec{b}_1  2\\vec{b}_2  \\vec{x}                       A Vector in Cartesian and Polar Coordinates   Let . Represent in Cartesian and in polar coordinates, and decide which of the two descriptions is a coordinate vector in the sense of .     Cartesian coordinates. Relative to the standard basis , Cartesian coordinates are exactly coordinates relative to a basis.   Polar coordinates. The same vector is described by its length and its angle with the positive -axis: so that   Is the pair a coordinate vector relative to some basis? No. Coordinate mappings are linear, and is not: doubling the vector gives with polar data , whereas doubling the pair would give . The length doubles, but the angle does not. Polar coordinates are a genuinely nonlinear way of labeling the plane.     The Same Matrix in Two Coordinate Systems   Coordinates work in any vector space, not just in . In , consider the matrix , the standard ordered basis and the ordered basis Find the two representations and .     Relative to . The entries of are its coordinates:    Relative to . First, is indeed a basis: setting a combination of its four matrices equal to the zero matrix and comparing the , , , and entries in that order forces every coefficient to vanish, so the set is linearly independent, and four independent vectors in the four-dimensional space form a basis. Now write Comparing entries: the entry gives , then the entry gives , so ; the entry gives , then the entry gives , so . Hence The same matrix, two coordinate vectors one for each choice of basis.      The Change of Basis Matrix   Change of Basis Matrix   Let and be two bases of a vector space. Then to change the basis with respect to which the vector is written from to , we can use the change of basis matrix  as where      Computing a Change of Basis Matrix   Continuing , find and verify it on .    In the above example, we have and , which means   For instance, with ,      A Change of Basis Matrix in   Continuing , find the change of basis matrix for the two bases of , and verify it on .    Write in the order given. The columns of are the -coordinates of the elements of . Each is quick to find: so, reading the coefficients columnwise,   Verifying on with the coordinate vectors found in :      "
},
{
  "id": "thm-coordinates-unique",
  "level": "2",
  "url": "sec-coordinates.html#thm-coordinates-unique",
  "type": "Theorem",
  "number": "7.17",
  "title": "Coordinates Are Unique.",
  "body": " Coordinates Are Unique   Let be a basis for a vector space . Then for each , there exists a unique set of scalars such that    "
},
{
  "id": "def-coordinate-vector",
  "level": "2",
  "url": "sec-coordinates.html#def-coordinate-vector",
  "type": "Definition",
  "number": "7.18",
  "title": "Coordinate Vector and Coordinate Mapping.",
  "body": " Coordinate Vector and Coordinate Mapping   The coordinates of relative to the basis are denoted by and the mapping is known as the coordinate mapping .   "
},
{
  "id": "eg-coordinates-two-bases",
  "level": "2",
  "url": "sec-coordinates.html#eg-coordinates-two-bases",
  "type": "Example",
  "number": "7.19",
  "title": "The Same Vector in Two Coordinate Systems.",
  "body": " The Same Vector in Two Coordinate Systems  Let be the standard basis of and let be a second basis, related to the first by   A vector with , i.e., , has The vector has not moved; only the grid we measure it against has changed.  Solving the two relations above for and gives so rules the plane with a grid of parallelograms rather than squares.   The same vector measured against two different bases. Its coordinates change because the grid changes, not because the vector moves. In each panel the two scaled basis vectors are laid tip to tail, and is the diagonal of the parallelogram they span.    In : , so .                \\vec{e}_1  \\vec{e}_2  2\\vec{e}_2  \\vec{x}                  In : , so .                            \\vec{b}_1  \\vec{b}_2  \\tfrac{3}{2}\\vec{b}_1  2\\vec{b}_2  \\vec{x}                     "
},
{
  "id": "eg-cartesian-polar",
  "level": "2",
  "url": "sec-coordinates.html#eg-cartesian-polar",
  "type": "Example",
  "number": "7.21",
  "title": "A Vector in Cartesian and Polar Coordinates.",
  "body": " A Vector in Cartesian and Polar Coordinates   Let . Represent in Cartesian and in polar coordinates, and decide which of the two descriptions is a coordinate vector in the sense of .     Cartesian coordinates. Relative to the standard basis , Cartesian coordinates are exactly coordinates relative to a basis.   Polar coordinates. The same vector is described by its length and its angle with the positive -axis: so that   Is the pair a coordinate vector relative to some basis? No. Coordinate mappings are linear, and is not: doubling the vector gives with polar data , whereas doubling the pair would give . The length doubles, but the angle does not. Polar coordinates are a genuinely nonlinear way of labeling the plane.   "
},
{
  "id": "eg-matrix-two-bases",
  "level": "2",
  "url": "sec-coordinates.html#eg-matrix-two-bases",
  "type": "Example",
  "number": "7.22",
  "title": "The Same Matrix in Two Coordinate Systems.",
  "body": " The Same Matrix in Two Coordinate Systems   Coordinates work in any vector space, not just in . In , consider the matrix , the standard ordered basis and the ordered basis Find the two representations and .     Relative to . The entries of are its coordinates:    Relative to . First, is indeed a basis: setting a combination of its four matrices equal to the zero matrix and comparing the , , , and entries in that order forces every coefficient to vanish, so the set is linearly independent, and four independent vectors in the four-dimensional space form a basis. Now write Comparing entries: the entry gives , then the entry gives , so ; the entry gives , then the entry gives , so . Hence The same matrix, two coordinate vectors one for each choice of basis.   "
},
{
  "id": "def-change-of-basis",
  "level": "2",
  "url": "sec-coordinates.html#def-change-of-basis",
  "type": "Definition",
  "number": "7.23",
  "title": "Change of Basis Matrix.",
  "body": " Change of Basis Matrix   Let and be two bases of a vector space. Then to change the basis with respect to which the vector is written from to , we can use the change of basis matrix  as where    "
},
{
  "id": "eg-change-of-basis",
  "level": "2",
  "url": "sec-coordinates.html#eg-change-of-basis",
  "type": "Example",
  "number": "7.24",
  "title": "Computing a Change of Basis Matrix.",
  "body": " Computing a Change of Basis Matrix   Continuing , find and verify it on .    In the above example, we have and , which means   For instance, with ,    "
},
{
  "id": "eg-change-of-basis-m22",
  "level": "2",
  "url": "sec-coordinates.html#eg-change-of-basis-m22",
  "type": "Example",
  "number": "7.25",
  "title": "A Change of Basis Matrix in <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " A Change of Basis Matrix in   Continuing , find the change of basis matrix for the two bases of , and verify it on .    Write in the order given. The columns of are the -coordinates of the elements of . Each is quick to find: so, reading the coefficients columnwise,   Verifying on with the coordinate vectors found in :    "
},
{
  "id": "sec-matrix-of-transformation",
  "level": "1",
  "url": "sec-matrix-of-transformation.html",
  "type": "Section",
  "number": "7.5",
  "title": "The Matrix of a Linear Transformation",
  "body": " The Matrix of a Linear Transformation   A linear transformation has no single matrix: it has one matrix per choice of basis for the domain and codomain. Changing those choices conjugates the matrix by a change of basis matrix, and a well-chosen basis can make the matrix strikingly simple.    Four Matrices for One Transformation   The Same Transformation in Different Bases   Let be the linear transformation given by and let and be the bases.    Compute the matrix of with respect to .  Compute the matrix of with respect to .   Find the matrix of if the bases and are used for domain and codomain respectively.    Find the matrix of if the bases and are used for domain and codomain respectively.       First note the relations between the two bases, which we will need throughout: so that    (I) Since and ,    (II) We compute the images of the new basis vectors and express them in the new basis:  which gives   Alternatively, starting from and inserting , i.e., where Note how much simpler is than : in the basis the transformation just scales by and by . Indeed This is exactly the phenomenon that is about.   (III) First method. Express the images of the basis vectors in the basis:  so .   (III) Second method. From , multiply both sides by :    (IV) First method.     (IV) Second method.  or equally      The Same Game in   Let be the linear transformation and consider the ordered bases and of .    Compute the matrix of with respect to .  Compute the matrix of with respect to .   Find the matrix of if the bases and are used for domain and codomain respectively.    Find the matrix of if the bases and are used for domain and codomain respectively.       Unlike the previous example, the vectors here are polynomials, not columns. The coordinate maps are the bridge: they are isomorphisms , and once every polynomial is replaced by its coordinate vector, all four computations become the same matrix arithmetic in as before.  First the change-of-basis matrices, exactly as in : reading the elements of in the basis columnwise, and inverting,    (I) Transform the basis elements of and read the outputs in : whose coordinate vectors form the columns    (II) First method. Transform the basis elements of and express the outputs in : so    (II) Second method. Exactly as in the previous example,    (III) Multiplying on the left by converts the output coordinates, As a spot check on the second column: is itself the second element of , so its -coordinates are .    (IV) This time the input coordinates arrive in and must be converted before can act: As a spot check on the third column: , whose -coordinates are .       A Transformation between Different Vector Spaces   From to   Let be the space of all matrices and let be the space of all polynomials of at most degree . Define as the transformation given by for all .    Describe the null space of . Is one-to-one?   Express the range of as a span of a linearly independent set of matrices. Is onto?   Is an isomorphism?   Extend the basis of the range of such that the extended basis, , spans .    Consider the ordered basis and the ordered basis for and find the matrix of the transformation .    Consider the ordered basis and the ordered basis for and find the matrix of the transformation .        (1)  Setting gives and the last two force , whence . This is the trivial solution.  Hence the null space only contains the zero vector of , which is known as the zero polynomial , and is one-to-one:    (2) The output of is We can check that is a linearly independent set and hence this set is a basis for the range of , since the range of is . This means , whereas . Therefore is NOT onto.   (3) No. is not onto.   (4) We want to add a fourth matrix, , such that cannot be written as . In other words, writing , the following must NOT have a solution: As a system of linear equations in we have If , then the system is inconsistent. For example, choose , , which gives .  Therefore, the set is a basis for .   (5) The strategy is captured by the following diagram. The coordinate maps identify with and with , so the transformation corresponds to a matrix transformation .   The transformation and the matrix transformation induced by the coordinate isomorphisms.       \\mathbb{P}_2  \\mathbb{M}_{22}  \\mathbb{R}^3  \\mathbb{R}^4   S     \\text{matrix transformation}                At the level of the ordered bases, sends the basis of to the four matrices spanning , and the induced matrix transformation is given by a matrix :   The action of on the ordered basis and the corresponding matrix .   A commutative square in which S carries the ordered basis of P2 to four matrices, while the matrix A carries the standard basis columns of R3 to those of R4.   A square diagram. Across the top, sends the ordered basis of to the four matrices spanning .  Down each side a double-headed arrow marks a coordinate isomorphism: on the left it identifies with the three standard basis columns of , and on the right it identifies with the four standard basis columns of .  Across the bottom, the matrix carries the standard basis columns of to those of .       \\{1, x, x^2\\}  \\{M_0, M_1, M_2, M_3\\}  \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}  \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}   S     A        Here is how the elements of are transformed: which means, reading each image in the basis , To find we had to express , , in terms of the basis elements , and . In other words, we needed to figure out how the basis elements of the domain transform with respect to the basis of the codomain.  After finding the output of the matrix transformation, we can use the isomorphism between and and write the output as a matrix.   (6) Write , , , and , so that . Then and therefore   Alternatively, we can find a matrix that changes the basis to . From we get   The reason is the familiar one: from , multiplying both sides by gives .     The Trace as a Transformation   The trace of a square matrix is the sum of its diagonal entries. On it defines the map , where the codomain is itself a vector space, of dimension , with ordered basis .    Show that is a linear transformation.   Describe and find a basis for it. Is one-to-one?   What is the range of ? Is it onto?  Is an isomorphism?  Verify the rank nullity relation for .   Consider the ordered basis of , where has a in position and zeros elsewhere, and the ordered basis of . Find the matrix of the transformation .    Use that matrix to compute through coordinates.    What is the matrix of if the basis of the codomain is changed to ?        (1) For matrices , and a scalar , so respects addition and scalar multiplication and is a linear transformation.   (2) A matrix is in the null space exactly when its diagonal entries cancel: The three spanning matrices are linearly independent (they occupy different entries), so they form a basis and . Since the null space contains nonzero vectors for instance  the transformation is NOT one-to-one.   (3) Every real number is a trace: for any , Hence the range is all of and is onto.   (4) No. An isomorphism must be one-to-one and onto, and by (2) the trace is not one-to-one. (No transformation could be an isomorphism: the dimensions and do not match.)   (5) From (2) and (3), as the rank nullity relation predicts.   (6) We transform the basis elements of the domain and read each output in the basis of : Each column of the matrix is the coordinate vector of one output, which here is a single number, so the matrix of the transformation is the row The corresponding matrix transformation tells the same story as (2) and (3) in the language of pivots: has a pivot in its only row, so it is onto, but it cannot have a pivot in every one of its four columns, so it is not one-to-one.   (7) In the basis , which agrees with computing the trace directly: .   (8) With respect to the basis of , a real number has coordinate , since . Each entry of the matrix is now the -coordinate of the corresponding output: As in the previous example, changing a basis of the codomain rescales the rows of the matrix without changing the transformation itself.     A Change of Basis in   Consider the standard ordered basis of and the set     Show that is a basis of .   Find the change-of-basis matrix , which converts -coordinates into -coordinates.    Find the coordinates of relative to the basis .        (1) Since , it is enough to show that the three polynomials are linearly independent. Suppose that is, Comparing coefficients gives , then forces , and then forces . Only the trivial combination produces the zero polynomial, so is linearly independent and hence a basis of .   (2) The easy direction is the other one: each element of is already written in terms of , so reading off coordinates columnwise, The matrix we want is its inverse, , which we can also compute directly by expressing each element of in the basis : so that In the language of this section, is the matrix of the identity transformation with respect to the basis of the domain and the basis of the codomain: the transformation does nothing, and the matrix only translates between the two coordinate systems.   (3) Relative to the coordinates of are read off directly, and the matrix converts them: As a check,      "
},
{
  "id": "eg-four-matrices",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-four-matrices",
  "type": "Example",
  "number": "7.26",
  "title": "The Same Transformation in Different Bases.",
  "body": " The Same Transformation in Different Bases   Let be the linear transformation given by and let and be the bases.    Compute the matrix of with respect to .  Compute the matrix of with respect to .   Find the matrix of if the bases and are used for domain and codomain respectively.    Find the matrix of if the bases and are used for domain and codomain respectively.       First note the relations between the two bases, which we will need throughout: so that    (I) Since and ,    (II) We compute the images of the new basis vectors and express them in the new basis:  which gives   Alternatively, starting from and inserting , i.e., where Note how much simpler is than : in the basis the transformation just scales by and by . Indeed This is exactly the phenomenon that is about.   (III) First method. Express the images of the basis vectors in the basis:  so .   (III) Second method. From , multiply both sides by :    (IV) First method.     (IV) Second method.  or equally    "
},
{
  "id": "eg-four-matrices-p2",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-four-matrices-p2",
  "type": "Example",
  "number": "7.27",
  "title": "The Same Game in <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " The Same Game in   Let be the linear transformation and consider the ordered bases and of .    Compute the matrix of with respect to .  Compute the matrix of with respect to .   Find the matrix of if the bases and are used for domain and codomain respectively.    Find the matrix of if the bases and are used for domain and codomain respectively.       Unlike the previous example, the vectors here are polynomials, not columns. The coordinate maps are the bridge: they are isomorphisms , and once every polynomial is replaced by its coordinate vector, all four computations become the same matrix arithmetic in as before.  First the change-of-basis matrices, exactly as in : reading the elements of in the basis columnwise, and inverting,    (I) Transform the basis elements of and read the outputs in : whose coordinate vectors form the columns    (II) First method. Transform the basis elements of and express the outputs in : so    (II) Second method. Exactly as in the previous example,    (III) Multiplying on the left by converts the output coordinates, As a spot check on the second column: is itself the second element of , so its -coordinates are .    (IV) This time the input coordinates arrive in and must be converted before can act: As a spot check on the third column: , whose -coordinates are .    "
},
{
  "id": "eg-p2-to-m22",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-p2-to-m22",
  "type": "Example",
  "number": "7.28",
  "title": "From <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span> to <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " From to   Let be the space of all matrices and let be the space of all polynomials of at most degree . Define as the transformation given by for all .    Describe the null space of . Is one-to-one?   Express the range of as a span of a linearly independent set of matrices. Is onto?   Is an isomorphism?   Extend the basis of the range of such that the extended basis, , spans .    Consider the ordered basis and the ordered basis for and find the matrix of the transformation .    Consider the ordered basis and the ordered basis for and find the matrix of the transformation .        (1)  Setting gives and the last two force , whence . This is the trivial solution.  Hence the null space only contains the zero vector of , which is known as the zero polynomial , and is one-to-one:    (2) The output of is We can check that is a linearly independent set and hence this set is a basis for the range of , since the range of is . This means , whereas . Therefore is NOT onto.   (3) No. is not onto.   (4) We want to add a fourth matrix, , such that cannot be written as . In other words, writing , the following must NOT have a solution: As a system of linear equations in we have If , then the system is inconsistent. For example, choose , , which gives .  Therefore, the set is a basis for .   (5) The strategy is captured by the following diagram. The coordinate maps identify with and with , so the transformation corresponds to a matrix transformation .   The transformation and the matrix transformation induced by the coordinate isomorphisms.       \\mathbb{P}_2  \\mathbb{M}_{22}  \\mathbb{R}^3  \\mathbb{R}^4   S     \\text{matrix transformation}                At the level of the ordered bases, sends the basis of to the four matrices spanning , and the induced matrix transformation is given by a matrix :   The action of on the ordered basis and the corresponding matrix .   A commutative square in which S carries the ordered basis of P2 to four matrices, while the matrix A carries the standard basis columns of R3 to those of R4.   A square diagram. Across the top, sends the ordered basis of to the four matrices spanning .  Down each side a double-headed arrow marks a coordinate isomorphism: on the left it identifies with the three standard basis columns of , and on the right it identifies with the four standard basis columns of .  Across the bottom, the matrix carries the standard basis columns of to those of .       \\{1, x, x^2\\}  \\{M_0, M_1, M_2, M_3\\}  \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}  \\left\\{ \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}   S     A        Here is how the elements of are transformed: which means, reading each image in the basis , To find we had to express , , in terms of the basis elements , and . In other words, we needed to figure out how the basis elements of the domain transform with respect to the basis of the codomain.  After finding the output of the matrix transformation, we can use the isomorphism between and and write the output as a matrix.   (6) Write , , , and , so that . Then and therefore   Alternatively, we can find a matrix that changes the basis to . From we get   The reason is the familiar one: from , multiplying both sides by gives .   "
},
{
  "id": "eg-trace-transformation",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-trace-transformation",
  "type": "Example",
  "number": "7.31",
  "title": "The Trace as a Transformation.",
  "body": " The Trace as a Transformation   The trace of a square matrix is the sum of its diagonal entries. On it defines the map , where the codomain is itself a vector space, of dimension , with ordered basis .    Show that is a linear transformation.   Describe and find a basis for it. Is one-to-one?   What is the range of ? Is it onto?  Is an isomorphism?  Verify the rank nullity relation for .   Consider the ordered basis of , where has a in position and zeros elsewhere, and the ordered basis of . Find the matrix of the transformation .    Use that matrix to compute through coordinates.    What is the matrix of if the basis of the codomain is changed to ?        (1) For matrices , and a scalar , so respects addition and scalar multiplication and is a linear transformation.   (2) A matrix is in the null space exactly when its diagonal entries cancel: The three spanning matrices are linearly independent (they occupy different entries), so they form a basis and . Since the null space contains nonzero vectors for instance  the transformation is NOT one-to-one.   (3) Every real number is a trace: for any , Hence the range is all of and is onto.   (4) No. An isomorphism must be one-to-one and onto, and by (2) the trace is not one-to-one. (No transformation could be an isomorphism: the dimensions and do not match.)   (5) From (2) and (3), as the rank nullity relation predicts.   (6) We transform the basis elements of the domain and read each output in the basis of : Each column of the matrix is the coordinate vector of one output, which here is a single number, so the matrix of the transformation is the row The corresponding matrix transformation tells the same story as (2) and (3) in the language of pivots: has a pivot in its only row, so it is onto, but it cannot have a pivot in every one of its four columns, so it is not one-to-one.   (7) In the basis , which agrees with computing the trace directly: .   (8) With respect to the basis of , a real number has coordinate , since . Each entry of the matrix is now the -coordinate of the corresponding output: As in the previous example, changing a basis of the codomain rescales the rows of the matrix without changing the transformation itself.   "
},
{
  "id": "eg-p2-change-of-basis",
  "level": "2",
  "url": "sec-matrix-of-transformation.html#eg-p2-change-of-basis",
  "type": "Example",
  "number": "7.32",
  "title": "A Change of Basis in <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " A Change of Basis in   Consider the standard ordered basis of and the set     Show that is a basis of .   Find the change-of-basis matrix , which converts -coordinates into -coordinates.    Find the coordinates of relative to the basis .        (1) Since , it is enough to show that the three polynomials are linearly independent. Suppose that is, Comparing coefficients gives , then forces , and then forces . Only the trivial combination produces the zero polynomial, so is linearly independent and hence a basis of .   (2) The easy direction is the other one: each element of is already written in terms of , so reading off coordinates columnwise, The matrix we want is its inverse, , which we can also compute directly by expressing each element of in the basis : so that In the language of this section, is the matrix of the identity transformation with respect to the basis of the domain and the basis of the codomain: the transformation does nothing, and the matrix only translates between the two coordinate systems.   (3) Relative to the coordinates of are read off directly, and the matrix converts them: As a check,    "
},
{
  "id": "sec-eigenvalues",
  "level": "1",
  "url": "sec-eigenvalues.html",
  "type": "Section",
  "number": "8.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors   Motivation: Powers of a Matrix   Can We Compute Efficiently?   Can we efficiently calculate if ?    Consider the matrix and note that . Let us compute : a diagonal matrix.  How can the above calculation help us solve the original question? Rearranging,   And therefore the inner factors telescope:   Powers of a diagonal matrix are trivial: so      Powers of a Diagonalizable Matrix   If is an matrix and is an invertible matrix such that , then for each .     Diagonalizing a Matrix   The process of finding an invertible matrix and a diagonal matrix such that is known as diagonalizing the matrix , and is referred to as the diagonalizing matrix.     Questions     Are all matrices diagonalizable? If not, when is a matrix diagonalizable?    How can we diagonalize a matrix ? (How can we find and ?)        Eigenvalues and Eigenvectors   Eigenvalue and Eigenvector   Let be an matrix, a real number, and . If , then is an eigenvalue of , and is an eigenvector of corresponding to .     Verifying an Eigenvector  Let and . Then This means is an eigenvalue of and is an eigenvector of corresponding to eigenvalue .    A Geometric Eigenvector  Consider reflection with respect to the -axis in , with matrix , and take . Then so is an eigenvector of with eigenvalue . Geometrically this is obvious: points on the -axis do not move under this reflection.    Being an eigenvector is about direction. For from , the vector is an eigenvector: stays on the dashed line through . The vector is not: leaves the line through .            \\vec{v}  A\\vec{v} = 2\\vec{v}  \\vec{w}  A\\vec{w}         The Characteristic Polynomial   Question: How can we calculate the eigenvalues of a matrix? Rearranging the defining equation, This is a system of linear equations with coefficient matrix , and if there exists a nontrivial solution , then is not invertible and therefore    Characteristic Polynomial   The characteristic polynomial of an matrix is defined to be , where is the identity matrix.     Finding Eigenvalues   Find the eigenvalues of .     so giving and . These are exactly the diagonal entries of the matrix in .     Finding the Eigenvectors    Question: How can we calculate the eigenvectors of a matrix? Continue the previous example and find the eigenvectors.    For each eigenvalue we solve .   For :     For :    So and are basic eigenvectors of corresponding to eigenvalues and respectively. Note that these are precisely the columns of the matrix in  which answers the question of how was found.     "
},
{
  "id": "eg-power-motivation",
  "level": "2",
  "url": "sec-eigenvalues.html#eg-power-motivation",
  "type": "Example",
  "number": "8.1",
  "title": "Can We Compute <span class=\"process-math\">\\(A^{1000}\\)<\/span> Efficiently?",
  "body": " Can We Compute Efficiently?   Can we efficiently calculate if ?    Consider the matrix and note that . Let us compute : a diagonal matrix.  How can the above calculation help us solve the original question? Rearranging,   And therefore the inner factors telescope:   Powers of a diagonal matrix are trivial: so    "
},
{
  "id": "thm-powers-of-diagonalizable",
  "level": "2",
  "url": "sec-eigenvalues.html#thm-powers-of-diagonalizable",
  "type": "Theorem",
  "number": "8.2",
  "title": "Powers of a Diagonalizable Matrix.",
  "body": " Powers of a Diagonalizable Matrix   If is an matrix and is an invertible matrix such that , then for each .   "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-eigenvalues.html#def-diagonalizable",
  "type": "Definition",
  "number": "8.3",
  "title": "Diagonalizing a Matrix.",
  "body": " Diagonalizing a Matrix   The process of finding an invertible matrix and a diagonal matrix such that is known as diagonalizing the matrix , and is referred to as the diagonalizing matrix.   "
},
{
  "id": "rem-diagonalization-questions",
  "level": "2",
  "url": "sec-eigenvalues.html#rem-diagonalization-questions",
  "type": "Remark",
  "number": "8.4",
  "title": "Questions.",
  "body": " Questions     Are all matrices diagonalizable? If not, when is a matrix diagonalizable?    How can we diagonalize a matrix ? (How can we find and ?)     "
},
{
  "id": "def-eigenvalue",
  "level": "2",
  "url": "sec-eigenvalues.html#def-eigenvalue",
  "type": "Definition",
  "number": "8.5",
  "title": "Eigenvalue and Eigenvector.",
  "body": " Eigenvalue and Eigenvector   Let be an matrix, a real number, and . If , then is an eigenvalue of , and is an eigenvector of corresponding to .   "
},
{
  "id": "eg-eigenvector-check",
  "level": "2",
  "url": "sec-eigenvalues.html#eg-eigenvector-check",
  "type": "Example",
  "number": "8.6",
  "title": "Verifying an Eigenvector.",
  "body": " Verifying an Eigenvector  Let and . Then This means is an eigenvalue of and is an eigenvector of corresponding to eigenvalue .  "
},
{
  "id": "eg-eigenvector-reflection",
  "level": "2",
  "url": "sec-eigenvalues.html#eg-eigenvector-reflection",
  "type": "Example",
  "number": "8.7",
  "title": "A Geometric Eigenvector.",
  "body": " A Geometric Eigenvector  Consider reflection with respect to the -axis in , with matrix , and take . Then so is an eigenvector of with eigenvalue . Geometrically this is obvious: points on the -axis do not move under this reflection.  "
},
{
  "id": "fig-eigenvector-direction",
  "level": "2",
  "url": "sec-eigenvalues.html#fig-eigenvector-direction",
  "type": "Figure",
  "number": "8.8",
  "title": "",
  "body": " Being an eigenvector is about direction. For from , the vector is an eigenvector: stays on the dashed line through . The vector is not: leaves the line through .            \\vec{v}  A\\vec{v} = 2\\vec{v}  \\vec{w}  A\\vec{w}      "
},
{
  "id": "subsec-characteristic-polynomial-2",
  "level": "2",
  "url": "sec-eigenvalues.html#subsec-characteristic-polynomial-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Question: How can we calculate the eigenvalues of a matrix? "
},
{
  "id": "def-characteristic-polynomial",
  "level": "2",
  "url": "sec-eigenvalues.html#def-characteristic-polynomial",
  "type": "Definition",
  "number": "8.9",
  "title": "Characteristic Polynomial.",
  "body": " Characteristic Polynomial   The characteristic polynomial of an matrix is defined to be , where is the identity matrix.   "
},
{
  "id": "eg-characteristic-polynomial",
  "level": "2",
  "url": "sec-eigenvalues.html#eg-characteristic-polynomial",
  "type": "Example",
  "number": "8.10",
  "title": "Finding Eigenvalues.",
  "body": " Finding Eigenvalues   Find the eigenvalues of .     so giving and . These are exactly the diagonal entries of the matrix in .   "
},
{
  "id": "eg-finding-eigenvectors",
  "level": "2",
  "url": "sec-eigenvalues.html#eg-finding-eigenvectors",
  "type": "Example",
  "number": "8.11",
  "title": "Finding the Eigenvectors.",
  "body": " Finding the Eigenvectors    Question: How can we calculate the eigenvectors of a matrix? Continue the previous example and find the eigenvectors.    For each eigenvalue we solve .   For :     For :    So and are basic eigenvectors of corresponding to eigenvalues and respectively. Note that these are precisely the columns of the matrix in  which answers the question of how was found.   "
},
{
  "id": "sec-diagonalization",
  "level": "1",
  "url": "sec-diagonalization.html",
  "type": "Section",
  "number": "8.2",
  "title": "Multiplicity, Eigenspaces, and Diagonalization",
  "body": " Multiplicity, Eigenspaces, and Diagonalization   Multiplicity and Basic Eigenvectors   Basic Eigenvector   A basic eigenvector of an matrix is any nonzero multiple of a basic solution to , where is an eigenvalue of .     An Eigenvalue of Multiplicity Two   Find the eigenvalues and eigenvectors of .     We say that has multiplicity  .   For , solving : Hence the eigenvalue has two corresponding basic eigenvectors, and . Note that the basic eigenvectors are NOT scalar multiples of each other.   For :    In summary, has two eigenvalues and with multiplicities and respectively. There are two basic eigenvectors corresponding to and one basic eigenvector corresponding to .  Note that any linear combination of basic eigenvectors corresponding to the same eigenvalue is also an eigenvector of . For instance, since it follows that      Three Distinct Eigenvalues   Find the eigenvalues and eigenvectors of .    Expanding and factoring gives so , , . They all have multiplicity one.   Finding the eigenvectors.  So , , and are basic eigenvectors corresponding to , , and .      Eigenspaces  Note that if an matrix has distinct basic eigenvectors , then, as we have seen in the previous examples, the set is a linearly independent set (this follows from the definition of a basic eigenvector). Hence is a subspace.  In fact, since the vectors ( ) are solutions of , we know that Since this set is a subspace of , it is known as the eigenspace of .   Diagonalizability   Let be an matrix. Then is diagonalizable if and only if the matrix has linearly independent eigenvectors.    Assume that has linearly independent eigenvectors . Then the matrix is invertible and we have and hence is diagonalizable.  Conversely, if is diagonalizable, then there exists an invertible matrix such that is diagonal, hence . Now assume are columns of . Then comparing columns of gives, for , which means the diagonal entries of are the eigenvalues of and the are their corresponding basic eigenvectors, which are linearly independent since we know is invertible.     Revisiting the previous examples: note that in is and has distinct basic eigenvectors. As a result, is diagonalizable. Also, notice that in has distinct eigenvalues and each eigenvalue has a basic eigenvector corresponding to it, hence is diagonalizable as well.    Characterizing Diagonalizable Matrices   A square matrix is diagonalizable if and only if every eigenvalue of multiplicity yields exactly basic eigenvectors, i.e., the solution to has parameters.     A special case of this result is when every eigenvalue of a matrix has multiplicity one. An matrix with distinct eigenvalues is diagonalizable.     Similar Matrices   Similar Matrices   Let and be matrices and suppose there exists an invertible matrix such that . Then and are called similar matrices .     Two Similar Matrices  Let , , , so that . Then so and are similar matrices.   Observation. Here is obtained from by switching the columns, and right-multiplying by switches the columns of .    Similar Matrices Have the Same Eigenvalues   Let and be similar matrices such that , where , are matrices and is invertible. Then and have the same eigenvalues.     using in the first line. Hence and have the same characteristic polynomial and therefore the same eigenvalues.  In particular, if is diagonalizable, then is similar to a diagonal matrix , and hence the eigenvalues of and are the same, which means the diagonal entries of are the eigenvalues of .     Using Similarity to Find Eigenvalues   Use the previous theorem to find the eigenvalues of the following matrix:     Note that a row operation followed by a column operation produces a much simpler matrix. Applying (left-multiplying by ) and then (right-multiplying by ): where   Thus , or , so and are similar matrices and have the same eigenvalues. Since has a row of zeros in its lower-left corner, its characteristic polynomial factors immediately:      Another Addition to the Invertible Matrix Theorem   Let be an matrix. Then is invertible if and only if is not one of its eigenvalues.    We know that is invertible if and only if . To prove the above theorem, we need to show that if and only if is not one of its eigenvalues.  We first show that , where the are the eigenvalues of . Remember that the are roots of the characteristic polynomial, hence Now choose . Then Also, we know . Therefore   Finally, it is clear that if one of the eigenvalues is zero, then , and if then at least one of the eigenvalues must be zero.     "
},
{
  "id": "def-basic-eigenvector",
  "level": "2",
  "url": "sec-diagonalization.html#def-basic-eigenvector",
  "type": "Definition",
  "number": "8.12",
  "title": "Basic Eigenvector.",
  "body": " Basic Eigenvector   A basic eigenvector of an matrix is any nonzero multiple of a basic solution to , where is an eigenvalue of .   "
},
{
  "id": "eg-repeated-eigenvalue",
  "level": "2",
  "url": "sec-diagonalization.html#eg-repeated-eigenvalue",
  "type": "Example",
  "number": "8.13",
  "title": "An Eigenvalue of Multiplicity Two.",
  "body": " An Eigenvalue of Multiplicity Two   Find the eigenvalues and eigenvectors of .     We say that has multiplicity  .   For , solving : Hence the eigenvalue has two corresponding basic eigenvectors, and . Note that the basic eigenvectors are NOT scalar multiples of each other.   For :    In summary, has two eigenvalues and with multiplicities and respectively. There are two basic eigenvectors corresponding to and one basic eigenvector corresponding to .  Note that any linear combination of basic eigenvectors corresponding to the same eigenvalue is also an eigenvector of . For instance, since it follows that    "
},
{
  "id": "eg-three-distinct-eigenvalues",
  "level": "2",
  "url": "sec-diagonalization.html#eg-three-distinct-eigenvalues",
  "type": "Example",
  "number": "8.14",
  "title": "Three Distinct Eigenvalues.",
  "body": " Three Distinct Eigenvalues   Find the eigenvalues and eigenvectors of .    Expanding and factoring gives so , , . They all have multiplicity one.   Finding the eigenvectors.  So , , and are basic eigenvectors corresponding to , , and .   "
},
{
  "id": "subsec-eigenspace-3",
  "level": "2",
  "url": "sec-diagonalization.html#subsec-eigenspace-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenspace "
},
{
  "id": "thm-diagonalizable-iff",
  "level": "2",
  "url": "sec-diagonalization.html#thm-diagonalizable-iff",
  "type": "Theorem",
  "number": "8.15",
  "title": "Diagonalizability.",
  "body": " Diagonalizability   Let be an matrix. Then is diagonalizable if and only if the matrix has linearly independent eigenvectors.    Assume that has linearly independent eigenvectors . Then the matrix is invertible and we have and hence is diagonalizable.  Conversely, if is diagonalizable, then there exists an invertible matrix such that is diagonal, hence . Now assume are columns of . Then comparing columns of gives, for , which means the diagonal entries of are the eigenvalues of and the are their corresponding basic eigenvectors, which are linearly independent since we know is invertible.   "
},
{
  "id": "rem-revisit-examples",
  "level": "2",
  "url": "sec-diagonalization.html#rem-revisit-examples",
  "type": "Remark",
  "number": "8.16",
  "title": "",
  "body": " Revisiting the previous examples: note that in is and has distinct basic eigenvectors. As a result, is diagonalizable. Also, notice that in has distinct eigenvalues and each eigenvalue has a basic eigenvector corresponding to it, hence is diagonalizable as well.  "
},
{
  "id": "thm-characterizing-diagonalizable",
  "level": "2",
  "url": "sec-diagonalization.html#thm-characterizing-diagonalizable",
  "type": "Theorem",
  "number": "8.17",
  "title": "Characterizing Diagonalizable Matrices.",
  "body": " Characterizing Diagonalizable Matrices   A square matrix is diagonalizable if and only if every eigenvalue of multiplicity yields exactly basic eigenvectors, i.e., the solution to has parameters.   "
},
{
  "id": "rem-distinct-eigenvalues-diagonalizable",
  "level": "2",
  "url": "sec-diagonalization.html#rem-distinct-eigenvalues-diagonalizable",
  "type": "Remark",
  "number": "8.18",
  "title": "",
  "body": " A special case of this result is when every eigenvalue of a matrix has multiplicity one. An matrix with distinct eigenvalues is diagonalizable.  "
},
{
  "id": "def-similar",
  "level": "2",
  "url": "sec-diagonalization.html#def-similar",
  "type": "Definition",
  "number": "8.19",
  "title": "Similar Matrices.",
  "body": " Similar Matrices   Let and be matrices and suppose there exists an invertible matrix such that . Then and are called similar matrices .   "
},
{
  "id": "eg-similar-matrices",
  "level": "2",
  "url": "sec-diagonalization.html#eg-similar-matrices",
  "type": "Example",
  "number": "8.20",
  "title": "Two Similar Matrices.",
  "body": " Two Similar Matrices  Let , , , so that . Then so and are similar matrices.   Observation. Here is obtained from by switching the columns, and right-multiplying by switches the columns of .  "
},
{
  "id": "thm-similar-same-eigenvalues",
  "level": "2",
  "url": "sec-diagonalization.html#thm-similar-same-eigenvalues",
  "type": "Theorem",
  "number": "8.21",
  "title": "Similar Matrices Have the Same Eigenvalues.",
  "body": " Similar Matrices Have the Same Eigenvalues   Let and be similar matrices such that , where , are matrices and is invertible. Then and have the same eigenvalues.     using in the first line. Hence and have the same characteristic polynomial and therefore the same eigenvalues.  In particular, if is diagonalizable, then is similar to a diagonal matrix , and hence the eigenvalues of and are the same, which means the diagonal entries of are the eigenvalues of .   "
},
{
  "id": "eg-similar-shortcut",
  "level": "2",
  "url": "sec-diagonalization.html#eg-similar-shortcut",
  "type": "Example",
  "number": "8.22",
  "title": "Using Similarity to Find Eigenvalues.",
  "body": " Using Similarity to Find Eigenvalues   Use the previous theorem to find the eigenvalues of the following matrix:     Note that a row operation followed by a column operation produces a much simpler matrix. Applying (left-multiplying by ) and then (right-multiplying by ): where   Thus , or , so and are similar matrices and have the same eigenvalues. Since has a row of zeros in its lower-left corner, its characteristic polynomial factors immediately:    "
},
{
  "id": "thm-imt-eigenvalue",
  "level": "2",
  "url": "sec-diagonalization.html#thm-imt-eigenvalue",
  "type": "Theorem",
  "number": "8.23",
  "title": "Another Addition to the Invertible Matrix Theorem.",
  "body": " Another Addition to the Invertible Matrix Theorem   Let be an matrix. Then is invertible if and only if is not one of its eigenvalues.    We know that is invertible if and only if . To prove the above theorem, we need to show that if and only if is not one of its eigenvalues.  We first show that , where the are the eigenvalues of . Remember that the are roots of the characteristic polynomial, hence Now choose . Then Also, we know . Therefore   Finally, it is clear that if one of the eigenvalues is zero, then , and if then at least one of the eigenvalues must be zero.   "
},
{
  "id": "sec-markov-chains",
  "level": "1",
  "url": "sec-markov-chains.html",
  "type": "Section",
  "number": "9.1",
  "title": "Markov Chains and Steady States",
  "body": " Markov Chains and Steady States   A First Example   Alice's Lunch   Alice always eats lunch either at restaurant or restaurant . Suppose that  Initially she is equally likely to eat at each restaurant.  She never eats at two days in a row.   If she eats at restaurant one day, then the next day she is three times as likely to eat at as at .   Calculate the probabilities of her eating at and for the first week. What do you notice?   The state diagram of Alice's lunches. Each arrow carries the probability of moving from one restaurant to the other on the next day; the loop at is the probability of staying.        A  B    1  \\tfrac{1}{4}   \\tfrac{3}{4}         The initial state vector is , and the transition matrix is where the columns are indexed by today's restaurant ( , then ) and the rows by the next day's.  Iterating ,   The state vectors seem to be converging to . Also, we tried changing the initial state vector and it seemed that the transition matrix above causes the state vectors to converge to independent of the choice of .     Steady State  Sometimes, as in the example of the customer who ate lunch in restaurant or , the state vectors converge to a particular vector, called the steady state vector.    How do we know if a Markov chain has a steady state vector?  If a Markov chain has a steady state vector, how do we find it?  First we need to learn about regular and stochastic matrices.     Regular and Stochastic Matrices   Regular Matrix   The matrix is a regular matrix if, for some integer , all entries of are strictly positive.     A Regular Matrix   is a regular matrix, since and all the entries of are positive.    A Matrix That Is Not Regular   is not regular, since , , , and so on. In other words, hence always has zeros as its entries.    Stochastic Matrix   A square matrix is a stochastic matrix if its columns are probability vectors, i.e., each column has nonnegative entries summing to .     As an example, consider a stochastic matrix whose entries are all nonzero:     Stochastic Matrices Preserve Sums   Show that stochastic matrices (as defined above) preserve the sum of entries when acting on vectors in .    Assume is a stochastic matrix and . Then the th entry of is and so the sum of entries of . The inner sum equals one since is stochastic.     Every Stochastic Matrix Has Eigenvalue One   Show that every stochastic matrix has eigenvalue one.     (I) Note that is an eigenvector of with eigenvalue one. For example, with , Note that each entry of is equal to the sum of entries in a column of , and since the columns of are probability vectors, they add up to one.   (II) Also, , which means and have the same eigenvalues.  From (I) and (II): has eigenvalue one.     Eigenvalues of a Stochastic Matrix Satisfy   Show that eigenvalues of a stochastic matrix satisfy .    Assume is an eigenvector of with eigenvalue , and assume that is the entry of with largest absolute value, so for all .  Writing so that , and focusing on the th entry of , where the first inequality holds because the absolute value of a sum is at most the sum of absolute values, and the last step uses that is stochastic.  Therefore and hence . Finally, since and have the same eigenvalues, we have completed the proof.      Existence of a Unique Steady State   Existence of a Unique Steady State   If the transition matrix of a Markov chain is a regular stochastic matrix, then it has a unique steady state.     Finding the Steady State   If an regular matrix is the transition matrix of a Markov chain, then the steady state vector can be found by solving .     The Steady State for Alice's Lunch   Does the matrix have a unique steady state vector? If so, find the steady state vector.     (I)  is a stochastic matrix, since the sum of entries in each column is equal to one.   (II)  is a regular matrix, since and all the entries of are positive.  From (I) and (II), has a unique steady state vector.  To find it, solve , or , for :   Now, remember that entries of the state represent Alice's probabilities of eating at restaurants and , hence they must add up to one: so the steady state is Note that this is the same result that we got numerically earlier in .     Why the Steady State Is Reached   Prove the following statement: if is a regular transition matrix then has a steady state vector and furthermore for any initial vector we have .    A stochastic matrix is of the form Note that if , then and alternates between and , hence is not regular. Also, if , then , which is clearly not regular. Therefore, we can ignore these two cases.  To compute , we first diagonalize . Computing the eigenvalues and the eigenvectors gives Then   Now , since and therefore . Therefore   Now, if the initial probability vector is , then which is the probability vector corresponding to eigenvector with eigenvalue one, and is independent of .   Summary.   is a regular stochastic matrix.  is an initial probability vector.    is a probability eigenvector of corresponding to eigenvalue one.    The steady state vector is : . This means that to find the steady state vector of , we can find the eigenvector corresponding to eigenvalue one and normalize it.        "
},
{
  "id": "eg-alice-lunch",
  "level": "2",
  "url": "sec-markov-chains.html#eg-alice-lunch",
  "type": "Example",
  "number": "9.1",
  "title": "Alice’s Lunch.",
  "body": " Alice's Lunch   Alice always eats lunch either at restaurant or restaurant . Suppose that  Initially she is equally likely to eat at each restaurant.  She never eats at two days in a row.   If she eats at restaurant one day, then the next day she is three times as likely to eat at as at .   Calculate the probabilities of her eating at and for the first week. What do you notice?   The state diagram of Alice's lunches. Each arrow carries the probability of moving from one restaurant to the other on the next day; the loop at is the probability of staying.        A  B    1  \\tfrac{1}{4}   \\tfrac{3}{4}         The initial state vector is , and the transition matrix is where the columns are indexed by today's restaurant ( , then ) and the rows by the next day's.  Iterating ,   The state vectors seem to be converging to . Also, we tried changing the initial state vector and it seemed that the transition matrix above causes the state vectors to converge to independent of the choice of .   "
},
{
  "id": "rem-steady-state-questions",
  "level": "2",
  "url": "sec-markov-chains.html#rem-steady-state-questions",
  "type": "Remark",
  "number": "9.3",
  "title": "Steady State.",
  "body": " Steady State  Sometimes, as in the example of the customer who ate lunch in restaurant or , the state vectors converge to a particular vector, called the steady state vector.    How do we know if a Markov chain has a steady state vector?  If a Markov chain has a steady state vector, how do we find it?  First we need to learn about regular and stochastic matrices.  "
},
{
  "id": "def-regular-matrix",
  "level": "2",
  "url": "sec-markov-chains.html#def-regular-matrix",
  "type": "Definition",
  "number": "9.4",
  "title": "Regular Matrix.",
  "body": " Regular Matrix   The matrix is a regular matrix if, for some integer , all entries of are strictly positive.   "
},
{
  "id": "eg-regular",
  "level": "2",
  "url": "sec-markov-chains.html#eg-regular",
  "type": "Example",
  "number": "9.5",
  "title": "A Regular Matrix.",
  "body": " A Regular Matrix   is a regular matrix, since and all the entries of are positive.  "
},
{
  "id": "eg-not-regular",
  "level": "2",
  "url": "sec-markov-chains.html#eg-not-regular",
  "type": "Example",
  "number": "9.6",
  "title": "A Matrix That Is Not Regular.",
  "body": " A Matrix That Is Not Regular   is not regular, since , , , and so on. In other words, hence always has zeros as its entries.  "
},
{
  "id": "def-stochastic-matrix",
  "level": "2",
  "url": "sec-markov-chains.html#def-stochastic-matrix",
  "type": "Definition",
  "number": "9.7",
  "title": "Stochastic Matrix.",
  "body": " Stochastic Matrix   A square matrix is a stochastic matrix if its columns are probability vectors, i.e., each column has nonnegative entries summing to .   "
},
{
  "id": "rem-general-2x2-stochastic",
  "level": "2",
  "url": "sec-markov-chains.html#rem-general-2x2-stochastic",
  "type": "Remark",
  "number": "9.8",
  "title": "",
  "body": " As an example, consider a stochastic matrix whose entries are all nonzero:   "
},
{
  "id": "eg-stochastic-preserves-sum",
  "level": "2",
  "url": "sec-markov-chains.html#eg-stochastic-preserves-sum",
  "type": "Example",
  "number": "9.9",
  "title": "Stochastic Matrices Preserve Sums.",
  "body": " Stochastic Matrices Preserve Sums   Show that stochastic matrices (as defined above) preserve the sum of entries when acting on vectors in .    Assume is a stochastic matrix and . Then the th entry of is and so the sum of entries of . The inner sum equals one since is stochastic.   "
},
{
  "id": "eg-stochastic-eigenvalue-one",
  "level": "2",
  "url": "sec-markov-chains.html#eg-stochastic-eigenvalue-one",
  "type": "Example",
  "number": "9.10",
  "title": "Every Stochastic Matrix Has Eigenvalue One.",
  "body": " Every Stochastic Matrix Has Eigenvalue One   Show that every stochastic matrix has eigenvalue one.     (I) Note that is an eigenvector of with eigenvalue one. For example, with , Note that each entry of is equal to the sum of entries in a column of , and since the columns of are probability vectors, they add up to one.   (II) Also, , which means and have the same eigenvalues.  From (I) and (II): has eigenvalue one.   "
},
{
  "id": "eg-stochastic-eigenvalue-bound",
  "level": "2",
  "url": "sec-markov-chains.html#eg-stochastic-eigenvalue-bound",
  "type": "Example",
  "number": "9.11",
  "title": "Eigenvalues of a Stochastic Matrix Satisfy <span class=\"process-math\">\\(|\\lambda| \\leq 1\\)<\/span>.",
  "body": " Eigenvalues of a Stochastic Matrix Satisfy   Show that eigenvalues of a stochastic matrix satisfy .    Assume is an eigenvector of with eigenvalue , and assume that is the entry of with largest absolute value, so for all .  Writing so that , and focusing on the th entry of , where the first inequality holds because the absolute value of a sum is at most the sum of absolute values, and the last step uses that is stochastic.  Therefore and hence . Finally, since and have the same eigenvalues, we have completed the proof.   "
},
{
  "id": "thm-unique-steady-state",
  "level": "2",
  "url": "sec-markov-chains.html#thm-unique-steady-state",
  "type": "Theorem",
  "number": "9.12",
  "title": "Existence of a Unique Steady State.",
  "body": " Existence of a Unique Steady State   If the transition matrix of a Markov chain is a regular stochastic matrix, then it has a unique steady state.   "
},
{
  "id": "thm-finding-steady-state",
  "level": "2",
  "url": "sec-markov-chains.html#thm-finding-steady-state",
  "type": "Theorem",
  "number": "9.13",
  "title": "Finding the Steady State.",
  "body": " Finding the Steady State   If an regular matrix is the transition matrix of a Markov chain, then the steady state vector can be found by solving .   "
},
{
  "id": "eg-steady-state-alice",
  "level": "2",
  "url": "sec-markov-chains.html#eg-steady-state-alice",
  "type": "Example",
  "number": "9.14",
  "title": "The Steady State for Alice’s Lunch.",
  "body": " The Steady State for Alice's Lunch   Does the matrix have a unique steady state vector? If so, find the steady state vector.     (I)  is a stochastic matrix, since the sum of entries in each column is equal to one.   (II)  is a regular matrix, since and all the entries of are positive.  From (I) and (II), has a unique steady state vector.  To find it, solve , or , for :   Now, remember that entries of the state represent Alice's probabilities of eating at restaurants and , hence they must add up to one: so the steady state is Note that this is the same result that we got numerically earlier in .   "
},
{
  "id": "eg-two-by-two-steady-state-proof",
  "level": "2",
  "url": "sec-markov-chains.html#eg-two-by-two-steady-state-proof",
  "type": "Example",
  "number": "9.15",
  "title": "Why the Steady State Is Reached.",
  "body": " Why the Steady State Is Reached   Prove the following statement: if is a regular transition matrix then has a steady state vector and furthermore for any initial vector we have .    A stochastic matrix is of the form Note that if , then and alternates between and , hence is not regular. Also, if , then , which is clearly not regular. Therefore, we can ignore these two cases.  To compute , we first diagonalize . Computing the eigenvalues and the eigenvectors gives Then   Now , since and therefore . Therefore   Now, if the initial probability vector is , then which is the probability vector corresponding to eigenvector with eigenvalue one, and is independent of .   Summary.   is a regular stochastic matrix.  is an initial probability vector.    is a probability eigenvector of corresponding to eigenvalue one.    The steady state vector is : . This means that to find the steady state vector of , we can find the eigenvector corresponding to eigenvalue one and normalize it.      "
},
{
  "id": "sec-more-markov",
  "level": "1",
  "url": "sec-more-markov.html",
  "type": "Section",
  "number": "9.2",
  "title": "Long-Run Behaviour: Two More Examples",
  "body": " Long-Run Behaviour: Two More Examples   When a matrix is diagonalizable, writing the initial state in a basis of eigenvectors makes the long-run behaviour transparent: the term belonging to the largest eigenvalue dominates, and everything else decays.    Truck Rentals   A truck rental company has locations, where you can rent moving trucks. You can return them to any other location. For simplicity, suppose that every customer returns their truck the next day. Let be the vector whose entries are the number of trucks in locations , , and , respectively. Let be the matrix whose -entry is the probability that a customer renting a truck from location returns it to location . Consider Assume that initially the trucks are distributed in the locations as , and find out the percentages of trucks that will be distributed in each location in the long run.    Expanding and factoring gives Here is the dominant eigenvalue .   For : row reducing gives   Similarly, for the other eigenvalues we find The set is linearly independent since the are eigenvectors of for distinct eigenvalues. Hence we can write and    (I) When , the dominant term is , since and so those terms decay to zero.   (II) In this problem , which means . Therefore In the long run the trucks distribute themselves as , , and among the three locations.     An Owl Population   Consider an owl population of adult females and juvenile females. As biologists, we wish to study the growth of the population having determined the following.   The number of juvenile females hatched in any year is twice the number of adult females in the previous year.   Half the adult females in any year survive to the next year.   One quarter of the juvenile females in any year survive to adulthood.   Will the owls survive?    Let be the number of adult females after years and let be the number of juvenile females after years. The three conditions say   Writing the state vector after years as with , we get   The matrix has two eigenvalues and , with eigenvectors and . Hence   Therefore   We can also approximate directly from the dominant eigenvalue. Writing , so which agrees with our previous result as .  So the owls survive: since , the population neither grows without bound nor dies out, but settles at roughly adult and juvenile females.    "
},
{
  "id": "eg-truck-rental",
  "level": "2",
  "url": "sec-more-markov.html#eg-truck-rental",
  "type": "Example",
  "number": "9.16",
  "title": "Truck Rentals.",
  "body": " Truck Rentals   A truck rental company has locations, where you can rent moving trucks. You can return them to any other location. For simplicity, suppose that every customer returns their truck the next day. Let be the vector whose entries are the number of trucks in locations , , and , respectively. Let be the matrix whose -entry is the probability that a customer renting a truck from location returns it to location . Consider Assume that initially the trucks are distributed in the locations as , and find out the percentages of trucks that will be distributed in each location in the long run.    Expanding and factoring gives Here is the dominant eigenvalue .   For : row reducing gives   Similarly, for the other eigenvalues we find The set is linearly independent since the are eigenvectors of for distinct eigenvalues. Hence we can write and    (I) When , the dominant term is , since and so those terms decay to zero.   (II) In this problem , which means . Therefore In the long run the trucks distribute themselves as , , and among the three locations.   "
},
{
  "id": "eg-owls",
  "level": "2",
  "url": "sec-more-markov.html#eg-owls",
  "type": "Example",
  "number": "9.17",
  "title": "An Owl Population.",
  "body": " An Owl Population   Consider an owl population of adult females and juvenile females. As biologists, we wish to study the growth of the population having determined the following.   The number of juvenile females hatched in any year is twice the number of adult females in the previous year.   Half the adult females in any year survive to the next year.   One quarter of the juvenile females in any year survive to adulthood.   Will the owls survive?    Let be the number of adult females after years and let be the number of juvenile females after years. The three conditions say   Writing the state vector after years as with , we get   The matrix has two eigenvalues and , with eigenvectors and . Hence   Therefore   We can also approximate directly from the dominant eigenvalue. Writing , so which agrees with our previous result as .  So the owls survive: since , the population neither grows without bound nor dies out, but settles at roughly adult and juvenile females.   "
},
{
  "id": "sec-epidemic-sage",
  "level": "1",
  "url": "sec-epidemic-sage.html",
  "type": "Section",
  "number": "9.3",
  "title": "Epidemic Dynamics",
  "body": " Epidemic Dynamics   In this section we model the spread of a disease through a population as a Markov chain, and we use the computer algebra system Sage to simulate the model and plot how the population evolves over time. In the process we will revisit the main themes of this chapter: transition matrices, stochastic matrices, steady states, and eigenvalues.    The Model  A disease is introduced into a population. In each period (say, days) we count the fraction of the population that is in four different infection states:    Susceptible. These individuals can acquire the disease the next day.    Infected. These individuals have the disease.     Recovered (and immune). These individuals had the disease and survived, and now have immunity.     Deceased. These individuals had the disease, and unfortunately died from it.     Let , , , and be the fractions of the population in each of the four states on day , and collect them into the state vector For example, means that on day , of the population is susceptible, is infected, is recovered and immune, and has died from the disease. Note that the entries of are nonnegative and add up to one, so is a probability vector.  Our model assumes the following happens over each day.    of the susceptible population will acquire the disease. (The other will remain susceptible.)     of the infected population will die from the disease, will recover and acquire immunity, and will recover and not acquire immunity (and therefore, become susceptible). The remaining will remain infected.    Those who have recovered with immunity and those who have died remain in those states.     Let us translate these rules into equations. Tomorrow's susceptible individuals are today's susceptible individuals who did not become infected, which is , plus today's infected individuals who recovered without immunity, which is . Tomorrow's infected individuals are those who remain infected, , plus the susceptible individuals who acquire the disease, . Similar arguments for the last two states give the system We put these together in matrix form as , where the transition matrix is   Each column of is a probability vector, so is a stochastic matrix as in . We will simulate the model starting from : everyone is susceptible, and the disease is about to be introduced. Iterating by hand for hundreds of days is hopeless, so we hand the iteration to Sage.    Setting Up the Model in Sage  Each block of code below is an interactive Sage cell : press Evaluate to run it in your browser. (You can also copy the code into the Sage cell server or a CoCalc worksheet.) Within a single page the cells share their variables, but they must be evaluated in order, so run each cell as you reach it.   Step 1: enter and . In Sage, matrix(QQ, [...]) builds a matrix from a list of rows, and vector(QQ, [...]) builds a vector. The ring QQ tells Sage to store the entries as exact rational numbers, so no rounding errors accumulate during the iteration.    Step 2: check that is stochastic. Before simulating, it is good practice to make sure we typed the matrix correctly. The command below computes the sum of the entries of each column of ; every sum should equal one.    Step 3: compute the first few days. Matrix-vector multiplication in Sage is written T*S , so one day of the epidemic is one multiplication. The loop below computes ; the method .n(digits=4) displays each exact answer as a decimal with four significant digits.   Check the first line against the model: after one day we expect , since on day zero there is nobody infected yet, and of the susceptible population acquires the disease.    Simulating and Plotting the Epidemic   Step 4: simulate days and plot the four fractions. To draw the graphs we store the whole history of the simulation: the list history holds , where each new state is obtained by multiplying the previous one ( history[-1] is the last entry of the list) by . Then, for each state , the command line plots the points for and connects them with a curve. (In Sage, list and vector indices start at zero, so the entry is written history[k][j-1] ; the loop variable j below runs through .) Adding the four plots combines them into a single figure with a legend.   You should see the susceptible fraction decay from one towards zero, the infected fraction rise to a peak of roughly around day and then die out, and the recovered and deceased fractions climb towards limiting values. The simulation shows that after around days, the state converges to one with a little under of the population deceased, and the remaining population immune.    The Long Run   Step 5: where does the epidemic end? The plot suggests that the state vectors converge. To see the limit numerically, ask Sage for a state far in the future, say .   So in the long run about of the population ends up recovered and immune, and about deceased. (In you will show that the exact limits are and .)   Step 6: compare with the eigenvalue point of view. By , the stochastic matrix must have eigenvalue one. Let us ask Sage for all the eigenvalues and eigenvectors of . The command below returns a list of triples (eigenvalue, [eigenvectors], multiplicity) .   Sage reports the eigenvalue with multiplicity two , together with the two independent eigenvectors and two further eigenvalues with absolute value less than one. This is consistent with what the simulation showed: the states everyone recovered and everyone deceased are both fixed by , and so is any probability vector built from them. The epidemic therefore has infinitely many steady states, and which one the population converges to depends on the initial state .   Why the Steady State Is Not Unique  Does this contradict ? No: that theorem assumes the transition matrix is regular , and is not. However high the power , its third and fourth columns remain and (recovered and deceased individuals never leave their states), so always has zero entries. You can confirm this in Sage by evaluating, say, T^50 .       Rerun the simulation of with the initial state . Do the state vectors still converge? Do they converge to the same limit as before? Explain how your answer is consistent with .      Suppose a vaccine becomes available, and each day of the susceptible population is vaccinated, acquiring immunity without ever being infected (so vaccinated individuals move directly from susceptible to recovered). Modify the equations of the model, write down the new transition matrix, and adapt your Sage simulation. How does the graph change, and what fraction of the population is deceased in the long run?      Show that with , the deceased fraction converges to exactly , and the recovered fraction to exactly .    Each day, is added to the deceased fraction and to the recovered fraction, so their limits are and in the ratio . Since eventually everyone is either recovered or deceased, the two limits add up to one.      Use your history list from the simulation to find the day on which the infected fraction peaks, and the value of the peak. (Try max((history[k][1], k) for k in range(N + 1)) , which compares the pairs .)     "
},
{
  "id": "subsec-epidemic-model-2",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-model-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Susceptible. Infected. Recovered Deceased. "
},
{
  "id": "subsec-epidemic-sage-setup-2",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-sage-setup-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sage cell Evaluate "
},
{
  "id": "subsec-epidemic-sage-setup-3",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-sage-setup-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 1: enter and . "
},
{
  "id": "subsec-epidemic-sage-setup-5",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-sage-setup-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 2: check that is stochastic. "
},
{
  "id": "subsec-epidemic-sage-setup-7",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-sage-setup-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 3: compute the first few days. "
},
{
  "id": "subsec-epidemic-sage-plot-2",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-sage-plot-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 4: simulate days and plot the four fractions. "
},
{
  "id": "subsec-epidemic-long-run-2",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-long-run-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 5: where does the epidemic end? "
},
{
  "id": "subsec-epidemic-long-run-5",
  "level": "2",
  "url": "sec-epidemic-sage.html#subsec-epidemic-long-run-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Step 6: compare with the eigenvalue point of view. "
},
{
  "id": "rem-epidemic-not-regular",
  "level": "2",
  "url": "sec-epidemic-sage.html#rem-epidemic-not-regular",
  "type": "Remark",
  "number": "9.18",
  "title": "Why the Steady State Is Not Unique.",
  "body": " Why the Steady State Is Not Unique  Does this contradict ? No: that theorem assumes the transition matrix is regular , and is not. However high the power , its third and fourth columns remain and (recovered and deceased individuals never leave their states), so always has zero entries. You can confirm this in Sage by evaluating, say, T^50 .  "
},
{
  "id": "exer-epidemic-initial-state",
  "level": "2",
  "url": "sec-epidemic-sage.html#exer-epidemic-initial-state",
  "type": "Exercise",
  "number": "9.3.5.1",
  "title": "",
  "body": "  Rerun the simulation of with the initial state . Do the state vectors still converge? Do they converge to the same limit as before? Explain how your answer is consistent with .   "
},
{
  "id": "exer-epidemic-vaccination",
  "level": "2",
  "url": "sec-epidemic-sage.html#exer-epidemic-vaccination",
  "type": "Exercise",
  "number": "9.3.5.2",
  "title": "",
  "body": "  Suppose a vaccine becomes available, and each day of the susceptible population is vaccinated, acquiring immunity without ever being infected (so vaccinated individuals move directly from susceptible to recovered). Modify the equations of the model, write down the new transition matrix, and adapt your Sage simulation. How does the graph change, and what fraction of the population is deceased in the long run?   "
},
{
  "id": "exer-epidemic-exact-limit",
  "level": "2",
  "url": "sec-epidemic-sage.html#exer-epidemic-exact-limit",
  "type": "Exercise",
  "number": "9.3.5.3",
  "title": "",
  "body": "  Show that with , the deceased fraction converges to exactly , and the recovered fraction to exactly .    Each day, is added to the deceased fraction and to the recovered fraction, so their limits are and in the ratio . Since eventually everyone is either recovered or deceased, the two limits add up to one.   "
},
{
  "id": "exer-epidemic-peak",
  "level": "2",
  "url": "sec-epidemic-sage.html#exer-epidemic-peak",
  "type": "Exercise",
  "number": "9.3.5.4",
  "title": "",
  "body": "  Use your history list from the simulation to find the day on which the infected fraction peaks, and the value of the peak. (Try max((history[k][1], k) for k in range(N + 1)) , which compares the pairs .)   "
},
{
  "id": "sec-pagerank",
  "level": "1",
  "url": "sec-pagerank.html",
  "type": "Section",
  "number": "9.4",
  "title": "The PageRank Algorithm: The 25 Billion Dollar Eigenvector",
  "body": " The PageRank Algorithm: The 25 Billion Dollar Eigenvector   The PageRank algorithm is one of many algorithms that Google uses to determine the relative importance of a webpage. In 1998, Brin and Page posed the original formulation and subsequent solution of the PageRank problem in the Markov chain realm. Google owes its success partly to its PageRank algorithm, which enables ranking the pages and thereby presenting to the user the most relevant and helpful pages first. Here, we will study a simplified version of this algorithm.  The PageRank algorithm models the internet with a directed graph. Each webpage is a node, and there is an edge from node to node if page links to page . Let be the websites linking to page and let be the websites that page links to.  The PageRank algorithm ranks pages by how many other pages link to them. A link from a more important page counts more than one from a less important page. For example, in we would expect node to have a very high rank because every other node links to it. Consequently, we would expect node to have a fairly high rank because node links to it, even though node is the only node to do so.    This directed graph describes the links between webpages.                          0  1  7  2  3  4  5  6        For example, in , Also, we will use the notation to represent the number of webpages that page links to. For example, .    The Random Surfer  The PageRank algorithm assumes that a surfer chooses a starting webpage randomly. Then, if the surfer is at page , they randomly select a page from to visit next. This means that the surfer's chance of being on page at time is determined by where they were at time .   Question 1   A surfer starts by choosing a webpage randomly. Suppose the internet has webpages, and let be the likelihood that the surfer is on page at time . What are the probabilities and ?     The sum runs over the in-linking pages, and the denominator is the number of out-links of the linking page .   Key ideas.    A page is highly ranked if it is cited often by other pages. The importance of page increases if it is linked to from page .    Also, the increment in the importance of page should depend on the importance of the linking page ; the increment in the importance of page should be inversely proportional to the number of out-links from page , which is denoted by .        Question 2   Find .    Since , , and , and pages , , are the ones linking to page ,      Question 3   For the graph in , find a matrix which will represent the evolution of probabilities from time to time .    Reading each column as the out-links of page , For example, row reproduces .     Check it in Sage. As in , you can confirm these computations with the interactive Sage cells below: press Evaluate to run one. The cells on this page share their variables, so run them in order. The cell below enters , computes one step from the uniform start , and then computes the sum of each column of .   Notice that every column of sums to one except column , which sums to zero: is not a stochastic matrix, because page is a dangling page. This is exactly the problem addressed next.    Pages with No Outbound Links  On the Internet many pages are dangling or sink links , without any outbound links. What happens to the random surfer who visits such a page? The simplest thing is to imagine that the surfer chooses the next page entirely at random.   Question 4   Modify the directed graph of and the probabilities assuming that surfers visiting a page with no outbound link will choose another page at random.    Page is the dangling node, so we replace its column of zeros by a column of s: The probability for page gains an additional term: Now is column stochastic and will preserve probabilities.     Check it in Sage. The cell below builds from by replacing column with a column of s, and then verifies that every column of now sums to one, i.e. that is stochastic. (It uses H0 from the previous cell, so evaluate that one first.)     Making the Model More Realistic (Adding Boredom)  Previously we assumed that the current page must link to the next page. However, the model is more realistic if we assume that the surfer sometimes gets bored and randomly picks a new starting page.   Question 5   Denote the probability that a surfer stays interested at time step by a constant , called the damping factor . How would the probabilities be modified?     since with probability the surfer loses interest and will choose another page at random.     Question 6   Express the result of the previous question as a matrix equation and show that it represents a Markov chain whose transition matrix is regular and stochastic.     where the second step uses that the entries of sum to one.  Note that is a stochastic matrix and is also a stochastic matrix. Therefore is also a stochastic matrix: Also, it is obvious that is a regular matrix, since every entry is strictly positive.     Question 7   Choose and find the steady state of the Markov chain derived in the previous question for the example shown in .    With we calculate the eigenvector corresponding to eigenvalue one, normalized to be a probability vector:   As expected, page has the highest rank. Page has a higher rank than page , because it has been linked to by the highest ranked page (page ). The above probability vector provides a comparison between the importance of the webpages.     Check it in Sage. The cell below builds with , where ones_matrix(QQ, N, N) is the matrix of ones. Since is a regular stochastic matrix, guarantees a unique steady state, and by we can reach it by iterating from any starting probability vector. The cell computes from the uniform start; compare the output with above. (It uses H from the previous cell, so evaluate that one first.)   Alternatively, following , we can find the steady state directly by solving : the command (T - 1).right_kernel() computes the null space of , and dividing its basis vector by the sum of its entries normalizes it into a probability vector.   Both computations agree with the ranking found above: page first, page second. As an experiment, try changing the damping factor to or in the first cell and re-running both cells. Does the ranking of the pages change?   "
},
{
  "id": "fig-pagerank-graph",
  "level": "2",
  "url": "sec-pagerank.html#fig-pagerank-graph",
  "type": "Figure",
  "number": "9.19",
  "title": "",
  "body": " This directed graph describes the links between webpages.                          0  1  7  2  3  4  5  6      "
},
{
  "id": "rem-in-out-notation",
  "level": "2",
  "url": "sec-pagerank.html#rem-in-out-notation",
  "type": "Remark",
  "number": "9.20",
  "title": "",
  "body": " For example, in , Also, we will use the notation to represent the number of webpages that page links to. For example, .  "
},
{
  "id": "eg-pagerank-q1",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q1",
  "type": "Example",
  "number": "9.21",
  "title": "Question 1.",
  "body": " Question 1   A surfer starts by choosing a webpage randomly. Suppose the internet has webpages, and let be the likelihood that the surfer is on page at time . What are the probabilities and ?     The sum runs over the in-linking pages, and the denominator is the number of out-links of the linking page .   Key ideas.    A page is highly ranked if it is cited often by other pages. The importance of page increases if it is linked to from page .    Also, the increment in the importance of page should depend on the importance of the linking page ; the increment in the importance of page should be inversely proportional to the number of out-links from page , which is denoted by .      "
},
{
  "id": "eg-pagerank-q2",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q2",
  "type": "Example",
  "number": "9.22",
  "title": "Question 2.",
  "body": " Question 2   Find .    Since , , and , and pages , , are the ones linking to page ,    "
},
{
  "id": "eg-pagerank-q3",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q3",
  "type": "Example",
  "number": "9.23",
  "title": "Question 3.",
  "body": " Question 3   For the graph in , find a matrix which will represent the evolution of probabilities from time to time .    Reading each column as the out-links of page , For example, row reproduces .   "
},
{
  "id": "subsec-pagerank-probabilities-6",
  "level": "2",
  "url": "sec-pagerank.html#subsec-pagerank-probabilities-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check it in Sage. Evaluate "
},
{
  "id": "subsec-dangling-links-2",
  "level": "2",
  "url": "sec-pagerank.html#subsec-dangling-links-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dangling sink links "
},
{
  "id": "eg-pagerank-q4",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q4",
  "type": "Example",
  "number": "9.24",
  "title": "Question 4.",
  "body": " Question 4   Modify the directed graph of and the probabilities assuming that surfers visiting a page with no outbound link will choose another page at random.    Page is the dangling node, so we replace its column of zeros by a column of s: The probability for page gains an additional term: Now is column stochastic and will preserve probabilities.   "
},
{
  "id": "subsec-dangling-links-4",
  "level": "2",
  "url": "sec-pagerank.html#subsec-dangling-links-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check it in Sage. "
},
{
  "id": "eg-pagerank-q5",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q5",
  "type": "Example",
  "number": "9.25",
  "title": "Question 5.",
  "body": " Question 5   Denote the probability that a surfer stays interested at time step by a constant , called the damping factor . How would the probabilities be modified?     since with probability the surfer loses interest and will choose another page at random.   "
},
{
  "id": "eg-pagerank-q6",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q6",
  "type": "Example",
  "number": "9.26",
  "title": "Question 6.",
  "body": " Question 6   Express the result of the previous question as a matrix equation and show that it represents a Markov chain whose transition matrix is regular and stochastic.     where the second step uses that the entries of sum to one.  Note that is a stochastic matrix and is also a stochastic matrix. Therefore is also a stochastic matrix: Also, it is obvious that is a regular matrix, since every entry is strictly positive.   "
},
{
  "id": "eg-pagerank-q7",
  "level": "2",
  "url": "sec-pagerank.html#eg-pagerank-q7",
  "type": "Example",
  "number": "9.27",
  "title": "Question 7.",
  "body": " Question 7   Choose and find the steady state of the Markov chain derived in the previous question for the example shown in .    With we calculate the eigenvector corresponding to eigenvalue one, normalized to be a probability vector:   As expected, page has the highest rank. Page has a higher rank than page , because it has been linked to by the highest ranked page (page ). The above probability vector provides a comparison between the importance of the webpages.   "
},
{
  "id": "subsec-damping-6",
  "level": "2",
  "url": "sec-pagerank.html#subsec-damping-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Check it in Sage. "
},
{
  "id": "sec-coupled-oscillators",
  "level": "1",
  "url": "sec-coupled-oscillators.html",
  "type": "Section",
  "number": "9.5",
  "title": "Coupled Oscillators and Normal Modes",
  "body": " Coupled Oscillators and Normal Modes   Our applications so far have used eigenvalues to understand what happens when a matrix is applied over and over. This closing section turns to a genuinely physical problem two carts vibrating between two walls where diagonalization does something different: it takes two equations that are hopelessly tangled together and replaces them with two independent equations we already know how to solve. The eigenvectors turn out to be visible in the laboratory as special patterns of motion called normal modes , and the eigenvalues set their frequencies.  Before any formulas, watch the system move. The animation below tells the whole story of this section without a single equation: a general motion looks chaotic, two special starting shapes swing forever with a steady rhythm, and the chaotic motion is secretly just the two special ones added together.   Two identical carts coupled by three identical springs. Press play to watch the full story, or jump to a scene with the buttons: the messy general motion, the two simple patterns ( mode 1 and mode 2 ), and the punchline that the messy motion is their sum.      The Equations of Motion  Two carts, each of mass , sit on a frictionless track between two walls. Three identical springs, each with stiffness , connect wall to cart, cart to cart, and cart to wall. Write and for the displacement of each cart from its resting position, with the same direction counted as positive for both. When both displacements are zero, every spring is relaxed and nothing moves.  Now displace the carts and account for the forces, as in . A spring pushes or pulls in proportion to how much it is stretched, with proportionality constant . The first cart feels the outer spring on its left, stretched by , pulling it back with force ; it also feels the middle spring, whose length has changed by , pulling it forward with force . Newton's law mass times acceleration equals total force gives and the mirror-image argument for the second cart gives Here is the second derivative with respect to time, that is, the acceleration. The only fact from calculus we will need is that so cosines and sines of frequency reproduce themselves, scaled by , after two derivatives.   The two carts (a) at rest and (b) displaced by and , drawn with . Blue arrows are forces from the outer springs and orange arrows are forces from the middle spring: the stretched left spring pulls the first cart back with magnitude , while the stretched middle spring pulls it forward with magnitude and pulls the second cart back equally hard; the compressed right spring pushes the second cart back with magnitude .                                                                           1   2   \\ell   u   u  \\text{(a) Both carts pushed right by the same amount: } u_1 = u_2 = u                                                                       1   2   \\ell   u   u  \\text{(b) Half a period later: both carts left by the same amount}       The two equations are coupled : appears in the equation for and vice versa, because the middle spring ties the carts together. Neither equation can be solved on its own. But the system is begging to be written with a matrix. Collecting the displacements into and differentiating entrywise, All the physics the masses, the springs, the geometry is now stored in the single matrix .    Diagonalization Decouples the Equations  If were diagonal, the two equations would not talk to each other at all, and each would be the familiar equation of a single mass on a single spring. So we diagonalize. The characteristic polynomial of is so the eigenvalues are and , with corresponding eigenvectors Following , we assemble   Now comes the decisive step: change coordinates so that the eigenvectors become the axes. Define , so holds the coordinates of the displacement vector relative to the eigenvector basis. Substituting into the equation of motion and multiplying both sides by , since . Written out, the new system is The coupling is gone. Each equation involves only its own unknown, and each says that the unknown reproduces itself, negatively scaled, after two derivatives. By the calculus fact above, the solutions are cosines and sines: for constants determined by how the motion starts.  Translating back with , every motion of the two carts has the form This formula is the entire section in one line, and it is worth reading slowly alongside the animation in .      The slow mode. If the motion starts along the eigenvector , it stays along it forever: both carts swing in unison at frequency . Physically, moving both carts the same way leaves the middle spring at its natural length, so the coupling spring never acts each cart oscillates as if it felt only one outer spring, as shows. That is the mode 1 scene of the movie, where the middle spring stays quiet.     The fast mode. If the motion starts along , the carts swing in opposition at frequency . Now the middle spring is compressed and stretched by twice each cart's displacement, as shows, so every cart feels a stronger restoring force and vibrates faster the larger eigenvalue is precisely this extra stiffness. That is mode 2, where the middle spring works hardest.     Everything else. A general motion is not simple but it is a sum of the two simple ones, in exactly the way a general vector in is a combination of the two eigenvectors.      The slow mode, in two snapshots of the motion that starts along . Both carts are always displaced by the same amount in the same direction, so the distance between them and with it the length of the middle spring never changes. The coupling spring is therefore never stretched or compressed and exerts no force at all: each cart swings as though held by its outer spring alone, which is why this mode is the slower one, at frequency . Dashed lines mark the rest positions.                                                                         1   2   \\ell   u   u  \\text{(a) Both carts pushed right by the same amount: } u_1 = u_2 = u                                                                     1   2   \\ell   u   u  \\text{(b) Half a period later: both carts left by the same amount}        The fast mode, drawn to the same scale as : the motion that starts along . The carts are always displaced by in opposite directions, so the middle spring is squeezed and stretched by twice what either cart moves while both outer springs act together. Every spring now pulls back on every cart, the restoring force is stronger than in the slow mode, and the carts vibrate faster: this extra stiffness is the larger eigenvalue , giving .                                                                           1   2   \\ell - 2u   u   u  \\text{(a) The carts move toward each other: } u_1 = u,\\ u_2 = -u                                                                       1   2   \\ell + 2u   u   u  \\text{(b) Half a period later: they move apart}       These special patterns of motion are called the normal modes of the system, and their frequencies are its natural frequencies . The dictionary between the physics and the linear algebra is exact: normal modes are eigenvectors of , and each natural frequency is for the corresponding eigenvalue .    Solving a Specific Motion   Pull One Cart and Let Go   At time , the first cart is pulled one unit aside while the second is held at rest in place, and both are released from rest: in symbols, and . Find . This is exactly the messy motion of .    Since both carts start at rest, every sine coefficient vanishes: the derivative of the general solution at is , and since are linearly independent this is only when .  The cosine coefficients are the coordinates of the starting position in the eigenvector basis. We need which gives . Therefore or, cart by cart,   The formula explains everything the movie shows. The second cart starts at rest, but its two cosines drift out of step and it begins to swing while the first cart calms down: the carts trade energy back and forth through the middle spring. And because is irrational, the two cosines never return to step simultaneously the motion never exactly repeats itself, even though it is built from two perfectly periodic ingredients. The animation runs precisely this solution: equal parts of the slow mode and the fast mode, with frequencies in the ratio .     The Bigger Picture  Nothing here depended on having exactly two carts. A chain of carts, a vibrating molecule, a bridge deck, or a drumhead all lead to the same template: a coupled system for some matrix built from the stiffnesses, decoupled by diagonalizing . The eigenvectors are the shapes in which the structure likes to vibrate, and the square roots of the eigenvalues set the tones. This is why engineers computing the resonant frequencies of a building and chemists reading the infrared spectrum of a molecule are both, at bottom, finding eigenvalues.    "
},
{
  "id": "sec-coupled-oscillators-2-1",
  "level": "2",
  "url": "sec-coupled-oscillators.html#sec-coupled-oscillators-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal modes "
},
{
  "id": "fig-coupled-oscillators-movie",
  "level": "2",
  "url": "sec-coupled-oscillators.html#fig-coupled-oscillators-movie",
  "type": "Figure",
  "number": "9.28",
  "title": "",
  "body": " Two identical carts coupled by three identical springs. Press play to watch the full story, or jump to a scene with the buttons: the messy general motion, the two simple patterns ( mode 1 and mode 2 ), and the punchline that the messy motion is their sum.   "
},
{
  "id": "fig-spring-forces",
  "level": "2",
  "url": "sec-coupled-oscillators.html#fig-spring-forces",
  "type": "Figure",
  "number": "9.29",
  "title": "",
  "body": " The two carts (a) at rest and (b) displaced by and , drawn with . Blue arrows are forces from the outer springs and orange arrows are forces from the middle spring: the stretched left spring pulls the first cart back with magnitude , while the stretched middle spring pulls it forward with magnitude and pulls the second cart back equally hard; the compressed right spring pushes the second cart back with magnitude .                                                                           1   2   \\ell   u   u  \\text{(a) Both carts pushed right by the same amount: } u_1 = u_2 = u                                                                       1   2   \\ell   u   u  \\text{(b) Half a period later: both carts left by the same amount}      "
},
{
  "id": "subsec-oscillators-decoupling-5",
  "level": "2",
  "url": "sec-coupled-oscillators.html#subsec-oscillators-decoupling-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "The slow mode. The fast mode. Everything else. "
},
{
  "id": "fig-slow-mode",
  "level": "2",
  "url": "sec-coupled-oscillators.html#fig-slow-mode",
  "type": "Figure",
  "number": "9.30",
  "title": "",
  "body": " The slow mode, in two snapshots of the motion that starts along . Both carts are always displaced by the same amount in the same direction, so the distance between them and with it the length of the middle spring never changes. The coupling spring is therefore never stretched or compressed and exerts no force at all: each cart swings as though held by its outer spring alone, which is why this mode is the slower one, at frequency . Dashed lines mark the rest positions.                                                                         1   2   \\ell   u   u  \\text{(a) Both carts pushed right by the same amount: } u_1 = u_2 = u                                                                     1   2   \\ell   u   u  \\text{(b) Half a period later: both carts left by the same amount}      "
},
{
  "id": "fig-fast-mode",
  "level": "2",
  "url": "sec-coupled-oscillators.html#fig-fast-mode",
  "type": "Figure",
  "number": "9.31",
  "title": "",
  "body": " The fast mode, drawn to the same scale as : the motion that starts along . The carts are always displaced by in opposite directions, so the middle spring is squeezed and stretched by twice what either cart moves while both outer springs act together. Every spring now pulls back on every cart, the restoring force is stronger than in the slow mode, and the carts vibrate faster: this extra stiffness is the larger eigenvalue , giving .                                                                           1   2   \\ell - 2u   u   u  \\text{(a) The carts move toward each other: } u_1 = u,\\ u_2 = -u                                                                       1   2   \\ell + 2u   u   u  \\text{(b) Half a period later: they move apart}      "
},
{
  "id": "subsec-oscillators-decoupling-8",
  "level": "2",
  "url": "sec-coupled-oscillators.html#subsec-oscillators-decoupling-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal modes natural frequencies "
},
{
  "id": "eg-coupled-oscillators-release",
  "level": "2",
  "url": "sec-coupled-oscillators.html#eg-coupled-oscillators-release",
  "type": "Example",
  "number": "9.32",
  "title": "Pull One Cart and Let Go.",
  "body": " Pull One Cart and Let Go   At time , the first cart is pulled one unit aside while the second is held at rest in place, and both are released from rest: in symbols, and . Find . This is exactly the messy motion of .    Since both carts start at rest, every sine coefficient vanishes: the derivative of the general solution at is , and since are linearly independent this is only when .  The cosine coefficients are the coordinates of the starting position in the eigenvector basis. We need which gives . Therefore or, cart by cart,   The formula explains everything the movie shows. The second cart starts at rest, but its two cosines drift out of step and it begins to swing while the first cart calms down: the carts trade energy back and forth through the middle spring. And because is irrational, the two cosines never return to step simultaneously the motion never exactly repeats itself, even though it is built from two perfectly periodic ingredients. The animation runs precisely this solution: equal parts of the slow mode and the fast mode, with frequencies in the ratio .   "
},
{
  "id": "rem-oscillators-bigger-picture",
  "level": "2",
  "url": "sec-coupled-oscillators.html#rem-oscillators-bigger-picture",
  "type": "Remark",
  "number": "9.33",
  "title": "The Bigger Picture.",
  "body": " The Bigger Picture  Nothing here depended on having exactly two carts. A chain of carts, a vibrating molecule, a bridge deck, or a drumhead all lead to the same template: a coupled system for some matrix built from the stiffnesses, decoupled by diagonalizing . The eigenvectors are the shapes in which the structure likes to vibrate, and the square roots of the eigenvalues set the tones. This is why engineers computing the resonant frequencies of a building and chemists reading the infrared spectrum of a molecule are both, at bottom, finding eigenvalues.  "
},
{
  "id": "sec-problems-linear-systems",
  "level": "1",
  "url": "sec-problems-linear-systems.html",
  "type": "Section",
  "number": "10.1",
  "title": "Systems of Linear Equations",
  "body": " Systems of Linear Equations     Problems for ( ).    The Geometry of a Solution Set   You have a system of equations in two variables, . Explain the geometric significance of  no solution;  a unique solution;  an infinite number of solutions.      Each equation is a line in the plane, and a solution is a point lying on every one of them, as in .   (1) No solution. The lines have no point in common. This happens as soon as two of them are parallel and distinct, but it can also happen with no two parallel three lines meeting pairwise in three different points already have no common point.   (2) A unique solution. All lines pass through the same single point.   (3) Infinitely many solutions. All equations describe the same line, so every point of that line is a solution.     ★ The Parts of a System   For the system name the variables, the coefficients, and the constant terms.    The variables are , , .  The coefficients are the numbers multiplying the variables: in the first equation and in the second.  The constant terms are the numbers on the right-hand sides: and .     ★ Checking Candidate Solutions   For the system of , decide which of the following are solutions:      (a) is a solution. Substituting,    (b) is also a solution. Substituting,    (c) is not a solution. It satisfies the first equation, since , but the second gives . A solution must satisfy every equation of the system, so passing one test is not enough.     ★ An Inconsistent System   Explain why the system has no solutions.    The left-hand side of the second equation is exactly times the left-hand side of the first: . So for any values of whatsoever, the second left-hand side is three times the first.  If the first equation holds, then and therefore . But the second equation demands that this same number be , and . No assignment can satisfy both, so the system is inconsistent.  Had the second constant been instead, the second equation would have carried no new information at all and the system would have had infinitely many solutions.     ★ Two Equations in Two Variables   Solve and describe the answer geometrically.    Adding the two equations eliminates : Substituting into the second equation, , so .  The unique solution is . Each equation describes a line in the plane, and the solution is the single point where those two lines cross the middle picture of .     ★ A System with Infinitely Many Solutions   Describe all solutions of     The first equation is exactly times the second both sides so the two equations carry the same information and describe the same line, .  Every point of that line is a solution. Writing , There are infinitely many solutions, the third picture of .     ★ Describing Infinitely Many Solutions   Verify that is the solution set, in parametric form, of the system of . Which values of give the two solutions found in ?    Substitute into each equation. For the first, and for the second, Both hold for every , so every such triple is a solution.  The number is a parameter , and the displayed description is the solution set in parametric form .  Taking gives and gives , which are exactly the two solutions checked earlier.       Problems for ( ).    ★ Two Equivalent Systems   Show that the systems are equivalent.    The second system has the single solution , , so we must check that the first has that solution and no other.   It is a solution:   and  .   It is the only one: from the first equation , and substituting into the second, which then forces . So the two systems have exactly the same solutions and are equivalent in the sense of .  The second system is the one we would rather be handed: the solution can simply be read off. Turning the first into the second is what elementary operations are for.     ★ The Three Operations in Action   Apply each of the three elementary operations to the system      Interchange the first two equations.     Multiply the second equation by .     Add times the second equation to the first.  The first equation became , that is : the variable has been eliminated.  As in , each display comes from the original system by one operation; they are not applied in sequence.       Problems for ( ).    ★ Forming the Augmented Matrix   Write down the augmented matrix, the coefficient matrix, and the constant matrix of the system of .    Line the variables up in the order and record the numbers, using a wherever a variable is absent. The augmented matrix is   The coefficient matrix and the constant matrix are The in the last row records that does not appear in the third equation it is easy to forget, and it matters.     ★ Row Operations on an Augmented Matrix   Carry out the three operations of on the augmented matrix instead, using the notation for row .     Interchange the first two rows,  :    Multiply the second row by ,  :    Add times the second row to the first,  :   Nothing new has happened these are the same three systems as before, with the variable names dropped.     ★ Recognizing a Row-Echelon Matrix   Which of these matrices are row-echelon matrices? For those that are not, say which condition of fails.       is a row-echelon matrix. The zero row is at the bottom, and the leading entries and sit in columns and , each strictly to the right of the one above.   is not. Condition (1) fails: a row of zeros appears above a nonzero row.   is a row-echelon matrix. Leading entries and sit in columns and , and the zero row is last. A column of zeros at the far left is entirely allowed.   is not. Condition (3) fails: the leading entries of rows and are both in column , so the third is not strictly to the right of the second.  Note that in a row-echelon matrix the leading entries need not be ; that is required only for the reduced form.     ★ Recognizing a Reduced Row-Echelon Matrix   Which of these are reduced row-echelon matrices? For those that are not, say which condition of fails.       is reduced row-echelon. It is row-echelon, each leading entry is , and each leading is alone in its column.   is not. It is row-echelon with leading s, but condition (3) fails: the leading in position has a above it in the same column.   is not. Condition (2) fails: the leading entry of row is , not .   is reduced row-echelon. The leading s in columns and are each alone in their column, and the zero row is last. The all-zero first column and the nonzero last column are both fine only the pivot columns are constrained.     ★ Identifying Pivots and Free Variables   The following is the augmented matrix of a system of linear equations: Identify the pivot columns, the basic variables, and the free variables.    The matrix is a row-echelon matrix, and its leading s sit in positions , and . So the pivot columns are columns , and .  The basic variables are therefore , and , and the free variables are the remaining ones, and .  The last column is the constant column, not a variable column, so it is never counted here. Since no row has the form with , the system is consistent, and with two free variables its general solution has two parameters.       Problems for ( ).    Reading Consistency off an Echelon Shape   In each augmented matrix below, denotes an arbitrary number and a nonzero number. Determine whether the corresponding system is consistent, and if so whether the solution is unique.        (a) Every row has a leading entry, so no row reads with and the system is consistent by . Every column of the coefficient matrix also has a leading entry, so there are no free variables and the solution is unique .   (b) Again every row has a leading entry, so the system is consistent. But column has no leading entry, so is a free variable and there are infinitely many solutions .   (c) This one needs a further step. Using the leading entry in row to clear the entry below it makes the entry zero, while the last column entry stays nonzero, because the entry is : The last row now reads , that is . The system is inconsistent .     Four More Echelon Shapes   Again denotes an arbitrary number and a nonzero number. For each augmented matrix, say whether the system has no solution, a unique solution, or infinitely many solutions and in the last case say how many parameters the general solution has. If the shape does not determine the answer, say so.         (a) There are four variables and the last row is entirely zero, so no row reads with : the system is consistent. All four columns of the coefficient matrix carry a leading entry, so there are no free variables and the solution is unique .   (b) The zero row again rules out inconsistency. The leading entries sit in columns and , so and are free: infinitely many solutions, with two parameters . Note that the in the augmented column of row is a red herring a nonzero constant in a row that does have a leading entry causes no trouble at all.   (c) Here the shape is not enough. Row reads If that happens to be , the row says and the system is inconsistent . If it is nonzero, it is a leading entry, the system is consistent, and there are leading entries in three of the four columns (column , then column or from row , then column ), leaving one free variable and infinitely many solutions. The shape does not determine the answer.    (d) This matrix is not in row-echelon form, so read the rows as equations directly. Row says , hence . Row says , hence . The two demands cannot both hold, so the system has no solution . (Subtracting row from row makes this visible: it produces the row .)     Choosing Parameters to Control the Outcome   Choose and so that the system with augmented matrix has (a) one solution, (b) no solution, (c) infinitely many solutions.    One row operation puts the matrix in echelon form: Everything depends on whether is zero.   (a) One solution. If , i.e. , then both columns have a leading entry, there are no free variables, and the solution is unique whatever is.   (b) No solution. If and , the second row reads , so the system is inconsistent.   (c) Infinitely many solutions. If and , the second row is entirely zero, is free, and there are infinitely many solutions.     Parameters in Two Equations, Two Unknowns    (a) For which values of and does the system , have infinitely many solutions?   (b) For which values of and does the system , have infinitely many solutions?   (c) Consider , , where . Decide which of these five statements is false, and justify your answer.  The system has no solutions when .  The system has infinitely many solutions when .  The system has the unique solution , when .  The system has a unique solution when .  The system cannot have infinitely many solutions.       (a) Row reduce: Infinitely many solutions requires the second row to vanish entirely: and , so . Answer: and .   (b) Swap the rows first so the pivot is a :  Both entries of the second row must vanish: and , so . Answer: and .   (c) Reducing,  If there are two leading entries and the solution is unique: and . If the second row reads and the system is inconsistent.  So (i), (iii), (iv) and (v) are all true, and (ii) is the false statement : the constant is never zero, so this system can never have infinitely many solutions.     All Three Outcomes from One Parameter   Find conditions on under which the system has no solution, exactly one solution, or infinitely many solutions.    Row reduce the augmented matrix. Adding times row to row clears the first entry of row :     Everything hinges on the last row, since and .   One solution. If , that is and , all three columns carry a leading entry and the solution is unique.   No solution. If then while , so the last row reads .   Infinitely many solutions. If then both and are zero, the last row vanishes, is free, and there are infinitely many solutions.     Two Parameters, Three Outcomes   Find conditions on and under which the system has no solution, exactly one solution, or infinitely many solutions.    The first two rows are already in the shape we want, so subtract row and then row from row :     One solution when , that is  whatever is.   No solution when and , since the last row then reads .   Infinitely many solutions when and : the last row vanishes and becomes free.     A Parameter Inside the Augmented Matrix   In each part, is an arbitrary number. Describe the solutions of the system with the given augmented matrix, for every value of .      (a) Use row to clear the below it: If the last row reads and the system is inconsistent . If the last row vanishes, the system is consistent, and is free, so there are infinitely many solutions . Notice there is no value of giving a unique solution: column never carries a leading entry.   (b) Row reads , so the system is inconsistent unless . With the matrix becomes which is consistent with , and free. So the system has infinitely many solutions exactly when , and no solution for every other .     When Does a Wide System Fail?   Find all values of and for which the system has infinitely many solutions.    There are three unknowns and only two equations, so as soon as the system is consistent at least one variable is free and there are infinitely many solutions. The question is therefore really when is it inconsistent?   One row operation:   The system is inconsistent precisely when the second row reads , that is when The first two force and . Of the four combinations, gives and gives , so those two are consistent. The remaining two, and , give .  So the system has infinitely many solutions for every pair  except  and , where it has no solution at all.     Counting Parameters   For each system, say whether it is inconsistent, has a unique solution, or has infinitely many solutions and in the last case give the number of parameters.  and .  and .  and .   and .       (a)  Leading entries in columns and , so is free: infinitely many solutions, one parameter .   (b)  Again is free: infinitely many solutions, one parameter .   (c)  The second row reads : no solution . The second equation is times the left side of the first, but not times its right side.   (d)  Leading entries in columns and , so and are free: infinitely many solutions, two parameters . (A homogeneous system is always consistent, by .)     A General Solution in Parametric Form   Find the general solution of the system whose augmented matrix is .       Columns and are pivot columns, so and are basic and is free. Setting , the rows read and , so the solution set in parametric form is      Checking a Proposed General Solution   Which of the following is the general solution of the system , ?  , ,  , ,  , ,  , ,        So , and with free, . The answer is (c) .  Options (a) and (b) are individual solutions they are the cases and  but neither is the general solution. Option (d) has the wrong sign and satisfies neither equation: for instance gives , and .     The Complete Solution of a System   Give the complete solution to the system     Row reducing the augmented matrix,   The third row is zero, so the system is consistent and is a free variable. With ,      ★ A System with a Unique Solution   Solve     The forward phase of :   Now the backward phase:   Reading off the rows, , , . Every column of the coefficient matrix is a pivot column, so there are no free variables and the solution is unique. Checking in the second equation, .      ★ An Inconsistent System   Solve        The last row says , that is , which is impossible. By the system is inconsistent .  The failure is visible in the original equations: adding the first two gives , while the third insists .     ★ A System with Infinitely Many Solutions   Solve        Columns and are pivot columns, so and are basic and is free. Setting , the two nonzero rows read and , so the solution set in parametric form is One free variable gives one parameter, as predicts.     ★ Conditions on the Coefficients   Find conditions on , and so that the system has (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. In (i) and (iii), find the solution(s).    Row reduce, treating , , as constants: Everything hinges on the entry .   (i) Unique solution: . Then the third row can be divided by , every column is a pivot column, and there are no free variables. Writing , back-substitution gives , then from row , and from row , This holds whatever and are.   (ii) No solution: and . The last row becomes with , asserting .   (iii) Infinitely many solutions: and . Now the last row vanishes and is free. Setting , row gives , so , and row gives The solution set in parametric form is        Problems for ( ).    ★ A Parabola Through Three Points   Find a polynomial of degree at most two whose graph passes through the points , and , and use it to estimate the value of .    Write . Substituting the three data points gives Row reducing the augmented matrix, Therefore , , , and As a check, , , and . The estimate is      ★ A Cubic Through Four Points   Find the interpolating polynomial for the data points , , and , and use it to estimate the value of .    With four data points we look for . Substituting the points, The second equation gives at once. Substituting it into the others, Adding the first two equations gives , so . The last two equations then read and, after dividing by two, , i.e. . Subtracting, , so and . (Row reducing the full augmented matrix leads to the same solution.)  The interpolating polynomial is and indeed , , , . The estimate is       "
},
{
  "id": "lab-geometry-of-solutions",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-geometry-of-solutions",
  "type": "Exercise",
  "number": "10.1.1",
  "title": "The Geometry of a Solution Set.",
  "body": " The Geometry of a Solution Set   You have a system of equations in two variables, . Explain the geometric significance of  no solution;  a unique solution;  an infinite number of solutions.      Each equation is a line in the plane, and a solution is a point lying on every one of them, as in .   (1) No solution. The lines have no point in common. This happens as soon as two of them are parallel and distinct, but it can also happen with no two parallel three lines meeting pairwise in three different points already have no common point.   (2) A unique solution. All lines pass through the same single point.   (3) Infinitely many solutions. All equations describe the same line, so every point of that line is a solution.   "
},
{
  "id": "star-system-vocabulary",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-system-vocabulary",
  "type": "Exercise",
  "number": "10.1.2",
  "title": "★ The Parts of a System.",
  "body": " ★ The Parts of a System   For the system name the variables, the coefficients, and the constant terms.    The variables are , , .  The coefficients are the numbers multiplying the variables: in the first equation and in the second.  The constant terms are the numbers on the right-hand sides: and .   "
},
{
  "id": "star-checking-solutions",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-checking-solutions",
  "type": "Exercise",
  "number": "10.1.3",
  "title": "★ Checking Candidate Solutions.",
  "body": " ★ Checking Candidate Solutions   For the system of , decide which of the following are solutions:      (a) is a solution. Substituting,    (b) is also a solution. Substituting,    (c) is not a solution. It satisfies the first equation, since , but the second gives . A solution must satisfy every equation of the system, so passing one test is not enough.   "
},
{
  "id": "star-inconsistent",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-inconsistent",
  "type": "Exercise",
  "number": "10.1.4",
  "title": "★ An Inconsistent System.",
  "body": " ★ An Inconsistent System   Explain why the system has no solutions.    The left-hand side of the second equation is exactly times the left-hand side of the first: . So for any values of whatsoever, the second left-hand side is three times the first.  If the first equation holds, then and therefore . But the second equation demands that this same number be , and . No assignment can satisfy both, so the system is inconsistent.  Had the second constant been instead, the second equation would have carried no new information at all and the system would have had infinitely many solutions.   "
},
{
  "id": "star-two-lines",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-two-lines",
  "type": "Exercise",
  "number": "10.1.5",
  "title": "★ Two Equations in Two Variables.",
  "body": " ★ Two Equations in Two Variables   Solve and describe the answer geometrically.    Adding the two equations eliminates : Substituting into the second equation, , so .  The unique solution is . Each equation describes a line in the plane, and the solution is the single point where those two lines cross the middle picture of .   "
},
{
  "id": "star-coincident-lines",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-coincident-lines",
  "type": "Exercise",
  "number": "10.1.6",
  "title": "★ A System with Infinitely Many Solutions.",
  "body": " ★ A System with Infinitely Many Solutions   Describe all solutions of     The first equation is exactly times the second both sides so the two equations carry the same information and describe the same line, .  Every point of that line is a solution. Writing , There are infinitely many solutions, the third picture of .   "
},
{
  "id": "star-parametric-solution",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-parametric-solution",
  "type": "Exercise",
  "number": "10.1.7",
  "title": "★ Describing Infinitely Many Solutions.",
  "body": " ★ Describing Infinitely Many Solutions   Verify that is the solution set, in parametric form, of the system of . Which values of give the two solutions found in ?    Substitute into each equation. For the first, and for the second, Both hold for every , so every such triple is a solution.  The number is a parameter , and the displayed description is the solution set in parametric form .  Taking gives and gives , which are exactly the two solutions checked earlier.   "
},
{
  "id": "star-equivalent-systems",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-equivalent-systems",
  "type": "Exercise",
  "number": "10.1.8",
  "title": "★ Two Equivalent Systems.",
  "body": " ★ Two Equivalent Systems   Show that the systems are equivalent.    The second system has the single solution , , so we must check that the first has that solution and no other.   It is a solution:   and  .   It is the only one: from the first equation , and substituting into the second, which then forces . So the two systems have exactly the same solutions and are equivalent in the sense of .  The second system is the one we would rather be handed: the solution can simply be read off. Turning the first into the second is what elementary operations are for.   "
},
{
  "id": "star-elementary-operations",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-elementary-operations",
  "type": "Exercise",
  "number": "10.1.9",
  "title": "★ The Three Operations in Action.",
  "body": " ★ The Three Operations in Action   Apply each of the three elementary operations to the system      Interchange the first two equations.     Multiply the second equation by .     Add times the second equation to the first.  The first equation became , that is : the variable has been eliminated.  As in , each display comes from the original system by one operation; they are not applied in sequence.   "
},
{
  "id": "star-augmented-matrix",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-augmented-matrix",
  "type": "Exercise",
  "number": "10.1.10",
  "title": "★ Forming the Augmented Matrix.",
  "body": " ★ Forming the Augmented Matrix   Write down the augmented matrix, the coefficient matrix, and the constant matrix of the system of .    Line the variables up in the order and record the numbers, using a wherever a variable is absent. The augmented matrix is   The coefficient matrix and the constant matrix are The in the last row records that does not appear in the third equation it is easy to forget, and it matters.   "
},
{
  "id": "star-row-operations",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-row-operations",
  "type": "Exercise",
  "number": "10.1.11",
  "title": "★ Row Operations on an Augmented Matrix.",
  "body": " ★ Row Operations on an Augmented Matrix   Carry out the three operations of on the augmented matrix instead, using the notation for row .     Interchange the first two rows,  :    Multiply the second row by ,  :    Add times the second row to the first,  :   Nothing new has happened these are the same three systems as before, with the variable names dropped.   "
},
{
  "id": "star-row-echelon-shape",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-row-echelon-shape",
  "type": "Exercise",
  "number": "10.1.12",
  "title": "★ Recognizing a Row-Echelon Matrix.",
  "body": " ★ Recognizing a Row-Echelon Matrix   Which of these matrices are row-echelon matrices? For those that are not, say which condition of fails.       is a row-echelon matrix. The zero row is at the bottom, and the leading entries and sit in columns and , each strictly to the right of the one above.   is not. Condition (1) fails: a row of zeros appears above a nonzero row.   is a row-echelon matrix. Leading entries and sit in columns and , and the zero row is last. A column of zeros at the far left is entirely allowed.   is not. Condition (3) fails: the leading entries of rows and are both in column , so the third is not strictly to the right of the second.  Note that in a row-echelon matrix the leading entries need not be ; that is required only for the reduced form.   "
},
{
  "id": "star-reduced-row-echelon-shape",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-reduced-row-echelon-shape",
  "type": "Exercise",
  "number": "10.1.13",
  "title": "★ Recognizing a Reduced Row-Echelon Matrix.",
  "body": " ★ Recognizing a Reduced Row-Echelon Matrix   Which of these are reduced row-echelon matrices? For those that are not, say which condition of fails.       is reduced row-echelon. It is row-echelon, each leading entry is , and each leading is alone in its column.   is not. It is row-echelon with leading s, but condition (3) fails: the leading in position has a above it in the same column.   is not. Condition (2) fails: the leading entry of row is , not .   is reduced row-echelon. The leading s in columns and are each alone in their column, and the zero row is last. The all-zero first column and the nonzero last column are both fine only the pivot columns are constrained.   "
},
{
  "id": "star-identifying-pivots",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-identifying-pivots",
  "type": "Exercise",
  "number": "10.1.14",
  "title": "★ Identifying Pivots and Free Variables.",
  "body": " ★ Identifying Pivots and Free Variables   The following is the augmented matrix of a system of linear equations: Identify the pivot columns, the basic variables, and the free variables.    The matrix is a row-echelon matrix, and its leading s sit in positions , and . So the pivot columns are columns , and .  The basic variables are therefore , and , and the free variables are the remaining ones, and .  The last column is the constant column, not a variable column, so it is never counted here. Since no row has the form with , the system is consistent, and with two free variables its general solution has two parameters.   "
},
{
  "id": "lab-shape-consistent-unique",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-shape-consistent-unique",
  "type": "Exercise",
  "number": "10.1.15",
  "title": "Reading Consistency off an Echelon Shape.",
  "body": " Reading Consistency off an Echelon Shape   In each augmented matrix below, denotes an arbitrary number and a nonzero number. Determine whether the corresponding system is consistent, and if so whether the solution is unique.        (a) Every row has a leading entry, so no row reads with and the system is consistent by . Every column of the coefficient matrix also has a leading entry, so there are no free variables and the solution is unique .   (b) Again every row has a leading entry, so the system is consistent. But column has no leading entry, so is a free variable and there are infinitely many solutions .   (c) This one needs a further step. Using the leading entry in row to clear the entry below it makes the entry zero, while the last column entry stays nonzero, because the entry is : The last row now reads , that is . The system is inconsistent .   "
},
{
  "id": "lab-shape-more-examples",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-shape-more-examples",
  "type": "Exercise",
  "number": "10.1.16",
  "title": "Four More Echelon Shapes.",
  "body": " Four More Echelon Shapes   Again denotes an arbitrary number and a nonzero number. For each augmented matrix, say whether the system has no solution, a unique solution, or infinitely many solutions and in the last case say how many parameters the general solution has. If the shape does not determine the answer, say so.         (a) There are four variables and the last row is entirely zero, so no row reads with : the system is consistent. All four columns of the coefficient matrix carry a leading entry, so there are no free variables and the solution is unique .   (b) The zero row again rules out inconsistency. The leading entries sit in columns and , so and are free: infinitely many solutions, with two parameters . Note that the in the augmented column of row is a red herring a nonzero constant in a row that does have a leading entry causes no trouble at all.   (c) Here the shape is not enough. Row reads If that happens to be , the row says and the system is inconsistent . If it is nonzero, it is a leading entry, the system is consistent, and there are leading entries in three of the four columns (column , then column or from row , then column ), leaving one free variable and infinitely many solutions. The shape does not determine the answer.    (d) This matrix is not in row-echelon form, so read the rows as equations directly. Row says , hence . Row says , hence . The two demands cannot both hold, so the system has no solution . (Subtracting row from row makes this visible: it produces the row .)   "
},
{
  "id": "lab-h-and-k",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-h-and-k",
  "type": "Exercise",
  "number": "10.1.17",
  "title": "Choosing Parameters to Control the Outcome.",
  "body": " Choosing Parameters to Control the Outcome   Choose and so that the system with augmented matrix has (a) one solution, (b) no solution, (c) infinitely many solutions.    One row operation puts the matrix in echelon form: Everything depends on whether is zero.   (a) One solution. If , i.e. , then both columns have a leading entry, there are no free variables, and the solution is unique whatever is.   (b) No solution. If and , the second row reads , so the system is inconsistent.   (c) Infinitely many solutions. If and , the second row is entirely zero, is free, and there are infinitely many solutions.   "
},
{
  "id": "lab-parameters-two-equations",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-parameters-two-equations",
  "type": "Exercise",
  "number": "10.1.18",
  "title": "Parameters in Two Equations, Two Unknowns.",
  "body": " Parameters in Two Equations, Two Unknowns    (a) For which values of and does the system , have infinitely many solutions?   (b) For which values of and does the system , have infinitely many solutions?   (c) Consider , , where . Decide which of these five statements is false, and justify your answer.  The system has no solutions when .  The system has infinitely many solutions when .  The system has the unique solution , when .  The system has a unique solution when .  The system cannot have infinitely many solutions.       (a) Row reduce: Infinitely many solutions requires the second row to vanish entirely: and , so . Answer: and .   (b) Swap the rows first so the pivot is a :  Both entries of the second row must vanish: and , so . Answer: and .   (c) Reducing,  If there are two leading entries and the solution is unique: and . If the second row reads and the system is inconsistent.  So (i), (iii), (iv) and (v) are all true, and (ii) is the false statement : the constant is never zero, so this system can never have infinitely many solutions.   "
},
{
  "id": "lab-three-outcomes-parameter",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-three-outcomes-parameter",
  "type": "Exercise",
  "number": "10.1.19",
  "title": "All Three Outcomes from One Parameter.",
  "body": " All Three Outcomes from One Parameter   Find conditions on under which the system has no solution, exactly one solution, or infinitely many solutions.    Row reduce the augmented matrix. Adding times row to row clears the first entry of row :     Everything hinges on the last row, since and .   One solution. If , that is and , all three columns carry a leading entry and the solution is unique.   No solution. If then while , so the last row reads .   Infinitely many solutions. If then both and are zero, the last row vanishes, is free, and there are infinitely many solutions.   "
},
{
  "id": "lab-two-parameters-outcomes",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-two-parameters-outcomes",
  "type": "Exercise",
  "number": "10.1.20",
  "title": "Two Parameters, Three Outcomes.",
  "body": " Two Parameters, Three Outcomes   Find conditions on and under which the system has no solution, exactly one solution, or infinitely many solutions.    The first two rows are already in the shape we want, so subtract row and then row from row :     One solution when , that is  whatever is.   No solution when and , since the last row then reads .   Infinitely many solutions when and : the last row vanishes and becomes free.   "
},
{
  "id": "lab-parameter-in-augmented",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-parameter-in-augmented",
  "type": "Exercise",
  "number": "10.1.21",
  "title": "A Parameter Inside the Augmented Matrix.",
  "body": " A Parameter Inside the Augmented Matrix   In each part, is an arbitrary number. Describe the solutions of the system with the given augmented matrix, for every value of .      (a) Use row to clear the below it: If the last row reads and the system is inconsistent . If the last row vanishes, the system is consistent, and is free, so there are infinitely many solutions . Notice there is no value of giving a unique solution: column never carries a leading entry.   (b) Row reads , so the system is inconsistent unless . With the matrix becomes which is consistent with , and free. So the system has infinitely many solutions exactly when , and no solution for every other .   "
},
{
  "id": "lab-when-wide-system-fails",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-when-wide-system-fails",
  "type": "Exercise",
  "number": "10.1.22",
  "title": "When Does a Wide System Fail?",
  "body": " When Does a Wide System Fail?   Find all values of and for which the system has infinitely many solutions.    There are three unknowns and only two equations, so as soon as the system is consistent at least one variable is free and there are infinitely many solutions. The question is therefore really when is it inconsistent?   One row operation:   The system is inconsistent precisely when the second row reads , that is when The first two force and . Of the four combinations, gives and gives , so those two are consistent. The remaining two, and , give .  So the system has infinitely many solutions for every pair  except  and , where it has no solution at all.   "
},
{
  "id": "lab-counting-parameters",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-counting-parameters",
  "type": "Exercise",
  "number": "10.1.23",
  "title": "Counting Parameters.",
  "body": " Counting Parameters   For each system, say whether it is inconsistent, has a unique solution, or has infinitely many solutions and in the last case give the number of parameters.  and .  and .  and .   and .       (a)  Leading entries in columns and , so is free: infinitely many solutions, one parameter .   (b)  Again is free: infinitely many solutions, one parameter .   (c)  The second row reads : no solution . The second equation is times the left side of the first, but not times its right side.   (d)  Leading entries in columns and , so and are free: infinitely many solutions, two parameters . (A homogeneous system is always consistent, by .)   "
},
{
  "id": "lab-general-solution-2x3",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-general-solution-2x3",
  "type": "Exercise",
  "number": "10.1.24",
  "title": "A General Solution in Parametric Form.",
  "body": " A General Solution in Parametric Form   Find the general solution of the system whose augmented matrix is .       Columns and are pivot columns, so and are basic and is free. Setting , the rows read and , so the solution set in parametric form is    "
},
{
  "id": "lab-general-solution-check",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-general-solution-check",
  "type": "Exercise",
  "number": "10.1.25",
  "title": "Checking a Proposed General Solution.",
  "body": " Checking a Proposed General Solution   Which of the following is the general solution of the system , ?  , ,  , ,  , ,  , ,        So , and with free, . The answer is (c) .  Options (a) and (b) are individual solutions they are the cases and  but neither is the general solution. Option (d) has the wrong sign and satisfies neither equation: for instance gives , and .   "
},
{
  "id": "lab-complete-solution-3x3",
  "level": "2",
  "url": "sec-problems-linear-systems.html#lab-complete-solution-3x3",
  "type": "Exercise",
  "number": "10.1.26",
  "title": "The Complete Solution of a System.",
  "body": " The Complete Solution of a System   Give the complete solution to the system     Row reducing the augmented matrix,   The third row is zero, so the system is consistent and is a free variable. With ,    "
},
{
  "id": "star-unique-solution",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-unique-solution",
  "type": "Exercise",
  "number": "10.1.27",
  "title": "★ A System with a Unique Solution.",
  "body": " ★ A System with a Unique Solution   Solve     The forward phase of :   Now the backward phase:   Reading off the rows, , , . Every column of the coefficient matrix is a pivot column, so there are no free variables and the solution is unique. Checking in the second equation, .    "
},
{
  "id": "star-no-solution-rr",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-no-solution-rr",
  "type": "Exercise",
  "number": "10.1.28",
  "title": "★ An Inconsistent System.",
  "body": " ★ An Inconsistent System   Solve        The last row says , that is , which is impossible. By the system is inconsistent .  The failure is visible in the original equations: adding the first two gives , while the third insists .   "
},
{
  "id": "star-infinitely-many-rr",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-infinitely-many-rr",
  "type": "Exercise",
  "number": "10.1.29",
  "title": "★ A System with Infinitely Many Solutions.",
  "body": " ★ A System with Infinitely Many Solutions   Solve        Columns and are pivot columns, so and are basic and is free. Setting , the two nonzero rows read and , so the solution set in parametric form is One free variable gives one parameter, as predicts.   "
},
{
  "id": "star-parameters-abc",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-parameters-abc",
  "type": "Exercise",
  "number": "10.1.30",
  "title": "★ Conditions on the Coefficients.",
  "body": " ★ Conditions on the Coefficients   Find conditions on , and so that the system has (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. In (i) and (iii), find the solution(s).    Row reduce, treating , , as constants: Everything hinges on the entry .   (i) Unique solution: . Then the third row can be divided by , every column is a pivot column, and there are no free variables. Writing , back-substitution gives , then from row , and from row , This holds whatever and are.   (ii) No solution: and . The last row becomes with , asserting .   (iii) Infinitely many solutions: and . Now the last row vanishes and is free. Setting , row gives , so , and row gives The solution set in parametric form is    "
},
{
  "id": "star-interpolation-quadratic",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-interpolation-quadratic",
  "type": "Exercise",
  "number": "10.1.31",
  "title": "★ A Parabola Through Three Points.",
  "body": " ★ A Parabola Through Three Points   Find a polynomial of degree at most two whose graph passes through the points , and , and use it to estimate the value of .    Write . Substituting the three data points gives Row reducing the augmented matrix, Therefore , , , and As a check, , , and . The estimate is    "
},
{
  "id": "star-interpolation-cubic",
  "level": "2",
  "url": "sec-problems-linear-systems.html#star-interpolation-cubic",
  "type": "Exercise",
  "number": "10.1.32",
  "title": "★ A Cubic Through Four Points.",
  "body": " ★ A Cubic Through Four Points   Find the interpolating polynomial for the data points , , and , and use it to estimate the value of .    With four data points we look for . Substituting the points, The second equation gives at once. Substituting it into the others, Adding the first two equations gives , so . The last two equations then read and, after dividing by two, , i.e. . Subtracting, , so and . (Row reducing the full augmented matrix leads to the same solution.)  The interpolating polynomial is and indeed , , , . The estimate is    "
},
{
  "id": "sec-problems-vectors",
  "level": "1",
  "url": "sec-problems-vectors.html",
  "type": "Section",
  "number": "10.2",
  "title": "Vectors in <span class=\"process-math\">\\(\\R^n\\)<\/span>",
  "body": " Vectors in     Problems for ( ).    Completing a Parallelogram   Given , and , find so that is a parallelogram.    In the parallelogram the vertices are listed in order, so the sides are , , and . Opposite sides are parallel and of equal length, which in vector language says   Writing position vectors from the origin and using ,   Now , so that is, .  As a check, and . The two remaining sides are parallel and equal in length, as they must be.      ★ Adding Two Vectors   Let and . Compute and .    Addition in is entry by entry, by :   Subtraction is addition of :   Adding the two answers returns , since , and indeed .      ★ Scaling a Vector   Let and . Compute and .    Scalar multiplication multiplies every entry, by :   For the combination, scale each vector first and then add:   Note that points in the direction opposite to and is four times as long: a negative scalar reverses the arrow.       Problems for ( ).    ★ Writing a System in Vector Form   Express the following system in vector form:     Collect the coefficients of each variable into a column, remembering the coefficient of in the second equation. By ,   Read across a row of this display and the original equation reappears; read down a column and you get one variable's contribution. Solving the system now amounts to asking whether the right-hand column is a linear combination of the three columns on the left.     ★ Writing a System in Matrix Form   Express the system of in matrix form.    Assemble the three coefficient columns into a matrix:   By , the left-hand side is the linear combination so this is the previous exercise rewritten. Abbreviating the coefficient matrix as , the unknowns as , and the constants as , the system is simply .       Problems for ( ).    Vector Form and Basic Solutions   A system has an augmented matrix whose reduced row-echelon form is   How many solutions does the system have?  Find the general solution and express it in vector form.  Find a set of basic solutions for the associated homogeneous system .       (a) No row reads with , so the system is consistent. The leading s sit in columns , and , so and are free: there are infinitely many solutions .   (b) Put and . Reading the rows, so in the vector form of , with .   (c) Dropping the constant vector leaves exactly the general solution of , so a set of basic solutions is This is in action: the solution set is one particular solution plus the solutions of the homogeneous system.     Spanning the Solutions of a Homogeneous System   Every solution of is a linear combination of which of the following sets of vectors?  .  .  and .  and .      Subtracting row from rows and is enough: So , , and the first row then gives , i.e. .  With and free, The answer is (d) : is times the first basic solution, so the two vectors in (d) span exactly the same set.  Options (a) and (b) are individual solutions they are the cases and  but a single vector spans only a line, and the solution set here needs two parameters. Option (c) fails for the same reason in disguise: its two vectors are parallel, since , so together they still span only a line and miss every solution with .     Writing One Vector in Terms of Others   Consider Determine whether can be written as a linear combination of , , , and if so give a specific such combination.    The question asks whether there exist with , which by is the system with augmented matrix   The system is consistent, so the answer is yes. Here is free; with we get and , so   Taking gives the specific combination , and checking it,   That is free is no accident: , so is linearly dependent and the combination is far from unique.     Which Vectors Are Combinations?   Let Which of , , lie in ?    Test all three at once by row reducing a single matrix with three augmented columns:     Read off the last row for each right-hand side. For it is and for it is : both systems are consistent. For it is : inconsistent.  So and are linear combinations of and , and is not. Solving back gives the explicit combinations which are worth verifying entry by entry.  Note that adding to the spanning set would change nothing: since , we have , so is still outside it.     ★ Solving a Homogeneous System   Solve        Here and are free. Setting and , the two nonzero rows give The trivial solution is the case ; every other choice gives a nontrivial solution.     ★ Basic Solutions of a Homogeneous System   Continuing , write the general solution as a linear combination and identify the basic solutions.    Split the general solution according to the two parameters:   The vectors are the basic solutions , obtained by setting one parameter to and the other to . Every solution is a linear combination of them, in the sense of .  Checking in the first equation: .      ★ A Homogeneous System with a Parameter   Find all values of for which has nontrivial solutions, and find those solutions.    One row operation is enough to expose the structure:    Case (I): . The third row gives , so . The second row then gives , so , and the first gives . Only the trivial solution: no nontrivial solutions exist.   Case (II): . The matrix becomes so and , with free. Writing ,   So there are nontrivial solutions exactly when . Notice the mechanism: a nontrivial solution appears precisely when a free variable does, and here that happens only when the third pivot is lost.     ★ Comparing a Homogeneous System with Its Non-Homogeneous Partner   Solve both systems and explain the relation between their solution sets.       The homogeneous system.  So and . With ,    The non-homogeneous system.  So and . With ,   The vector is one particular solution of the non-homogeneous system substituting gives , ,   and is the general solution of the homogeneous one.  This is exactly : the homogeneous solutions form a line through the origin, and the non-homogeneous solution set is that same line translated by , as in . The two lines are parallel; only one of them passes through .     ★ Expressing a Vector as a Linear Combination   Let Express as a linear combination of the columns of , or show that this is impossible.    Following the method of , put and look for a nontrivial solution of . If one exists with , we can solve for .     With , and free,   Choose and , giving , , . Then and since we may solve for :   The combination is far from unique. Taking , , instead gives , which also checks out. Five vectors in must be linearly dependent by , so a relation was guaranteed to exist the only question was whether appeared in it with a nonzero coefficient.       Problems for ( ).    ★ Describing a Span   Describe , where and .    Every linear combination has the form whose middle entry is always . So every such vector lies in the -plane.  Conversely, take an arbitrary vector of the -plane and solve :  which is consistent for every and , with and . That is,   Hence is exactly the -plane. As a check, should be , and indeed .      ★ What Happens When We Add a Third Vector?   Continuing , describe when      (a) already lies in the -plane. Using the formula from the previous exercise with and , and checking, . So and still just the -plane. Adding gained nothing.   (b) points off the plane. Now every vector of is reachable: given , the third vector supplies the middle entry and the first two supply the rest, Hence .  The moral is the same as in : a new vector enlarges the span exactly when it is not already inside it.     ★ When Does a Third Vector Fail to Enlarge the Span?   Let where .   For which is ?    For the exceptional , describe the span by an equation and write in terms of and .        (1) The three vectors span exactly when is consistent for every , where . For a square matrix that happens exactly when , by . Expanding along the first row, So the span is all of for every .   (2) Take , so . Solving , the first entry gives and the second gives , so ; the third entry checks, since . Hence so adds nothing and , a plane.  To find its equation, eliminate the parameters. Writing gives so . Therefore and indeed satisfies .        Problems for ( ).    ★ Testing Independence from the Definition   Consider Is linearly independent? Work directly from .    The definition asks us to check that no one of the three lies in the span of the other two.   (I) . That span is the -plane by , so every vector in it has middle entry . The middle entry of is .   (II) . Solving , the middle entries give and the first entries give , so . But then the third entries require to equal , and it does not. No solution.   (III) . Solving , the middle entries give and the first give . The third entries then require to equal , and it does not. No solution.  From (I), (II) and (III), the set is linearly independent .  A faster route is : the matrix with these three columns has determinant , so has only the trivial solution.     ★ Independence of a Nested Family   Let , , be vectors in . Show that     Both directions rest on one regrouping. For scalars ,    ( ) Suppose is independent and the left-hand side is . Then all three coefficients on the right vanish: Reading upwards, , then , then . Only the trivial combination gives , so the three new vectors are independent by .   ( ) We prove the contrapositive. Suppose is dependent , so there are scalars , not all zero, with . We want with , , . That system is whose coefficient matrix is triangular with determinant , hence invertible. So a unique exists, and it is nonzero because is. Explicitly , , .  For this choice the identity above gives a nontrivial dependence among the new vectors the contrapositive of what we wanted.   A warning. The invertibility of that triangular matrix is doing the work, and not every rearrangement is so lucky. The differences are always dependent, since no matter how independent may be. Compare the four-vector warning in .      "
},
{
  "id": "lab-parallelogram-vertex",
  "level": "2",
  "url": "sec-problems-vectors.html#lab-parallelogram-vertex",
  "type": "Exercise",
  "number": "10.2.1",
  "title": "Completing a Parallelogram.",
  "body": " Completing a Parallelogram   Given , and , find so that is a parallelogram.    In the parallelogram the vertices are listed in order, so the sides are , , and . Opposite sides are parallel and of equal length, which in vector language says   Writing position vectors from the origin and using ,   Now , so that is, .  As a check, and . The two remaining sides are parallel and equal in length, as they must be.    "
},
{
  "id": "star-vector-addition",
  "level": "2",
  "url": "sec-problems-vectors.html#star-vector-addition",
  "type": "Exercise",
  "number": "10.2.2",
  "title": "★ Adding Two Vectors.",
  "body": " ★ Adding Two Vectors   Let and . Compute and .    Addition in is entry by entry, by :   Subtraction is addition of :   Adding the two answers returns , since , and indeed .    "
},
{
  "id": "star-vector-scalar",
  "level": "2",
  "url": "sec-problems-vectors.html#star-vector-scalar",
  "type": "Exercise",
  "number": "10.2.3",
  "title": "★ Scaling a Vector.",
  "body": " ★ Scaling a Vector   Let and . Compute and .    Scalar multiplication multiplies every entry, by :   For the combination, scale each vector first and then add:   Note that points in the direction opposite to and is four times as long: a negative scalar reverses the arrow.   "
},
{
  "id": "star-vector-form",
  "level": "2",
  "url": "sec-problems-vectors.html#star-vector-form",
  "type": "Exercise",
  "number": "10.2.4",
  "title": "★ Writing a System in Vector Form.",
  "body": " ★ Writing a System in Vector Form   Express the following system in vector form:     Collect the coefficients of each variable into a column, remembering the coefficient of in the second equation. By ,   Read across a row of this display and the original equation reappears; read down a column and you get one variable's contribution. Solving the system now amounts to asking whether the right-hand column is a linear combination of the three columns on the left.   "
},
{
  "id": "star-matrix-form",
  "level": "2",
  "url": "sec-problems-vectors.html#star-matrix-form",
  "type": "Exercise",
  "number": "10.2.5",
  "title": "★ Writing a System in Matrix Form.",
  "body": " ★ Writing a System in Matrix Form   Express the system of in matrix form.    Assemble the three coefficient columns into a matrix:   By , the left-hand side is the linear combination so this is the previous exercise rewritten. Abbreviating the coefficient matrix as , the unknowns as , and the constants as , the system is simply .   "
},
{
  "id": "lab-vector-form-from-rref",
  "level": "2",
  "url": "sec-problems-vectors.html#lab-vector-form-from-rref",
  "type": "Exercise",
  "number": "10.2.6",
  "title": "Vector Form and Basic Solutions.",
  "body": " Vector Form and Basic Solutions   A system has an augmented matrix whose reduced row-echelon form is   How many solutions does the system have?  Find the general solution and express it in vector form.  Find a set of basic solutions for the associated homogeneous system .       (a) No row reads with , so the system is consistent. The leading s sit in columns , and , so and are free: there are infinitely many solutions .   (b) Put and . Reading the rows, so in the vector form of , with .   (c) Dropping the constant vector leaves exactly the general solution of , so a set of basic solutions is This is in action: the solution set is one particular solution plus the solutions of the homogeneous system.   "
},
{
  "id": "lab-homogeneous-spanning-set",
  "level": "2",
  "url": "sec-problems-vectors.html#lab-homogeneous-spanning-set",
  "type": "Exercise",
  "number": "10.2.7",
  "title": "Spanning the Solutions of a Homogeneous System.",
  "body": " Spanning the Solutions of a Homogeneous System   Every solution of is a linear combination of which of the following sets of vectors?  .  .  and .  and .      Subtracting row from rows and is enough: So , , and the first row then gives , i.e. .  With and free, The answer is (d) : is times the first basic solution, so the two vectors in (d) span exactly the same set.  Options (a) and (b) are individual solutions they are the cases and  but a single vector spans only a line, and the solution set here needs two parameters. Option (c) fails for the same reason in disguise: its two vectors are parallel, since , so together they still span only a line and miss every solution with .   "
},
{
  "id": "lab-linear-combination",
  "level": "2",
  "url": "sec-problems-vectors.html#lab-linear-combination",
  "type": "Exercise",
  "number": "10.2.8",
  "title": "Writing One Vector in Terms of Others.",
  "body": " Writing One Vector in Terms of Others   Consider Determine whether can be written as a linear combination of , , , and if so give a specific such combination.    The question asks whether there exist with , which by is the system with augmented matrix   The system is consistent, so the answer is yes. Here is free; with we get and , so   Taking gives the specific combination , and checking it,   That is free is no accident: , so is linearly dependent and the combination is far from unique.   "
},
{
  "id": "lab-which-are-combinations",
  "level": "2",
  "url": "sec-problems-vectors.html#lab-which-are-combinations",
  "type": "Exercise",
  "number": "10.2.9",
  "title": "Which Vectors Are Combinations?",
  "body": " Which Vectors Are Combinations?   Let Which of , , lie in ?    Test all three at once by row reducing a single matrix with three augmented columns:     Read off the last row for each right-hand side. For it is and for it is : both systems are consistent. For it is : inconsistent.  So and are linear combinations of and , and is not. Solving back gives the explicit combinations which are worth verifying entry by entry.  Note that adding to the spanning set would change nothing: since , we have , so is still outside it.   "
},
{
  "id": "star-homogeneous-basic",
  "level": "2",
  "url": "sec-problems-vectors.html#star-homogeneous-basic",
  "type": "Exercise",
  "number": "10.2.10",
  "title": "★ Solving a Homogeneous System.",
  "body": " ★ Solving a Homogeneous System   Solve        Here and are free. Setting and , the two nonzero rows give The trivial solution is the case ; every other choice gives a nontrivial solution.   "
},
{
  "id": "star-basic-solutions",
  "level": "2",
  "url": "sec-problems-vectors.html#star-basic-solutions",
  "type": "Exercise",
  "number": "10.2.11",
  "title": "★ Basic Solutions of a Homogeneous System.",
  "body": " ★ Basic Solutions of a Homogeneous System   Continuing , write the general solution as a linear combination and identify the basic solutions.    Split the general solution according to the two parameters:   The vectors are the basic solutions , obtained by setting one parameter to and the other to . Every solution is a linear combination of them, in the sense of .  Checking in the first equation: .    "
},
{
  "id": "star-homogeneous-parameter",
  "level": "2",
  "url": "sec-problems-vectors.html#star-homogeneous-parameter",
  "type": "Exercise",
  "number": "10.2.12",
  "title": "★ A Homogeneous System with a Parameter.",
  "body": " ★ A Homogeneous System with a Parameter   Find all values of for which has nontrivial solutions, and find those solutions.    One row operation is enough to expose the structure:    Case (I): . The third row gives , so . The second row then gives , so , and the first gives . Only the trivial solution: no nontrivial solutions exist.   Case (II): . The matrix becomes so and , with free. Writing ,   So there are nontrivial solutions exactly when . Notice the mechanism: a nontrivial solution appears precisely when a free variable does, and here that happens only when the third pivot is lost.   "
},
{
  "id": "star-structure-comparison",
  "level": "2",
  "url": "sec-problems-vectors.html#star-structure-comparison",
  "type": "Exercise",
  "number": "10.2.13",
  "title": "★ Comparing a Homogeneous System with Its Non-Homogeneous Partner.",
  "body": " ★ Comparing a Homogeneous System with Its Non-Homogeneous Partner   Solve both systems and explain the relation between their solution sets.       The homogeneous system.  So and . With ,    The non-homogeneous system.  So and . With ,   The vector is one particular solution of the non-homogeneous system substituting gives , ,   and is the general solution of the homogeneous one.  This is exactly : the homogeneous solutions form a line through the origin, and the non-homogeneous solution set is that same line translated by , as in . The two lines are parallel; only one of them passes through .   "
},
{
  "id": "star-express-as-combination",
  "level": "2",
  "url": "sec-problems-vectors.html#star-express-as-combination",
  "type": "Exercise",
  "number": "10.2.14",
  "title": "★ Expressing a Vector as a Linear Combination.",
  "body": " ★ Expressing a Vector as a Linear Combination   Let Express as a linear combination of the columns of , or show that this is impossible.    Following the method of , put and look for a nontrivial solution of . If one exists with , we can solve for .     With , and free,   Choose and , giving , , . Then and since we may solve for :   The combination is far from unique. Taking , , instead gives , which also checks out. Five vectors in must be linearly dependent by , so a relation was guaranteed to exist the only question was whether appeared in it with a nonzero coefficient.   "
},
{
  "id": "star-span-plane",
  "level": "2",
  "url": "sec-problems-vectors.html#star-span-plane",
  "type": "Exercise",
  "number": "10.2.15",
  "title": "★ Describing a Span.",
  "body": " ★ Describing a Span   Describe , where and .    Every linear combination has the form whose middle entry is always . So every such vector lies in the -plane.  Conversely, take an arbitrary vector of the -plane and solve :  which is consistent for every and , with and . That is,   Hence is exactly the -plane. As a check, should be , and indeed .    "
},
{
  "id": "star-span-adding-vector",
  "level": "2",
  "url": "sec-problems-vectors.html#star-span-adding-vector",
  "type": "Exercise",
  "number": "10.2.16",
  "title": "★ What Happens When We Add a Third Vector?",
  "body": " ★ What Happens When We Add a Third Vector?   Continuing , describe when      (a) already lies in the -plane. Using the formula from the previous exercise with and , and checking, . So and still just the -plane. Adding gained nothing.   (b) points off the plane. Now every vector of is reachable: given , the third vector supplies the middle entry and the first two supply the rest, Hence .  The moral is the same as in : a new vector enlarges the span exactly when it is not already inside it.   "
},
{
  "id": "star-span-parameter",
  "level": "2",
  "url": "sec-problems-vectors.html#star-span-parameter",
  "type": "Exercise",
  "number": "10.2.17",
  "title": "★ When Does a Third Vector Fail to Enlarge the Span?",
  "body": " ★ When Does a Third Vector Fail to Enlarge the Span?   Let where .   For which is ?    For the exceptional , describe the span by an equation and write in terms of and .        (1) The three vectors span exactly when is consistent for every , where . For a square matrix that happens exactly when , by . Expanding along the first row, So the span is all of for every .   (2) Take , so . Solving , the first entry gives and the second gives , so ; the third entry checks, since . Hence so adds nothing and , a plane.  To find its equation, eliminate the parameters. Writing gives so . Therefore and indeed satisfies .    "
},
{
  "id": "star-independence-by-definition",
  "level": "2",
  "url": "sec-problems-vectors.html#star-independence-by-definition",
  "type": "Exercise",
  "number": "10.2.18",
  "title": "★ Testing Independence from the Definition.",
  "body": " ★ Testing Independence from the Definition   Consider Is linearly independent? Work directly from .    The definition asks us to check that no one of the three lies in the span of the other two.   (I) . That span is the -plane by , so every vector in it has middle entry . The middle entry of is .   (II) . Solving , the middle entries give and the first entries give , so . But then the third entries require to equal , and it does not. No solution.   (III) . Solving , the middle entries give and the first give . The third entries then require to equal , and it does not. No solution.  From (I), (II) and (III), the set is linearly independent .  A faster route is : the matrix with these three columns has determinant , so has only the trivial solution.   "
},
{
  "id": "star-independence-sums",
  "level": "2",
  "url": "sec-problems-vectors.html#star-independence-sums",
  "type": "Exercise",
  "number": "10.2.19",
  "title": "★ Independence of a Nested Family.",
  "body": " ★ Independence of a Nested Family   Let , , be vectors in . Show that     Both directions rest on one regrouping. For scalars ,    ( ) Suppose is independent and the left-hand side is . Then all three coefficients on the right vanish: Reading upwards, , then , then . Only the trivial combination gives , so the three new vectors are independent by .   ( ) We prove the contrapositive. Suppose is dependent , so there are scalars , not all zero, with . We want with , , . That system is whose coefficient matrix is triangular with determinant , hence invertible. So a unique exists, and it is nonzero because is. Explicitly , , .  For this choice the identity above gives a nontrivial dependence among the new vectors the contrapositive of what we wanted.   A warning. The invertibility of that triangular matrix is doing the work, and not every rearrangement is so lucky. The differences are always dependent, since no matter how independent may be. Compare the four-vector warning in .   "
},
{
  "id": "sec-problems-linear-transformations",
  "level": "1",
  "url": "sec-problems-linear-transformations.html",
  "type": "Section",
  "number": "10.3",
  "title": "Linear Transformations",
  "body": " Linear Transformations     Problems for ( ).    A Transformation from Two of Its Values   Let be a linear transformation with Find .    A linear transformation is determined on any vector we can write as a combination of vectors whose images we know, by . So look for and with The second entry gives , so ; the first then gives , so . The third entry checks: .   Therefore      When Two Values Are Not Enough   Let be a linear transformation with Find and .    Both questions come down to writing the target as a combination of the two vectors we know. Row reduce with both right-hand sides at once:    The first vector. Its column of the reduced matrix ends in , so the system is consistent and Applying ,    The second vector. Its column ends in , so that system reads and is inconsistent: is not in . The two given values place no constraint on there, so cannot be determined from the information given.     The Matrix from Two Values   A linear transformation satisfies Find the matrix of .    The matrix of has columns and , so we need to express the standard basis vectors in terms of the two given ones.  Subtracting, and, looking for with , the equations and give , :   Applying to both, so the matrix of is      Composing Two Transformations   Let be linear transformations with Find .    By definition , so We are not told directly, so write it in terms of the two vectors whose -images we do know. Looking for with the first entry gives and the second gives , so .  Therefore      ★ A Transformation from to   Let be defined by Identify the domain and codomain, and compute the image of .    By , the domain is and the codomain is : the rule takes a vector with three entries and returns one with four.  Substituting , , ,      ★ The Previous Transformation Is a Matrix Transformation   Show that the transformation of is a matrix transformation, and find its matrix.    Split the output according to the three input variables:   That is exactly a matrix-vector product, by : The matrix is , as it must be to send to . Checking the earlier value, .      ★ Transformation by Matrix Multiplication   Let . Describe the effect of on a general vector, and compute the image of .     is , so it sends vectors of to vectors of :   For the given vector, Note that never affects the first output and never affects the second, because of the two zeros in .     ★ Determining a Transformation from Two Values   Let be linear with Find .    First write the target as a linear combination of the two known inputs. Solving ,  so and ; that is,   Now apply property (3) of :      ★ Transformations That Are Not Matrix Transformations   Give two transformations that are not matrix transformations, and explain why each fails.     A translation. Let . Then whereas every linear transformation satisfies by . So is not linear, and by it cannot be a matrix transformation. Directly: for every matrix , so no can reproduce this .   A product of coordinates. Let . This one does fix , so we must look further. Scalar multiplication fails:  and these differ. Equivalently, if worked we would need for all , which no constants can achieve.  The lesson is that fixing is necessary but not sufficient: the second example passes that test and still fails to be linear.       Problems for ( ).    ★ True or False?   Let , where is , and suppose is onto . Which of the following must be true?  For every , the equation has exactly one solution.  has only the trivial solution.  The columns of span .      A single example settles the first two. Take and , which is onto because has a pivot in every row.   (I) False. The third column has no pivot, so is free and every consistent system has infinitely many solutions. Being onto guarantees at least one solution for each , never exactly one.   (II) False. With the same , has the nontrivial solution , since . That statement characterizes one-to-one , not onto, by .   (III) True. By , is a linear combination of the columns of , so the range of is exactly . Saying is onto says that this span is all of .     ★ Which Transformation Is an Injection?     Reflection in the line in .  Projection into the -axis in .   .       (A) An injection. The matrix is , and forces and . Only the trivial solution, so is one-to-one by .   (B) Not an injection. Here , and holds for every on the -axis. For instance .   (C) An injection. The matrix is which has a pivot in each of its two columns, so has only the trivial solution. Directly: forces from the first row and from the second.     ★ A One-to-One Transformation, Seen Geometrically   Let be induced by . Is one-to-one?    Row reduce :    There is a pivot in every column, so has only the trivial solution and is one-to-one by .  Note that cannot also be onto: is tall, and by a tall matrix is never onto. Its range is a plane inside , computed in .     ★ A Transformation That Is Not One-to-One, Seen Geometrically   Let be induced by . Is one-to-one?    The third column has no pivot, so is free. Solving , the second row gives and the first gives , so   Taking , so two different inputs share an output and is not one-to-one.  There was never a chance: is wide, and by a wide matrix is never one-to-one.     ★ A Transformation That Is Not Onto   Let be defined by . Is onto?    Every image has first entry , so no vector with a nonzero first entry can be an output. For instance is never an image, and is not a surjection.  In matrix terms , which has only one pivot and hence no pivot in its first row. The range is the -axis, a line inside the two-dimensional codomain.     ★ Which Transformation Is a Surjection?      with .   with .       (I) A surjection. The matrix has the images of the standard basis vectors as columns: It has a pivot in each of its two rows, so the augmented matrix of can never acquire a pivot in its last column, and the system is consistent for every . Explicitly, works.   (II) Not a surjection. Row reducing by and then gives last row . So the system is inconsistent whenever  for instance . The range is the plane , not all of .     ★ An Onto Transformation, Seen Geometrically   Let be induced by . Is onto?     is already in row-echelon form with pivots in columns and  one in each of its two rows. So the augmented matrix of can never have a pivot in its last column, and the system is consistent for every . Hence is onto .  Concretely, given , take . Then   This is the same matrix as in , so is onto but not one-to-one: each has a whole line of preimages.     ★ A Transformation That Is Not Onto, Seen Geometrically   Let be induced by . Is onto? Describe the range.    Every output is a linear combination of the two columns:   Writing for an output, the second and third entries give and , and then the first entry must satisfy . Clearing the fraction, the range is the plane inside . Both columns satisfy it: and .   So is not onto for instance gives and has no preimage. As predicts, a tall matrix never is.     ★ A Transformation That Is Neither One-to-One Nor Onto   Let be induced by . Show that is neither one-to-one nor onto.    Row reducing, since the second row is times the first. There is a single pivot.   Not one-to-one. Columns and carry no pivot, so has two free variables. Its solution set is the whole plane in , so there are plenty of nontrivial solutions.   Not onto. There is no pivot in the second row. Every column is a multiple of , so the range is , a line in . The vector is not on that line, since would need and at once. So has no solution.     ★ Projection into the -Plane Is Neither   Let be projection into the -plane, Show that is neither one-to-one nor onto.    Since , and ,    Not one-to-one.  reads , , , so is free and the solution set is the whole -axis, . Concretely : the projection forgets .   Not onto. Every output has second entry , so the range is , the -plane, which is smaller than the codomain . The vector has no preimage, since the second equation of reads .  Both failures show up at once in , as says they must for a square matrix.     ★ A Transformation That Is Both One-to-One and Onto   Let be induced by . Show that is both one-to-one and onto.    Row reducing, so there is a pivot in every column ( is one-to-one) and in every row ( is onto).  In fact , so is invertible with and every has the unique preimage . Checking,      ★ Reflection Is Both One-to-One and Onto   Let be reflection in the line . Show that is both one-to-one and onto, for every .    By , Taking determinants, and remembering that a scalar factor of on a matrix contributes its square, using .  Since for every , the matrix is invertible. By , has only the trivial solution, so is one-to-one, and its columns span , so it is onto.  The geometry says it faster: reflecting twice returns every vector to where it started, so and . Every has exactly one preimage, namely itself. Note also that rather than : a reflection reverses orientation, where a rotation preserves it.       Problems for ( ).    Reflection in the Line   Let be the reflection in the line .  Find the matrix of .  Compute .       (a) Reflecting in swaps the two axes and reverses them: the point goes to . In particular and , so This is the case of .   (b) A reflection undoes itself, so . Indeed Therefore      Identifying a Transformation from Its Matrix   The matrix transformation induced by is which of the following: reflection in the -axis, reflection in the -axis, rotation through , or rotation through ?    Compute the effect on a general vector: The first coordinate is unchanged and the second is negated, which is exactly reflection in the -axis ; compare .  The two rotations are ruled out at once: by , rotation through has matrix , whose diagonal entries are zero. Reflection in the -axis would send to .     A Reflection Followed by a Rotation   Find the matrix of the linear transformation obtained by reflecting in the -axis and then rotating through radians. What familiar transformation is the result?    Reflection in the -axis sends and fixes , so its matrix is . Rotation through reverses every vector, so by its matrix is .  Doing the reflection first means multiplying by first, so the composite matrix is , with on the right:   That is reflection in the -axis ( ) a reflection, not a rotation. Composing two reflections gives a rotation, but here we composed a reflection with a rotation.     Three Transformations in a Row   Find the matrix of the transformation that reflects in the line , then rotates through , then reflects in the -axis.    The three matrices are using for and with for .  The transformation applied first stands rightmost, so we want . First and then multiplying on the left by negates the first row:      Undoing a Transformation     Let be induced by . Find the matrix of .  Let be linear with and . Find .  Let be the -shear . By which matrix is induced?       (a) Here , so is invertible and by  Checking, .    (b) From and linearity, . So the matrix of is  Hence As a check, .    (c) The shear is induced by , with , so Undoing a shear by is shearing by , exactly as the picture in suggests.     ★ A Rotation through   Find the matrix of , and compute the image of .    With and , the rotation matrix is   Applying it, The image has the same length as the input, since , as a rotation must.     ★ Reflection in the -Axis   Show that reflection in the -axis is a matrix transformation and find its matrix.    Reflection in the -axis sends to . In particular and , so So . Compare , where the roles of the two coordinates are exchanged.     ★ Reflection in the Line   Find the matrix of reflection in the line by computing the images of and .    Reflecting in sends to . In particular so   As a check, the line itself should be fixed: the point lies on , and the matrix sends it to . The perpendicular direction should be reversed, and it is sent to .   The same matrix was obtained a different way in .     ★ Completing the Reflection in     Complete the exercise left open in : show that .  Write down the matrix of reflection in the line and check it on two vectors.       (a) Reflecting in a line at angle can be done in three steps: rotate the line down onto the -axis, reflect in the -axis, rotate back. Writing and , Now and multiplying on the left by ,   Substituting and gives and , so the second column is as claimed, and the full matrix is the one displayed in the example.   (b) With we get and The direction along the line is , and it should be fixed: . The perpendicular direction should be reversed: .      ★ Two Reflections Make a Rotation   Show that reflecting in the -axis and then in the -axis gives reflection through the origin, and identify that transformation as a rotation.    The two matrices are and . Doing first means it stands on the right:   That matrix sends to , which is reflection through the origin. By it is also , rotation through half a turn.  Note that the two reflections commute here, , which is special: reflections in two lines meeting at angle compose to a rotation through , and the order matters unless is a right angle.     ★ Projection into the -Axis   Find the matrix of projection into the -axis, and explain why this transformation is not one-to-one.    Projection into the -axis sends to . Since and ,   It is not one-to-one because the first coordinate is discarded: every vector on a given horizontal line has the same image. For instance two different inputs with one output. Equivalently has the nontrivial solution .     ★ Horizontal Shear   A horizontal shear fixes and sends to . Find its matrix, and describe its effect on the unit square when .    The columns of the matrix are the images of the standard basis vectors, so Each point slides horizontally by an amount proportional to its -coordinate, and the horizontal direction is left alone.  With , the corners of the unit square go to  The square becomes a parallelogram with the same base and height, hence the same area the horizontal counterpart of . Consistently, .      "
},
{
  "id": "lab-transformation-from-two-values",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-transformation-from-two-values",
  "type": "Exercise",
  "number": "10.3.1",
  "title": "A Transformation from Two of Its Values.",
  "body": " A Transformation from Two of Its Values   Let be a linear transformation with Find .    A linear transformation is determined on any vector we can write as a combination of vectors whose images we know, by . So look for and with The second entry gives , so ; the first then gives , so . The third entry checks: .   Therefore    "
},
{
  "id": "lab-transformation-not-determined",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-transformation-not-determined",
  "type": "Exercise",
  "number": "10.3.2",
  "title": "When Two Values Are Not Enough.",
  "body": " When Two Values Are Not Enough   Let be a linear transformation with Find and .    Both questions come down to writing the target as a combination of the two vectors we know. Row reduce with both right-hand sides at once:    The first vector. Its column of the reduced matrix ends in , so the system is consistent and Applying ,    The second vector. Its column ends in , so that system reads and is inconsistent: is not in . The two given values place no constraint on there, so cannot be determined from the information given.   "
},
{
  "id": "lab-matrix-from-two-values",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-matrix-from-two-values",
  "type": "Exercise",
  "number": "10.3.3",
  "title": "The Matrix from Two Values.",
  "body": " The Matrix from Two Values   A linear transformation satisfies Find the matrix of .    The matrix of has columns and , so we need to express the standard basis vectors in terms of the two given ones.  Subtracting, and, looking for with , the equations and give , :   Applying to both, so the matrix of is    "
},
{
  "id": "lab-composition-of-transformations",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-composition-of-transformations",
  "type": "Exercise",
  "number": "10.3.4",
  "title": "Composing Two Transformations.",
  "body": " Composing Two Transformations   Let be linear transformations with Find .    By definition , so We are not told directly, so write it in terms of the two vectors whose -images we do know. Looking for with the first entry gives and the second gives , so .  Therefore    "
},
{
  "id": "star-transformation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-transformation",
  "type": "Exercise",
  "number": "10.3.5",
  "title": "★ A Transformation from <span class=\"process-math\">\\(\\R^3\\)<\/span> to <span class=\"process-math\">\\(\\R^4\\)<\/span>.",
  "body": " ★ A Transformation from to   Let be defined by Identify the domain and codomain, and compute the image of .    By , the domain is and the codomain is : the rule takes a vector with three entries and returns one with four.  Substituting , , ,    "
},
{
  "id": "star-matrix-transformation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-matrix-transformation",
  "type": "Exercise",
  "number": "10.3.6",
  "title": "★ The Previous Transformation Is a Matrix Transformation.",
  "body": " ★ The Previous Transformation Is a Matrix Transformation   Show that the transformation of is a matrix transformation, and find its matrix.    Split the output according to the three input variables:   That is exactly a matrix-vector product, by : The matrix is , as it must be to send to . Checking the earlier value, .    "
},
{
  "id": "star-transformation-by-multiplication",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-transformation-by-multiplication",
  "type": "Exercise",
  "number": "10.3.7",
  "title": "★ Transformation by Matrix Multiplication.",
  "body": " ★ Transformation by Matrix Multiplication   Let . Describe the effect of on a general vector, and compute the image of .     is , so it sends vectors of to vectors of :   For the given vector, Note that never affects the first output and never affects the second, because of the two zeros in .   "
},
{
  "id": "star-transformation-from-values",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-transformation-from-values",
  "type": "Exercise",
  "number": "10.3.8",
  "title": "★ Determining a Transformation from Two Values.",
  "body": " ★ Determining a Transformation from Two Values   Let be linear with Find .    First write the target as a linear combination of the two known inputs. Solving ,  so and ; that is,   Now apply property (3) of :    "
},
{
  "id": "star-not-a-matrix-transformation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-not-a-matrix-transformation",
  "type": "Exercise",
  "number": "10.3.9",
  "title": "★ Transformations That Are Not Matrix Transformations.",
  "body": " ★ Transformations That Are Not Matrix Transformations   Give two transformations that are not matrix transformations, and explain why each fails.     A translation. Let . Then whereas every linear transformation satisfies by . So is not linear, and by it cannot be a matrix transformation. Directly: for every matrix , so no can reproduce this .   A product of coordinates. Let . This one does fix , so we must look further. Scalar multiplication fails:  and these differ. Equivalently, if worked we would need for all , which no constants can achieve.  The lesson is that fixing is necessary but not sufficient: the second example passes that test and still fails to be linear.   "
},
{
  "id": "star-surjective-true-false",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-surjective-true-false",
  "type": "Exercise",
  "number": "10.3.10",
  "title": "★ True or False?",
  "body": " ★ True or False?   Let , where is , and suppose is onto . Which of the following must be true?  For every , the equation has exactly one solution.  has only the trivial solution.  The columns of span .      A single example settles the first two. Take and , which is onto because has a pivot in every row.   (I) False. The third column has no pivot, so is free and every consistent system has infinitely many solutions. Being onto guarantees at least one solution for each , never exactly one.   (II) False. With the same , has the nontrivial solution , since . That statement characterizes one-to-one , not onto, by .   (III) True. By , is a linear combination of the columns of , so the range of is exactly . Saying is onto says that this span is all of .   "
},
{
  "id": "star-which-are-injections",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-which-are-injections",
  "type": "Exercise",
  "number": "10.3.11",
  "title": "★ Which Transformation Is an Injection?",
  "body": " ★ Which Transformation Is an Injection?     Reflection in the line in .  Projection into the -axis in .   .       (A) An injection. The matrix is , and forces and . Only the trivial solution, so is one-to-one by .   (B) Not an injection. Here , and holds for every on the -axis. For instance .   (C) An injection. The matrix is which has a pivot in each of its two columns, so has only the trivial solution. Directly: forces from the first row and from the second.   "
},
{
  "id": "star-injective-geometric",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-injective-geometric",
  "type": "Exercise",
  "number": "10.3.12",
  "title": "★ A One-to-One Transformation, Seen Geometrically.",
  "body": " ★ A One-to-One Transformation, Seen Geometrically   Let be induced by . Is one-to-one?    Row reduce :    There is a pivot in every column, so has only the trivial solution and is one-to-one by .  Note that cannot also be onto: is tall, and by a tall matrix is never onto. Its range is a plane inside , computed in .   "
},
{
  "id": "star-not-injective-geometric",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-not-injective-geometric",
  "type": "Exercise",
  "number": "10.3.13",
  "title": "★ A Transformation That Is Not One-to-One, Seen Geometrically.",
  "body": " ★ A Transformation That Is Not One-to-One, Seen Geometrically   Let be induced by . Is one-to-one?    The third column has no pivot, so is free. Solving , the second row gives and the first gives , so   Taking , so two different inputs share an output and is not one-to-one.  There was never a chance: is wide, and by a wide matrix is never one-to-one.   "
},
{
  "id": "star-surjection-simple",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-surjection-simple",
  "type": "Exercise",
  "number": "10.3.14",
  "title": "★ A Transformation That Is Not Onto.",
  "body": " ★ A Transformation That Is Not Onto   Let be defined by . Is onto?    Every image has first entry , so no vector with a nonzero first entry can be an output. For instance is never an image, and is not a surjection.  In matrix terms , which has only one pivot and hence no pivot in its first row. The range is the -axis, a line inside the two-dimensional codomain.   "
},
{
  "id": "star-which-are-surjections",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-which-are-surjections",
  "type": "Exercise",
  "number": "10.3.15",
  "title": "★ Which Transformation Is a Surjection?",
  "body": " ★ Which Transformation Is a Surjection?      with .   with .       (I) A surjection. The matrix has the images of the standard basis vectors as columns: It has a pivot in each of its two rows, so the augmented matrix of can never acquire a pivot in its last column, and the system is consistent for every . Explicitly, works.   (II) Not a surjection. Row reducing by and then gives last row . So the system is inconsistent whenever  for instance . The range is the plane , not all of .   "
},
{
  "id": "star-surjective-geometric",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-surjective-geometric",
  "type": "Exercise",
  "number": "10.3.16",
  "title": "★ An Onto Transformation, Seen Geometrically.",
  "body": " ★ An Onto Transformation, Seen Geometrically   Let be induced by . Is onto?     is already in row-echelon form with pivots in columns and  one in each of its two rows. So the augmented matrix of can never have a pivot in its last column, and the system is consistent for every . Hence is onto .  Concretely, given , take . Then   This is the same matrix as in , so is onto but not one-to-one: each has a whole line of preimages.   "
},
{
  "id": "star-not-surjective-geometric",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-not-surjective-geometric",
  "type": "Exercise",
  "number": "10.3.17",
  "title": "★ A Transformation That Is Not Onto, Seen Geometrically.",
  "body": " ★ A Transformation That Is Not Onto, Seen Geometrically   Let be induced by . Is onto? Describe the range.    Every output is a linear combination of the two columns:   Writing for an output, the second and third entries give and , and then the first entry must satisfy . Clearing the fraction, the range is the plane inside . Both columns satisfy it: and .   So is not onto for instance gives and has no preimage. As predicts, a tall matrix never is.   "
},
{
  "id": "star-neither-injective-nor-surjective",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-neither-injective-nor-surjective",
  "type": "Exercise",
  "number": "10.3.18",
  "title": "★ A Transformation That Is Neither One-to-One Nor Onto.",
  "body": " ★ A Transformation That Is Neither One-to-One Nor Onto   Let be induced by . Show that is neither one-to-one nor onto.    Row reducing, since the second row is times the first. There is a single pivot.   Not one-to-one. Columns and carry no pivot, so has two free variables. Its solution set is the whole plane in , so there are plenty of nontrivial solutions.   Not onto. There is no pivot in the second row. Every column is a multiple of , so the range is , a line in . The vector is not on that line, since would need and at once. So has no solution.   "
},
{
  "id": "star-projection-xz-plane",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-projection-xz-plane",
  "type": "Exercise",
  "number": "10.3.19",
  "title": "★ Projection into the <span class=\"process-math\">\\(xz\\)<\/span>-Plane Is Neither.",
  "body": " ★ Projection into the -Plane Is Neither   Let be projection into the -plane, Show that is neither one-to-one nor onto.    Since , and ,    Not one-to-one.  reads , , , so is free and the solution set is the whole -axis, . Concretely : the projection forgets .   Not onto. Every output has second entry , so the range is , the -plane, which is smaller than the codomain . The vector has no preimage, since the second equation of reads .  Both failures show up at once in , as says they must for a square matrix.   "
},
{
  "id": "star-both-injective-and-surjective",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-both-injective-and-surjective",
  "type": "Exercise",
  "number": "10.3.20",
  "title": "★ A Transformation That Is Both One-to-One and Onto.",
  "body": " ★ A Transformation That Is Both One-to-One and Onto   Let be induced by . Show that is both one-to-one and onto.    Row reducing, so there is a pivot in every column ( is one-to-one) and in every row ( is onto).  In fact , so is invertible with and every has the unique preimage . Checking,    "
},
{
  "id": "star-reflection-bijective",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-reflection-bijective",
  "type": "Exercise",
  "number": "10.3.21",
  "title": "★ Reflection Is Both One-to-One and Onto.",
  "body": " ★ Reflection Is Both One-to-One and Onto   Let be reflection in the line . Show that is both one-to-one and onto, for every .    By , Taking determinants, and remembering that a scalar factor of on a matrix contributes its square, using .  Since for every , the matrix is invertible. By , has only the trivial solution, so is one-to-one, and its columns span , so it is onto.  The geometry says it faster: reflecting twice returns every vector to where it started, so and . Every has exactly one preimage, namely itself. Note also that rather than : a reflection reverses orientation, where a rotation preserves it.   "
},
{
  "id": "lab-reflection-y-equals-minus-x",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-reflection-y-equals-minus-x",
  "type": "Exercise",
  "number": "10.3.22",
  "title": "Reflection in the Line <span class=\"process-math\">\\(y = -x\\)<\/span>.",
  "body": " Reflection in the Line   Let be the reflection in the line .  Find the matrix of .  Compute .       (a) Reflecting in swaps the two axes and reverses them: the point goes to . In particular and , so This is the case of .   (b) A reflection undoes itself, so . Indeed Therefore    "
},
{
  "id": "lab-identify-transformation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-identify-transformation",
  "type": "Exercise",
  "number": "10.3.23",
  "title": "Identifying a Transformation from Its Matrix.",
  "body": " Identifying a Transformation from Its Matrix   The matrix transformation induced by is which of the following: reflection in the -axis, reflection in the -axis, rotation through , or rotation through ?    Compute the effect on a general vector: The first coordinate is unchanged and the second is negated, which is exactly reflection in the -axis ; compare .  The two rotations are ruled out at once: by , rotation through has matrix , whose diagonal entries are zero. Reflection in the -axis would send to .   "
},
{
  "id": "lab-reflection-then-rotation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-reflection-then-rotation",
  "type": "Exercise",
  "number": "10.3.24",
  "title": "A Reflection Followed by a Rotation.",
  "body": " A Reflection Followed by a Rotation   Find the matrix of the linear transformation obtained by reflecting in the -axis and then rotating through radians. What familiar transformation is the result?    Reflection in the -axis sends and fixes , so its matrix is . Rotation through reverses every vector, so by its matrix is .  Doing the reflection first means multiplying by first, so the composite matrix is , with on the right:   That is reflection in the -axis ( ) a reflection, not a rotation. Composing two reflections gives a rotation, but here we composed a reflection with a rotation.   "
},
{
  "id": "lab-triple-composition",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-triple-composition",
  "type": "Exercise",
  "number": "10.3.25",
  "title": "Three Transformations in a Row.",
  "body": " Three Transformations in a Row   Find the matrix of the transformation that reflects in the line , then rotates through , then reflects in the -axis.    The three matrices are using for and with for .  The transformation applied first stands rightmost, so we want . First and then multiplying on the left by negates the first row:    "
},
{
  "id": "lab-inverse-transformation",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#lab-inverse-transformation",
  "type": "Exercise",
  "number": "10.3.26",
  "title": "Undoing a Transformation.",
  "body": " Undoing a Transformation     Let be induced by . Find the matrix of .  Let be linear with and . Find .  Let be the -shear . By which matrix is induced?       (a) Here , so is invertible and by  Checking, .    (b) From and linearity, . So the matrix of is  Hence As a check, .    (c) The shear is induced by , with , so Undoing a shear by is shearing by , exactly as the picture in suggests.   "
},
{
  "id": "star-rotation-quarter-turn",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-rotation-quarter-turn",
  "type": "Exercise",
  "number": "10.3.27",
  "title": "★ A Rotation through <span class=\"process-math\">\\(\\pi\/3\\)<\/span>.",
  "body": " ★ A Rotation through   Find the matrix of , and compute the image of .    With and , the rotation matrix is   Applying it, The image has the same length as the input, since , as a rotation must.   "
},
{
  "id": "star-reflection-y-axis",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-reflection-y-axis",
  "type": "Exercise",
  "number": "10.3.28",
  "title": "★ Reflection in the <span class=\"process-math\">\\(y\\)<\/span>-Axis.",
  "body": " ★ Reflection in the -Axis   Show that reflection in the -axis is a matrix transformation and find its matrix.    Reflection in the -axis sends to . In particular and , so So . Compare , where the roles of the two coordinates are exchanged.   "
},
{
  "id": "star-reflection-y-equals-minus-x",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-reflection-y-equals-minus-x",
  "type": "Exercise",
  "number": "10.3.29",
  "title": "★ Reflection in the Line <span class=\"process-math\">\\(y = -x\\)<\/span>.",
  "body": " ★ Reflection in the Line   Find the matrix of reflection in the line by computing the images of and .    Reflecting in sends to . In particular so   As a check, the line itself should be fixed: the point lies on , and the matrix sends it to . The perpendicular direction should be reversed, and it is sent to .   The same matrix was obtained a different way in .   "
},
{
  "id": "star-reflection-y-mx",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-reflection-y-mx",
  "type": "Exercise",
  "number": "10.3.30",
  "title": "★ Completing the Reflection in <span class=\"process-math\">\\(y = mx\\)<\/span>.",
  "body": " ★ Completing the Reflection in     Complete the exercise left open in : show that .  Write down the matrix of reflection in the line and check it on two vectors.       (a) Reflecting in a line at angle can be done in three steps: rotate the line down onto the -axis, reflect in the -axis, rotate back. Writing and , Now and multiplying on the left by ,   Substituting and gives and , so the second column is as claimed, and the full matrix is the one displayed in the example.   (b) With we get and The direction along the line is , and it should be fixed: . The perpendicular direction should be reversed: .    "
},
{
  "id": "star-reflection-origin",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-reflection-origin",
  "type": "Exercise",
  "number": "10.3.31",
  "title": "★ Two Reflections Make a Rotation.",
  "body": " ★ Two Reflections Make a Rotation   Show that reflecting in the -axis and then in the -axis gives reflection through the origin, and identify that transformation as a rotation.    The two matrices are and . Doing first means it stands on the right:   That matrix sends to , which is reflection through the origin. By it is also , rotation through half a turn.  Note that the two reflections commute here, , which is special: reflections in two lines meeting at angle compose to a rotation through , and the order matters unless is a right angle.   "
},
{
  "id": "star-projection-y-axis",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-projection-y-axis",
  "type": "Exercise",
  "number": "10.3.32",
  "title": "★ Projection into the <span class=\"process-math\">\\(y\\)<\/span>-Axis.",
  "body": " ★ Projection into the -Axis   Find the matrix of projection into the -axis, and explain why this transformation is not one-to-one.    Projection into the -axis sends to . Since and ,   It is not one-to-one because the first coordinate is discarded: every vector on a given horizontal line has the same image. For instance two different inputs with one output. Equivalently has the nontrivial solution .   "
},
{
  "id": "star-horizontal-shear",
  "level": "2",
  "url": "sec-problems-linear-transformations.html#star-horizontal-shear",
  "type": "Exercise",
  "number": "10.3.33",
  "title": "★ Horizontal Shear.",
  "body": " ★ Horizontal Shear   A horizontal shear fixes and sends to . Find its matrix, and describe its effect on the unit square when .    The columns of the matrix are the images of the standard basis vectors, so Each point slides horizontally by an amount proportional to its -coordinate, and the horizontal direction is left alone.  With , the corners of the unit square go to  The square becomes a parallelogram with the same base and height, hence the same area the horizontal counterpart of . Consistently, .   "
},
{
  "id": "sec-problems-matrix-algebra",
  "level": "1",
  "url": "sec-problems-matrix-algebra.html",
  "type": "Section",
  "number": "10.4",
  "title": "Matrix Algebra",
  "body": " Matrix Algebra     Problems for ( ).    Which Combinations Are Defined?   Let Find, if possible, , , , , , and . If a combination is not possible, explain why.     Scalar multiple and sum. Both are computed entry by entry, and and have the same size, so both are defined:    is not possible.  is and is . By the product needs the number of columns of to equal the number of rows of , and .   is defined and is :    and are not possible.  is and is : for we would need , and for we would need .     ★ Reading Entries off a Matrix   Let Give the size of , the entries and , and the main diagonal.     has three rows and three columns, so it is a matrix.  The entry sits in row , column , so . The entry sits in row , column , so . Row first, then column the two are different entries here, which is a useful check on the convention.  The main diagonal runs from the upper left to the lower right and consists of , , .     ★ Zero and Identity Matrices   Write down and , and verify that and for .       Adding the zero matrix changes nothing, since addition is entry by entry:   Multiplying by the identity also changes nothing: The first row of selects the first row of , and the second selects the second.     ★ Adding Two Matrices   Let and . Compute and .    Addition and subtraction are entry by entry:    For instance the -entry of the sum is . Both operations require the two matrices to have the same size.     ★ Multiplying by a Scalar   If , compute and .    Every entry is multiplied by the scalar: Note that the zero entry stays zero whatever the scalar.     ★ Combining Scalar Multiples   Simplify     Write . The third matrix is also a multiple of :   So by property (2) of , the whole expression collapses to a single scalar multiple:        Problems for ( ).    Products in Both Orders   Let Find, if possible, , , , , , and .    The sizes are , , . Checking inner dimensions:     is not possible, since has columns while has rows; and is not possible, since has columns while has rows.  Note that and are both defined here but are not even the same size, a stronger failure of commutativity than .     A Product of Three Matrices   Compute and simplify     Matrix multiplication is associative, so group whichever way is easier. Taking the first two factors, and then   The s cancel because the two rows of the middle matrix agree in the first column and differ only in sign in the second.     A Single Entry of a Product   Find the -entry of , where     There is no need to compute the whole product. By , the -entry is row of against column of :      Nilpotent Matrices   A square matrix is called nilpotent if . Which of are nilpotent?    Square each one:   So and are nilpotent , and is not.  Note that instead satisfies , the condition studied in .     Matrices with   Let be an matrix and the identity. Which of the following statements is always true?  If , then or .  If and , then is invertible.  If , then or .  If or , then .      A single example settles (a) and (b). Take . Then , yet is neither nor , and so is not invertible. Both (a) and (b) are false.    (c) is true. Taking determinants in and using , which forces or .   (d) is false  it is the converse of (c), and converses of true statements need not hold. For instance has , but .     When Cancellation Fails     Find matrices , , with and , but .  Can this be done with ?  Give an example of matrices , , neither of them zero, with .       (a) The condition is the same as , so we need a nonzero that kills some nonzero matrix. Any whose columns are linearly dependent will do. Take Every column of and of has equal entries, and annihilates such a column, so while and .   (b) Yes. We only need ; nothing forces itself to vanish. Take Then and still .   (c) This is the case of part (a): we need a nonzero whose columns all solve . Such a nonzero exists exactly when is not invertible. With the same as in (a), Note that may have any number of columns; a single column works just as well.     ★ Computing a Product Column by Column   Find , where       is and is , so is defined and is . Compute for each column of :   Assembling these as columns,      ★ Computing a Single Entry   With and as in and , compute without computing all of .    By , pair row of against column of : This matches the -entry of the product computed in the previous exercise.      ★ A Product That Exists in Only One Order   Let Does exist? Does ? Compute whichever does.     exists.  has columns and has rows, so the inner dimensions match and the product is :    does not exist.  has columns while has rows, and .     ★ Matrix Multiplication Is Not Commutative   Let and . Compute and .    Both matrices are , so both products are defined and both are :   Both exist and have the same size, yet : matrix multiplication is not commutative. Not even the diagonal entries agree here.     ★ A Product of Commuting Matrices   Let , , be matrices. Prove that if and each commute with , then commutes with .    Suppose and . Then, moving leftwards past and then past , using at each step. Hence and commute.  Associativity is doing all the work: at no point did we need to swap two matrices that were not assumed to commute.       Problems for ( ).    Sizes, Transposes, and Three False Claims   Let Which of the following statements are incorrect?  , since they have different sizes.  .  .   .  is not invertible.      Compute both products. is and is , so is and is :    (a) Correct. The two products are and , so they cannot be equal.   (b) Incorrect.  . The -entry is .   (c) Correct. Transposing turns its rows into columns, giving exactly ; see .   (d) Incorrect. The third column of is , not .   (e) Incorrect.  is diagonal with nonzero diagonal entries, so it is invertible, with .  So three of the five statements fail. The exercise is a useful reminder that is a genuine condition to be checked, not something guaranteed by .     ★ Transposing a Matrix   Find for .    Transposing turns rows into columns, so a matrix becomes : The -entry of is the -entry of : for instance .     ★ A Symmetric Combination   Show that if and are symmetric, then is symmetric.    Symmetry means and . Using ,   Since , the matrix is symmetric by . Note that here, so the expression is really just  but the computation did not need that observation.     ★ Solving for an Unknown Matrix   Find if     Transpose both sides. By property (1) of , transposing twice returns the original matrix, so the left side becomes the bracket itself:   Now solve for : The sizes are consistent: is , and its transpose is the matrix on the right of the original equation.       Problems for ( ).    When Cancellation Works   Explain why, if and exists, then .    Multiply both sides on the left by : The second step is associativity of matrix multiplication ( ), and the last uses that is the identity for multiplication.  Invertibility is essential, not decorative: shows that cancellation can fail outright when does not exist. Note also that we must multiply on the same side on both sides of the equation left-cancelling tells us nothing about an equation of the form .     Inverses of Transposes and Products     Show that if is an invertible matrix, then so is , and .  Show that by verifying both and .  Show that .  Throughout you may use that an inverse, when it exists, is unique ( ): if and , then .     (a) We show that behaves like an inverse of . Using ,  By uniqueness of the inverse, is invertible with .   (b) Regroup and cancel from the inside out:  So acts as the inverse of , and by uniqueness .   (c) The same peeling, one layer deeper:  Both (b) and (c) are instances of : inverting a product reverses the order of the factors, just as transposing one does.     The Inversion Algorithm   Let and .  Use the matrix inversion algorithm to find .  Use your answer to solve .       (a) Following , row reduce :     The left half is , so Checking one entry of : row of against column of is .    (b) Since is invertible, . As , this simply picks out the second column of : Check: .      One Inverse, Many Systems   Let .  Find .  Use it to solve for each of   Give the solution in terms of a general right-hand side .  Find all solutions of .       (a) The inversion algorithm gives Verify with one row: row of against column of gives .    (b) This is the point of computing an inverse once: each system is now a single matrix-vector product, .     (c) The same product with symbols: Setting to each of the four right-hand sides reproduces the answers in (b).   (d) Since exists, gives . The trivial solution is the only solution one of the equivalences in .     Inverting and Solving     Use the matrix inversion algorithm to find for .  Let and . Given that , solve .       (a) Row reduce :    so Check the middle entry of : row of against column of is .    (b) Multiply through by : Check: .      One Entry of an Inverse   Let . Find the -entry of .    Run the inversion algorithm:       So , and the -entry is .  Check: row of against column of is , as the -entry of should be.      Solving for an Unknown Matrix     Find if .  Find if .       (a) Inverting both sides, and writing with , Hence    (b) Invert both sides again. The right-hand side inverts to , so Collecting the terms, Therefore      Recovering from   Suppose and Find the -entry and the -entry of .    Since , is invertible and . By ,   Only row of is needed. Against column of , and against column ,   For the record, the whole matrix is , and can be recomputed from it to confirm the answer.     Matrix Equations with Invertible Coefficients     Let , , . If , find .  Let . What can be said about the solutions of , where and are matrices?       (a) Both and are invertible: and . Multiply the equation by on the left and on the right: Now so     (b) Again , so exists and  There is exactly one for each , no matter what is. The point is that invertibility of the coefficient matrix turns a matrix equation into a formula, exactly as it does for . The matrix is similar to in the sense of .     A Parameter and Invertibility   Find all values of for which is invertible.    By , is invertible exactly when , and This vanishes only at , so is invertible for every .  The same conclusion comes from row reduction without ever mentioning determinants: and the reduced row-echelon form is precisely when .     ★ A Matrix with No Inverse   Show that , where , has no inverse.    Suppose existed, say . Then whose two rows are identical. But the rows of are not identical, so the product can never be . No such exists.  This agrees with : here for every , including .     ★ The Algorithm on a Matrix   Let . Find .    Augment with and row reduce: Therefore   For a matrix the formula of is quicker. Here , so in agreement with the algorithm.     ★ Seeing Column by Column   Let . Run the inversion algorithm and verify directly that for each column of the result.        So , with columns and . Checking each, and therefore .  Here , so this is its own inverse. That is worth double-checking directly: .      ★ The Algorithm on a Matrix   Find the inverse of , if it exists.    Augment with and row reduce:   The left half reached , so is invertible and Checking one entry: row of against column of gives , as the -entry of should be.      ★ Solving a System Using the Inverse   Use an inverse to solve     In matrix form with We found in , so   That is , . Checking:  and  .  The solution is unique: if were another solution, multiplying by would give .       Problems for ( ).    Writing a Matrix as a Product of Elementary Matrices   Express as a product of three elementary matrices.    Row reduce to , recording each operation:    The corresponding elementary matrices, each obtained by doing the operation to , are and . Solving for and using ,   Each inverse is elementary, being the matrix of the reversing operation ( ):   So and multiplying out from the left,      Finding with   Let and . Find an invertible matrix with , and express as a product of elementary matrices.    Row reduce towards :    The three elementary matrices are and , so    is invertible, being a product of invertible matrices; indeed . Checking directly,      Two Operations, One Matrix   Let be a matrix and let be obtained from by performing, in order,  add times row to row ;  interchange rows and .  Then for which matrix ?    Each operation is performed by left multiplication by the elementary matrix obtained by doing that operation to :   Applying first and then gives , so   The order matters: is a different matrix, corresponding to doing the swap first. Note also that the number of columns of is irrelevant only the two rows matter.     Which Matrices Are Elementary?     Which of the following are elementary matrices?    Which of these is always true: the sum, the scalar multiple, the product, or the inverse of elementary matrices is again elementary?       (a) By , an elementary matrix comes from an identity matrix by one elementary row operation.   is not square, so it is not an elementary matrix at all.    is elementary: multiplying any row of by the nonzero scalar leaves it unchanged.   is not : it has a zero row, so it is not invertible, while every elementary matrix is (its operation can be reversed).    is : it is after the single operation .  So the elementary ones are and .   (b) Only the inverse . Undoing one row operation is again one row operation swap back, multiply by the reciprocal, subtract what was added so the inverse of an elementary matrix is elementary, as in .  The others all fail. The sum differs from in four entries. The scalar multiple of the elementary matrix comes from by two row scalings, not one. And the product of the same two matrices above is , again not elementary indeed shows that a general invertible matrix is a product of several elementary matrices, which would be pointless if products stayed elementary.     Reading Correctly   Let and be matrices, and suppose is an invertible matrix with . Which of the following is always true?  .  .  .  .       multiplies on the left , so we must undo it on the left: The answer is (c) .  Options (a) and (b) multiply on the wrong side and are not even defined in general: if is with , then is and the product requires . Option (d) fails for the same reason, and in any case says something different from the hypothesis.     ★ Three Elementary Matrices   Write down the elementary matrices obtained from by each of the row operations , , and .    Apply each operation to exactly once:    In symbols, For , note that adding times row to row puts the in position , not .     ★ The Effect of Left Multiplication   Compute , and , where are as in and     Each product performs on the very row operation that produced the elementary matrix from .   came from , so which is with rows and interchanged.   came from , so which is with row multiplied by .   came from , so which is with times row added to row : the new first row is .     ★ Inverting Elementary Matrices by Inspection   Without using the inversion algorithm, find and for the matrices of .    The inverse of an elementary matrix is the elementary matrix of the reversing row operation.   came from . The operation that undoes it is , so    came from . The operation that undoes it is , so   Both are again elementary, as notes. And , being a row swap, is its own inverse: swapping rows and twice restores the original.     ★ Factoring a Matrix into Elementary Matrices   Express as a product of elementary matrices, and use the factorization to find .    Row reduce to , recording each operation:    The corresponding elementary matrices are and . Two consequences follow at once.   The factorization. Solving for , Multiplying out from the left confirms it: .    The inverse. From , This agrees with : here , so .        Problems for ( ).    Which Identities Always Hold?   Let and be matrices. Decide whether each identity holds for every such pair, and give a counterexample when it does not.  .  .  .  If then .  .  If then .  If is invertible, then and are both invertible.  .       (a) Always true. Transposition is computed entry by entry, so it respects sums; see .   (b) False. The correct rule is and the order matters. With and , while .   (c) Always true. The two matrices are transposes of one another, since , and a matrix and its transpose have the same determinant by .   (d) False. With and we get but .   (e) False  this just says every pair of matrices commutes, which already refutes.   (f) Always true. If then and , so both equal . This is one of the rare pairs that is guaranteed to commute.   (g) False. Take and . Then is invertible while is not. (Or take and : neither is invertible but their sum is .)   (h) False. Expanding gives , which equals only when . The pair in (d) provides a counterexample.     Which Statements Are Equivalent to Invertibility?   Let be a square matrix. Which of the following are equivalent to being invertible?  The reduced row-echelon form of is .  has a unique solution for every .  has a unique solution.  is a product of elementary matrices.  has infinitely many solutions.      Statements (a) through (d) are all equivalent to invertibility. Items (a), (b) and (d) appear verbatim in . For (c), note that is always a solution of the homogeneous system, so a unique solution means only the trivial solution , which is again on that list.   (e) is not equivalent  it is the exact opposite. If has infinitely many solutions then it has a nontrivial one, and is not invertible. For a square matrix these are the only two possibilities: has either only the trivial solution (and is invertible) or infinitely many (and it is not).     An Inverse from a Polynomial Equation   Suppose the matrix satisfies . Express in terms of .    Move the identity to the other side and factor out : The same factoring on the other side gives , since powers of commute with . So acts as an inverse of , and by uniqueness Compare . Note in passing that this argument also proves  is invertible we did not have to assume it.     ★ Detecting Non-Invertibility from the Columns   Is the following matrix invertible?     Label the columns and look for a relation. Adding the first two,   So is a nontrivial dependence among the columns. The columns are not linearly independent, so the matrix is not invertible by condition (5) of .  Equivalently, is a nontrivial solution of . No row reduction was needed spotting one relation is enough.     ★ True or False?     If is invertible, then so is .  If and are invertible matrices, then is invertible.       (a) True. By , is invertible with . The verification is short: , and similarly in the other order. This is also proved from scratch in .   (b) False. Invertibility survives products, not sums. Take and , both invertible. Then , which is not invertible.  A less extreme counterexample: and are invertible, but has determinant .     ★ An Inverse from a Polynomial Identity   Suppose the square matrix satisfies Find , if possible.    Isolate the identity and divide by :   Every term on the left has a factor of , so and by condition (8) of , is invertible with   Notice that the argument also proves  is invertible; we never assumed it. The key was that the constant term is nonzero had the identity been , no such conclusion would follow.      "
},
{
  "id": "lab-which-products-exist",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-which-products-exist",
  "type": "Exercise",
  "number": "10.4.1",
  "title": "Which Combinations Are Defined?",
  "body": " Which Combinations Are Defined?   Let Find, if possible, , , , , , and . If a combination is not possible, explain why.     Scalar multiple and sum. Both are computed entry by entry, and and have the same size, so both are defined:    is not possible.  is and is . By the product needs the number of columns of to equal the number of rows of , and .   is defined and is :    and are not possible.  is and is : for we would need , and for we would need .   "
},
{
  "id": "star-matrix-entries",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-matrix-entries",
  "type": "Exercise",
  "number": "10.4.2",
  "title": "★ Reading Entries off a Matrix.",
  "body": " ★ Reading Entries off a Matrix   Let Give the size of , the entries and , and the main diagonal.     has three rows and three columns, so it is a matrix.  The entry sits in row , column , so . The entry sits in row , column , so . Row first, then column the two are different entries here, which is a useful check on the convention.  The main diagonal runs from the upper left to the lower right and consists of , , .   "
},
{
  "id": "star-zero-identity",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-zero-identity",
  "type": "Exercise",
  "number": "10.4.3",
  "title": "★ Zero and Identity Matrices.",
  "body": " ★ Zero and Identity Matrices   Write down and , and verify that and for .       Adding the zero matrix changes nothing, since addition is entry by entry:   Multiplying by the identity also changes nothing: The first row of selects the first row of , and the second selects the second.   "
},
{
  "id": "star-matrix-addition",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-matrix-addition",
  "type": "Exercise",
  "number": "10.4.4",
  "title": "★ Adding Two Matrices.",
  "body": " ★ Adding Two Matrices   Let and . Compute and .    Addition and subtraction are entry by entry:    For instance the -entry of the sum is . Both operations require the two matrices to have the same size.   "
},
{
  "id": "star-scalar-multiplication",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-scalar-multiplication",
  "type": "Exercise",
  "number": "10.4.5",
  "title": "★ Multiplying by a Scalar.",
  "body": " ★ Multiplying by a Scalar   If , compute and .    Every entry is multiplied by the scalar: Note that the zero entry stays zero whatever the scalar.   "
},
{
  "id": "star-combining-scalars",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-combining-scalars",
  "type": "Exercise",
  "number": "10.4.6",
  "title": "★ Combining Scalar Multiples.",
  "body": " ★ Combining Scalar Multiples   Simplify     Write . The third matrix is also a multiple of :   So by property (2) of , the whole expression collapses to a single scalar multiple:    "
},
{
  "id": "lab-products-both-orders",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-products-both-orders",
  "type": "Exercise",
  "number": "10.4.7",
  "title": "Products in Both Orders.",
  "body": " Products in Both Orders   Let Find, if possible, , , , , , and .    The sizes are , , . Checking inner dimensions:     is not possible, since has columns while has rows; and is not possible, since has columns while has rows.  Note that and are both defined here but are not even the same size, a stronger failure of commutativity than .   "
},
{
  "id": "lab-product-of-three",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-product-of-three",
  "type": "Exercise",
  "number": "10.4.8",
  "title": "A Product of Three Matrices.",
  "body": " A Product of Three Matrices   Compute and simplify     Matrix multiplication is associative, so group whichever way is easier. Taking the first two factors, and then   The s cancel because the two rows of the middle matrix agree in the first column and differ only in sign in the second.   "
},
{
  "id": "lab-single-entry-of-product",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-single-entry-of-product",
  "type": "Exercise",
  "number": "10.4.9",
  "title": "A Single Entry of a Product.",
  "body": " A Single Entry of a Product   Find the -entry of , where     There is no need to compute the whole product. By , the -entry is row of against column of :    "
},
{
  "id": "lab-nilpotent",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-nilpotent",
  "type": "Exercise",
  "number": "10.4.10",
  "title": "Nilpotent Matrices.",
  "body": " Nilpotent Matrices   A square matrix is called nilpotent if . Which of are nilpotent?    Square each one:   So and are nilpotent , and is not.  Note that instead satisfies , the condition studied in .   "
},
{
  "id": "lab-idempotent",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-idempotent",
  "type": "Exercise",
  "number": "10.4.11",
  "title": "Matrices with <span class=\"process-math\">\\(A^2 = A\\)<\/span>.",
  "body": " Matrices with   Let be an matrix and the identity. Which of the following statements is always true?  If , then or .  If and , then is invertible.  If , then or .  If or , then .      A single example settles (a) and (b). Take . Then , yet is neither nor , and so is not invertible. Both (a) and (b) are false.    (c) is true. Taking determinants in and using , which forces or .   (d) is false  it is the converse of (c), and converses of true statements need not hold. For instance has , but .   "
},
{
  "id": "lab-cancellation-fails",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-cancellation-fails",
  "type": "Exercise",
  "number": "10.4.12",
  "title": "When Cancellation Fails.",
  "body": " When Cancellation Fails     Find matrices , , with and , but .  Can this be done with ?  Give an example of matrices , , neither of them zero, with .       (a) The condition is the same as , so we need a nonzero that kills some nonzero matrix. Any whose columns are linearly dependent will do. Take Every column of and of has equal entries, and annihilates such a column, so while and .   (b) Yes. We only need ; nothing forces itself to vanish. Take Then and still .   (c) This is the case of part (a): we need a nonzero whose columns all solve . Such a nonzero exists exactly when is not invertible. With the same as in (a), Note that may have any number of columns; a single column works just as well.   "
},
{
  "id": "star-product-by-columns",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-product-by-columns",
  "type": "Exercise",
  "number": "10.4.13",
  "title": "★ Computing a Product Column by Column.",
  "body": " ★ Computing a Product Column by Column   Find , where       is and is , so is defined and is . Compute for each column of :   Assembling these as columns,    "
},
{
  "id": "star-single-entry",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-single-entry",
  "type": "Exercise",
  "number": "10.4.14",
  "title": "★ Computing a Single Entry.",
  "body": " ★ Computing a Single Entry   With and as in and , compute without computing all of .    By , pair row of against column of : This matches the -entry of the product computed in the previous exercise.    "
},
{
  "id": "star-ab-exists-ba-does-not",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-ab-exists-ba-does-not",
  "type": "Exercise",
  "number": "10.4.15",
  "title": "★ A Product That Exists in Only One Order.",
  "body": " ★ A Product That Exists in Only One Order   Let Does exist? Does ? Compute whichever does.     exists.  has columns and has rows, so the inner dimensions match and the product is :    does not exist.  has columns while has rows, and .   "
},
{
  "id": "star-ab-not-ba",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-ab-not-ba",
  "type": "Exercise",
  "number": "10.4.16",
  "title": "★ Matrix Multiplication Is Not Commutative.",
  "body": " ★ Matrix Multiplication Is Not Commutative   Let and . Compute and .    Both matrices are , so both products are defined and both are :   Both exist and have the same size, yet : matrix multiplication is not commutative. Not even the diagonal entries agree here.   "
},
{
  "id": "star-product-commutes",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-product-commutes",
  "type": "Exercise",
  "number": "10.4.17",
  "title": "★ A Product of Commuting Matrices.",
  "body": " ★ A Product of Commuting Matrices   Let , , be matrices. Prove that if and each commute with , then commutes with .    Suppose and . Then, moving leftwards past and then past , using at each step. Hence and commute.  Associativity is doing all the work: at no point did we need to swap two matrices that were not assumed to commute.   "
},
{
  "id": "lab-sizes-and-transposes",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-sizes-and-transposes",
  "type": "Exercise",
  "number": "10.4.18",
  "title": "Sizes, Transposes, and Three False Claims.",
  "body": " Sizes, Transposes, and Three False Claims   Let Which of the following statements are incorrect?  , since they have different sizes.  .  .   .  is not invertible.      Compute both products. is and is , so is and is :    (a) Correct. The two products are and , so they cannot be equal.   (b) Incorrect.  . The -entry is .   (c) Correct. Transposing turns its rows into columns, giving exactly ; see .   (d) Incorrect. The third column of is , not .   (e) Incorrect.  is diagonal with nonzero diagonal entries, so it is invertible, with .  So three of the five statements fail. The exercise is a useful reminder that is a genuine condition to be checked, not something guaranteed by .   "
},
{
  "id": "star-transpose",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-transpose",
  "type": "Exercise",
  "number": "10.4.19",
  "title": "★ Transposing a Matrix.",
  "body": " ★ Transposing a Matrix   Find for .    Transposing turns rows into columns, so a matrix becomes : The -entry of is the -entry of : for instance .   "
},
{
  "id": "star-symmetric-combination",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-symmetric-combination",
  "type": "Exercise",
  "number": "10.4.20",
  "title": "★ A Symmetric Combination.",
  "body": " ★ A Symmetric Combination   Show that if and are symmetric, then is symmetric.    Symmetry means and . Using ,   Since , the matrix is symmetric by . Note that here, so the expression is really just  but the computation did not need that observation.   "
},
{
  "id": "star-solve-for-a",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-solve-for-a",
  "type": "Exercise",
  "number": "10.4.21",
  "title": "★ Solving for an Unknown Matrix.",
  "body": " ★ Solving for an Unknown Matrix   Find if     Transpose both sides. By property (1) of , transposing twice returns the original matrix, so the left side becomes the bracket itself:   Now solve for : The sizes are consistent: is , and its transpose is the matrix on the right of the original equation.   "
},
{
  "id": "lab-cancellation-works",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-cancellation-works",
  "type": "Exercise",
  "number": "10.4.22",
  "title": "When Cancellation Works.",
  "body": " When Cancellation Works   Explain why, if and exists, then .    Multiply both sides on the left by : The second step is associativity of matrix multiplication ( ), and the last uses that is the identity for multiplication.  Invertibility is essential, not decorative: shows that cancellation can fail outright when does not exist. Note also that we must multiply on the same side on both sides of the equation left-cancelling tells us nothing about an equation of the form .   "
},
{
  "id": "lab-inverses-of-transposes-and-products",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-inverses-of-transposes-and-products",
  "type": "Exercise",
  "number": "10.4.23",
  "title": "Inverses of Transposes and Products.",
  "body": " Inverses of Transposes and Products     Show that if is an invertible matrix, then so is , and .  Show that by verifying both and .  Show that .  Throughout you may use that an inverse, when it exists, is unique ( ): if and , then .     (a) We show that behaves like an inverse of . Using ,  By uniqueness of the inverse, is invertible with .   (b) Regroup and cancel from the inside out:  So acts as the inverse of , and by uniqueness .   (c) The same peeling, one layer deeper:  Both (b) and (c) are instances of : inverting a product reverses the order of the factors, just as transposing one does.   "
},
{
  "id": "lab-inversion-algorithm-3x3",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-inversion-algorithm-3x3",
  "type": "Exercise",
  "number": "10.4.24",
  "title": "The Inversion Algorithm.",
  "body": " The Inversion Algorithm   Let and .  Use the matrix inversion algorithm to find .  Use your answer to solve .       (a) Following , row reduce :     The left half is , so Checking one entry of : row of against column of is .    (b) Since is invertible, . As , this simply picks out the second column of : Check: .    "
},
{
  "id": "lab-one-inverse-many-systems",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-one-inverse-many-systems",
  "type": "Exercise",
  "number": "10.4.25",
  "title": "One Inverse, Many Systems.",
  "body": " One Inverse, Many Systems   Let .  Find .  Use it to solve for each of   Give the solution in terms of a general right-hand side .  Find all solutions of .       (a) The inversion algorithm gives Verify with one row: row of against column of gives .    (b) This is the point of computing an inverse once: each system is now a single matrix-vector product, .     (c) The same product with symbols: Setting to each of the four right-hand sides reproduces the answers in (b).   (d) Since exists, gives . The trivial solution is the only solution one of the equivalences in .   "
},
{
  "id": "lab-inverting-and-solving",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-inverting-and-solving",
  "type": "Exercise",
  "number": "10.4.26",
  "title": "Inverting and Solving.",
  "body": " Inverting and Solving     Use the matrix inversion algorithm to find for .  Let and . Given that , solve .       (a) Row reduce :    so Check the middle entry of : row of against column of is .    (b) Multiply through by : Check: .    "
},
{
  "id": "lab-one-entry-of-inverse",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-one-entry-of-inverse",
  "type": "Exercise",
  "number": "10.4.27",
  "title": "One Entry of an Inverse.",
  "body": " One Entry of an Inverse   Let . Find the -entry of .    Run the inversion algorithm:       So , and the -entry is .  Check: row of against column of is , as the -entry of should be.    "
},
{
  "id": "lab-solving-for-a-matrix",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-solving-for-a-matrix",
  "type": "Exercise",
  "number": "10.4.28",
  "title": "Solving for an Unknown Matrix.",
  "body": " Solving for an Unknown Matrix     Find if .  Find if .       (a) Inverting both sides, and writing with , Hence    (b) Invert both sides again. The right-hand side inverts to , so Collecting the terms, Therefore    "
},
{
  "id": "lab-recovering-b",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-recovering-b",
  "type": "Exercise",
  "number": "10.4.29",
  "title": "Recovering <span class=\"process-math\">\\(B\\)<\/span> from <span class=\"process-math\">\\(AB\\)<\/span>.",
  "body": " Recovering from   Suppose and Find the -entry and the -entry of .    Since , is invertible and . By ,   Only row of is needed. Against column of , and against column ,   For the record, the whole matrix is , and can be recomputed from it to confirm the answer.   "
},
{
  "id": "lab-matrix-equations",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-matrix-equations",
  "type": "Exercise",
  "number": "10.4.30",
  "title": "Matrix Equations with Invertible Coefficients.",
  "body": " Matrix Equations with Invertible Coefficients     Let , , . If , find .  Let . What can be said about the solutions of , where and are matrices?       (a) Both and are invertible: and . Multiply the equation by on the left and on the right: Now so     (b) Again , so exists and  There is exactly one for each , no matter what is. The point is that invertibility of the coefficient matrix turns a matrix equation into a formula, exactly as it does for . The matrix is similar to in the sense of .   "
},
{
  "id": "lab-invertibility-parameter-2x2",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-invertibility-parameter-2x2",
  "type": "Exercise",
  "number": "10.4.31",
  "title": "A Parameter and Invertibility.",
  "body": " A Parameter and Invertibility   Find all values of for which is invertible.    By , is invertible exactly when , and This vanishes only at , so is invertible for every .  The same conclusion comes from row reduction without ever mentioning determinants: and the reduced row-echelon form is precisely when .   "
},
{
  "id": "star-no-inverse",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-no-inverse",
  "type": "Exercise",
  "number": "10.4.32",
  "title": "★ A Matrix with No Inverse.",
  "body": " ★ A Matrix with No Inverse   Show that , where , has no inverse.    Suppose existed, say . Then whose two rows are identical. But the rows of are not identical, so the product can never be . No such exists.  This agrees with : here for every , including .   "
},
{
  "id": "star-inversion-algorithm-2x2",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-inversion-algorithm-2x2",
  "type": "Exercise",
  "number": "10.4.33",
  "title": "★ The Algorithm on a <span class=\"process-math\">\\(2 \\times 2\\)<\/span> Matrix.",
  "body": " ★ The Algorithm on a Matrix   Let . Find .    Augment with and row reduce: Therefore   For a matrix the formula of is quicker. Here , so in agreement with the algorithm.   "
},
{
  "id": "star-ab-equals-i",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-ab-equals-i",
  "type": "Exercise",
  "number": "10.4.34",
  "title": "★ Seeing <span class=\"process-math\">\\(AB = I\\)<\/span> Column by Column.",
  "body": " ★ Seeing Column by Column   Let . Run the inversion algorithm and verify directly that for each column of the result.        So , with columns and . Checking each, and therefore .  Here , so this is its own inverse. That is worth double-checking directly: .    "
},
{
  "id": "star-inversion-algorithm-3x3",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-inversion-algorithm-3x3",
  "type": "Exercise",
  "number": "10.4.35",
  "title": "★ The Algorithm on a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " ★ The Algorithm on a Matrix   Find the inverse of , if it exists.    Augment with and row reduce:   The left half reached , so is invertible and Checking one entry: row of against column of gives , as the -entry of should be.    "
},
{
  "id": "star-solve-with-inverse",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-solve-with-inverse",
  "type": "Exercise",
  "number": "10.4.36",
  "title": "★ Solving a System Using the Inverse.",
  "body": " ★ Solving a System Using the Inverse   Use an inverse to solve     In matrix form with We found in , so   That is , . Checking:  and  .  The solution is unique: if were another solution, multiplying by would give .   "
},
{
  "id": "lab-product-of-three-elementary",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-product-of-three-elementary",
  "type": "Exercise",
  "number": "10.4.37",
  "title": "Writing a Matrix as a Product of Elementary Matrices.",
  "body": " Writing a Matrix as a Product of Elementary Matrices   Express as a product of three elementary matrices.    Row reduce to , recording each operation:    The corresponding elementary matrices, each obtained by doing the operation to , are and . Solving for and using ,   Each inverse is elementary, being the matrix of the reversing operation ( ):   So and multiplying out from the left,    "
},
{
  "id": "lab-u-from-row-operations",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-u-from-row-operations",
  "type": "Exercise",
  "number": "10.4.38",
  "title": "Finding <span class=\"process-math\">\\(U\\)<\/span> with <span class=\"process-math\">\\(B = UA\\)<\/span>.",
  "body": " Finding with   Let and . Find an invertible matrix with , and express as a product of elementary matrices.    Row reduce towards :    The three elementary matrices are and , so    is invertible, being a product of invertible matrices; indeed . Checking directly,    "
},
{
  "id": "lab-u-from-two-operations",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-u-from-two-operations",
  "type": "Exercise",
  "number": "10.4.39",
  "title": "Two Operations, One Matrix <span class=\"process-math\">\\(U\\)<\/span>.",
  "body": " Two Operations, One Matrix   Let be a matrix and let be obtained from by performing, in order,  add times row to row ;  interchange rows and .  Then for which matrix ?    Each operation is performed by left multiplication by the elementary matrix obtained by doing that operation to :   Applying first and then gives , so   The order matters: is a different matrix, corresponding to doing the swap first. Note also that the number of columns of is irrelevant only the two rows matter.   "
},
{
  "id": "lab-which-are-elementary",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-which-are-elementary",
  "type": "Exercise",
  "number": "10.4.40",
  "title": "Which Matrices Are Elementary?",
  "body": " Which Matrices Are Elementary?     Which of the following are elementary matrices?    Which of these is always true: the sum, the scalar multiple, the product, or the inverse of elementary matrices is again elementary?       (a) By , an elementary matrix comes from an identity matrix by one elementary row operation.   is not square, so it is not an elementary matrix at all.    is elementary: multiplying any row of by the nonzero scalar leaves it unchanged.   is not : it has a zero row, so it is not invertible, while every elementary matrix is (its operation can be reversed).    is : it is after the single operation .  So the elementary ones are and .   (b) Only the inverse . Undoing one row operation is again one row operation swap back, multiply by the reciprocal, subtract what was added so the inverse of an elementary matrix is elementary, as in .  The others all fail. The sum differs from in four entries. The scalar multiple of the elementary matrix comes from by two row scalings, not one. And the product of the same two matrices above is , again not elementary indeed shows that a general invertible matrix is a product of several elementary matrices, which would be pointless if products stayed elementary.   "
},
{
  "id": "lab-b-equals-ua",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-b-equals-ua",
  "type": "Exercise",
  "number": "10.4.41",
  "title": "Reading <span class=\"process-math\">\\(B = UA\\)<\/span> Correctly.",
  "body": " Reading Correctly   Let and be matrices, and suppose is an invertible matrix with . Which of the following is always true?  .  .  .  .       multiplies on the left , so we must undo it on the left: The answer is (c) .  Options (a) and (b) multiply on the wrong side and are not even defined in general: if is with , then is and the product requires . Option (d) fails for the same reason, and in any case says something different from the hypothesis.   "
},
{
  "id": "star-elementary-matrices",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-elementary-matrices",
  "type": "Exercise",
  "number": "10.4.42",
  "title": "★ Three Elementary Matrices.",
  "body": " ★ Three Elementary Matrices   Write down the elementary matrices obtained from by each of the row operations , , and .    Apply each operation to exactly once:    In symbols, For , note that adding times row to row puts the in position , not .   "
},
{
  "id": "star-left-multiplication",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-left-multiplication",
  "type": "Exercise",
  "number": "10.4.43",
  "title": "★ The Effect of Left Multiplication.",
  "body": " ★ The Effect of Left Multiplication   Compute , and , where are as in and     Each product performs on the very row operation that produced the elementary matrix from .   came from , so which is with rows and interchanged.   came from , so which is with row multiplied by .   came from , so which is with times row added to row : the new first row is .   "
},
{
  "id": "star-inverse-of-elementary",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-inverse-of-elementary",
  "type": "Exercise",
  "number": "10.4.44",
  "title": "★ Inverting Elementary Matrices by Inspection.",
  "body": " ★ Inverting Elementary Matrices by Inspection   Without using the inversion algorithm, find and for the matrices of .    The inverse of an elementary matrix is the elementary matrix of the reversing row operation.   came from . The operation that undoes it is , so    came from . The operation that undoes it is , so   Both are again elementary, as notes. And , being a row swap, is its own inverse: swapping rows and twice restores the original.   "
},
{
  "id": "star-product-of-elementary",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-product-of-elementary",
  "type": "Exercise",
  "number": "10.4.45",
  "title": "★ Factoring a Matrix into Elementary Matrices.",
  "body": " ★ Factoring a Matrix into Elementary Matrices   Express as a product of elementary matrices, and use the factorization to find .    Row reduce to , recording each operation:    The corresponding elementary matrices are and . Two consequences follow at once.   The factorization. Solving for , Multiplying out from the left confirms it: .    The inverse. From , This agrees with : here , so .    "
},
{
  "id": "lab-always-true-identities",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-always-true-identities",
  "type": "Exercise",
  "number": "10.4.46",
  "title": "Which Identities Always Hold?",
  "body": " Which Identities Always Hold?   Let and be matrices. Decide whether each identity holds for every such pair, and give a counterexample when it does not.  .  .  .  If then .  .  If then .  If is invertible, then and are both invertible.  .       (a) Always true. Transposition is computed entry by entry, so it respects sums; see .   (b) False. The correct rule is and the order matters. With and , while .   (c) Always true. The two matrices are transposes of one another, since , and a matrix and its transpose have the same determinant by .   (d) False. With and we get but .   (e) False  this just says every pair of matrices commutes, which already refutes.   (f) Always true. If then and , so both equal . This is one of the rare pairs that is guaranteed to commute.   (g) False. Take and . Then is invertible while is not. (Or take and : neither is invertible but their sum is .)   (h) False. Expanding gives , which equals only when . The pair in (d) provides a counterexample.   "
},
{
  "id": "lab-imt-equivalences",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-imt-equivalences",
  "type": "Exercise",
  "number": "10.4.47",
  "title": "Which Statements Are Equivalent to Invertibility?",
  "body": " Which Statements Are Equivalent to Invertibility?   Let be a square matrix. Which of the following are equivalent to being invertible?  The reduced row-echelon form of is .  has a unique solution for every .  has a unique solution.  is a product of elementary matrices.  has infinitely many solutions.      Statements (a) through (d) are all equivalent to invertibility. Items (a), (b) and (d) appear verbatim in . For (c), note that is always a solution of the homogeneous system, so a unique solution means only the trivial solution , which is again on that list.   (e) is not equivalent  it is the exact opposite. If has infinitely many solutions then it has a nontrivial one, and is not invertible. For a square matrix these are the only two possibilities: has either only the trivial solution (and is invertible) or infinitely many (and it is not).   "
},
{
  "id": "lab-inverse-from-polynomial-equation",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#lab-inverse-from-polynomial-equation",
  "type": "Exercise",
  "number": "10.4.48",
  "title": "An Inverse from a Polynomial Equation.",
  "body": " An Inverse from a Polynomial Equation   Suppose the matrix satisfies . Express in terms of .    Move the identity to the other side and factor out : The same factoring on the other side gives , since powers of commute with . So acts as an inverse of , and by uniqueness Compare . Note in passing that this argument also proves  is invertible we did not have to assume it.   "
},
{
  "id": "star-not-invertible-by-columns",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-not-invertible-by-columns",
  "type": "Exercise",
  "number": "10.4.49",
  "title": "★ Detecting Non-Invertibility from the Columns.",
  "body": " ★ Detecting Non-Invertibility from the Columns   Is the following matrix invertible?     Label the columns and look for a relation. Adding the first two,   So is a nontrivial dependence among the columns. The columns are not linearly independent, so the matrix is not invertible by condition (5) of .  Equivalently, is a nontrivial solution of . No row reduction was needed spotting one relation is enough.   "
},
{
  "id": "star-imt-true-false",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-imt-true-false",
  "type": "Exercise",
  "number": "10.4.50",
  "title": "★ True or False?",
  "body": " ★ True or False?     If is invertible, then so is .  If and are invertible matrices, then is invertible.       (a) True. By , is invertible with . The verification is short: , and similarly in the other order. This is also proved from scratch in .   (b) False. Invertibility survives products, not sums. Take and , both invertible. Then , which is not invertible.  A less extreme counterexample: and are invertible, but has determinant .   "
},
{
  "id": "star-inverse-from-polynomial",
  "level": "2",
  "url": "sec-problems-matrix-algebra.html#star-inverse-from-polynomial",
  "type": "Exercise",
  "number": "10.4.51",
  "title": "★ An Inverse from a Polynomial Identity.",
  "body": " ★ An Inverse from a Polynomial Identity   Suppose the square matrix satisfies Find , if possible.    Isolate the identity and divide by :   Every term on the left has a factor of , so and by condition (8) of , is invertible with   Notice that the argument also proves  is invertible; we never assumed it. The key was that the constant term is nonzero had the identity been , no such conclusion would follow.   "
},
{
  "id": "sec-problems-subspaces",
  "level": "1",
  "url": "sec-problems-subspaces.html",
  "type": "Section",
  "number": "10.5",
  "title": "Subspaces, Basis, and Dimension",
  "body": " Subspaces, Basis, and Dimension     Problems for ( ).    ★ Which of These Is a Subspace?   Which of the following is a subspace?  A line through the origin in .  A plane not containing the origin in .       (A) Yes, this is a subspace.   The line passes through the origin, so it contains .  Any two vectors on the line are multiples of a single direction vector, and so is any linear combination of them. The line is therefore closed under addition and scalar multiplication.     (B) No, this is not a subspace. A subspace must contain , by , and this plane does not. Closure fails too: if lies on the plane, then does not.     ★ True or False?   If is a subspace of and , then .     True. A subspace is closed under scalar multiplication, so multiplying the element by the scalar keeps us inside :   The same one-line argument with the scalar shows , which is . Both facts are really the observation that a subspace inherits every algebraic operation it is closed under.     ★ A Set That Misses the Origin   Is a subspace of ?     No. The zero vector is not in : setting would require from the first entry and from the second, which is impossible. Since every subspace contains , is not one.  Geometrically is a line of slope shifted off the origin it is the line , which misses .     ★ A Line through the Origin Is a Subspace   Is a subspace of ?     Yes.    (I) Taking gives .   (II) Let and be in , and let . Then where . So .  Equivalently, , and every span is a subspace by .     ★ Examples of Subspaces of   Write each of the following subspaces of as a span, and say whether it is a line, a plane, or all of . Then verify that spans .     . Only is free, so  the -axis, a line through the origin.   . The condition leaves and free, so with and , so is the plane  .   . We must write an arbitrary in terms of the three given vectors. Solving gives Adding all three equations gives , so , and subtracting each equation in turn,   Since a solution exists for every , the three vectors span all of . As a check with we get , , , and .      ★ Recognizing a Subspace from a Parametrization   Is a subspace of ?     Yes. Split the vector according to the two parameters: so . By , every span is a subspace, so is one. Since the two spanning vectors are not multiples of one another, they are independent and is a plane through the origin.  The spanning set is not unique. Because we also have , but that spanning set is linearly dependent : the third vector adds nothing.       Problems for ( ).    ★ Two Different Bases for the Same Subspace   Give two different bases for the -plane , and in each case express a general element of in that basis.     The obvious basis. Take . Then and    Another basis. Take . These two are independent, and Checking: .   The two bases are different, but both have two elements. That is no accident: by , all bases of a given subspace have the same size.     ★ Computing Dimensions   Find the dimension of each subspace of :       . Only is free. Writing gives and , so A single nonzero vector is a basis, so : a line through the origin.   . The condition leaves and free. With , , These two vectors are not multiples of one another, so they form a basis and : a plane through the origin.  The pattern is worth remembering: one linear equation on cuts the dimension down by one, giving a plane; two independent equations give a line.       Problems for ( ).    What Rank Tells You   Let be the coefficient matrix and the augmented matrix of a system of linear equations in variables. Decide whether each statement is always true, and justify your answer.  If , the system has infinitely many solutions.  If , the system is consistent.  If , the system has a unique solution.  If , the system has a unique solution.  If the system is inconsistent, then .  A system of five equations in four variables with has either no solution or a unique solution.      Throughout, recall from that the rank counts the leading s in the reduced row-echelon form.   (a) False. Rank less than only says there is at least one non-pivot column; the system could still be inconsistent. Take : here , , and there is no solution.   (b) True. If has leading s then every one of its rows carries a leading . Row reducing performs the same operations, so no row of the reduced can be of the form with . By the system is consistent.   (c) False. Rank rules out free variables but not inconsistency. The system , has and , and no solution.   (d) True. Now the extra hypothesis says the augmented column adds no new leading , so the system is consistent; and rank means every variable is basic, so there are no parameters. The solution is unique.   (e) True. Inconsistency means the reduced contains a row . That row itself has a leading , so .   (f) True. This is (b) and (d) combined: is with , so there are never any free variables. Either , in which case the fifth row is and there is no solution, or and the solution is unique.     Computing a Rank   Find the rank of .    Clear the first column using row : Rows , and are all multiples of , so two more rounds of row operations give There are two leading s, so .     Designing the Right-Hand Side   Let   What is the rank of ?  How many parameters are there in the general solution of ?  If possible, find a nonzero with having no solution; otherwise explain why none exists.  Same question, with having a unique solution.  Same question, with having infinitely many solutions.       (a)  is already in reduced row-echelon form with leading s in columns , and , so .   (b) There are five variables and three of them are basic, so and are free: two parameters . (Equivalently, by .)   (c) Write . Since the fourth row of is zero, the augmented matrix has last row . So any  with works, for instance .   (d)  No such vector exists. Whenever the system is consistent, and are still free, so there are always infinitely many solutions.   (e) Any nonzero with , for instance . Then the system is consistent and, by (d), has infinitely many solutions.     ★ Finding the Rank and Column Space   Find the rank of and describe efficiently.    Row reduce:   There are two leading s, in columns and , so . By , a basis for the column space is given by the columns of the original  in the pivot positions:   It is essential to take the columns of , not of the reduced matrix: row operations preserve the linear relations among columns but change the columns themselves.     ★ Finding a Null Space   Find for .    Solve :   With free, the rows give and , so a line through the origin. Since the spanning set has one vector, .  Checking: .      ★ Checking the Rank Nullity Relation   Verify for the matrix of .    The row reduction there ended at which has two leading s, so .  We also found , and is , so . Then   The relation is really a statement about pivots: each of the columns either carries a pivot (contributing to the rank) or corresponds to a free variable (contributing a basic solution to the null space), and never both.      "
},
{
  "id": "star-subspace-or-not",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-subspace-or-not",
  "type": "Exercise",
  "number": "10.5.1",
  "title": "★ Which of These Is a Subspace?",
  "body": " ★ Which of These Is a Subspace?   Which of the following is a subspace?  A line through the origin in .  A plane not containing the origin in .       (A) Yes, this is a subspace.   The line passes through the origin, so it contains .  Any two vectors on the line are multiples of a single direction vector, and so is any linear combination of them. The line is therefore closed under addition and scalar multiplication.     (B) No, this is not a subspace. A subspace must contain , by , and this plane does not. Closure fails too: if lies on the plane, then does not.   "
},
{
  "id": "star-subspace-negatives",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-subspace-negatives",
  "type": "Exercise",
  "number": "10.5.2",
  "title": "★ True or False?",
  "body": " ★ True or False?   If is a subspace of and , then .     True. A subspace is closed under scalar multiplication, so multiplying the element by the scalar keeps us inside :   The same one-line argument with the scalar shows , which is . Both facts are really the observation that a subspace inherits every algebraic operation it is closed under.   "
},
{
  "id": "star-not-subspace-affine",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-not-subspace-affine",
  "type": "Exercise",
  "number": "10.5.3",
  "title": "★ A Set That Misses the Origin.",
  "body": " ★ A Set That Misses the Origin   Is a subspace of ?     No. The zero vector is not in : setting would require from the first entry and from the second, which is impossible. Since every subspace contains , is not one.  Geometrically is a line of slope shifted off the origin it is the line , which misses .   "
},
{
  "id": "star-subspace-line",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-subspace-line",
  "type": "Exercise",
  "number": "10.5.4",
  "title": "★ A Line through the Origin Is a Subspace.",
  "body": " ★ A Line through the Origin Is a Subspace   Is a subspace of ?     Yes.    (I) Taking gives .   (II) Let and be in , and let . Then where . So .  Equivalently, , and every span is a subspace by .   "
},
{
  "id": "star-subspaces-of-r3",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-subspaces-of-r3",
  "type": "Exercise",
  "number": "10.5.5",
  "title": "★ Examples of Subspaces of <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " ★ Examples of Subspaces of   Write each of the following subspaces of as a span, and say whether it is a line, a plane, or all of . Then verify that spans .     . Only is free, so  the -axis, a line through the origin.   . The condition leaves and free, so with and , so is the plane  .   . We must write an arbitrary in terms of the three given vectors. Solving gives Adding all three equations gives , so , and subtracting each equation in turn,   Since a solution exists for every , the three vectors span all of . As a check with we get , , , and .    "
},
{
  "id": "star-subspace-parametrized",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-subspace-parametrized",
  "type": "Exercise",
  "number": "10.5.6",
  "title": "★ Recognizing a Subspace from a Parametrization.",
  "body": " ★ Recognizing a Subspace from a Parametrization   Is a subspace of ?     Yes. Split the vector according to the two parameters: so . By , every span is a subspace, so is one. Since the two spanning vectors are not multiples of one another, they are independent and is a plane through the origin.  The spanning set is not unique. Because we also have , but that spanning set is linearly dependent : the third vector adds nothing.   "
},
{
  "id": "star-two-bases",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-two-bases",
  "type": "Exercise",
  "number": "10.5.7",
  "title": "★ Two Different Bases for the Same Subspace.",
  "body": " ★ Two Different Bases for the Same Subspace   Give two different bases for the -plane , and in each case express a general element of in that basis.     The obvious basis. Take . Then and    Another basis. Take . These two are independent, and Checking: .   The two bases are different, but both have two elements. That is no accident: by , all bases of a given subspace have the same size.   "
},
{
  "id": "star-dimension",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-dimension",
  "type": "Exercise",
  "number": "10.5.8",
  "title": "★ Computing Dimensions.",
  "body": " ★ Computing Dimensions   Find the dimension of each subspace of :       . Only is free. Writing gives and , so A single nonzero vector is a basis, so : a line through the origin.   . The condition leaves and free. With , , These two vectors are not multiples of one another, so they form a basis and : a plane through the origin.  The pattern is worth remembering: one linear equation on cuts the dimension down by one, giving a plane; two independent equations give a line.   "
},
{
  "id": "lab-rank-and-solutions",
  "level": "2",
  "url": "sec-problems-subspaces.html#lab-rank-and-solutions",
  "type": "Exercise",
  "number": "10.5.9",
  "title": "What Rank Tells You.",
  "body": " What Rank Tells You   Let be the coefficient matrix and the augmented matrix of a system of linear equations in variables. Decide whether each statement is always true, and justify your answer.  If , the system has infinitely many solutions.  If , the system is consistent.  If , the system has a unique solution.  If , the system has a unique solution.  If the system is inconsistent, then .  A system of five equations in four variables with has either no solution or a unique solution.      Throughout, recall from that the rank counts the leading s in the reduced row-echelon form.   (a) False. Rank less than only says there is at least one non-pivot column; the system could still be inconsistent. Take : here , , and there is no solution.   (b) True. If has leading s then every one of its rows carries a leading . Row reducing performs the same operations, so no row of the reduced can be of the form with . By the system is consistent.   (c) False. Rank rules out free variables but not inconsistency. The system , has and , and no solution.   (d) True. Now the extra hypothesis says the augmented column adds no new leading , so the system is consistent; and rank means every variable is basic, so there are no parameters. The solution is unique.   (e) True. Inconsistency means the reduced contains a row . That row itself has a leading , so .   (f) True. This is (b) and (d) combined: is with , so there are never any free variables. Either , in which case the fifth row is and there is no solution, or and the solution is unique.   "
},
{
  "id": "lab-rank-of-a-matrix",
  "level": "2",
  "url": "sec-problems-subspaces.html#lab-rank-of-a-matrix",
  "type": "Exercise",
  "number": "10.5.10",
  "title": "Computing a Rank.",
  "body": " Computing a Rank   Find the rank of .    Clear the first column using row : Rows , and are all multiples of , so two more rounds of row operations give There are two leading s, so .   "
},
{
  "id": "lab-rank-designing-b",
  "level": "2",
  "url": "sec-problems-subspaces.html#lab-rank-designing-b",
  "type": "Exercise",
  "number": "10.5.11",
  "title": "Designing the Right-Hand Side.",
  "body": " Designing the Right-Hand Side   Let   What is the rank of ?  How many parameters are there in the general solution of ?  If possible, find a nonzero with having no solution; otherwise explain why none exists.  Same question, with having a unique solution.  Same question, with having infinitely many solutions.       (a)  is already in reduced row-echelon form with leading s in columns , and , so .   (b) There are five variables and three of them are basic, so and are free: two parameters . (Equivalently, by .)   (c) Write . Since the fourth row of is zero, the augmented matrix has last row . So any  with works, for instance .   (d)  No such vector exists. Whenever the system is consistent, and are still free, so there are always infinitely many solutions.   (e) Any nonzero with , for instance . Then the system is consistent and, by (d), has infinitely many solutions.   "
},
{
  "id": "star-rank-column-space",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-rank-column-space",
  "type": "Exercise",
  "number": "10.5.12",
  "title": "★ Finding the Rank and Column Space.",
  "body": " ★ Finding the Rank and Column Space   Find the rank of and describe efficiently.    Row reduce:   There are two leading s, in columns and , so . By , a basis for the column space is given by the columns of the original  in the pivot positions:   It is essential to take the columns of , not of the reduced matrix: row operations preserve the linear relations among columns but change the columns themselves.   "
},
{
  "id": "star-null-space",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-null-space",
  "type": "Exercise",
  "number": "10.5.13",
  "title": "★ Finding a Null Space.",
  "body": " ★ Finding a Null Space   Find for .    Solve :   With free, the rows give and , so a line through the origin. Since the spanning set has one vector, .  Checking: .    "
},
{
  "id": "star-rank-nullity",
  "level": "2",
  "url": "sec-problems-subspaces.html#star-rank-nullity",
  "type": "Exercise",
  "number": "10.5.14",
  "title": "★ Checking the Rank–Nullity Relation.",
  "body": " ★ Checking the Rank Nullity Relation   Verify for the matrix of .    The row reduction there ended at which has two leading s, so .  We also found , and is , so . Then   The relation is really a statement about pivots: each of the columns either carries a pivot (contributing to the rank) or corresponds to a free variable (contributing a basic solution to the null space), and never both.   "
},
{
  "id": "sec-problems-determinants",
  "level": "1",
  "url": "sec-problems-determinants.html",
  "type": "Section",
  "number": "10.6",
  "title": "Determinants",
  "body": " Determinants     Problems for ( ).    Two Expansions, One Determinant   Find by expanding along the second row, and again by expanding along the first column.     Along row . The signs on row alternate , so by     Along column . The signs down column are :   The two agree, as they must: every row and every column expansion of a matrix gives the same number.     ★ Computing a Minor and a Cofactor   Let . Compute and .    For a matrix the signs alternate as so position carries a minus sign.  Deleting row and column leaves and therefore      ★ Two Expansions, One Answer   For the matrix of , compute by expanding along the first row and again along the second column.     Along the first row.     Along the second column.    Both give , as every row and column expansion must.     ★ A Determinant   Find for     Choose a row or column with many zeros. The fourth row is , so expand along it:   Each remaining determinant has a row with two zeros. For the first, expand along its second row: For the second, again along its second row:   Therefore        Problems for ( ).    A Determinant by Row Reduction   Find using row operations.    Adding a multiple of one row to another leaves the determinant unchanged ( ), so we may reduce freely as long as we only use that one type of operation:    The last matrix is upper triangular, so by its determinant is the product of the diagonal entries:      ★ How Do Elementary Row Operations Affect Determinants?   Let . Compute , then compute the determinants of the matrices obtained from by (i) interchanging rows and , (ii) multiplying row by , and (iii) adding times row to row .    Row has two zeros, so expand along it throughout:    (i)  , and    (ii)  , and    (iii)  , and   So an interchange flips the sign, scaling a row scales the determinant by the same factor, and adding a multiple of one row to another leaves the determinant alone exactly .     ★ Computing a Determinant by Row Reduction   Without using cofactor expansion, find for .    Reduce to triangular form, recording the effect of each operation:    The first step was an interchange, which flips the sign; the last two added multiples of one row to another, which changes nothing. is upper triangular, so by its determinant is the product of its diagonal entries:      ★ Scaling a Matrix   Suppose is with . Find and .    Multiplying by a scalar multiplies every one of its rows by , and each row scaling multiplies the determinant by . So by ,   Therefore   The second answer is worth pausing on: for a matrix of even size, negating it leaves the determinant unchanged. For odd size the sign would flip.       Problems for ( ).    True or False?   Decide whether each statement is true or false, and justify your answer.  If is a matrix with , then one column of must be a multiple of another.  If two columns of a square matrix are equal, then its determinant is .  For matrices, .  For an matrix, .  If exists then .  If is obtained by multiplying a single row of by , then .  For an matrix, .  If is a real matrix, then .       (a) False. A zero determinant means the columns are linearly dependent , which is weaker than one being a multiple of another. Take whose determinant is because the third column is times the second minus the first, yet no column is a multiple of any other.   (b) True. Subtracting one of the equal columns from the other produces a zero column without changing the determinant, and a matrix with a zero column has determinant (expand along that column).   (c) False. Determinants are not additive. Take : then , while .   (d) False for . Scaling every row by multiplies the determinant by once per row, so ( ). With , .   (e) True. From and , , so . (Note since is invertible.)   (f) True. This is the single-row version of (d): scaling one row by multiplies the determinant by . Expand along that row and every term picks up a factor of .   (g) True.  is with all rows scaled by , giving a factor of . This is (d) with the scalar .   (h) True. Using and then , since is a real number.     Does This Matrix Have an Inverse?   Determine whether has an inverse by deciding whether its determinant is nonzero.    Expand along the first column, whose middle entry is : (The signs down column are , and the third-row cofactor contributes .)  Since ,  is invertible by . Its inverse can then be found with ; it is      Parameters and Invertibility     For which real is invertible?  For which real is invertible?       (a) Expand along the second row, which contains a . The signs on row are : This is zero exactly when , or , so is invertible for every value of  except those three.   (b) Expand along the second row, whose only nonzero entry is in position with sign : So is invertible for every except , and .     Determinants of Complicated Expressions     Let , , be with , , . Find .  Let , , be with , , . Find .      Everything follows from three rules: , , and for matrices.   (a) Here , so the scalar contributes :    (b) Here , and :   Notice that in (b) the factors and combine to a single : since determinants are ordinary numbers, the order of the matrix factors never affects the answer.     ★ True or False?   If and are square matrices and is not invertible, then is not invertible.     True. We prove the contrapositive: if is invertible, then is invertible.  Suppose is invertible, so there is a matrix with . Regrouping, and by condition (8) of , is invertible with .  A determinant argument is even shorter: not invertible gives , so by , and is not invertible by .     ★ True or False?   For any elementary matrices , and any square matrix ,      True. By we already know that for every elementary and every square . Apply that fact twice, first with and then with :   The same induction extends to any number of elementary factors: . Since every invertible matrix is a product of elementary matrices, this is exactly how gets proved in general.     ★ A Determinant of a Complicated Product   Suppose , , are matrices with , , . Find     Split the product and pull the scalar out, remembering that a scalar on a matrix contributes its cube:   Each rule earned its keep: the comes from with ; the product splits by ; the reciprocals come from ; and by .  Notice that and cancel, as do one factor of against . Determinants are ordinary numbers, so the order of the matrix factors never matters.      "
},
{
  "id": "lab-two-expansions",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-two-expansions",
  "type": "Exercise",
  "number": "10.6.1",
  "title": "Two Expansions, One Determinant.",
  "body": " Two Expansions, One Determinant   Find by expanding along the second row, and again by expanding along the first column.     Along row . The signs on row alternate , so by     Along column . The signs down column are :   The two agree, as they must: every row and every column expansion of a matrix gives the same number.   "
},
{
  "id": "star-minor-cofactor",
  "level": "2",
  "url": "sec-problems-determinants.html#star-minor-cofactor",
  "type": "Exercise",
  "number": "10.6.2",
  "title": "★ Computing a Minor and a Cofactor.",
  "body": " ★ Computing a Minor and a Cofactor   Let . Compute and .    For a matrix the signs alternate as so position carries a minus sign.  Deleting row and column leaves and therefore    "
},
{
  "id": "star-cofactor-expansion",
  "level": "2",
  "url": "sec-problems-determinants.html#star-cofactor-expansion",
  "type": "Exercise",
  "number": "10.6.3",
  "title": "★ Two Expansions, One Answer.",
  "body": " ★ Two Expansions, One Answer   For the matrix of , compute by expanding along the first row and again along the second column.     Along the first row.     Along the second column.    Both give , as every row and column expansion must.   "
},
{
  "id": "star-four-by-four-det",
  "level": "2",
  "url": "sec-problems-determinants.html#star-four-by-four-det",
  "type": "Exercise",
  "number": "10.6.4",
  "title": "★ A <span class=\"process-math\">\\(4 \\times 4\\)<\/span> Determinant.",
  "body": " ★ A Determinant   Find for     Choose a row or column with many zeros. The fourth row is , so expand along it:   Each remaining determinant has a row with two zeros. For the first, expand along its second row: For the second, again along its second row:   Therefore    "
},
{
  "id": "lab-determinant-by-row-reduction",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-determinant-by-row-reduction",
  "type": "Exercise",
  "number": "10.6.5",
  "title": "A Determinant by Row Reduction.",
  "body": " A Determinant by Row Reduction   Find using row operations.    Adding a multiple of one row to another leaves the determinant unchanged ( ), so we may reduce freely as long as we only use that one type of operation:    The last matrix is upper triangular, so by its determinant is the product of the diagonal entries:    "
},
{
  "id": "star-row-ops-on-determinant",
  "level": "2",
  "url": "sec-problems-determinants.html#star-row-ops-on-determinant",
  "type": "Exercise",
  "number": "10.6.6",
  "title": "★ How Do Elementary Row Operations Affect Determinants?",
  "body": " ★ How Do Elementary Row Operations Affect Determinants?   Let . Compute , then compute the determinants of the matrices obtained from by (i) interchanging rows and , (ii) multiplying row by , and (iii) adding times row to row .    Row has two zeros, so expand along it throughout:    (i)  , and    (ii)  , and    (iii)  , and   So an interchange flips the sign, scaling a row scales the determinant by the same factor, and adding a multiple of one row to another leaves the determinant alone exactly .   "
},
{
  "id": "star-det-by-row-reduction",
  "level": "2",
  "url": "sec-problems-determinants.html#star-det-by-row-reduction",
  "type": "Exercise",
  "number": "10.6.7",
  "title": "★ Computing a Determinant by Row Reduction.",
  "body": " ★ Computing a Determinant by Row Reduction   Without using cofactor expansion, find for .    Reduce to triangular form, recording the effect of each operation:    The first step was an interchange, which flips the sign; the last two added multiples of one row to another, which changes nothing. is upper triangular, so by its determinant is the product of its diagonal entries:    "
},
{
  "id": "star-det-scalar-multiple",
  "level": "2",
  "url": "sec-problems-determinants.html#star-det-scalar-multiple",
  "type": "Exercise",
  "number": "10.6.8",
  "title": "★ Scaling a <span class=\"process-math\">\\(4 \\times 4\\)<\/span> Matrix.",
  "body": " ★ Scaling a Matrix   Suppose is with . Find and .    Multiplying by a scalar multiplies every one of its rows by , and each row scaling multiplies the determinant by . So by ,   Therefore   The second answer is worth pausing on: for a matrix of even size, negating it leaves the determinant unchanged. For odd size the sign would flip.   "
},
{
  "id": "lab-determinant-true-false",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-determinant-true-false",
  "type": "Exercise",
  "number": "10.6.9",
  "title": "True or False?",
  "body": " True or False?   Decide whether each statement is true or false, and justify your answer.  If is a matrix with , then one column of must be a multiple of another.  If two columns of a square matrix are equal, then its determinant is .  For matrices, .  For an matrix, .  If exists then .  If is obtained by multiplying a single row of by , then .  For an matrix, .  If is a real matrix, then .       (a) False. A zero determinant means the columns are linearly dependent , which is weaker than one being a multiple of another. Take whose determinant is because the third column is times the second minus the first, yet no column is a multiple of any other.   (b) True. Subtracting one of the equal columns from the other produces a zero column without changing the determinant, and a matrix with a zero column has determinant (expand along that column).   (c) False. Determinants are not additive. Take : then , while .   (d) False for . Scaling every row by multiplies the determinant by once per row, so ( ). With , .   (e) True. From and , , so . (Note since is invertible.)   (f) True. This is the single-row version of (d): scaling one row by multiplies the determinant by . Expand along that row and every term picks up a factor of .   (g) True.  is with all rows scaled by , giving a factor of . This is (d) with the scalar .   (h) True. Using and then , since is a real number.   "
},
{
  "id": "lab-determinant-detects-invertibility",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-determinant-detects-invertibility",
  "type": "Exercise",
  "number": "10.6.10",
  "title": "Does This Matrix Have an Inverse?",
  "body": " Does This Matrix Have an Inverse?   Determine whether has an inverse by deciding whether its determinant is nonzero.    Expand along the first column, whose middle entry is : (The signs down column are , and the third-row cofactor contributes .)  Since ,  is invertible by . Its inverse can then be found with ; it is    "
},
{
  "id": "lab-parameter-and-determinant",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-parameter-and-determinant",
  "type": "Exercise",
  "number": "10.6.11",
  "title": "Parameters and Invertibility.",
  "body": " Parameters and Invertibility     For which real is invertible?  For which real is invertible?       (a) Expand along the second row, which contains a . The signs on row are : This is zero exactly when , or , so is invertible for every value of  except those three.   (b) Expand along the second row, whose only nonzero entry is in position with sign : So is invertible for every except , and .   "
},
{
  "id": "lab-determinant-of-expression",
  "level": "2",
  "url": "sec-problems-determinants.html#lab-determinant-of-expression",
  "type": "Exercise",
  "number": "10.6.12",
  "title": "Determinants of Complicated Expressions.",
  "body": " Determinants of Complicated Expressions     Let , , be with , , . Find .  Let , , be with , , . Find .      Everything follows from three rules: , , and for matrices.   (a) Here , so the scalar contributes :    (b) Here , and :   Notice that in (b) the factors and combine to a single : since determinants are ordinary numbers, the order of the matrix factors never affects the answer.   "
},
{
  "id": "star-noninvertible-product",
  "level": "2",
  "url": "sec-problems-determinants.html#star-noninvertible-product",
  "type": "Exercise",
  "number": "10.6.13",
  "title": "★ True or False?",
  "body": " ★ True or False?   If and are square matrices and is not invertible, then is not invertible.     True. We prove the contrapositive: if is invertible, then is invertible.  Suppose is invertible, so there is a matrix with . Regrouping, and by condition (8) of , is invertible with .  A determinant argument is even shorter: not invertible gives , so by , and is not invertible by .   "
},
{
  "id": "star-det-elementary-product",
  "level": "2",
  "url": "sec-problems-determinants.html#star-det-elementary-product",
  "type": "Exercise",
  "number": "10.6.14",
  "title": "★ True or False?",
  "body": " ★ True or False?   For any elementary matrices , and any square matrix ,      True. By we already know that for every elementary and every square . Apply that fact twice, first with and then with :   The same induction extends to any number of elementary factors: . Since every invertible matrix is a product of elementary matrices, this is exactly how gets proved in general.   "
},
{
  "id": "star-det-big-expression",
  "level": "2",
  "url": "sec-problems-determinants.html#star-det-big-expression",
  "type": "Exercise",
  "number": "10.6.15",
  "title": "★ A Determinant of a Complicated Product.",
  "body": " ★ A Determinant of a Complicated Product   Suppose , , are matrices with , , . Find     Split the product and pull the scalar out, remembering that a scalar on a matrix contributes its cube:   Each rule earned its keep: the comes from with ; the product splits by ; the reciprocals come from ; and by .  Notice that and cancel, as do one factor of against . Determinants are ordinary numbers, so the order of the matrix factors never matters.   "
},
{
  "id": "sec-problems-vector-spaces",
  "level": "1",
  "url": "sec-problems-vector-spaces.html",
  "type": "Section",
  "number": "10.7",
  "title": "Vector Spaces",
  "body": " Vector Spaces     Problems for ( ).    ★ The Vector Space of Polynomials   Let be the set of all polynomials of degree at most , together with the zero polynomial, with the usual addition and scalar multiplication. Show that is a vector space.    Explicitly, . Let , , and let .   (I) Closure under addition.  again of degree at most .   (II) Commutativity and (V) associativity hold because addition of the real coefficients is commutative and associative.   (III) Additive identity. The zero polynomial is in and .   (IV) Additive inverse. Put . Then .   (VI) Closure under scalar multiplication.     (VII) (X) follow one coefficient at a time; for instance and .  All ten axioms hold, so is a vector space. Note that the degree exactly one polynomials would not form a vector space: that set omits the zero polynomial, and would leave it.     ★ The Vector Space of Matrices   Let be the set of all matrices. Is a vector space?     Yes. Let and .     (I)  , since the sum of two matrices is again .   (II), (III), (IV), (V) follow from , taking the zero element to be .   (VI)  , since scaling does not change the size.   (VII) (X) follow from .    Nothing used the fact that the matrices were rather than : the same argument shows is a vector space for any and .       Problems for ( ).    ★ A Subspace of   Is the following subset of a subspace?      Yes. Let and lie in , so and .   Closed under addition.  whose lower-left entry is still , and so .   Closed under scalar multiplication. For , and so .   Contains the zero element. Taking above gives . The remaining axioms are inherited from , so is a subspace.  Both defining conditions are linear and homogeneous , which is exactly why closure works. A condition such as would fail, since the zero matrix would not satisfy it.     ★ A Standard Basis and a Subspace     Show that is a basis for .  Is a subspace of ? If so, is a basis for it?       (1) Every element of has the form , so spans . It is also independent: if is the zero polynomial, then it takes the value for every , and setting gives , after which for all forces . So is a basis and .   (2) Yes. The set is a subset of , so its span is a subspace of by .  The two polynomials are independent: neither is a scalar multiple of the other, since only the first involves and only the second involves a lone . An independent spanning set is a basis, so is a basis for that subspace, which therefore has dimension  one less than .       Problems for ( ).    ★ and Are Isomorphic   Show that and are isomorphic.    Define by reading the entries in order:    is linear , since matrix addition and scalar multiplication are computed entry by entry, and so is vector addition and scalar multiplication in .   is one-to-one : if , then every entry of is , so .   is onto : given , the matrix maps to it.  A linear bijection is an isomorphism, so . This is really the observation that is the coordinate map for the standard basis : an -dimensional space is always isomorphic to .     ★ A Transformation from to   Consider defined by   Using the standard bases, find the matrix of .  Is one-to-one?       (A) Write , so . Then   Using the isomorphism that sends to , the basis polynomials correspond to , with images so Checking, .    (B)  No. Solving gives from the second row and then from the first, so a nontrivial null space. Concretely, has and , so two different polynomials with the same image.  There was no chance of injectivity: is wide, and rules it out.       Problems for ( ).    ★ The Same Vector in Two Coordinate Systems   Let be the standard basis of and let satisfy If , find , and find and explicitly.    The coordinates say . Substituting the two relations, so .  Solving the two relations for the new basis vectors, Checking: , which is .   The vector has not moved. Only the grid against which we measure it has changed, from squares to parallelograms compare .     ★ A Vector in Cartesian and Polar Coordinates   Let . Describe in Cartesian and in polar coordinates, and decide which description is a coordinate vector in the sense of .     Cartesian. Relative to the standard basis , These are coordinates relative to a basis.   Polar. The length and angle are so that .  Is a coordinate vector? No. Coordinate maps are linear, and is not. Doubling the vector gives , whose polar data is  but doubling the pair would give . The length doubles; the angle does not.     ★ The Same Matrix in Two Coordinate Systems   In , let , let be the standard ordered basis, and let Find and .     Relative to . The entries of , read in order, are its coordinates:    Relative to . Look for with Comparing entries one at a time: the -entry gives ; the -entry gives , so ; the -entry gives ; and the -entry gives , so . Hence   The matrix is one object; the two columns of numbers are two different descriptions of it.     ★ Computing a Change of Basis Matrix   Continuing , find and verify it on .    The columns of are the -coordinates of the basis vectors. From the given relations,  Therefore   Verifying on , whose -coordinates are :      ★ A Change of Basis Matrix in   Continuing , find for those two bases of , and verify it on .    Each column of holds the -coordinates of one standard basis matrix. Solving as before, entry by entry:    Assembling these as columns,   Verifying on , whose -coordinates are :      ★ A Change of Basis in   Let and be ordered bases of . Find and use it to find for .    Write each element of in terms of : So the coordinate columns are , , , and   For we have , so   Checking directly,        Problems for ( ).    ★ The Same Transformation in Different Bases   Let be given by , and let and . Find the matrix of using  for both domain and codomain;  for both;  for the domain and for the codomain;  for the domain and for the codomain.      Throughout, a column of the matrix is the coordinate vector of the image of a domain basis vector, measured in the codomain basis.   (I)  and , and standard coordinates are the entries themselves, so    (II) Compute the images of the vectors: Each basis vector is sent to a multiple of itself, so their coordinate columns are and : The basis consists of eigenvectors, which is why the matrix comes out diagonal.   (III) Now express and in . Solving gives and , so , . Solving gives , . Hence    (IV) The images of the vectors were computed in (II); now record them in standard coordinates:   One transformation, four matrices. Only the pair of bases changed.     ★ The Same Game in   Let be , with ordered bases and . Find the matrix of using (I) for both, (II) for both, (III) then , and (IV) then .    First compute the images of both bases:    (I) In -coordinates the images are , , , so    (II) Write each image of a vector in : gives ; gives ; and gives . Hence    (III) Take the images and record them in . Using and ,    (IV) Take the images and record them in : , , , so   All four are upper triangular with s on the diagonal, because lowers degree by differentiating and then subtracts: the leading term is never disturbed.     ★ From to   Define by   Describe the null space of . Is one-to-one?  Express the range of as a span. Is onto?  Is an isomorphism?  Find the matrix of relative to and the standard basis of .       (1)  requires all four entries to vanish. The -entry gives ; then the -entry gives ; then the -entry gives . So the null space is and  is one-to-one .   (2) The range is spanned by the images of a basis: These three are linearly independent, since is one-to-one, so a three-dimensional subspace of the four-dimensional . Hence is not onto .   (3)  No. An isomorphism must be both one-to-one and onto, and fails the second. Dimensions already rule it out: .   (4) Reading each image in the order gives the columns , , , so The matrix is : tall, and by therefore never onto, confirming (2).     ★ Another Transformation   Define by . Show that is linear, find its matrix relative to the standard bases, and describe its null space and range.     Linearity. For and , the entries of and are computed entry by entry, so and .   The matrix. Evaluating on the standard basis, so the matrix is the row    Range.  has one pivot, in a single row, so is onto: . Indeed for any .   Null space. The condition is , one equation on four unknowns, so which has dimension . Consistently with , .     ★ Reading a Matrix off a Change of Basis   Let be as in . Verify that where and are the matrices found there and is the change of basis matrix of .    The three matrices are   Multiplying,   This is exactly what one should expect. Applying takes -coordinates of to -coordinates of ; applying then re-expresses that answer in . Doing the transformation and then the change of basis is the same as using for the domain and for the codomain from the start.      "
},
{
  "id": "star-p1-vector-space",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-p1-vector-space",
  "type": "Exercise",
  "number": "10.7.1",
  "title": "★ The Vector Space of Polynomials <span class=\"process-math\">\\(\\mathbb{P}_1\\)<\/span>.",
  "body": " ★ The Vector Space of Polynomials   Let be the set of all polynomials of degree at most , together with the zero polynomial, with the usual addition and scalar multiplication. Show that is a vector space.    Explicitly, . Let , , and let .   (I) Closure under addition.  again of degree at most .   (II) Commutativity and (V) associativity hold because addition of the real coefficients is commutative and associative.   (III) Additive identity. The zero polynomial is in and .   (IV) Additive inverse. Put . Then .   (VI) Closure under scalar multiplication.     (VII) (X) follow one coefficient at a time; for instance and .  All ten axioms hold, so is a vector space. Note that the degree exactly one polynomials would not form a vector space: that set omits the zero polynomial, and would leave it.   "
},
{
  "id": "star-m23-vector-space",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-m23-vector-space",
  "type": "Exercise",
  "number": "10.7.2",
  "title": "★ The Vector Space of <span class=\"process-math\">\\(2 \\times 3\\)<\/span> Matrices.",
  "body": " ★ The Vector Space of Matrices   Let be the set of all matrices. Is a vector space?     Yes. Let and .     (I)  , since the sum of two matrices is again .   (II), (III), (IV), (V) follow from , taking the zero element to be .   (VI)  , since scaling does not change the size.   (VII) (X) follow from .    Nothing used the fact that the matrices were rather than : the same argument shows is a vector space for any and .   "
},
{
  "id": "star-ml-subspace",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-ml-subspace",
  "type": "Exercise",
  "number": "10.7.3",
  "title": "★ A Subspace of <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " ★ A Subspace of   Is the following subset of a subspace?      Yes. Let and lie in , so and .   Closed under addition.  whose lower-left entry is still , and so .   Closed under scalar multiplication. For , and so .   Contains the zero element. Taking above gives . The remaining axioms are inherited from , so is a subspace.  Both defining conditions are linear and homogeneous , which is exactly why closure works. A condition such as would fail, since the zero matrix would not satisfy it.   "
},
{
  "id": "star-basis-p1",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-basis-p1",
  "type": "Exercise",
  "number": "10.7.4",
  "title": "★ A Standard Basis and a Subspace.",
  "body": " ★ A Standard Basis and a Subspace     Show that is a basis for .  Is a subspace of ? If so, is a basis for it?       (1) Every element of has the form , so spans . It is also independent: if is the zero polynomial, then it takes the value for every , and setting gives , after which for all forces . So is a basis and .   (2) Yes. The set is a subset of , so its span is a subspace of by .  The two polynomials are independent: neither is a scalar multiple of the other, since only the first involves and only the second involves a lone . An independent spanning set is a basis, so is a basis for that subspace, which therefore has dimension  one less than .   "
},
{
  "id": "star-m22-isomorphic-r4",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-m22-isomorphic-r4",
  "type": "Exercise",
  "number": "10.7.5",
  "title": "★ <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span> and <span class=\"process-math\">\\(\\R^4\\)<\/span> Are Isomorphic.",
  "body": " ★ and Are Isomorphic   Show that and are isomorphic.    Define by reading the entries in order:    is linear , since matrix addition and scalar multiplication are computed entry by entry, and so is vector addition and scalar multiplication in .   is one-to-one : if , then every entry of is , so .   is onto : given , the matrix maps to it.  A linear bijection is an isomorphism, so . This is really the observation that is the coordinate map for the standard basis : an -dimensional space is always isomorphic to .   "
},
{
  "id": "star-p2-to-r2",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-p2-to-r2",
  "type": "Exercise",
  "number": "10.7.6",
  "title": "★ A Transformation from <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span> to <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " ★ A Transformation from to   Consider defined by   Using the standard bases, find the matrix of .  Is one-to-one?       (A) Write , so . Then   Using the isomorphism that sends to , the basis polynomials correspond to , with images so Checking, .    (B)  No. Solving gives from the second row and then from the first, so a nontrivial null space. Concretely, has and , so two different polynomials with the same image.  There was no chance of injectivity: is wide, and rules it out.   "
},
{
  "id": "star-coordinates-two-bases",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-coordinates-two-bases",
  "type": "Exercise",
  "number": "10.7.7",
  "title": "★ The Same Vector in Two Coordinate Systems.",
  "body": " ★ The Same Vector in Two Coordinate Systems   Let be the standard basis of and let satisfy If , find , and find and explicitly.    The coordinates say . Substituting the two relations, so .  Solving the two relations for the new basis vectors, Checking: , which is .   The vector has not moved. Only the grid against which we measure it has changed, from squares to parallelograms compare .   "
},
{
  "id": "star-cartesian-polar",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-cartesian-polar",
  "type": "Exercise",
  "number": "10.7.8",
  "title": "★ A Vector in Cartesian and Polar Coordinates.",
  "body": " ★ A Vector in Cartesian and Polar Coordinates   Let . Describe in Cartesian and in polar coordinates, and decide which description is a coordinate vector in the sense of .     Cartesian. Relative to the standard basis , These are coordinates relative to a basis.   Polar. The length and angle are so that .  Is a coordinate vector? No. Coordinate maps are linear, and is not. Doubling the vector gives , whose polar data is  but doubling the pair would give . The length doubles; the angle does not.   "
},
{
  "id": "star-matrix-two-bases",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-matrix-two-bases",
  "type": "Exercise",
  "number": "10.7.9",
  "title": "★ The Same Matrix in Two Coordinate Systems.",
  "body": " ★ The Same Matrix in Two Coordinate Systems   In , let , let be the standard ordered basis, and let Find and .     Relative to . The entries of , read in order, are its coordinates:    Relative to . Look for with Comparing entries one at a time: the -entry gives ; the -entry gives , so ; the -entry gives ; and the -entry gives , so . Hence   The matrix is one object; the two columns of numbers are two different descriptions of it.   "
},
{
  "id": "star-change-of-basis",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-change-of-basis",
  "type": "Exercise",
  "number": "10.7.10",
  "title": "★ Computing a Change of Basis Matrix.",
  "body": " ★ Computing a Change of Basis Matrix   Continuing , find and verify it on .    The columns of are the -coordinates of the basis vectors. From the given relations,  Therefore   Verifying on , whose -coordinates are :    "
},
{
  "id": "star-change-of-basis-m22",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-change-of-basis-m22",
  "type": "Exercise",
  "number": "10.7.11",
  "title": "★ A Change of Basis Matrix in <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " ★ A Change of Basis Matrix in   Continuing , find for those two bases of , and verify it on .    Each column of holds the -coordinates of one standard basis matrix. Solving as before, entry by entry:    Assembling these as columns,   Verifying on , whose -coordinates are :    "
},
{
  "id": "star-p2-change-of-basis",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-p2-change-of-basis",
  "type": "Exercise",
  "number": "10.7.12",
  "title": "★ A Change of Basis in <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " ★ A Change of Basis in   Let and be ordered bases of . Find and use it to find for .    Write each element of in terms of : So the coordinate columns are , , , and   For we have , so   Checking directly,    "
},
{
  "id": "star-four-matrices",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-four-matrices",
  "type": "Exercise",
  "number": "10.7.13",
  "title": "★ The Same Transformation in Different Bases.",
  "body": " ★ The Same Transformation in Different Bases   Let be given by , and let and . Find the matrix of using  for both domain and codomain;  for both;  for the domain and for the codomain;  for the domain and for the codomain.      Throughout, a column of the matrix is the coordinate vector of the image of a domain basis vector, measured in the codomain basis.   (I)  and , and standard coordinates are the entries themselves, so    (II) Compute the images of the vectors: Each basis vector is sent to a multiple of itself, so their coordinate columns are and : The basis consists of eigenvectors, which is why the matrix comes out diagonal.   (III) Now express and in . Solving gives and , so , . Solving gives , . Hence    (IV) The images of the vectors were computed in (II); now record them in standard coordinates:   One transformation, four matrices. Only the pair of bases changed.   "
},
{
  "id": "star-four-matrices-p2",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-four-matrices-p2",
  "type": "Exercise",
  "number": "10.7.14",
  "title": "★ The Same Game in <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span>.",
  "body": " ★ The Same Game in   Let be , with ordered bases and . Find the matrix of using (I) for both, (II) for both, (III) then , and (IV) then .    First compute the images of both bases:    (I) In -coordinates the images are , , , so    (II) Write each image of a vector in : gives ; gives ; and gives . Hence    (III) Take the images and record them in . Using and ,    (IV) Take the images and record them in : , , , so   All four are upper triangular with s on the diagonal, because lowers degree by differentiating and then subtracts: the leading term is never disturbed.   "
},
{
  "id": "star-p2-to-m22",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-p2-to-m22",
  "type": "Exercise",
  "number": "10.7.15",
  "title": "★ From <span class=\"process-math\">\\(\\mathbb{P}_2\\)<\/span> to <span class=\"process-math\">\\(\\mathbb{M}_{22}\\)<\/span>.",
  "body": " ★ From to   Define by   Describe the null space of . Is one-to-one?  Express the range of as a span. Is onto?  Is an isomorphism?  Find the matrix of relative to and the standard basis of .       (1)  requires all four entries to vanish. The -entry gives ; then the -entry gives ; then the -entry gives . So the null space is and  is one-to-one .   (2) The range is spanned by the images of a basis: These three are linearly independent, since is one-to-one, so a three-dimensional subspace of the four-dimensional . Hence is not onto .   (3)  No. An isomorphism must be both one-to-one and onto, and fails the second. Dimensions already rule it out: .   (4) Reading each image in the order gives the columns , , , so The matrix is : tall, and by therefore never onto, confirming (2).   "
},
{
  "id": "star-antitrace-transformation",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-antitrace-transformation",
  "type": "Exercise",
  "number": "10.7.16",
  "title": "★ Another Transformation <span class=\"process-math\">\\(\\mathbb{M}_{22} \\to \\R\\)<\/span>.",
  "body": " ★ Another Transformation   Define by . Show that is linear, find its matrix relative to the standard bases, and describe its null space and range.     Linearity. For and , the entries of and are computed entry by entry, so and .   The matrix. Evaluating on the standard basis, so the matrix is the row    Range.  has one pivot, in a single row, so is onto: . Indeed for any .   Null space. The condition is , one equation on four unknowns, so which has dimension . Consistently with , .   "
},
{
  "id": "star-matrix-wrt-two-bases",
  "level": "2",
  "url": "sec-problems-vector-spaces.html#star-matrix-wrt-two-bases",
  "type": "Exercise",
  "number": "10.7.17",
  "title": "★ Reading a Matrix off a Change of Basis.",
  "body": " ★ Reading a Matrix off a Change of Basis   Let be as in . Verify that where and are the matrices found there and is the change of basis matrix of .    The three matrices are   Multiplying,   This is exactly what one should expect. Applying takes -coordinates of to -coordinates of ; applying then re-expresses that answer in . Doing the transformation and then the change of basis is the same as using for the domain and for the codomain from the start.   "
},
{
  "id": "sec-problems-eigenvalues",
  "level": "1",
  "url": "sec-problems-eigenvalues.html",
  "type": "Section",
  "number": "10.8",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors     Problems for ( ).    A Repeated Eigenvalue with a Two-Dimensional Eigenspace   Find the eigenvalues and eigenvectors of .    Expand along the first row, which has only one nonzero entry: So the eigenvalues are , of multiplicity , and .   . Solve : The single equation is , so and are free and the eigenspace is two-dimensional. Basic eigenvectors:    .  giving and , so .  Checking all three:       A Second Matrix   Find the eigenvalues and eigenvectors of .    Expanding down the first column, which has a single nonzero entry, The eigenvalues are , of multiplicity , and .   .  The one equation is , so and are free:    .  Row gives , and row then gives , so : .  Checking the last one, .   (This lab came without a solution key, so every answer here has been checked by substituting back into .)     A Characteristic Polynomial   Find the characteristic polynomial, eigenvalues and eigenvectors of .    By , so the eigenvalues are and .   .  , so and .   .  , so and .  Checking: and . (This lab also came without a key.)     Eigenvalues of a Triangular Matrix   Write the characteristic polynomial and the eigenvalues of     Every entry above the main diagonal is zero, so is lower triangular, and so is . By the determinant of a triangular matrix is the product of its diagonal entries, so   The eigenvalues are therefore just the diagonal entries: each of multiplicity one. Nothing below the diagonal the , the , the , and so on plays any role at all.  Note that is an eigenvalue, so is not invertible; this is the content of . (No key was supplied with this lab; the factorization above is verified directly by the triangular-determinant theorem.)     Why a Rotation Has No Real Eigenvalues   Let be the matrix of the linear transformation that rotates every vector in counterclockwise through . Explain, using the geometry of eigenvectors, why can have no real eigenvalues.    Suppose were an eigenvalue with eigenvector , so . Then is a scalar multiple of , which means it lies on the same line through the origin as . That is the geometric content of being an eigenvector, as in : may stretch, shrink, or reverse , but it may not turn it off its own line.  A rotation through turns every nonzero vector by . Since is not a multiple of , no nonzero vector ends up on its original line. So no nonzero can satisfy for a real , and has no real eigenvalues.  The two exceptional angles are worth noting: rotation through is the identity, for which every nonzero vector is an eigenvector with , and rotation through reverses every vector, giving .     Eigenvalues with a Repeated Root   Find the eigenvalues of and their multiplicities.    The third column of has a single nonzero entry, so expand down it:   So the eigenvalues are and , the latter of multiplicity two .     An Eigenvalue from Two Rows   Let , where the entries marked are unknown. If is an eigenvector of , which number must be an eigenvalue of ?    The second entry of is , so the unknown middle column never contributes: in the product each row is multiplied by and the middle entry is annihilated. That makes rows and , which are fully known in the positions that matter, enough.  Row gives , and row gives . So   Since is an eigenvector, , that is . The first coordinate gives , and the third confirms it. So must be an eigenvalue of . (The middle coordinate then forces the unknown to be , but we did not need that.)     The Dominant Eigenvalue   Consider the linear dynamical system with . Which eigenvalue of is dominant?     is lower triangular, so its eigenvalues are the diagonal entries and .  The dominant eigenvalue is the one of largest absolute value, since it is the term that survives when is applied repeatedly. Here , so is dominant .  A dominant eigenvalue of absolute value greater than means the trajectory grows without bound; contrast the Markov chains of , where the dominant eigenvalue is always and the trajectory settles down instead.     ★ Can We Compute Efficiently?   Let and . Compute , and use it to find .    Since , . Then a diagonal matrix.  From we get , and therefore , since all the interior pairs cancel. With ,    Five hundred matrix multiplications have been replaced by one exponentiation of a number. The columns of are what made this work: they are eigenvectors of , since and .     ★ Verifying an Eigenvector   Let . Verify that and are eigenvectors of , and find their eigenvalues. Is an eigenvector?    A vector is an eigenvector when is a scalar multiple of . Computing, so it is an eigenvector with eigenvalue . Next, an eigenvector with eigenvalue .  But which is not a multiple of , so is not an eigenvector.  Note that checking a proposed eigenvector requires no root-finding at all only one matrix-vector product.     ★ A Geometric Eigenvector   Let be reflection in the line , with matrix . Find its eigenvalues and eigenvectors without computing a characteristic polynomial.    An eigenvector is a nonzero vector that the transformation keeps on its own line through the origin. For a reflection there are two obvious families.   Vectors along the mirror line are fixed. The vector lies on , and reflecting leaves it alone: an eigenvector with .   Vectors perpendicular to the mirror are reversed. The vector is perpendicular to , and an eigenvector with .  These two directions are independent, so we have found all of them: the eigenvalues are and . The characteristic polynomial would confirm it, since , but the geometry gave the answer first. Contrast , where a rotation has no such directions at all.     ★ Finding Eigenvalues   Find the eigenvalues of .    Form and expand along its third column, which has a single nonzero entry:   The eigenvalues are therefore , , , each of multiplicity one. As a check, their sum equals the trace of .     ★ Finding the Eigenvectors   Find a basic eigenvector for each eigenvalue of the matrix of .     . Solve : The first row gives , and the third then gives , so . Taking , .   .  The second row gives , the first then gives , and is free: .   .  The first row gives , and the third gives , so . Taking , .  Checking all three: which are , and .        Problems for ( ).    Diagonalizing a Matrix   Given , find matrices and with diagonal and .    The eigenvalues and eigenvectors were computed in : with basic eigenvectors and , and with eigenvector .  That is three independent eigenvectors for a matrix, so by  is diagonalizable. Take to have those eigenvectors as columns and the matching eigenvalues on its diagonal, in the same order:    is invertible: expanding along its first column, .  Rather than compute , verify the equivalent identity . Column by column, has columns while has columns , and these agree precisely because each is an eigenvector.   The choice is not unique: reordering the columns of (and matching the diagonal of ) or rescaling any eigenvector gives another valid pair. (This lab had no answer key; the verification above is the check.)     A Fiftieth Power   Let . Find .    Expanding down the third column, so the eigenvalues are and of multiplicity two.   .  gives and , so .   .  gives the single equation , so and .  Three independent eigenvectors, so is diagonalizable. Put   Row reducing gives   By , with . First and then multiplying by ,   A quick sanity check: setting the exponent to in the same computation returns itself, and the second row of is , which is right because the second row of is and so is fixed by every power.     Solving a Dynamical System   A dynamical system has the form Find and for the initial conditions , .    Write . Then   For , gives , so . For , gives , so . Hence   Then , and    Applying this to ,   Check : and . And : the recursion gives , matching .   Both sequences tend to , because the dominant eigenvalue is and the other eigenvalue contributes a term that dies away.     A Matrix That Is Not Diagonalizable   Let .  Find the characteristic polynomial of .  Find the eigenvalues and their multiplicities.  Is diagonalizable? Give the simplest reason you can.       (a) Expanding along the first row,    (b) The only eigenvalue is , of multiplicity .   (c)  No. Solve : There is one equation and three unknowns, so the general solution has parameters and the eigenspace is two-dimensional.  A matrix is diagonalizable only if it has independent eigenvectors, but here we can find only . In the language of : the multiplicity of is while the number of basic eigenvectors for it is , and .     Reading a Factorization     Let . Which of these must be false ?  is diagonalizable.  is an eigenvector of .  For every integer , .  The characteristic polynomial of is .  has distinct eigenvalues.    Let . Which of these is false ?  is diagonalizable.  is its only eigenvalue, of multiplicity two.  For every , .  The general solution of has exactly one parameter.         (a) The three factors have the shape  check that the outer two are inverses of each other so  is diagonalizable, with eigenvalues the diagonal entries of , namely and , and eigenvectors the columns of .  Statement (i) is true. Statement (ii) is true: is times the first column of , and any nonzero multiple of an eigenvector is an eigenvector. Statement (v) is true, since .  For (iii), with , so so (iii) is true as well.  That leaves (iv), which must be false : the eigenvalues are and , so the characteristic polynomial is , not .   (b) Again the outer factors are inverses, and the middle factor is . But , so outright.  Statement (i) is true ( is already diagonal), (ii) is true, and (iii) is true since .   (iv) is false. Here , so is satisfied by every  and its general solution has two parameters, not one. This is exactly why is diagonalizable despite having a repeated eigenvalue: its eigenspace is as large as the multiplicity demands.     What Guarantees Diagonalizability?   Let be an matrix. Which of the following is always true?  is always diagonalizable.  If for some the system has infinitely many solutions, then is diagonalizable.  If the characteristic polynomial of has a single root of multiplicity , then is diagonalizable.  If the characteristic polynomial of has distinct roots, then is diagonalizable.       (a) False.  gives a counterexample, and gives a one.   (b) False. That has a nontrivial solution says only that  is an eigenvalue true of every eigenvalue of every matrix, diagonalizable or not. Again with is a counterexample.   (c) False. This is precisely the situation of : a single root of multiplicity whose eigenspace is too small. (It can happen that such a matrix is diagonalizable when  but it is not guaranteed.)   (d) True. Eigenvectors belonging to distinct eigenvalues are linearly independent, so distinct roots produce independent eigenvectors, which is exactly the criterion of . See also .     Two Small Matrices   For each matrix, decide which of the statements , is not diagonalizable , is not invertible are true.      (a)  , so the first statement is false. , so is invertible and the third is false.  For the second, , so is the only eigenvalue, with multiplicity . But whose null space is spanned by the single vector . One independent eigenvector is not enough for a matrix, so is not diagonalizable  the second statement is the true one.   (b)  , so the first is false. , so is invertible and the third is false. And has two distinct roots, so by   is diagonalizable and the second is false too.  So for (b) all three statements are false . Geometrically is the reflection in the line , whose eigenvectors (fixed) and (reversed) are visible without any computation; compare .     Which Diagonalizes ?   Let . Which of the following matrices diagonalizes ?     A matrix diagonalizes exactly when its columns are independent eigenvectors of , so find those first:   For , gives , so the eigenvectors are the multiples of . For , gives , so the eigenvectors are the multiples of .  Now inspect the candidates. Only (b) has both columns of the right kind: and .  In (a) the first column is an eigenvector but is not. In (c) the second column is not. In (d) the second column is not. With as in (b), .     Long-Run Powers   Let . It turns out that where For large , what do the entries of approach?    From we get and hence , with Since , the lower-right entry tends to , so .  Here , so . Therefore    The columns of the limit are both multiples of the first column of , the eigenvector for the dominant eigenvalue . That is the general pattern: in the long run only the dominant eigenvalue survives, which is exactly why steady-state vectors exist for the Markov chains of .     ★ An Eigenvalue of Multiplicity Two   Find the eigenvalues and eigenvectors of .    Expand down the first column: So has multiplicity  , and has multiplicity .   For , solve : The single equation is , with and free: So has two basic eigenvectors, and they are not multiples of each other.   For :  The second row gives , and the first then gives , so . Taking , .  Checking: , and .   Because the eigenvalue of multiplicity supplies two independent eigenvectors, has three in all and is diagonalizable unlike , where the count came up short.     ★ Three Distinct Eigenvalues   Find the eigenvalues and eigenvectors of .     is upper triangular, so is too, and by  The eigenvalues are , , , all of multiplicity one.   .  gives from the third row and then , with free: .   .  gives and then : .   .  gives from the second row, and then , so : .  Checking the last one: . Three distinct eigenvalues give three independent eigenvectors, so is diagonalizable by .     ★ Two Similar Matrices   Let and . Compute and explain what the answer says about .    The matrix is its own inverse, since swapping twice restores the original: . Multiplying step by step,    So and are similar , in the sense of .  The two multiplications did different jobs: left multiplication by swapped the rows of , and right multiplication by swapped the columns . The net effect is to reverse both index orders at once. By , and have the same eigenvalues; indeed both have trace and determinant .     ★ Using Similarity to Find Eigenvalues   Find the eigenvalues of by first replacing with a similar but simpler matrix.    A row operation followed by the matching column operation produces a similar matrix. Apply , which is left multiplication by This gives   Now right multiply by , which replaces column by : Since , the matrices and are similar and share their eigenvalues.   has a bottom row , so expanding along that row,   So the eigenvalues of are , of multiplicity , and . Two checks on itself: the trace is , and .       "
},
{
  "id": "lab-eigen-3x3-repeated",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-eigen-3x3-repeated",
  "type": "Exercise",
  "number": "10.8.1",
  "title": "A Repeated Eigenvalue with a Two-Dimensional Eigenspace.",
  "body": " A Repeated Eigenvalue with a Two-Dimensional Eigenspace   Find the eigenvalues and eigenvectors of .    Expand along the first row, which has only one nonzero entry: So the eigenvalues are , of multiplicity , and .   . Solve : The single equation is , so and are free and the eigenspace is two-dimensional. Basic eigenvectors:    .  giving and , so .  Checking all three:     "
},
{
  "id": "lab-eigen-3x3-second",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-eigen-3x3-second",
  "type": "Exercise",
  "number": "10.8.2",
  "title": "A Second <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " A Second Matrix   Find the eigenvalues and eigenvectors of .    Expanding down the first column, which has a single nonzero entry, The eigenvalues are , of multiplicity , and .   .  The one equation is , so and are free:    .  Row gives , and row then gives , so : .  Checking the last one, .   (This lab came without a solution key, so every answer here has been checked by substituting back into .)   "
},
{
  "id": "lab-eigen-2x2",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-eigen-2x2",
  "type": "Exercise",
  "number": "10.8.3",
  "title": "A <span class=\"process-math\">\\(2 \\times 2\\)<\/span> Characteristic Polynomial.",
  "body": " A Characteristic Polynomial   Find the characteristic polynomial, eigenvalues and eigenvectors of .    By , so the eigenvalues are and .   .  , so and .   .  , so and .  Checking: and . (This lab also came without a key.)   "
},
{
  "id": "lab-eigen-triangular",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-eigen-triangular",
  "type": "Exercise",
  "number": "10.8.4",
  "title": "Eigenvalues of a Triangular Matrix.",
  "body": " Eigenvalues of a Triangular Matrix   Write the characteristic polynomial and the eigenvalues of     Every entry above the main diagonal is zero, so is lower triangular, and so is . By the determinant of a triangular matrix is the product of its diagonal entries, so   The eigenvalues are therefore just the diagonal entries: each of multiplicity one. Nothing below the diagonal the , the , the , and so on plays any role at all.  Note that is an eigenvalue, so is not invertible; this is the content of . (No key was supplied with this lab; the factorization above is verified directly by the triangular-determinant theorem.)   "
},
{
  "id": "lab-rotation-no-real-eigenvalues",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-rotation-no-real-eigenvalues",
  "type": "Exercise",
  "number": "10.8.5",
  "title": "Why a Rotation Has No Real Eigenvalues.",
  "body": " Why a Rotation Has No Real Eigenvalues   Let be the matrix of the linear transformation that rotates every vector in counterclockwise through . Explain, using the geometry of eigenvectors, why can have no real eigenvalues.    Suppose were an eigenvalue with eigenvector , so . Then is a scalar multiple of , which means it lies on the same line through the origin as . That is the geometric content of being an eigenvector, as in : may stretch, shrink, or reverse , but it may not turn it off its own line.  A rotation through turns every nonzero vector by . Since is not a multiple of , no nonzero vector ends up on its original line. So no nonzero can satisfy for a real , and has no real eigenvalues.  The two exceptional angles are worth noting: rotation through is the identity, for which every nonzero vector is an eigenvector with , and rotation through reverses every vector, giving .   "
},
{
  "id": "lab-eigenvalues-repeated-root",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-eigenvalues-repeated-root",
  "type": "Exercise",
  "number": "10.8.6",
  "title": "Eigenvalues with a Repeated Root.",
  "body": " Eigenvalues with a Repeated Root   Find the eigenvalues of and their multiplicities.    The third column of has a single nonzero entry, so expand down it:   So the eigenvalues are and , the latter of multiplicity two .   "
},
{
  "id": "lab-hidden-entries",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-hidden-entries",
  "type": "Exercise",
  "number": "10.8.7",
  "title": "An Eigenvalue from Two Rows.",
  "body": " An Eigenvalue from Two Rows   Let , where the entries marked are unknown. If is an eigenvector of , which number must be an eigenvalue of ?    The second entry of is , so the unknown middle column never contributes: in the product each row is multiplied by and the middle entry is annihilated. That makes rows and , which are fully known in the positions that matter, enough.  Row gives , and row gives . So   Since is an eigenvector, , that is . The first coordinate gives , and the third confirms it. So must be an eigenvalue of . (The middle coordinate then forces the unknown to be , but we did not need that.)   "
},
{
  "id": "lab-dominant-eigenvalue",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-dominant-eigenvalue",
  "type": "Exercise",
  "number": "10.8.8",
  "title": "The Dominant Eigenvalue.",
  "body": " The Dominant Eigenvalue   Consider the linear dynamical system with . Which eigenvalue of is dominant?     is lower triangular, so its eigenvalues are the diagonal entries and .  The dominant eigenvalue is the one of largest absolute value, since it is the term that survives when is applied repeatedly. Here , so is dominant .  A dominant eigenvalue of absolute value greater than means the trajectory grows without bound; contrast the Markov chains of , where the dominant eigenvalue is always and the trajectory settles down instead.   "
},
{
  "id": "star-power-motivation",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-power-motivation",
  "type": "Exercise",
  "number": "10.8.9",
  "title": "★ Can We Compute <span class=\"process-math\">\\(A^{500}\\)<\/span> Efficiently?",
  "body": " ★ Can We Compute Efficiently?   Let and . Compute , and use it to find .    Since , . Then a diagonal matrix.  From we get , and therefore , since all the interior pairs cancel. With ,    Five hundred matrix multiplications have been replaced by one exponentiation of a number. The columns of are what made this work: they are eigenvectors of , since and .   "
},
{
  "id": "star-eigenvector-check",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-eigenvector-check",
  "type": "Exercise",
  "number": "10.8.10",
  "title": "★ Verifying an Eigenvector.",
  "body": " ★ Verifying an Eigenvector   Let . Verify that and are eigenvectors of , and find their eigenvalues. Is an eigenvector?    A vector is an eigenvector when is a scalar multiple of . Computing, so it is an eigenvector with eigenvalue . Next, an eigenvector with eigenvalue .  But which is not a multiple of , so is not an eigenvector.  Note that checking a proposed eigenvector requires no root-finding at all only one matrix-vector product.   "
},
{
  "id": "star-eigenvector-reflection",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-eigenvector-reflection",
  "type": "Exercise",
  "number": "10.8.11",
  "title": "★ A Geometric Eigenvector.",
  "body": " ★ A Geometric Eigenvector   Let be reflection in the line , with matrix . Find its eigenvalues and eigenvectors without computing a characteristic polynomial.    An eigenvector is a nonzero vector that the transformation keeps on its own line through the origin. For a reflection there are two obvious families.   Vectors along the mirror line are fixed. The vector lies on , and reflecting leaves it alone: an eigenvector with .   Vectors perpendicular to the mirror are reversed. The vector is perpendicular to , and an eigenvector with .  These two directions are independent, so we have found all of them: the eigenvalues are and . The characteristic polynomial would confirm it, since , but the geometry gave the answer first. Contrast , where a rotation has no such directions at all.   "
},
{
  "id": "star-characteristic-polynomial",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-characteristic-polynomial",
  "type": "Exercise",
  "number": "10.8.12",
  "title": "★ Finding Eigenvalues.",
  "body": " ★ Finding Eigenvalues   Find the eigenvalues of .    Form and expand along its third column, which has a single nonzero entry:   The eigenvalues are therefore , , , each of multiplicity one. As a check, their sum equals the trace of .   "
},
{
  "id": "star-finding-eigenvectors",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-finding-eigenvectors",
  "type": "Exercise",
  "number": "10.8.13",
  "title": "★ Finding the Eigenvectors.",
  "body": " ★ Finding the Eigenvectors   Find a basic eigenvector for each eigenvalue of the matrix of .     . Solve : The first row gives , and the third then gives , so . Taking , .   .  The second row gives , the first then gives , and is free: .   .  The first row gives , and the third gives , so . Taking , .  Checking all three: which are , and .    "
},
{
  "id": "lab-diagonalize-3x3",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-diagonalize-3x3",
  "type": "Exercise",
  "number": "10.8.14",
  "title": "Diagonalizing a <span class=\"process-math\">\\(3 \\times 3\\)<\/span> Matrix.",
  "body": " Diagonalizing a Matrix   Given , find matrices and with diagonal and .    The eigenvalues and eigenvectors were computed in : with basic eigenvectors and , and with eigenvector .  That is three independent eigenvectors for a matrix, so by  is diagonalizable. Take to have those eigenvectors as columns and the matching eigenvalues on its diagonal, in the same order:    is invertible: expanding along its first column, .  Rather than compute , verify the equivalent identity . Column by column, has columns while has columns , and these agree precisely because each is an eigenvector.   The choice is not unique: reordering the columns of (and matching the diagonal of ) or rescaling any eigenvector gives another valid pair. (This lab had no answer key; the verification above is the check.)   "
},
{
  "id": "lab-power-of-a-matrix",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-power-of-a-matrix",
  "type": "Exercise",
  "number": "10.8.15",
  "title": "A Fiftieth Power.",
  "body": " A Fiftieth Power   Let . Find .    Expanding down the third column, so the eigenvalues are and of multiplicity two.   .  gives and , so .   .  gives the single equation , so and .  Three independent eigenvectors, so is diagonalizable. Put   Row reducing gives   By , with . First and then multiplying by ,   A quick sanity check: setting the exponent to in the same computation returns itself, and the second row of is , which is right because the second row of is and so is fixed by every power.   "
},
{
  "id": "lab-dynamical-system",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-dynamical-system",
  "type": "Exercise",
  "number": "10.8.16",
  "title": "Solving a Dynamical System.",
  "body": " Solving a Dynamical System   A dynamical system has the form Find and for the initial conditions , .    Write . Then   For , gives , so . For , gives , so . Hence   Then , and    Applying this to ,   Check : and . And : the recursion gives , matching .   Both sequences tend to , because the dominant eigenvalue is and the other eigenvalue contributes a term that dies away.   "
},
{
  "id": "lab-not-diagonalizable",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-not-diagonalizable",
  "type": "Exercise",
  "number": "10.8.17",
  "title": "A Matrix That Is Not Diagonalizable.",
  "body": " A Matrix That Is Not Diagonalizable   Let .  Find the characteristic polynomial of .  Find the eigenvalues and their multiplicities.  Is diagonalizable? Give the simplest reason you can.       (a) Expanding along the first row,    (b) The only eigenvalue is , of multiplicity .   (c)  No. Solve : There is one equation and three unknowns, so the general solution has parameters and the eigenspace is two-dimensional.  A matrix is diagonalizable only if it has independent eigenvectors, but here we can find only . In the language of : the multiplicity of is while the number of basic eigenvectors for it is , and .   "
},
{
  "id": "lab-reading-a-factorization",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-reading-a-factorization",
  "type": "Exercise",
  "number": "10.8.18",
  "title": "Reading a Factorization.",
  "body": " Reading a Factorization     Let . Which of these must be false ?  is diagonalizable.  is an eigenvector of .  For every integer , .  The characteristic polynomial of is .  has distinct eigenvalues.    Let . Which of these is false ?  is diagonalizable.  is its only eigenvalue, of multiplicity two.  For every , .  The general solution of has exactly one parameter.         (a) The three factors have the shape  check that the outer two are inverses of each other so  is diagonalizable, with eigenvalues the diagonal entries of , namely and , and eigenvectors the columns of .  Statement (i) is true. Statement (ii) is true: is times the first column of , and any nonzero multiple of an eigenvector is an eigenvector. Statement (v) is true, since .  For (iii), with , so so (iii) is true as well.  That leaves (iv), which must be false : the eigenvalues are and , so the characteristic polynomial is , not .   (b) Again the outer factors are inverses, and the middle factor is . But , so outright.  Statement (i) is true ( is already diagonal), (ii) is true, and (iii) is true since .   (iv) is false. Here , so is satisfied by every  and its general solution has two parameters, not one. This is exactly why is diagonalizable despite having a repeated eigenvalue: its eigenspace is as large as the multiplicity demands.   "
},
{
  "id": "lab-diagonalizability-statements",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-diagonalizability-statements",
  "type": "Exercise",
  "number": "10.8.19",
  "title": "What Guarantees Diagonalizability?",
  "body": " What Guarantees Diagonalizability?   Let be an matrix. Which of the following is always true?  is always diagonalizable.  If for some the system has infinitely many solutions, then is diagonalizable.  If the characteristic polynomial of has a single root of multiplicity , then is diagonalizable.  If the characteristic polynomial of has distinct roots, then is diagonalizable.       (a) False.  gives a counterexample, and gives a one.   (b) False. That has a nontrivial solution says only that  is an eigenvalue true of every eigenvalue of every matrix, diagonalizable or not. Again with is a counterexample.   (c) False. This is precisely the situation of : a single root of multiplicity whose eigenspace is too small. (It can happen that such a matrix is diagonalizable when  but it is not guaranteed.)   (d) True. Eigenvectors belonging to distinct eigenvalues are linearly independent, so distinct roots produce independent eigenvectors, which is exactly the criterion of . See also .   "
},
{
  "id": "lab-two-small-matrices",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-two-small-matrices",
  "type": "Exercise",
  "number": "10.8.20",
  "title": "Two Small Matrices.",
  "body": " Two Small Matrices   For each matrix, decide which of the statements , is not diagonalizable , is not invertible are true.      (a)  , so the first statement is false. , so is invertible and the third is false.  For the second, , so is the only eigenvalue, with multiplicity . But whose null space is spanned by the single vector . One independent eigenvector is not enough for a matrix, so is not diagonalizable  the second statement is the true one.   (b)  , so the first is false. , so is invertible and the third is false. And has two distinct roots, so by   is diagonalizable and the second is false too.  So for (b) all three statements are false . Geometrically is the reflection in the line , whose eigenvectors (fixed) and (reversed) are visible without any computation; compare .   "
},
{
  "id": "lab-which-p-diagonalizes",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-which-p-diagonalizes",
  "type": "Exercise",
  "number": "10.8.21",
  "title": "Which <span class=\"process-math\">\\(P\\)<\/span> Diagonalizes <span class=\"process-math\">\\(A\\text{?}\\)<\/span>",
  "body": " Which Diagonalizes ?   Let . Which of the following matrices diagonalizes ?     A matrix diagonalizes exactly when its columns are independent eigenvectors of , so find those first:   For , gives , so the eigenvectors are the multiples of . For , gives , so the eigenvectors are the multiples of .  Now inspect the candidates. Only (b) has both columns of the right kind: and .  In (a) the first column is an eigenvector but is not. In (c) the second column is not. In (d) the second column is not. With as in (b), .   "
},
{
  "id": "lab-long-run-powers",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#lab-long-run-powers",
  "type": "Exercise",
  "number": "10.8.22",
  "title": "Long-Run Powers.",
  "body": " Long-Run Powers   Let . It turns out that where For large , what do the entries of approach?    From we get and hence , with Since , the lower-right entry tends to , so .  Here , so . Therefore    The columns of the limit are both multiples of the first column of , the eigenvector for the dominant eigenvalue . That is the general pattern: in the long run only the dominant eigenvalue survives, which is exactly why steady-state vectors exist for the Markov chains of .   "
},
{
  "id": "star-repeated-eigenvalue",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-repeated-eigenvalue",
  "type": "Exercise",
  "number": "10.8.23",
  "title": "★ An Eigenvalue of Multiplicity Two.",
  "body": " ★ An Eigenvalue of Multiplicity Two   Find the eigenvalues and eigenvectors of .    Expand down the first column: So has multiplicity  , and has multiplicity .   For , solve : The single equation is , with and free: So has two basic eigenvectors, and they are not multiples of each other.   For :  The second row gives , and the first then gives , so . Taking , .  Checking: , and .   Because the eigenvalue of multiplicity supplies two independent eigenvectors, has three in all and is diagonalizable unlike , where the count came up short.   "
},
{
  "id": "star-three-distinct-eigenvalues",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-three-distinct-eigenvalues",
  "type": "Exercise",
  "number": "10.8.24",
  "title": "★ Three Distinct Eigenvalues.",
  "body": " ★ Three Distinct Eigenvalues   Find the eigenvalues and eigenvectors of .     is upper triangular, so is too, and by  The eigenvalues are , , , all of multiplicity one.   .  gives from the third row and then , with free: .   .  gives and then : .   .  gives from the second row, and then , so : .  Checking the last one: . Three distinct eigenvalues give three independent eigenvectors, so is diagonalizable by .   "
},
{
  "id": "star-similar-matrices",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-similar-matrices",
  "type": "Exercise",
  "number": "10.8.25",
  "title": "★ Two Similar Matrices.",
  "body": " ★ Two Similar Matrices   Let and . Compute and explain what the answer says about .    The matrix is its own inverse, since swapping twice restores the original: . Multiplying step by step,    So and are similar , in the sense of .  The two multiplications did different jobs: left multiplication by swapped the rows of , and right multiplication by swapped the columns . The net effect is to reverse both index orders at once. By , and have the same eigenvalues; indeed both have trace and determinant .   "
},
{
  "id": "star-similar-shortcut",
  "level": "2",
  "url": "sec-problems-eigenvalues.html#star-similar-shortcut",
  "type": "Exercise",
  "number": "10.8.26",
  "title": "★ Using Similarity to Find Eigenvalues.",
  "body": " ★ Using Similarity to Find Eigenvalues   Find the eigenvalues of by first replacing with a similar but simpler matrix.    A row operation followed by the matching column operation produces a similar matrix. Apply , which is left multiplication by This gives   Now right multiply by , which replaces column by : Since , the matrices and are similar and share their eigenvalues.   has a bottom row , so expanding along that row,   So the eigenvalues of are , of multiplicity , and . Two checks on itself: the trace is , and .    "
},
{
  "id": "sec-problems-applications",
  "level": "1",
  "url": "sec-problems-applications.html",
  "type": "Section",
  "number": "10.9",
  "title": "Applications of Spectral Theory",
  "body": " Applications of Spectral Theory     Problems for ( ).    Steady-State Vectors   Find a steady-state vector for the Markov chain with transition matrix     Both matrices are stochastic, since every column sums to , so by a steady state is a solution of whose entries sum to .   (a)  The two rows are negatives of each other, so the single equation is , i.e. . Taking gives , which sums to , so the steady state is    (b)  giving . Taking gives , which sums to , so   Both have all entries positive, hence are regular ( ), so by these steady states are unique and every starting distribution converges to them.     ★ Bob's Coffee   Bob always drinks his morning coffee either at café or at café . Suppose that  on day he is certainly at ;  he never goes to two days in a row;  if he is at one day, the next day he is twice as likely to be at as at .  Write the transition matrix and compute the state vectors for the first few days. What do you notice?    The initial state vector is . The second condition says that from he always moves to ; the third says that from he stays with probability and moves with probability . Indexing columns by today and rows by tomorrow, Each column sums to , so is stochastic.  Iterating ,   The state vectors oscillate but close in on . Trying other starting vectors gives the same limit, so the long-run behaviour appears not to depend on where Bob started. That limit is computed exactly in .     ★ A Regular Matrix   Show that is regular.    By , we need some power of with all entries positive. The matrix itself has a zero in the position, so try the square: Every entry of is positive, so is regular .  In words: even though Bob cannot go from to in one day, he can in two (via ), and that is exactly what the positive -entry of records.     ★ A Matrix That Is Not Regular   Show that is stochastic but not regular.    Both columns sum to , so is stochastic. Computing powers, and in general   The -entry is for every , so no power of has all entries positive and is not regular .  The reason is structural: state is absorbing . Once the chain reaches it, the first column of keeps it there forever, so state can never be reached from state , no matter how many steps are allowed.     ★ Stochastic Matrices Preserve Probability Vectors   A probability vector is a vector with non-negative entries summing to . Show that if is stochastic and is a probability vector, then so is .     Non-negativity. The th entry of is a sum of products of non-negative numbers, since every and every . So every entry of is non-negative.   The entries still sum to one. By , a stochastic matrix preserves the sum of entries. Since the entries of sum to , so do those of .  Hence is again a probability vector. This is what makes the whole model coherent: a state vector of a Markov chain remains a legitimate list of probabilities at every step, however many transitions are applied.     ★ Powers of a Stochastic Matrix Are Stochastic   Show that if is stochastic, then is stochastic for every integer .    Write . Saying that every column of sums to is exactly saying that since the th entry of is the sum of column .  Now argue by induction. The case is the hypothesis. If , then so the columns of also sum to .  The entries of are non-negative too, being sums of products of non-negative numbers. So is stochastic.  This is what licenses the phrase steps of the chain : applying repeatedly is the same as applying the single stochastic matrix , and the result is still a Markov transition.     ★ Checking the Eigenvalue Bound   Find both eigenvalues of and confirm that they satisfy , with among them.    The characteristic polynomial is So the eigenvalues are and .  Both bounds hold: and , as guarantees for any stochastic matrix, and appears as promises.  The gap between the two matters. The second eigenvalue has absolute value strictly less than , so its contribution dies away under repeated application, leaving only the direction which is why the state vectors in settled down.     ★ The Steady State for Bob's Coffee   Does have a unique steady state vector? If so, find it.     (I)  is stochastic, since each column sums to .   (II)  is regular, by .  From (I) and (II) and , has a unique steady state vector.  To find it, solve : so and .  The entries are probabilities, so they must sum to : gives and confirming the numerical limit observed in . Checking, .      ★ Why the Steady State Is Reached   For , diagonalize and use the result to show that converges to the steady state for every probability vector .    The eigenvalues are and , by . For the eigenvector is , from . For , gives , so .  Hence with   Then , and since ,   Finally, apply this limit to any probability vector with : The starting vector has vanished from the answer, which is precisely the claim. The mechanism is the eigenvalue gap: everything except the direction decays.       Problems for ( ).    A Migration Matrix and a Population   Consider the migration matrix for locations , and . Initially there are residents in location , in location and in location . Find the population of each location in the long run.    Each column of sums to , so is stochastic ( ) and has as an eigenvalue. Solve :   Row gives and row gives ; row is then automatically satisfied, since . So the eigenvectors for are the multiples of   Migration moves people around but does not create or destroy them, so the total population stays at forever. The entries of sum to , so rescale by :   So in the long run locations and each hold residents and location holds . As a check, these sum to .      Long-Run Proportions   A migration matrix is given by Compare the populations of the three locations in the long run.    Every column sums to : for instance the first is . So is stochastic and is an eigenvalue.  Set and solve . The first two rows read Clearing denominators gives and . Substituting into the first, so and .  The third row is then satisfied automatically, as it must be: .   So the steady-state direction is , whose entries sum to . Rescaling to make the entries proportions,   In the long run of the population lives in location , in location , and in location  whatever the starting distribution, since all entries of are positive and so is regular.     ★ A Bike-Share Network   A bike-share company has three stations. Let be the matrix whose -entry is the probability that a bike rented at station is returned to station , and suppose Initially the bikes are distributed as . How are they distributed in the long run?    Each column sums to , so is stochastic and has as an eigenvalue. All entries are positive, so is regular and the steady state is unique.  Solve . Multiplying through by to clear decimals, the last row being the negative of the sum of the first two, as it must be for a stochastic matrix.  The two remaining equations are and . Subtracting gives , so and . Then gives , so   Bikes are neither created nor destroyed, so the total stays at . The entries of sum to , so take : that is , and of the fleet. Checking, .      ★ A Deer Population   A deer population consists of fawns and adult does. Suppose that  the number of fawns born in any year is twice the number of adult does in the previous year;  of adult does survive to the next year;  of fawns survive to become adult does.  Will the population survive?    Let record fawns and adults in year . The three rules say so with Note is not stochastic: the population is not conserved.  The long-run behaviour is governed by the dominant eigenvalue. The characteristic polynomial is whose roots are that is and .  The dominant eigenvalue is , so the population survives and in fact grows by about per year .  For the eigenvector of , gives , so . Checking, .   So whatever the starting counts, the herd settles into the ratio fawns to adult does, and thereafter multiplies by each year. The second eigenvalue has absolute value less than , so its contribution dies out; had the dominant eigenvalue been less than , the herd would have dwindled to nothing instead.       Problems for ( ).  These problems rebuild the development of on a small web of three pages, with links So page links out to pages and , page links only to page , and page links only to page .    ★ Question 1   A surfer starts by choosing one of the pages at random. Let be the probability that the surfer is on page at time . What are and ?     At time . All three pages are equally likely, so    At time . The surfer arrives at page by having been on some page that links to , and then choosing the link to from among the outbound links of page . So where the sum runs over the pages that link to and is the number of outbound links of page .  Here , , .     ★ Question 2   Find for this web.    Which pages link to page ? Both page and page do. Page has outbound links, so a surfer there picks the link to page with probability . Page has , so a surfer there goes to page with certainty. Therefore   For comparison, page is reached only from page , giving , and page only from page , giving .     ★ Question 3   Find the matrix representing the evolution of the probabilities from time to time .    Collect the three relations of into :   Column records where a surfer on page goes: column splits and between pages and ; columns and each send everything to a single page.  Every column sums to , so is stochastic ( ) as it must be, since the surfer certainly lands somewhere.     ★ Question 4   Suppose a fourth page is added with no outbound links, and no page links to it. Modify the matrix, assuming that a surfer on a page with no outbound link jumps to one of the pages at random.    Page is a dangling node : , so the recipe makes no sense and its column of the link matrix would be all zeros. Such a matrix is not stochastic, and probability would leak away.  The fix is to declare that a surfer stuck on page picks any of the pages uniformly, which fills that column with s:   Every column again sums to , so is stochastic. Note that the fourth row is nearly empty: nobody links to page , so it is reached only by the random jump out of itself, and its long-run share will be very small.     ★ Question 5   Let be the probability that the surfer stays interested and follows a link, the damping factor . How are the probabilities modified?    With probability the surfer follows a link, exactly as before; with probability the surfer gets bored and jumps to a page chosen uniformly at random from all pages, which contributes to every page. So   The two terms are the two things a surfer can do, weighted by how likely each is. Setting recovers .     ★ Question 6   Express the previous answer as a matrix equation, and show that the resulting matrix is stochastic and regular.    Let be the matrix all of whose entries are . Since the entries of sum to , we have , the all-ones vector, so the constant term in every coordinate can be written as . Hence    is stochastic. Each column of sums to and each column of sums to , so each column of sums to Its entries are non-negative, being non-negative combinations of non-negative numbers.   is regular. For every entry of is strictly positive, and adding the non-negative matrix cannot destroy that. So itself already has all entries positive, and witnesses regularity.  By , therefore has a unique steady state, and every starting distribution converges to it. That steady state is the PageRank vector and the damping factor is what guarantees it exists.     ★ Question 7   Take and find the steady state of the Markov chain for the three-page web, using the matrix of . Which page ranks highest?    With and , the damping term contributes to every entry, so Each column sums to .   Solve . Clearing denominators, the first two rows give Adding them gives , so . Substituting into the first, , so .  Taking gives and , which sum to . Normalizing, The third row of is satisfied automatically, as it must be: .    Page ranks highest , then page , then page . That is reasonable: page is the only page with two incoming links, and one of them comes from page , which is itself well ranked. PageRank rewards not just being linked to, but being linked to by pages that are themselves important.       Problems for ( ).    ★ Two Other Ways to Let Go   For the coupled carts of , with normal modes at frequency and at frequency , find when both carts are released from rest with     In both parts the carts start at rest, so as in every sine coefficient vanishes and where are the coordinates of in the eigenvector basis.   (a) Here exactly, so and , and Both carts move together, in step, forever: a pure slow mode. The middle spring is never stretched or compressed, so no energy is ever traded, and the motion is exactly periodic with period .   (b) Now solve giving and , so and . Hence   This is the mirror image of the example: pulling the second cart gives the same messy energy-trading motion with the roles of the carts exchanged. Since is irrational, the two cosines never come back into step and the motion never exactly repeats.  The contrast between (a) and (b) is the whole point of diagonalizing: released along an eigenvector the system is simple, and released along anything else it is a superposition of the two simple motions.      "
},
{
  "id": "lab-steady-state-2x2",
  "level": "2",
  "url": "sec-problems-applications.html#lab-steady-state-2x2",
  "type": "Exercise",
  "number": "10.9.1",
  "title": "Steady-State Vectors.",
  "body": " Steady-State Vectors   Find a steady-state vector for the Markov chain with transition matrix     Both matrices are stochastic, since every column sums to , so by a steady state is a solution of whose entries sum to .   (a)  The two rows are negatives of each other, so the single equation is , i.e. . Taking gives , which sums to , so the steady state is    (b)  giving . Taking gives , which sums to , so   Both have all entries positive, hence are regular ( ), so by these steady states are unique and every starting distribution converges to them.   "
},
{
  "id": "star-bob-coffee",
  "level": "2",
  "url": "sec-problems-applications.html#star-bob-coffee",
  "type": "Exercise",
  "number": "10.9.2",
  "title": "★ Bob’s Coffee.",
  "body": " ★ Bob's Coffee   Bob always drinks his morning coffee either at café or at café . Suppose that  on day he is certainly at ;  he never goes to two days in a row;  if he is at one day, the next day he is twice as likely to be at as at .  Write the transition matrix and compute the state vectors for the first few days. What do you notice?    The initial state vector is . The second condition says that from he always moves to ; the third says that from he stays with probability and moves with probability . Indexing columns by today and rows by tomorrow, Each column sums to , so is stochastic.  Iterating ,   The state vectors oscillate but close in on . Trying other starting vectors gives the same limit, so the long-run behaviour appears not to depend on where Bob started. That limit is computed exactly in .   "
},
{
  "id": "star-regular",
  "level": "2",
  "url": "sec-problems-applications.html#star-regular",
  "type": "Exercise",
  "number": "10.9.3",
  "title": "★ A Regular Matrix.",
  "body": " ★ A Regular Matrix   Show that is regular.    By , we need some power of with all entries positive. The matrix itself has a zero in the position, so try the square: Every entry of is positive, so is regular .  In words: even though Bob cannot go from to in one day, he can in two (via ), and that is exactly what the positive -entry of records.   "
},
{
  "id": "star-not-regular",
  "level": "2",
  "url": "sec-problems-applications.html#star-not-regular",
  "type": "Exercise",
  "number": "10.9.4",
  "title": "★ A Matrix That Is Not Regular.",
  "body": " ★ A Matrix That Is Not Regular   Show that is stochastic but not regular.    Both columns sum to , so is stochastic. Computing powers, and in general   The -entry is for every , so no power of has all entries positive and is not regular .  The reason is structural: state is absorbing . Once the chain reaches it, the first column of keeps it there forever, so state can never be reached from state , no matter how many steps are allowed.   "
},
{
  "id": "star-stochastic-preserves-probability",
  "level": "2",
  "url": "sec-problems-applications.html#star-stochastic-preserves-probability",
  "type": "Exercise",
  "number": "10.9.5",
  "title": "★ Stochastic Matrices Preserve Probability Vectors.",
  "body": " ★ Stochastic Matrices Preserve Probability Vectors   A probability vector is a vector with non-negative entries summing to . Show that if is stochastic and is a probability vector, then so is .     Non-negativity. The th entry of is a sum of products of non-negative numbers, since every and every . So every entry of is non-negative.   The entries still sum to one. By , a stochastic matrix preserves the sum of entries. Since the entries of sum to , so do those of .  Hence is again a probability vector. This is what makes the whole model coherent: a state vector of a Markov chain remains a legitimate list of probabilities at every step, however many transitions are applied.   "
},
{
  "id": "star-powers-stochastic",
  "level": "2",
  "url": "sec-problems-applications.html#star-powers-stochastic",
  "type": "Exercise",
  "number": "10.9.6",
  "title": "★ Powers of a Stochastic Matrix Are Stochastic.",
  "body": " ★ Powers of a Stochastic Matrix Are Stochastic   Show that if is stochastic, then is stochastic for every integer .    Write . Saying that every column of sums to is exactly saying that since the th entry of is the sum of column .  Now argue by induction. The case is the hypothesis. If , then so the columns of also sum to .  The entries of are non-negative too, being sums of products of non-negative numbers. So is stochastic.  This is what licenses the phrase steps of the chain : applying repeatedly is the same as applying the single stochastic matrix , and the result is still a Markov transition.   "
},
{
  "id": "star-stochastic-eigenvalue-bound",
  "level": "2",
  "url": "sec-problems-applications.html#star-stochastic-eigenvalue-bound",
  "type": "Exercise",
  "number": "10.9.7",
  "title": "★ Checking the Eigenvalue Bound.",
  "body": " ★ Checking the Eigenvalue Bound   Find both eigenvalues of and confirm that they satisfy , with among them.    The characteristic polynomial is So the eigenvalues are and .  Both bounds hold: and , as guarantees for any stochastic matrix, and appears as promises.  The gap between the two matters. The second eigenvalue has absolute value strictly less than , so its contribution dies away under repeated application, leaving only the direction which is why the state vectors in settled down.   "
},
{
  "id": "star-steady-state-bob",
  "level": "2",
  "url": "sec-problems-applications.html#star-steady-state-bob",
  "type": "Exercise",
  "number": "10.9.8",
  "title": "★ The Steady State for Bob’s Coffee.",
  "body": " ★ The Steady State for Bob's Coffee   Does have a unique steady state vector? If so, find it.     (I)  is stochastic, since each column sums to .   (II)  is regular, by .  From (I) and (II) and , has a unique steady state vector.  To find it, solve : so and .  The entries are probabilities, so they must sum to : gives and confirming the numerical limit observed in . Checking, .    "
},
{
  "id": "star-two-by-two-steady-state-proof",
  "level": "2",
  "url": "sec-problems-applications.html#star-two-by-two-steady-state-proof",
  "type": "Exercise",
  "number": "10.9.9",
  "title": "★ Why the Steady State Is Reached.",
  "body": " ★ Why the Steady State Is Reached   For , diagonalize and use the result to show that converges to the steady state for every probability vector .    The eigenvalues are and , by . For the eigenvector is , from . For , gives , so .  Hence with   Then , and since ,   Finally, apply this limit to any probability vector with : The starting vector has vanished from the answer, which is precisely the claim. The mechanism is the eigenvalue gap: everything except the direction decays.   "
},
{
  "id": "lab-migration-populations",
  "level": "2",
  "url": "sec-problems-applications.html#lab-migration-populations",
  "type": "Exercise",
  "number": "10.9.10",
  "title": "A Migration Matrix and a Population.",
  "body": " A Migration Matrix and a Population   Consider the migration matrix for locations , and . Initially there are residents in location , in location and in location . Find the population of each location in the long run.    Each column of sums to , so is stochastic ( ) and has as an eigenvalue. Solve :   Row gives and row gives ; row is then automatically satisfied, since . So the eigenvectors for are the multiples of   Migration moves people around but does not create or destroy them, so the total population stays at forever. The entries of sum to , so rescale by :   So in the long run locations and each hold residents and location holds . As a check, these sum to .    "
},
{
  "id": "lab-migration-proportions",
  "level": "2",
  "url": "sec-problems-applications.html#lab-migration-proportions",
  "type": "Exercise",
  "number": "10.9.11",
  "title": "Long-Run Proportions.",
  "body": " Long-Run Proportions   A migration matrix is given by Compare the populations of the three locations in the long run.    Every column sums to : for instance the first is . So is stochastic and is an eigenvalue.  Set and solve . The first two rows read Clearing denominators gives and . Substituting into the first, so and .  The third row is then satisfied automatically, as it must be: .   So the steady-state direction is , whose entries sum to . Rescaling to make the entries proportions,   In the long run of the population lives in location , in location , and in location  whatever the starting distribution, since all entries of are positive and so is regular.   "
},
{
  "id": "star-bike-share",
  "level": "2",
  "url": "sec-problems-applications.html#star-bike-share",
  "type": "Exercise",
  "number": "10.9.12",
  "title": "★ A Bike-Share Network.",
  "body": " ★ A Bike-Share Network   A bike-share company has three stations. Let be the matrix whose -entry is the probability that a bike rented at station is returned to station , and suppose Initially the bikes are distributed as . How are they distributed in the long run?    Each column sums to , so is stochastic and has as an eigenvalue. All entries are positive, so is regular and the steady state is unique.  Solve . Multiplying through by to clear decimals, the last row being the negative of the sum of the first two, as it must be for a stochastic matrix.  The two remaining equations are and . Subtracting gives , so and . Then gives , so   Bikes are neither created nor destroyed, so the total stays at . The entries of sum to , so take : that is , and of the fleet. Checking, .    "
},
{
  "id": "star-deer-population",
  "level": "2",
  "url": "sec-problems-applications.html#star-deer-population",
  "type": "Exercise",
  "number": "10.9.13",
  "title": "★ A Deer Population.",
  "body": " ★ A Deer Population   A deer population consists of fawns and adult does. Suppose that  the number of fawns born in any year is twice the number of adult does in the previous year;  of adult does survive to the next year;  of fawns survive to become adult does.  Will the population survive?    Let record fawns and adults in year . The three rules say so with Note is not stochastic: the population is not conserved.  The long-run behaviour is governed by the dominant eigenvalue. The characteristic polynomial is whose roots are that is and .  The dominant eigenvalue is , so the population survives and in fact grows by about per year .  For the eigenvector of , gives , so . Checking, .   So whatever the starting counts, the herd settles into the ratio fawns to adult does, and thereafter multiplies by each year. The second eigenvalue has absolute value less than , so its contribution dies out; had the dominant eigenvalue been less than , the herd would have dwindled to nothing instead.   "
},
{
  "id": "star-pagerank-q1",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q1",
  "type": "Exercise",
  "number": "10.9.14",
  "title": "★ Question 1.",
  "body": " ★ Question 1   A surfer starts by choosing one of the pages at random. Let be the probability that the surfer is on page at time . What are and ?     At time . All three pages are equally likely, so    At time . The surfer arrives at page by having been on some page that links to , and then choosing the link to from among the outbound links of page . So where the sum runs over the pages that link to and is the number of outbound links of page .  Here , , .   "
},
{
  "id": "star-pagerank-q2",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q2",
  "type": "Exercise",
  "number": "10.9.15",
  "title": "★ Question 2.",
  "body": " ★ Question 2   Find for this web.    Which pages link to page ? Both page and page do. Page has outbound links, so a surfer there picks the link to page with probability . Page has , so a surfer there goes to page with certainty. Therefore   For comparison, page is reached only from page , giving , and page only from page , giving .   "
},
{
  "id": "star-pagerank-q3",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q3",
  "type": "Exercise",
  "number": "10.9.16",
  "title": "★ Question 3.",
  "body": " ★ Question 3   Find the matrix representing the evolution of the probabilities from time to time .    Collect the three relations of into :   Column records where a surfer on page goes: column splits and between pages and ; columns and each send everything to a single page.  Every column sums to , so is stochastic ( ) as it must be, since the surfer certainly lands somewhere.   "
},
{
  "id": "star-pagerank-q4",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q4",
  "type": "Exercise",
  "number": "10.9.17",
  "title": "★ Question 4.",
  "body": " ★ Question 4   Suppose a fourth page is added with no outbound links, and no page links to it. Modify the matrix, assuming that a surfer on a page with no outbound link jumps to one of the pages at random.    Page is a dangling node : , so the recipe makes no sense and its column of the link matrix would be all zeros. Such a matrix is not stochastic, and probability would leak away.  The fix is to declare that a surfer stuck on page picks any of the pages uniformly, which fills that column with s:   Every column again sums to , so is stochastic. Note that the fourth row is nearly empty: nobody links to page , so it is reached only by the random jump out of itself, and its long-run share will be very small.   "
},
{
  "id": "star-pagerank-q5",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q5",
  "type": "Exercise",
  "number": "10.9.18",
  "title": "★ Question 5.",
  "body": " ★ Question 5   Let be the probability that the surfer stays interested and follows a link, the damping factor . How are the probabilities modified?    With probability the surfer follows a link, exactly as before; with probability the surfer gets bored and jumps to a page chosen uniformly at random from all pages, which contributes to every page. So   The two terms are the two things a surfer can do, weighted by how likely each is. Setting recovers .   "
},
{
  "id": "star-pagerank-q6",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q6",
  "type": "Exercise",
  "number": "10.9.19",
  "title": "★ Question 6.",
  "body": " ★ Question 6   Express the previous answer as a matrix equation, and show that the resulting matrix is stochastic and regular.    Let be the matrix all of whose entries are . Since the entries of sum to , we have , the all-ones vector, so the constant term in every coordinate can be written as . Hence    is stochastic. Each column of sums to and each column of sums to , so each column of sums to Its entries are non-negative, being non-negative combinations of non-negative numbers.   is regular. For every entry of is strictly positive, and adding the non-negative matrix cannot destroy that. So itself already has all entries positive, and witnesses regularity.  By , therefore has a unique steady state, and every starting distribution converges to it. That steady state is the PageRank vector and the damping factor is what guarantees it exists.   "
},
{
  "id": "star-pagerank-q7",
  "level": "2",
  "url": "sec-problems-applications.html#star-pagerank-q7",
  "type": "Exercise",
  "number": "10.9.20",
  "title": "★ Question 7.",
  "body": " ★ Question 7   Take and find the steady state of the Markov chain for the three-page web, using the matrix of . Which page ranks highest?    With and , the damping term contributes to every entry, so Each column sums to .   Solve . Clearing denominators, the first two rows give Adding them gives , so . Substituting into the first, , so .  Taking gives and , which sum to . Normalizing, The third row of is satisfied automatically, as it must be: .    Page ranks highest , then page , then page . That is reasonable: page is the only page with two incoming links, and one of them comes from page , which is itself well ranked. PageRank rewards not just being linked to, but being linked to by pages that are themselves important.   "
},
{
  "id": "star-coupled-oscillators-release",
  "level": "2",
  "url": "sec-problems-applications.html#star-coupled-oscillators-release",
  "type": "Exercise",
  "number": "10.9.21",
  "title": "★ Two Other Ways to Let Go.",
  "body": " ★ Two Other Ways to Let Go   For the coupled carts of , with normal modes at frequency and at frequency , find when both carts are released from rest with     In both parts the carts start at rest, so as in every sine coefficient vanishes and where are the coordinates of in the eigenvector basis.   (a) Here exactly, so and , and Both carts move together, in step, forever: a pure slow mode. The middle spring is never stretched or compressed, so no energy is ever traded, and the motion is exactly periodic with period .   (b) Now solve giving and , so and . Hence   This is the mirror image of the example: pulling the second cart gives the same messy energy-trading motion with the roles of the carts exchanged. Since is irrational, the two cosines never come back into step and the motion never exactly repeats.  The contrast between (a) and (b) is the whole point of diagonalizing: released along an eigenvector the system is simple, and released along anything else it is a superposition of the two simple motions.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
