fetch("https://raw.githubusercontent.com/hcgov/vote/main/data.json").then(
    response => response.json()
).then(data => {
    let now = new Date().getTime();
    let electionStart = data["electionStart"];
    let electionCycle = new Date(data["electionCycle"]).getTime();
    console.log(data);
    console.log(electionStart*1000);
    console.log(now);
    console.log(electionCycle);
});