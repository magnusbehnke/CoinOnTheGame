// This function runs automatically when the page loads
window.onload = function() {
    loadNBAGames();
};

function loadNBAGames() {
    // Fetch from your local JSON file (no API key needed here!)
    fetch("./nba_data.json")
        .then(res => {
            if (!res.ok) throw new Error("Data not found");
            return res.json();
        })
        .then(data => {
            const container = document.querySelector(".gamesFormat");
            if (!container) return;

            container.innerHTML = ""; // Clear placeholders

            data.games.forEach(game => {
                const card = document.createElement("div");
                card.className = "gameCardUI";
                
                // Content mapped to your CSS grid
                card.innerHTML = `
                    <div class="team-name">${game.visitor}</div>
                    <div class="game-time">${game.time}</div>
                    <div class="team-name">${game.home}</div>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading games:", err));
}
