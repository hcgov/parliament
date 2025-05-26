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
    }else if(Date.now()/1000 < 1748217600){
        document.getElementById("ballot-banner-title").innerHTML = `Time until the May 2025 ballot closes:`
        document.getElementById("ballot-countdown").innerHTML = `${(Math.floor(Math.round(1748217600 - Date.now() / 1000)/86400))}:${(Math.floor(Math.round(1748217600 - Date.now() / 1000)/3600)%24).toLocaleString(undefined,{minimumIntegerDigits:2})}:${Math.floor((Math.round(1748217600 - Date.now() / 1000)/60)%60).toLocaleString(undefined, {minimumIntegerDigits: 2})}:${(Math.floor(Math.round(1748217600 - Date.now() / 1000))%60).toLocaleString(undefined, {minimumIntegerDigits: 2})}`;
    }else{
        document.getElementById("ballot-banner-title").innerHTML = "All votes have been counted. Negotiations between parties on coalitions are ongoing.";
        document.getElementById("ballot-countdown").innerHTML = "The May 2025 Ballot has closed. Thank you.";
        document.getElementById("castYourVote").style.display = "none";
    }
}, 1000);

//tabs

function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



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
        cutout: '60%',
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
    new Chart(document.getElementById('myChart'), config);

// Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
});

loadParliamentData(() => {
    const values = parliamentData[1].c.map(cell => cell?.v || 0);
    const data = {
        labels: ['HCP', 'hUWUp', 'HGP', 'WME', 'HDP', 'HCRP', ':3', 'HCLP', '[I] Advait', '[I] NonsensicalGibberish', '[I] Loop', '[I] Ryan'],
        datasets: [{
            label: 'Seat share',
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
            rotation: 90
        }]
    };

// config
    const config = {
        type: 'bar',
        data: data,
        skipNull: true,
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

// render init block
    new Chart(document.getElementById('chart2'), config);

// Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
});

let pmData;
function loadPmData(callback) {
    fetch("https://docs.google.com/spreadsheets/d/1pE3ybRHT9OTXH0o7lwCi6naxziO3bm7P2V3d6SPiLzs/gviz/tq?tqx=out:json&gid=504311244")
        .then(res => res.text())
        .then(text => {
            const json = JSON.parse(text.substring(47).slice(0, -2));
            pmData = json.table.rows;
            callback();
        });
}

loadPmData(() => {
    const values = pmData[1].c.map(cell => cell?.v || 0);
    const data = {
        labels: ['Manan Sharma (HCP)', 'Souptik Samanta (HCP)', 'Lynn (hUWUp)', 'Firepup Sixfifty (HGP)', 'Lucas (WME)', 'Manni Reis (HDP)', 'Navdeep Singh (HCRP)', 'Emma (:3)', 'Samannoy Bhattacharjee (HCLP)', 'Advait Contractor (Independent)', 'NonsensicalGibberish (Independent)', 'Loop (Independent)', 'Ryan (Independent)'],
        datasets: [{
            label: 'Vote share',
            data: values,
            backgroundColor: [
                '#ff0000',
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
                '#ffffff',
                '#000000',
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
            rotation: 90
        }]
    };

// config
    const config = {
        type: 'bar',
        data: data,
        skipNull: true,
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

// render init block
    new Chart(document.getElementById('chartPm'), config);

// Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
});

let AttData;
function loadAttData(callback) {
    fetch("https://docs.google.com/spreadsheets/d/1pE3ybRHT9OTXH0o7lwCi6naxziO3bm7P2V3d6SPiLzs/gviz/tq?tqx=out:json&gid=1354773593")
        .then(res => res.text())
        .then(text => {
            const json = JSON.parse(text.substring(47).slice(0, -2));
            AttData = json.table.rows;
            callback();
        });
}

loadAttData(() => {
    const values = AttData[1].c.map(cell => cell?.v || 0);
    const data = {
        labels: ['Lynn', 'Navdeep Singh'],
        datasets: [{
            label: 'Vote share',
            data: values,
            backgroundColor: [
                '#FF91AF',
                '#9585EE',
            ],
            borderColor: [
                '#FF91AF',
                '#9585EE',
            ],
            borderWidth: 5,
            rotation: 90
        }]
    };

// config
    const config = {
        type: 'bar',
        data: data,
        skipNull: true,
        options: {
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

// render init block
    new Chart(document.getElementById('chartAtt'), config);

// Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;
});