 // INPUT
 const input = document.querySelectorAll('input');
 const inputSeason = input[0];
 const inputPerson = input[1];
 const inputView = input[2];

// RESULTS VARIABLE
 const img = document.querySelector('.dinamic-img');
 const numberPeople = document.querySelector('.number');
 const price = document.querySelector('.price');
 const viewWord = document.querySelector('.view-word');
 const results_div = document.querySelector('.results');

const loader_id = document.getElementById('loading');
 
// FEEDBACK MSG
const feedback_id = document.getElementById('feedback'); 
const error_id = document.getElementById('error');
const para_a = document.createElement("a");             

// HIDE ALL 
function cleanAll() {
  feedback_id.style.display = "none";
  error_id.style.display = "none";
  results_div.style.visibility = "hidden";
  loader_id.style.display = 'none';
}

// FUNCTION SHOW LOADING
function loading() {
  loader_id.style.display = 'block';
  feedback_id.style.display = "block";
}

// HIDE FEEDBACK SHOW ERROR
function feedToError() {
  loader_id.style.display = 'none';
  feedback_id.style.display = "none";
  error_id.style.display = "block";
}

// LISTEN FOR SUBMIT
document.getElementById('show-btn').addEventListener('click', searchOn);

// FUNCTION SUBMIT
function searchOn(e) {
  e.preventDefault();
  cleanAll();
  loading();
  setInterval(function () {
    if ((inputSeason.value === 'high-season') && (inputPerson.value === 'single') && (inputView.value === 'lake-view')) {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     } 
    if ((inputSeason.value === 'high-season') && (inputPerson.value === 'double') && (inputView.value === 'lake-view')) {
      cleanAll();
      img.setAttribute('src', '../images/rooms-index2.png');
      numberPeople.textContent = '2';
      price.textContent = '€ 100';
      results_div.style.visibility = "visible";
    } 
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'lake-view') {
      cleanAll();
      img.setAttribute('src', '../images/rooms-index2.png');
      numberPeople.textContent = '3';
      price.textContent = '€ 130';
      results_div.style.visibility = "visible";
     } 
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'lake-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     } 
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'single' && inputView.value === 'garden-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     } 
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'double' && inputView.value === 'garden-view') {
      cleanAll();
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '2';
     price.textContent = '€ 96';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'garden-view') {
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '3';
     price.textContent = '€ 125';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'garden-view') {
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '4';
     price.textContent = '€ 160';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'high-season' && inputPerson.value === 'single' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '1';
     price.textContent = '€ 50';
     results_div.style.visibility = "visible";
     }
     else if  (inputSeason.value === 'high-season' && inputPerson.value === 'double' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '2';
     price.textContent = '€ 96';
     results_div.style.visibility = "visible";
     }
     else if  (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '3';
     price.textContent = '€ 110';
     results_div.style.visibility = "visible";
     }
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'mountain-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     }
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'lake-view') {
     img.setAttribute('src', '../images/rooms-index2.png');
     numberPeople.textContent = '1';
     price.textContent = '€ 76.50';
     results_div.style.visibility = "visible";
     }
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'lake-view') {
     img.setAttribute('src', '../images/rooms-index2.png');
     numberPeople.textContent = '2';
     price.textContent = '€ 90';
     results_div.style.visibility = "visible";
     }
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'lake-view') {
     img.setAttribute('src', '../images/rooms-index2.png');
     numberPeople.textContent = '3';
     price.textContent = '€ 120';
     results_div.style.visibility = "visible";
     }
    else if (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'lake-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     }
    else if (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'garden-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'garden-view') {
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '2';
     price.textContent = '€ 88';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'garden-view') {
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '3';
     price.textContent = '€ 115';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'garden-view') {
     img.setAttribute('src', '../images/rooms-index.jpg');
     viewWord.textContent = 'giardino';
     numberPeople.textContent = '4';
     price.textContent = '€ 140';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '1';
     price.textContent = '€ 45';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '2';
     price.textContent = '€ 86';
     results_div.style.visibility = "visible";
     } 
     else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'mountain-view') {
     img.setAttribute('src', '../images/rooms-index1.jpg');
     viewWord.textContent = 'montagna';
     numberPeople.textContent = '3';
     price.textContent = '€ 100';
     results_div.style.visibility = "visible";
     } 
     else if (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'mountain-view') {
      feedToError();
      setInterval(function () {
        error_id.style.display = "none";
      }, 3000);
    } 
  }, 3000);

}

