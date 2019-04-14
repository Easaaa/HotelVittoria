// INPUT
const input = document.querySelectorAll("input");
const highOption = input[0].id;
const lowOption = input[1].id;
const singleOption = input[2].id;
const doubleOption = input[3].id;
const tripleOption = input[4].id;
const quadrupleOption = input[5].id;
const lakeOption = input[6].id;
const gardenOption = input[7].id;
const mountainOption = input[8].id;

// RESULTS VARIABLE
const img = document.querySelector(".dinamic-img");
const numberPeople = document.querySelector(".number");
const price = document.querySelector(".price");
const viewWord = document.querySelector(".view-word");
const results_div = document.querySelector(".results");

const loader_id = document.getElementById("loading");

// FEEDBACK MSG
const error_id = document.getElementById("error");

/* // HIDE ALL
function cleanAll() {
  error_id.style.display = "none";
  results_div.style.visibility = "hidden";
  loader_id.style.display = "none";
}

// FUNCTION SHOW LOADING
function loading() {
  loader_id.style.display = "block";
}

// HIDE FEEDBACK SHOW ERROR
function feedToError() {
  loader_id.style.display = "none";
  error_id.style.display = "block";
} */

// LISTEN FOR SUBMIT
document.getElementById("search-btn").addEventListener("click", showRooms);

/* document.getElementById("reset-btn").addEventListener("click", resetPage); */

// FUNCTION SUBMIT
function showRooms(e) {
  e.preventDefault();
  /* cleanAll(); */
  /* loading(); */
  if (
    highOption &&
    singleOption &&
    lakeOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  }
  if (
    highOption &&
    doubleOption &&
    lakeOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "2";
    price.textContent = "€ 100";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    tripleOption &&
    lakeOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "3";
    price.textContent = "€ 130";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    quadrupleOption &&
    lakeOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  } else if (
    highOption &&
    singleOption &&
    gardenOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  } else if (
    highOption &&
    doubleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "2";
    price.textContent = "€ 96";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    tripleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "3";
    price.textContent = "€ 125";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    quadrupleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "4";
    price.textContent = "€ 160";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    singleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "1";
    price.textContent = "€ 50";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    doubleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "2";
    price.textContent = "€ 96";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    tripleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "3";
    price.textContent = "€ 110";
    results_div.style.visibility = "visible";
  } else if (
    highOption &&
    quadrupleOption &&
    mountainOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  } else if (
    lowOption &&
    singleOption &&
    lakeOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "1";
    price.textContent = "€ 76.50";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    doubleOption &&
    lakeOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "2";
    price.textContent = "€ 90";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    tripleOption &&
    lakeOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index2.png");
    numberPeople.textContent = "3";
    price.textContent = "€ 120";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    quadrupleOption &&
    lakeOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  } else if (
    lowOption &&
    singleOption &&
    gardenOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
      location.reload();
    }, 3000);
  } else if (
    lowOption &&
    doubleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "2";
    price.textContent = "€ 88";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    tripleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "3";
    price.textContent = "€ 115";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    quadrupleOption &&
    gardenOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index.jpg");
    viewWord.textContent = "giardino";
    numberPeople.textContent = "4";
    price.textContent = "€ 140";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    singleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "1";
    price.textContent = "€ 45";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    doubleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "2";
    price.textContent = "€ 86";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    tripleOption &&
    mountainOption
  ) {
    /* cleanAll(); */
    img.setAttribute("src", "../images/rooms-index1.jpg");
    viewWord.textContent = "montagna";
    numberPeople.textContent = "3";
    price.textContent = "€ 100";
    results_div.style.visibility = "visible";
  } else if (
    lowOption &&
    quadrupleOption &&
    mountainOption
  ) {
    /* feedToError(); */
    setInterval(function () {
      error_id.style.display = "none";
    }, 3000);
  }
}