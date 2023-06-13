"use strict";

let tickets;

window.addEventListener("load", initApp);

async function initApp() {
  tickets = await getTickets("tickets.json");
  addCounter(tickets);
  displayTickets(tickets);
}

async function getTickets(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function displayTickets(tickets) {
  document.querySelector("#tickets-list").innerHTML = "";
  for (const ticket of tickets) {
    displayTicket(ticket);
  }
  console.log(tickets);
}

function displayTicket(ticket) {
  document.querySelector("#tickets-list").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    
                    <article>
                    <h3>${ticket.eventName}</h3>
                    <p class="ticketid">id: ${ticket.id}</p>
                    <button>likes: ${ticket.counter}</button></button>
                </article>
    
    `
  );
  document.querySelector("article:last-child button").addEventListener("click", () => upvote(ticket));
}

function addCounter(tickets) {
  for (const ticket of tickets) {
    ticket.counter = 0;
  }
}

function upvote(ticket) {
  ticket.counter = ticket.counter + 1;
  console.log(ticket.counter);
  tickets.sort(sortByCounter).reverse();
  displayTickets(tickets);
}

function sortByCounter(a, b) {
  return a.counter - b.counter;
}
