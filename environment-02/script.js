"use strict";
let athletes = [];
window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#create-athlete-form").addEventListener("submit", createAthlete);
}

function createAthlete(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const topSpeed = Number(form.topSpeed.value);

  const athlete = { name, topSpeed };
  athletes.push(athlete);
  filterFor50(athletes);
}

function sortTopThree() {
  athletes.sort(sortByTime);
  let topThree = athletes.slice(0, 3);
  console.log(topThree);
  displayTopThree(topThree);
}

function sortByTime(a, b) {
  return b.topSpeed - a.topSpeed;
}

function filterFor50(athletes) {
  for (const athlete of athletes) {
    if (athlete.topSpeed < 50) {
      athletes.pop(athlete);
    } else if (athlete.topSpeed > 60) {
      athletes.pop(athlete);
    }
  }
  console.log(athletes);
  sortTopThree();
}

function displayTopThree(list) {
  document.querySelector("#athletes-list").innerHTML = "";
  for (const athlete of list) {
    document.querySelector("#athletes-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
    <li>${athlete.name}: ${athlete.topSpeed}</li>
    
    
    `
    );
  }
}
