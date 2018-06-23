(function () {
    window.inView.threshold(0.3);

    // Reveal main divs
    window.inView('.main__content-item')
        .on('enter', el => {
            el.classList.remove("is-hidden")
        })

    // Reveal sidebar divs
    window.inView('.sidebar__section')
        .on('enter', el => {
            el.classList.remove("is-hidden")
        })
})();