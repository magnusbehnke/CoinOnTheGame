const nbaBtn = document.getElementById("nbaButton");

if(nbaBtn) {
    nbaBtn.addEventListener("click", () => {
        // Fetch the file that the Robot already cleaned up
        fetch("./nba_data.json")
            .then(res => {
                if (!res.ok) throw new Error("File not found. Run the Robot first!");
                return res.json();
            })
            .then(data => {
                let outputText = "";

                // We use data.games because that's what the jq script named the list
                data.games.forEach(game => {
                    outputText += `${game.time}: ${game.visitor} @ ${game.home}\n`;
                });
                
                document.getElementById("output").textContent = outputText || "No games scheduled for today.";
            })
            .catch(err => {
                document.getElementById("output").textContent = "Error: " + err.message;
                console.error(err);
            });
    });
}
