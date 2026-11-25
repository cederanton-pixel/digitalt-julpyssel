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

activities.forEach(activity => {

    const card = document.createElement("button");

    card.classList.add(
        "activity-card",
        activity.type
    );

    card.innerHTML = `
        <div class="card-icon">${activity.icon}</div>
        <h3>${activity.title}</h3>
        <span class="card-tag">
            ${activity.type}
        </span>
    `;

    grid.appendChild(card);

});
