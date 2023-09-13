function numWithCommas(num) {
  let numParts = num.toString().split(".");
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numParts.join(".");
}

function displayData(data) {
  console.log(data[0].price_usd);
  const table = document.querySelector("tbody");
  table.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const coin = data[i];
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td class="left-align">${coin.rank}</td>
      <td class="left-align">${coin.name} <span class="symbol">${
      coin.symbol
    }</span></td>
      <td>$${numWithCommas(coin.price_usd)}</td>
      <td>${
        coin.percent_change_1h > 0
          ? '<span class="green">▲' + coin.percent_change_1h + "%</span>"
          : '<span class="red">▼' + coin.percent_change_1h + "%</span>"
      }</td>
      <td>${
        coin.percent_change_24h > 0
          ? '<span class="green">▲' + coin.percent_change_24h + "%</span>"
          : '<span class="red">▼' + coin.percent_change_24h + "%</span>"
      }</td>
      <td>${
        coin.percent_change_7d > 0
          ? '<span class="green">▲' + coin.percent_change_7d + "%</span>"
          : '<span class="red">▼' + coin.percent_change_7d + "%</span>"
      }</td>
      <td>$${numWithCommas(parseInt(coin.market_cap_usd))}</td>
      <td>$${numWithCommas(parseInt(coin.volume24))}</td>
      <td>${numWithCommas(parseInt(coin.csupply))} ${coin.symbol}</td>
    `;
    table.appendChild(newRow);
  }
}
