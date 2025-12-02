document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const day = today.getDate();

    document.querySelectorAll('.day').forEach(el => {
        const d = parseInt(el.dataset.day);

        if (d <= day) {
            el.classList.add("visible");
        }

        if (d === day) {
            el.classList.add("today");
        }
    });
});
