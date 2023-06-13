"use strict";
window.addEventListener("load", initApp);
let memberList = [];
let zipCodes;
const zipBox = document.querySelector("#postnr");
async function initApp() {
  zipCodes = await getZip("postnumre.json");
  document.querySelector("#address-form").addEventListener("submit", createMember);
  zipBox.addEventListener("keyup", () => getCity(zipBox.value));
}

async function getZip(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function createMember(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.navn.value;
  const address = form.adresse.value;
  const zip = form.postnr.value;
  const city = form.by.value;
  const email = form.navn.value;
  const news = form.nyhedsbrev.checked;

  const newMember = { name, address, zip, city, email, news };
  memberList.push(newMember);
  console.log(memberList);
}

function getCity(zip) {
  const foundCity = zipCodes.find((a) => a.postnr == zip);
  if (zip.length === 4) {
    document.querySelector("#by").value = foundCity.by;
  }
}
