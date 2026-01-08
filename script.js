// This function runs automatically when the page loads
window.onload = function() {
    loadNBAGames();
};

function loadNBAGames() {
    // Fetch from your local JSON file
    fetch("./nba_data.json")
        .then(res => {
            if (!res.ok) throw new Error("Data not found");
            return res.json();
        })
        .then(data => {
            const container = document.querySelector(".gamesFormat");
            if (!container) return;

            container.innerHTML = ""; // Clear the empty container

            data.games.forEach(game => {
                // 1. Create the card container
                const card = document.createElement("div");
                card.className = "gameCardUI";

                let gameDate = new Date(game.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'UTC' // Forces the browser to show the date the API intended
                });
                
                // 2. Insert 3 divs to fill the 3 grid columns defined in style.css
                // We add justify-self: center to mimic your 'sport' placeholder alignment
                card.innerHTML = `
                    <div style="justify-self: center;">${game.visitor}</div>
                    <div style="text-align: center;">
                        <div style="font-weight: bold;">${game.time}</div>
                        <div style="font-size: 0.7em; color: #aaa;">${gameDate}</div>
                    </div>
                    <div style="justify-self: center;">${game.home}</div>
                `;

                // 3. Add the finished card to the page
                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading games:", err));
}
