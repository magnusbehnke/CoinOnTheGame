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

                // 1. Create a Date object from the UTC string
                const dateObj = new Date(game.date);

                // 2. Format the Date (e.g., "Jan 8")
                const cleanDate = dateObj.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                });

                // 3. Format the Time (e.g., "7:00 PM")
                // If game.time is a UTC string, this converts it to your local time.
                // If game.time is a string like "Final", it will just show "Final".
                let displayTime = game.time;
                if (game.time.includes('T') || !isNaN(Date.parse(game.time))) {
                    displayTime = new Date(game.time).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                    });
                }

                
                // 2. Build the card with 3 columns to match your CSS grid
                card.innerHTML = `
                    <div style="justify-self: center; padding: 10px;">${game.visitor}</div>
                    <div style="text-align: center;">
                        <div style="font-weight: bold;">${displayTime}</div>
                        <div style="font-size: 0.7em; color: #aaa;">${cleanDate}</div>
                    </div>
                    <div style="justify-self: center; padding: 10px;">${game.home}</div>
                `;

                // 3. Add the finished card to the page
                container.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading games:", err));
}

