document.getElementById("insertTOP").innerHTML = `
<div id="disclaimer"></div>
<div id="header"></div>
<div id="navbar"></div>
<div id="statusHeader" class="body-redX" style="user-select: none; -webkit-user-select: none;"></div>
`
document.getElementById("navbar").innerHTML = `
<div id="header-links">
    <a href="../index.html"><div style="padding-left:10px; padding-right:10px">Home</div></a>
    <a href="../about"><div style="padding-left:10px; padding-right:10px">About</div></a>
    <a href="../vote"><div style="padding-left:10px; padding-right:10px">Voting</div></a>
</div>
`;
/*
To be added into the navbar
<div style="padding-left:10px; padding-right:10px">News & Legislation</div>
<div style="padding-left:10px; padding-right:10px">Parliament</div>
<div style="padding-left:10px; padding-right:10px">Committees & Divisions</div>

*/

fetch("https://raw.githubusercontent.com/hcgov/vote/main/data.json").then(
    response => response.json()
).then(data => {
    let now = new Date().getTime();
    let electionStart = data["electionStart"];
    let electionEnd = data["electionEnd"];
    let electionCycle = new Date(data["electionCycle"]);
    document.getElementById("election-cycle").innerText = electionCycle.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    })
    if(now > electionEnd || now < electionStart){
        document.getElementById("vote-status").innerText = "currently closed";
        document.getElementById("vote-subtext").innerHTML = "<h3>Ballots are currently being counted by HCEC or already finalized.</h3><a href='https://hackclub.enterprise.slack.com/archives/C08FA68NV2T' target='_blank'><button>Join #parliament</button></a>"
    }else{
        document.getElementById("vote-status").innerText = "currently open";
        document.getElementById("vote-subtext").innerHTML = "<h3>Get your Voter ID here:</h3><a href='https://voterid.hcgov.uk' target='_blank'><button>voterid.hcgov.uk – Voter ID</button></a><h3>and then submit your ballot online here:</h3><a href='https://vote.hcgov.uk' target='_blank'><button>vote.hcgov.uk – eBallot</button></a>"
    }
});

document.getElementById("header").innerHTML = `
<!--<img src="parliament-full.svg" id="logo">-->
<img src="../querr.svg" id="logo">
`
document.getElementById("logo").onclick = function() {
    window.location.href="index.html";
}
document.getElementById("disclaimer").innerHTML = `
    <h3>The Parliament of Hack Club and other associated entities are not associated with <a href="https://hackclub.com" target="_blank">the Hack Foundation (d.b.a. Hack Club) 501(c)(3) nonprofit organization</a>.
`