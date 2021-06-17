/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generateCard() {
  //write your code here
  function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber === 11) return "J";
    else if (randomNumber === 12) return "Q";
    else if (randomNumber === 13) return "K";
    else if (randomNumber === 1) return "A";
    else if (randomNumber === 0) return "A";
    else return randomNumber;
  }
  function fillerSelector() {
    let randomNumberSet = Math.floor(Math.random() * 4 + 1);
    if (randomNumberSet === 1) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
    } else if (randomNumberSet === 2) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="spade">♠</t><n class="numberB">${randomNumber()}</n><t class="spade2">♠</t></div>`);
    } else if (randomNumberSet === 3) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="diamond">♦</t><n class="numberR">${randomNumber()}</n><t class="diamond2">♦</t></div>`);
    } else if (randomNumberSet === 4)
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="club">♣</t><n class="numberB">${randomNumber()}</n><t class="club2">♣</t></div>`);
    else
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
  }

  return fillerSelector();
};

window.onclick = function() {
  function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber === 11) return "J";
    else if (randomNumber === 12) return "Q";
    else if (randomNumber === 13) return "K";
    else if (randomNumber === 1) return "A";
    else if (randomNumber === 0) return "A";
    else return randomNumber;
  }
  function fillerSelector() {
    let randomNumberSet = Math.floor(Math.random() * 4 + 1);
    if (randomNumberSet === 1) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
    } else if (randomNumberSet === 2) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="spade">♠</t><n class="numberB">${randomNumber()}</n><t class="spade2">♠</t></div>`);
    } else if (randomNumberSet === 3) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="diamond">♦</t><n class="numberR">${randomNumber()}</n><t class="diamond2">♦</t></div>`);
    } else if (randomNumberSet === 4)
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="club">♣</t><n class="numberB">${randomNumber()}</n><t class="club2">♣</t></div>`);
    else
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
  }

  return fillerSelector();
};

setInterval(function() {
  let element = document.querySelector(".fullCard");
  return element.parentNode.removeChild(element);
}, 9999);

setInterval(function() {
  function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber === 11) return "J";
    else if (randomNumber === 12) return "Q";
    else if (randomNumber === 13) return "K";
    else if (randomNumber === 1) return "A";
    else if (randomNumber === 0) return "A";
    else return randomNumber;
  }
  function fillerSelector() {
    let randomNumberSet = Math.floor(Math.random() * 4 + 1);
    if (randomNumberSet === 1) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
    } else if (randomNumberSet === 2) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="spade">♠</t><n class="numberB">${randomNumber()}</n><t class="spade2">♠</t></div>`);
    } else if (randomNumberSet === 3) {
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="diamond">♦</t><n class="numberR">${randomNumber()}</n><t class="diamond2">♦</t></div>`);
    } else if (randomNumberSet === 4)
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="club">♣</t><n class="numberB">${randomNumber()}</n><t class="club2">♣</t></div>`);
    else
      return (document
        .querySelector(".card")
        .appendChild(
          document.createElement("div")
        ).innerHTML = `<div class="fullCard"><t class="heart">♥</t><n class="numberR">${randomNumber()}</n><t class="heart2">♥</t></div>`);
  }

  return fillerSelector();
}, 10000);
