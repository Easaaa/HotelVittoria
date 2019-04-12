// DROP DOWN MENU

$(".dropdown-selection").click(function() {
  $(this)
    .attr("tabindex", 1)
    .focus();
  $(this).toggleClass("active");
  $(this)
    .find(".dropdown-menu-selection")
    .slideToggle(300);
});
$(".dropdown-selection").focusout(function() {
  $(this).removeClass("active");
  $(this)
    .find(".dropdown-menu-selection")
    .slideUp(300);
});
$(".dropdown-selection .dropdown-menu-selection li").click(function() {
  $(this)
    .parents(".dropdown-selection")
    .find("span")
    .text($(this).text());
  $(this)
    .parents(".dropdown-selection")
    .find("input")
    .attr("value", $(this).attr("id"));
});

// INPUT

const input = document.querySelectorAll("input");
const inputSeason = input[0];
const inputPerson = input[1];
const inputView = input[2];

// RESULT FORM

const imgResult = document.querySelector(".dinamic-img");
const roomFor = document.querySelector(".number");
const price = document.querySelector(".price");
const viewWord = document.querySelector(".view-word");

const loader = document.getElementById("loading");

//Listen for submit

document.getElementById("search-form").addEventListener("submit", searchOn);

function searchOn(e) {
  e.preventDefault();
  document.querySelector(".results").style.visibility = "hidden";
  loader.style.display = "block";
  setInterval(function() {
    loader.style.display = "none";
    if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "single" &&
      inputView.value === "lake-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "double" &&
      inputView.value === "lake-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index2.png");
      roomFor.textContent = "2";
      price.textContent = "€ 100";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "lake-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index2.png");
      roomFor.textContent = "3";
      price.textContent = "€ 130";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "lake-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "single" &&
      inputView.value === "garden-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "double" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "2";
      price.textContent = "€ 96";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "3";
      price.textContent = "€ 125";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "4";
      price.textContent = "€ 160";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "single" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "1";
      price.textContent = "€ 50";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "double" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "2";
      price.textContent = "€ 96";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "3";
      price.textContent = "€ 110";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "high-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "mountain-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "single" &&
      inputView.value === "lake-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index2.png");
      roomFor.textContent = "1";
      price.textContent = "€ 76.50";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "double" &&
      inputView.value === "lake-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index2.png");
      roomFor.textContent = "2";
      price.textContent = "€ 90";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "lake-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index2.png");
      roomFor.textContent = "3";
      price.textContent = "€ 120";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "lake-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "single" &&
      inputView.value === "garden-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "double" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "2";
      price.textContent = "€ 88";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "3";
      price.textContent = "€ 115";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "garden-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index.jpg");
      viewWord.textContent = "garden";
      roomFor.textContent = "4";
      price.textContent = "€ 140";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "single" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "1";
      price.textContent = "€ 45";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "double" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "2";
      price.textContent = "€ 86";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "triple" &&
      inputView.value === "mountain-view"
    ) {
      imgResult.setAttribute("src", "../images/rooms-index1.jpg");
      viewWord.textContent = "internal";
      roomFor.textContent = "3";
      price.textContent = "€ 100";
      document.querySelector(".results").style.visibility = "visible";
      e.preventDefault();
    } else if (
      inputSeason.value === "low-season" &&
      inputPerson.value === "quadruple" &&
      inputView.value === "mountain-view"
    ) {
      window.alert("Sorry this rooms is not available.");
    }
  }, 3000);
}
