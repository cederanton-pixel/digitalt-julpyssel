const activities = [
    {
        id: 1,
        title: "Nissepussel",
        type: "game",
        icon: "🧩",
        content: "games/nisse-pussel.html"
    },
    {
        id: 2,
        title: "På Spåret - Gympasalen",
        type: "video",
        icon: "🎬",
        content: "videos/gympasalen.mp4"
    },
    {
        id: 3,
        title: "På Spåret - Matsalen",
        type: "video",
        icon: "🎬",
        content: "videos/matsalen.mp4"
    },
    {
        id: 4,
        title: "Julgåta",
        type: "reading",
        icon: "📖",
        content: `
            <h2>Julgåta</h2>
            <p>Jag har skägg men är ingen tomte. Vem är jag?</p>
        `
    },
    {
        id: 10,
        title: "Tomtens Julsäck",
        type: "game",
        category: "Julspel",
        icon: "🎅",
        content: "games/julsacken.html",
        description: "Fånga julklappar och polkagrisar men undvik kolbitar!"
    }
];

const grid = document.getElementById("activity-grid");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModalBtn = document.getElementById("closeModal");

activities.forEach(activity => {
    const card = document.createElement("button");
    card.classList.add("activity-card", activity.type);

    card.innerHTML = `
        <div class="card-icon">${activity.icon}</div>
        <h3>${activity.title}</h3>
        <span class="card-tag">${activity.type}</span>
    `;

    // NYTT: Lyssnare som aktiveras när man klickar på kortet
    card.addEventListener("click", () => {
        if (activity.type === "game" || activity.type === "video") {
            // Skicka användaren direkt till spelsidan eller videon
            window.location.href = activity.content;
        } else {
            // Öppna text och läsning i den inbyggda popup-rutan (modalen)
            modalBody.innerHTML = activity.content;
            modal.classList.remove("hidden");
        }
    });

    grid.appendChild(card);
});

// NYTT: Funktion för att stänga popup-rutan för text-aktiviteter
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}
