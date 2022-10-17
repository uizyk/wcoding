let resultContainer = document.querySelector("#results");
let input = document.querySelector("input");
let selectedIndex = -1;
const API_KEY = "su8Anhx4cD738xNuC50J813NVqgIM84roIrfNHKcbAfOHlG50xS6L72XDf9kYM81";

// https://www.zipcodeapi.com/rest/${API_KEY}/city-zips.json/${city}/${state}

// console.log(resultContainer);


input.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") return;
  if (e.key === 'Enter') {
    let city = input.value.slice(0, -5);
    city.toLowerCase;
    console.log(city);
    let state = input.value.slice (-2);
    state.toLowerCase;
    console.log(state);
    // do your ajax request
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `http://192.168.2.105/sites/autocomplete/proxy.php?url=https://www.zipcodeapi.com/rest/${API_KEY}/city-zips.json/${city}/${state}`);
      xhr.addEventListener("readystatechange", function() {
        if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
          console.log(xhr.responseText);
          let zip = JSON.parse(xhr.responseText);
          for(let i = 0; i<zip.length; i++){
            let div = document.createElement('div');
            div.textContent = zip[i];
            
            resultContainer.appendChild(div);
          }
        }
      });
      xhr.send(null);
      return;
  }
  selectedIndex = -1;
  let value = input.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `search.php?value=${value}`);
  // xhr.open("GET", `https://www.zipcodeapi.com/rest/${API_KEY}/city-zips.json/albany/NY`);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE) {

      //   console.log(xhr.responseText);

      results.innerHTML = "";
      let newArr = xhr.responseText.split("|");
      for (i = 0; i < newArr.length; i++) {
        let div = document.createElement("div");
        div.textContent = newArr[i];
        results.appendChild(div);

        // add mouse events
        div.addEventListener("click", function () {
          input.value = div.textContent;
        });
      }
    }
  }); 

  xhr.send(null);
});

input.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
    let divs = document.querySelectorAll("#results > div");
    if (e.key === "ArrowDown" && selectedIndex < divs.length - 1) {
      selectedIndex++;
      //   divs[selectedIndex].className = "selected";
    } else if (e.key === "ArrowUp" && selectedIndex > -1) {
      selectedIndex--;
    } else if (e.key === "Enter") {
      input.value = divs[selectedIndex].textContent;
    }

    divs.forEach((div, index) => {
      if (index === selectedIndex) {
        div.className = "selected";
      } else {
        div.className = "";
      }
    });
    console.log(selectedIndex);
  }

});

