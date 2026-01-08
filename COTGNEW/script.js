//DO NOT UPLOAD WITH THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const API_KEY = "674d38a8-13e0-4b7d-9397-228c150a3cd0";

const nbaBtn = document.getElementById("nbaButton");

const today = new Date().toLocaleDateString('en-CA');
//() => means it doesn't do anything until whatever is in the curly brackets happens
if(nbaBtn)
{
    nbaBtn.addEventListener("click", () => 
    {
        const url = `https://api.balldontlie.io/nba/v1/games?dates[]=${today}`;
        fetch(url, {headers: {"Authorization": API_KEY}}) //header means that it gives the api my key
        .then(res => {if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();}) // res is the returned, then it turns res into a js object. res means response, and it is the response info. does not need ; because it is continuous 
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
            //gets the output element from the document its being used on. then, takes the text output, and takes the stuff stored in the data JSON and makes it into readable text. null means no custom formatting, 2 means indentation by 2 spaces for readability
        })
        .catch(err => {
            output.textContent = "Error: " + err.message;
            console.error(err);
        });
    });
}
else{
    console.log("nba button doesnt exist");
}
