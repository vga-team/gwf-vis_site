window.addEventListener("hashchange", () => {
  const main = document.querySelector("#main");
  const mainShadowRoot = main.shadowRoot;
  mainShadowRoot.querySelector(window.location.hash)?.scrollIntoView();
});
