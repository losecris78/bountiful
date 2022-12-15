//------------------------variable definition--------------------//

const requestURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const cards = document.querySelector('.partners');
const golden= document.querySelector('#spot1');
let selectTion = document.querySelector('#fruit_selection');
const carb =
const protein = 
const fat =
 
async function getInfo(){
  let response = await fetch(requestURL);
  if (response.ok) {
      let members= await response.json();
      displayFruits(fruits)
  } else {
      throw Error(response.statusText);
  }
}
 
  function displayFruits(fruits) {
    fruits.fruits.forEach(fruit => {
      let basket = document.createElement('ul');
      let f1 = document.createElement('li');
      let f2 = document.createElement('li');
      let f3 = document.createElement('li');
      selectTion = document.createElement('option');
      /*let p = document.createElement('p');
      let portrait = document.createElement('img');
      h2.innerHTML = `${member.name}`;*/
      selectTion.setAttribute('value', fruit.name);
      selectTion.setAttribute('option',fruit.name);
      p.innerHTML=`Address: ${member.address}<br>
      ${member.url} <br> Phone: ${member.phone} <br>Membership type: ${member.color}<br>Business area: ${member.type}`;
      portrait.setAttribute('src', member.image);
      portrait.setAttribute('alt',member.name);
      portrait.setAttribute('loading', 'lazy');
      basket.appendChild(f1);
      basket.appendChild(f2);
      basket.appendChild(f3);
      cards.appendChild(card);

      });
  };
getInfo();
const gridbutton = document.querySelector("#complete");
const listbutton = document.querySelector("#simple");
const display = document.querySelector("section");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

//Toggle display//
/*function togglDisplay(){
	document.getElementById("gridbutton").classList.toggle("complete");
	document.getElementById("listbutton").classList.toggle("list");
}
let bread= document.getElementById("hamb_button");
bread.onclick= toggleMenu;
gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("partners");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("partners");
}*/

 