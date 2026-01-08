const nbaBtn = document.getElementById("nbaButton");

if(nbaBtn) {
    nbaBtn.addEventListener("click", () => {
        // CHANGE THIS LINE: Fetch the local file instead of the API
        fetch("./nba_data.json") 
        .then(res => {
            if (!res.ok) throw new Error("Could not find nba_data.json. Wait for the first automation run!");
            return res.json();
        })
        .then(data => {
            // This stays the same; it will show the data saved in that file
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("output").textContent = "Error: " + err.message;
            console.error(err);
        });
    });
}
