"use strict";
import { events } from "./data.js";
window.addEventListener("load", initApp);

const currentDate = new Date();

function initApp() {
  document.querySelector("#create-event-form").addEventListener("submit", createEvent);

  console.log(currentDate);
}

function createEvent(event) {
  event.preventDefault();
  const form = event.target;
  const title = form.title.value;
  const description = form.description.value;
  const date = new Date(form.date.value);

  const newEvent = {
    title,
    description,
    date,
  };
  events.push(newEvent);
  // filterList(events);
  console.log(date);

  let isFuture = date > currentDate;
  console.log(isFuture);
}

// function filterList(events) {
// const filteredEvents = events.filter((a) => a.date.getMonth() === 5);
//   console.log(filteredEvents);
// }
