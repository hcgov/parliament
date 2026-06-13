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