
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
    thingNum.innerHTML = `${+thing} / ${maxThing} `;
    bar.style.cssText = `width: ${(+thing / maxThing) * 100}%; background: ${bar.dataset.color}`;
  }
  sec();

  if (+thing < maxThing)
    setTimeout(() => {
      thing += 1;
      setThing();
      main(thing, maxThing, bar, thingNum, sn, se, t, name);
    }, t);
}



main(nerve,maxNerve,nerveBar,nrvNum,spendNumNrv,spendEleNrv,nrvTime, "nerve");



//energy system
let energy = 10;
let maxEnergy = 100;
let energyBar = document.querySelector(".energy");
let energyNum = document.querySelector(".energyNum");
let spendEleEnergy = document.querySelector(".energySpend");
let spendNumEnergy = 25;
let energyTime = 2000;

main(energy,maxEnergy,energyBar,energyNum,spendNumEnergy,spendEleEnergy,energyTime, "energy");



let happiness = 10;
let maxhappiness = 300;
let happinessBar = document.querySelector(".happiness");
let happinessNum = document.querySelector(".happyNum");
let spendElehappiness = document.querySelector(".happySpend");
let spendNumhappiness = 15;
let happinessTime = 2000;

main(happiness,maxhappiness,happinessBar,happinessNum,spendNumhappiness,spendElehappiness,happinessTime, "happiness");


