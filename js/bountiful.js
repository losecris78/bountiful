//Date variables to get the las update and the actual date//
let date = new Date;
let year = date.getFullYear();
let dateFormat = new Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(date);
let day = date.getDay()


//Last modified function//
document.querySelector("#updated").textContent = `Updated: ${document.lastModified}`;
//Year display for copyright//

document.querySelector("#year1").innerText = year;