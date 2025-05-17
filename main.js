document.getElementById("insertTOP").innerHTML = `
<div id="disclaimer"></div>
<div id="header"></div>
<div id="navbar"></div>
`
document.getElementById("navbar").innerHTML = `
<div id="header-links">
    <a href="index.html"><div style="padding-left:10px; padding-right:10px">Home</div></a>
    <a href="about.html"><div style="padding-left:10px; padding-right:10px">About</div></a>
    <a href="404.html"><div style="padding-left:10px; padding-right:10px">Voting</div></a>
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
<img src="parliament-full.svg" id="logo">
`
document.getElementById("logo").onclick = function() {
    window.location.href="index.html";
}
document.getElementById("disclaimer").innerHTML = `
    <h3>The Parliament of Hack Club and other associated entities are not associated with the Hack Club non-profit organization
`
setInterval(() => {
    if(1747440000 - Date.now()/1000 >= 0) {
        document.getElementById("ballot-countdown").innerHTML = `${Math.floor(Math.round(1747440000 - Date.now() / 1000) / 3600)}:${(Math.floor((Math.round(1747440000 - Date.now() / 1000) / 60)) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}:${(Math.floor(Math.round(1747440000 - Date.now() / 1000)) % 60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`;
    }else{
        document.getElementById("ballot-banner-title").innerHTML = `Time until the May 2025 ballot closes:`
        document.getElementById("ballot-countdown").innerHTML = `${(Math.floor(Math.round(1748217600 - Date.now() / 1000)/86400))}:${(Math.floor(Math.round(1748217600 - Date.now() / 1000)/3600)%24).toLocaleString(undefined,{minimumIntegerDigits:2})}:${Math.floor((Math.round(1748217600 - Date.now() / 1000)/60)%60).toLocaleString(undefined, {minimumIntegerDigits: 2})}:${(Math.floor(Math.round(1748217600 - Date.now() / 1000))%60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`;
    }
}, 1000);