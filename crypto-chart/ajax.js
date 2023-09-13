function getPrices() {
  // documentation at https://www.coinlore.com/cryptocurrency-data-api
  const API_URL = `https://api.coinlore.net/api/tickers/`;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", API_URL);

  xhr.addEventListener("load", function (e) {
    if (e.target.status === 200) {
      displayData(JSON.parse(e.target.responseText).data);
    } else {
      alert("There was a problem with the request.");
    }
  });
  xhr.send(null);
}

getPrices();
setInterval(getPrices, 10000);
