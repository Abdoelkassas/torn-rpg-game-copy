
"use strict";
//nerve system
let nerve = 10;
let maxNerve = 31;
let spendNumNrv = 2;
let nerveBar = document.querySelector(".nrv");
let nrvNum = document.querySelector(".nrvNum");
let spendEleNrv = document.querySelector(".nrvSpend");
let nrvTime = 1000;

function main(thing, maxThing, bar, thingNum, sn, se, t, name) {
  // Helpers Functions
  let getThing = () => localStorage.getItem(`${name}`);
  let setThing = () => localStorage.setItem(`${name}`, thing);

  // Main Code
  if (getThing()) thing = +getThing();

  se.onclick = () => {
    if (getThing()) {
      thing = +getThing();
      if (thing >= sn) {
        thing -= sn;
        setThing();
        sec();
      }
      if (thing + sn == maxThing) main(thing, maxThing, bar, thingNum, sn, se, t, name);
    }
  };

  function sec() {
    thingNum.innerHTML = `${name}: ${+thing} / ${maxThing} `;
    bar.style.cssText = `width: ${(+thing / maxThing) * 100}%; background: ${bar.dataset.color}; `;

  }
  sec();

  if (+thing < maxThing)
    setTimeout(() => {
      thing += 1;
      setThing();
      main(thing, maxThing, bar, thingNum, sn, se, t, name);
    }, t);
}



main(nerve, maxNerve, nerveBar, nrvNum, spendNumNrv, spendEleNrv, nrvTime, "nerve");



//energy system
let energy = 10;
let maxEnergy = 100;
let energyBar = document.querySelector(".energy");
let energyNum = document.querySelector(".energyNum");
let spendEleEnergy = document.querySelector(".energySpend");
let spendNumEnergy = 25;
let energyTime = 2000;

main(energy, maxEnergy, energyBar, energyNum, spendNumEnergy, spendEleEnergy, energyTime, "energy");



let happiness = 10;
let maxhappiness = 300;
let happinessBar = document.querySelector(".happiness");
let happinessNum = document.querySelector(".happyNum");
let spendElehappiness = document.querySelector(".happySpend");
let spendNumhappiness = 15;
let happinessTime = 2000;

main(happiness, maxhappiness, happinessBar, happinessNum, spendNumhappiness, spendElehappiness, happinessTime, "happy");



//life system
let life = 10;
let maxlife = 300;
let lifeBar = document.querySelector(".life");
let lifeNum = document.querySelector(".lifeNum");
let spendElelife = document.querySelector(".lifeSpend");
let spendNumlife = 15;
let lifeTime = 30;

main(life, maxlife, lifeBar, lifeNum, spendNumlife, spendElelife, lifeTime, "life");



document.querySelectorAll("r").forEach((e) => {
  e.style = ` outline:solid 1px ${e.previousElementSibling.dataset.color}; `
})


// selecting li from menu {localStorage}


document.querySelectorAll(".menu nav ul li").forEach((e) => e.setAttribute("data-select", `${e.innerText}`))
let selectedElement = document.querySelector(`[data-select="${localStorage.getItem("selected")}"]`);
if (localStorage.getItem("selected")) {
  selectedElement.classList.add("selected")
}
document.querySelectorAll(".menu nav ul li a").forEach((a) => {
  a.setAttribute("href", `#${a.innerText}`)
})
document.querySelectorAll(".menu nav ul li").forEach((e) => {
  e.onclick = function () {
    document.querySelectorAll(".menu nav ul li").forEach((el) => {
      el.classList.remove("selected");
    })
    localStorage.setItem("selected", `${event.currentTarget.dataset.select}`)
    event.currentTarget.classList.add("selected")
  }
})


// selecting from account

document.querySelectorAll(".account div").forEach((e) => e.setAttribute("data-select", `${e.className}`))
let selectedElementAC = document.querySelector(`[data-select="${localStorage.getItem("selectedAccount")}"]`);
if (localStorage.getItem("selectedAccount")) {
  selectedElementAC.classList.add("selectedAccount")
}

document.querySelectorAll(".account div").forEach((e) => {
  e.onclick = function () {
    document.querySelectorAll(".account div").forEach((el) => {
      el.classList.remove("selectedAccount");
    })
    localStorage.setItem("selectedAccount", `${event.currentTarget.dataset.select}`)
    event.currentTarget.classList.add("selectedAccount")
  }
})






// responsive

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelectorAll(".menu li a").forEach((e) => {
      e.style = "opacity:0"
      e.parentElement.style.cssText = "display: inline-flex; border-radius:10px;"
    })


  } else {
    document.querySelectorAll(".menu li a").forEach((e) => {
      e.style = ""
      e.parentElement.style.cssText = ""
    })
  }
}

var x = window.matchMedia("(max-width: 991px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 

x.onchange = myFunction(x)






