const nbaBtn = document.getElementById("nbaButton");

const nbaBtn = document.getElementById("nbaButton");

if(nbaBtn) {
    nbaBtn.addEventListener("click", () => {
        fetch("./nba_data.json")
            .then(res => res.json())
            .then(data => {
                // Since we tailored it, we just loop through the games
                let outputText = "";
                data.games.forEach(game => {
                    outputText += `${game.time}: ${game.visitor} @ ${game.home}\n`;
                });
                
                document.getElementById("output").textContent = outputText || "No games scheduled.";
            });
        .catch(err => {
            document.getElementById("output").textContent = "Error: " + err.message;
        });
    });
}


