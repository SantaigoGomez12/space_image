// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.nasa.gov/planetary';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

xhttp.open('GET', urlApi, true);
xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
        } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
        }
    }
    }
    xhttp.send();
}

function getDateFun() {

    let page1 = document.getElementById("main1");
    page1.className = "main11";
    let page2 = document.getElementById("main2");
    page2.className = "main22";

    indate = document.getElementById("getDate").value;

    let start_date = indate;
    let end_date = indate;

    fetchData(`${API}/apod?api_key=DEMO_KEY&start_date=${start_date}&end_date=${end_date}`, function (error1, data1) {
    if (error1) return console.error(error1);

    let imagen = data1[0].hdurl;
    const img = document.getElementById("img").src=`${imagen}`;

    let texto = data1[0].explanation;
    const txt = document.getElementById("content");
    txt.textContent = `${texto}`
});
}

function returnSave() {
    window.location.reload();
}

function returnInfo() {
    let info = document.getElementById("content");
    info.classList.toggle('api_info');
}
