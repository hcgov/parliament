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

//google sheets api my goat (i hate you)
let parliamentData;

function loadParliamentData(callback) {
    fetch("https://docs.google.com/spreadsheets/d/1pE3ybRHT9OTXH0o7lwCi6naxziO3bm7P2V3d6SPiLzs/gviz/tq?tqx=out:json")
        .then(res => res.text())
        .then(text => {
            const json = JSON.parse(text.substring(47).slice(0, -2));
            parliamentData = json.table.rows;
            callback();
        });
}

loadParliamentData(() => {
    console.log(parliamentData[1].c[1].v);
});

//chart js
loadParliamentData(() => {
    const values = parliamentData[1].c.map(cell => cell?.v || 0);
    const data = {
    labels: ['HCP', 'hUWUp', 'HGP', 'WME', 'HDP', 'HCRP', ':3', 'HCLP', '[I] Advait', '[I] NonsensicalGibberish', '[I] Loop', '[I] Ryan'],
    datasets: [{
        label: 'Vote share',
        data: values,
        backgroundColor: [
            '#ff0000',
            '#FF91AF',
            '#9268F6',
            '#00C4D6',
            '#FCEBFF',
            '#9585EE',
            '#FFC8D6',
            '#FCC624',
            '#777777',
            '#777777',
            '#777777',
            '#777777',
        ],
        borderColor: [
            '#ff0000',
            '#FF91AF',
            '#9268F6',
            '#00C4D6',
            '#FCEBFF',
            '#9585EE',
            '#FFC8D6',
            '#FCC624',
            '#EDE621',
            '#ffffff',
            '#00C4D6',
            '#FF91AF',
        ],
        borderWidth: 5,
        cutout: '40%',
        circumference: 180,
        rotation: -90
    }]
};

// config
    const config = {
        type: 'doughnut',
        data,
        options: {
            aspectRatio: 2,
        }
    };

// render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

// Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;})

