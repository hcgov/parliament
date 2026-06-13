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
        document.getElementById("vote-subtext").innerHTML = "<h3>Ballots are currently being counted by HCEC or already finalized.</h3><a href='https://hackclub.enterprise.slack.com/archives/C08FA68NV2T' target='_blank'><button><svg fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"slack\" viewBox=\"0 0 32 32\" preserveAspectRatio=\"xMidYMid meet\" fill=\"currentColor\" width=\"40\" height=\"40\"><path d=\"M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z\"/><path d=\"M13.867 8a1.605 1.605 0 0 0-1.48.988 1.594 1.594 0 0 0 .001 1.224 1.598 1.598 0 0 0 1.479.988h1.6V9.6a1.596 1.596 0 0 0-.988-1.478A1.604 1.604 0 0 0 13.867 8zm0 4.267H9.6a1.604 1.604 0 0 0-1.479.988 1.596 1.596 0 0 0 .347 1.742 1.601 1.601 0 0 0 1.132.47h4.267a1.605 1.605 0 0 0 1.478-.989A1.596 1.596 0 0 0 15 12.736a1.602 1.602 0 0 0-1.132-.47zM24 13.867a1.596 1.596 0 0 0-.987-1.478 1.605 1.605 0 0 0-1.745.347 1.597 1.597 0 0 0-.468 1.13v1.6h1.6a1.605 1.605 0 0 0 1.479-.988c.08-.194.121-.402.121-.611zm-4.267 0V9.6a1.594 1.594 0 0 0-.987-1.478 1.605 1.605 0 0 0-1.745.347 1.6 1.6 0 0 0-.468 1.131v4.267a1.596 1.596 0 0 0 .987 1.477 1.605 1.605 0 0 0 1.226 0 1.601 1.601 0 0 0 .987-1.477zM18.133 24a1.603 1.603 0 0 0 1.6-1.6 1.595 1.595 0 0 0-.987-1.478 1.605 1.605 0 0 0-.613-.122h-1.6v1.6a1.597 1.597 0 0 0 1.6 1.6zm0-4.267H22.4a1.605 1.605 0 0 0 1.479-.988 1.596 1.596 0 0 0-.347-1.742 1.6 1.6 0 0 0-1.132-.47h-4.267a1.605 1.605 0 0 0-1.478.989A1.596 1.596 0 0 0 17 19.264a1.602 1.602 0 0 0 1.132.47zM8 18.133a1.596 1.596 0 0 0 1.6 1.6 1.605 1.605 0 0 0 1.479-.988c.08-.194.121-.402.121-.612v-1.6H9.6a1.605 1.605 0 0 0-1.479.989c-.08.194-.121.402-.121.611zm4.267 0V22.4a1.595 1.595 0 0 0 .987 1.478 1.603 1.603 0 0 0 1.745-.347 1.6 1.6 0 0 0 .468-1.131v-4.266a1.597 1.597 0 0 0-1.6-1.6 1.603 1.603 0 0 0-1.6 1.6z\"/></svg>Join #parliament</button></a>"
    }else{
        document.getElementById("vote-status").innerText = "currently open";
        document.getElementById("vote-subtext").innerHTML = "<h3>Get your Voter ID here:</h3><a href='https://voterid.hcgov.uk' target='_blank'><button>voterid.hcgov.uk – Voter ID</button></a><h3>and then submit your ballot online here:</h3><a href='https://vote.hcgov.uk' target='_blank'><button><svg fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"external\" viewBox=\"0 0 32 32\" preserveAspectRatio=\"xMidYMid meet\" fill=\"currentColor\" width=\"40\" height=\"40\"><path d=\"M18.6696 18.2544C18.6196 18.8044 19.025 19.2908 19.575 19.3408C20.125 19.3908 20.6114 18.9855 20.6614 18.4355L20.6615 18.4338C21.0797 16.5772 21.0797 15.163 20.8286 12.6612C20.7628 12.2869 20.6485 11.9033 20.3726 11.6274C20.0967 11.3515 19.7131 11.2372 19.3387 11.1714C16.8371 10.9203 15.4229 10.9203 13.5651 11.3385C13.0263 11.4598 12.6092 11.875 12.6592 12.425C12.7092 12.975 13.1956 13.3804 13.7456 13.3304L13.9557 13.3114C15.4442 13.1765 16.3383 13.0955 17.4922 13.0936L17.4937 13.0951L12.053 18.5358C11.6625 18.9264 11.6625 19.5595 12.053 19.9501C12.4435 20.3406 13.0767 20.3406 13.4672 19.9501L18.9054 14.5119C18.9021 15.6445 18.8229 16.5339 18.6979 17.9365L18.6696 18.2544Z\"/><path d=\"M26 16C26 24 24 26 16 26C8 26 6 24 6 16C6 8 8 6 16 6C24 6 26 8 26 16ZM24 16C24 20.014 23.45 21.722 22.586 22.586C21.722 23.45 20.014 24 16 24C11.986 24 10.278 23.45 9.414 22.586C8.55 21.722 8 20.014 8 16C8 11.986 8.55 10.278 9.414 9.414C10.278 8.55 11.986 8 16 8C20.014 8 21.722 8.55 22.586 9.414C23.45 10.278 24 11.986 24 16Z\"/></svg>vote.hcgov.uk – eBallot</button></a>"
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