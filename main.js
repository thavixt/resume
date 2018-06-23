(function () {
    window.inView.threshold(0.3);

    setTimeout(() => {
        // Reveal the first paragraph
        document.getElementsByClassName("main_content-item")[0].classList.remove("is-hidden");
    }, 750);

    setTimeout(() => {
        // Reveal main divs
        window.inView(".main_content-item")
            .on("enter", el => {
                el.classList.remove("is-hidden")
            })
    }, 500);

    setTimeout(() => {
        // Slide in sidebar
        // document.getElementsByClassName("sidebar")[0].classList.add("reveal");
        // Reveal section titles
        window.inView(".section_title")
            .on("enter", el => {
                el.classList.remove("is-hidden")
            })
        // Reveal sidebar divs
        window.inView(".sidebar_section")
            .on("enter", el => {
                el.classList.remove("is-hidden")
            })
    }, 250);
})();