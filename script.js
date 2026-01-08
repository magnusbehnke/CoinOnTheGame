const nbaBtn = document.getElementById("nbaButton");

if(nbaBtn) {
    nbaBtn.addEventListener("click", () => {
        fetch("./nba_data.json")
        .then(res => res.json())
        .then(data => {
            const tailoredGames = data.data.map(game => {
                return {
                    date: game.date,
                    startTime: game.status,
                    homeTeam: game.home_team.full_name,
                    visitorTeam: game.visitor_team.full_name
                };
            });
    
            let outputText = "";
            tailoredGames.forEach(game => {
                outputText += `${game.date} @ ${game.startTime}: ${game.visitorTeam} vs ${game.homeTeam}\n`;
            });
    
            document.getElementById("output").textContent = outputText || "No games today.";
        })
        .catch(err => {
            document.getElementById("output").textContent = "Error: " + err.message;
        });
    });
}

