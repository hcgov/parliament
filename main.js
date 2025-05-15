document.getElementById("insertTOP").innerHTML = `
<div id="disclaimer"></div>
<div id="header"></div>
<div id="navbar"></div>
`
document.getElementById("navbar").innerHTML = `
<div id="header-links">
    <a href="index.html"><div style="padding-left:10px; padding-right:10px">Home</div></a>
    <a href="about.html"><div style="padding-left:10px; padding-right:10px">About</div></a>
    <div style="padding-left:10px; padding-right:10px">News & Legislation</div>
    <div style="padding-left:10px; padding-right:10px">Parliament</div>
    <div style="padding-left:10px; padding-right:10px">Committees & Divisions</div>
    <div style="padding-left:10px; padding-right:10px">Voting</div>
</div>
`;
document.getElementById("header").innerHTML = `
<!--<img src="parliament-full.svg" id="logo">-->
<img src="parliament-full.svg" id="logo">
`
document.getElementById("logo").onclick = function() {
    window.location.href="index.html";
}
document.getElementById("disclaimer").innerHTML = `
    <h3>The Parliament of Hack Club and other associated entities are not associated with the Hack Club non-profit organization
`