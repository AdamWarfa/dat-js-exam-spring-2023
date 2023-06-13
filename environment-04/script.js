"use strict";
import { events } from "./data.js";
window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#create-event-form").addEventListener("submit", createEvent);
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
  filterList(events);
}

function filterList(events) {
  const filteredEvents = events.filter((a) => a.date.getMonth() === 5);
  console.log(filteredEvents);
}
