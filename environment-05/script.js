"use strict";
window.addEventListener("load", initApp);

let runners;

async function initApp() {
  runners = await getRunners("runners.json");
  console.log(runners);

  runners.sort(sortByTime);
  displayTopThree(runners);
  showRunnerUps(runners);
}

async function getRunners(url) {
  const res = await fetch(url);
  const data = res.json();
  return data;
}

function sortByTime(a, b) {
  return a.time - b.time;
}

function displayTopThree(runners) {
  document.querySelector("#silver-name").textContent = `${runners[1].name}`;
  document.querySelector("#silver-time").textContent = `${runners[1].time}`.slice(0, 5);

  document.querySelector("#gold-name").textContent = `${runners[0].name}`;
  document.querySelector("#gold-time").textContent = `${runners[0].time}`.slice(0, 5);

  document.querySelector("#bronze-name").textContent = `${runners[2].name}`;
  document.querySelector("#bronze-time").textContent = `${runners[2].time}`.slice(0, 5);
}

function showRunnerUps(runners) {
  const runnerUps = runners.slice(3, 10);

  for (const runnerUp of runnerUps) {
    let runnerTime = runnerUp.time.toString().slice(0, 5);
    document.querySelector("#runnerups-list").insertAdjacentHTML(
      "beforeend",
      /*HTML*/ `
    <li>${runnerUp.name} - ${runnerTime} </li>
    
    
    `
    );
  }
}
