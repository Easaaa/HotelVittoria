// INPUT
const input = document.querySelectorAll("input");
const highOption = input[0];
const lowOption = input[1];
const singleOption = input[2];
const doubleOption = input[3];
const tripleOption = input[4];
const quadrupleOption = input[5];
const lakeOption = input[6];
const gardenOption = input[7];
const mountainOption = input[8];

// RESULTS VARIABLE
const img = document.querySelector(".dinamic-img");
const numberPeople = document.querySelector(".number");
const price = document.querySelector(".price");
const viewWord = document.querySelector(".view-word");
const results_div = document.querySelector(".results");

const loader_id = document.getElementById("loading");

// FEEDBACK MSG
const error_id = document.getElementById("error");

// HIDE ALL
function cleanAll() {
  error_id.style.display = "none";
  loader_id.style.display = "none";
}

// FUNCTION SHOW LOADING
/* function loading() {
  loader_id.style.display = "block";
} */

// HIDE FEEDBACK SHOW ERROR
function feedToError() {
  loader_id.style.display = "none";
  error_id.style.display = "block";
}

function disableForm() {
  document.getElementById('form').style.display = "none";
  document.getElementById('reset-btn').style.display = "block";
}

function activeForm() {
  document.getElementById('form').style.display = "block";
  document.getElementById('reset-btn').style.display = "none";
  results_div.style.visibility = "hidden";
  error_id.style.display = "none";
}

// LISTEN FOR SUBMIT
document.getElementById("search-btn").addEventListener("click", search);

document.getElementById("reset-btn").addEventListener("click", activeForm);

// FUNCTION SUBMIT
function search(e) {
  e.preventDefault();
  results_div.style.visibility = "hidden";
  cleanAll();
  logicRooms();
  disableForm();
}

// LOGIC DYNAMIC FORM 
function logicRooms() {
  cleanAll();
  if (
    highOption.checked === true &&
    singleOption.checked === true &&
    lakeOption.checked === true
  ) {
    feedToError();
  }
  if (
    highOption.checked === true &&
    doubleOption.checked === true &&
    lakeOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "2";
    price.textContent = "€ 100";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    tripleOption.checked === true &&
    lakeOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "3";
    price.textContent = "€ 130";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    quadrupleOption.checked === true &&
    lakeOption.checked === true
  ) {
    feedToError();
  } else if (
    highOption.checked === true &&
    singleOption.checked === true &&
    gardenOption.checked === true
  ) {
    feedToError();
  } else if (
    highOption.checked === true &&
    doubleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "2";
    price.textContent = "€ 96";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    tripleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "3";
    price.textContent = "€ 125";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    quadrupleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "4";
    price.textContent = "€ 160";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    singleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "1";
    price.textContent = "€ 50";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    doubleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "2";
    price.textContent = "€ 96";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    tripleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "3";
    price.textContent = "€ 110";
    results_div.style.visibility = "visible";
  } else if (
    highOption.checked === true &&
    quadrupleOption.checked === true &&
    mountainOption.checked === true
  ) {
    feedToError();
  } else if (
    lowOption.checked === true &&
    singleOption.checked === true &&
    lakeOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "1";
    price.textContent = "€ 76.50";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    doubleOption.checked === true &&
    lakeOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "2";
    price.textContent = "€ 90";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    tripleOption.checked === true &&
    lakeOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "3";
    price.textContent = "€ 120";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    quadrupleOption.checked === true &&
    lakeOption.checked === true
  ) {
    feedToError();
  } else if (
    lowOption.checked === true &&
    singleOption.checked === true &&
    gardenOption.checked === true
  ) {
    feedToError();
  } else if (
    lowOption.checked === true &&
    doubleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "2";
    price.textContent = "€ 88";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    tripleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "3";
    price.textContent = "€ 115";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    quadrupleOption.checked === true &&
    gardenOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "4";
    price.textContent = "€ 140";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    singleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "1";
    price.textContent = "€ 45";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    doubleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "2";
    price.textContent = "€ 86";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    tripleOption.checked === true &&
    mountainOption.checked === true
  ) {
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "3";
    price.textContent = "€ 100";
    results_div.style.visibility = "visible";
  } else if (
    lowOption.checked === true &&
    quadrupleOption.checked === true &&
    mountainOption.checked === true
  ) {
    feedToError();
  }
}