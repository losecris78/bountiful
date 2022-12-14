//Date variables to get the las update and the actual date//
let date = new Date;
let year = date.getFullYear();
let dateFormat = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(date);
let day = date.getDay()


//Last modified function//
document.querySelector("#updated").innerHTML = `Last Modified: ${document.lastModified}`;
//Year display for copyright//

document.querySelector("#year1").innerText = year;

// Weather api code//
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('#description');
const humidity = document.querySelector("#humidity");
const forecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=carlsbad&units=imperial&exclude=minutely,hourly&appid=87951c9b1071233f4e525b5a6cf8d68b';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();
  function  displayResults(weatherData) {
    currentTemp.innerHTML = `The weather today in Carlsbad is: <strong>${weatherData.main.temp.toFixed(0)} °F</strong>`;
    humidity.innerHTML=`Humidity: ${weatherData.main.humidity.toFixed(0)}%`;
    captionDesc.innerHTML= `${weatherData.weather[0].description}`;
    forecast.innerHTML= `${weatherData.weather[0].daily.temp.day}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    let upperDesc = captionDesc.toUpperCase();
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', captionDesc);
    captionDesc.textContent = upperDesc;
    imageUrl.innerHTML=`${icon}`;
  }