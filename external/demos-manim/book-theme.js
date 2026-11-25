/* Keep the book's same-origin figure frames tall enough for their contents,
   including wrapped controls, stacked plots, and captions after fonts load. */
(function () {
  "use strict";
  let frame;
  try {
    frame = window.frameElement;
  } catch (_) {
    return; // Standalone or embedded on a different origin.
  }
  if (!frame) return;

  function fit() {
    frame.style.setProperty("height", Math.ceil(document.body.scrollHeight) + "px", "important");
  }
  new ResizeObserver(fit).observe(document.body);
  document.fonts.ready.then(fit);
  fit();
}());
