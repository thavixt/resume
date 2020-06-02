(function () {
  window.onbeforeunload = () => window.scrollTo(0, 0);
  window.scrollTo(0, 0);

  // https://github.com/camwiegert/in-view
  window.inView.threshold(0.5);
  const delay = 1000;

  setTimeout(() => {
    // Reveal the first paragraph
    document.getElementsByClassName("main_content-item")[0].classList.remove(
      "is-hidden",
    );
  }, delay + 750);

  setTimeout(() => {
    // Reveal main divs
    window.inView(".main_content-item")
      .on("enter", (el) => {
        el.classList.remove("is-hidden");
      });
  }, delay + 500);

  setTimeout(() => {
    // Slide in sidebar
    document.getElementsByClassName("sidebar")[0].classList.remove("is-hidden");
    // Reveal section titles
    window.inView(".section_title")
      .on("enter", (el) => {
        el.classList.remove("is-hidden");
      });
    // Reveal sidebar divs
    window.inView(".sidebar_section")
      .on("enter", (el) => {
        el.classList.remove("is-hidden");
      });
  }, delay + 250);
})();
