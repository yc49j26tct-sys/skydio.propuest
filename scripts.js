document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade");

    const showOnScroll = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});