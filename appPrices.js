/*Dropdown Menu Prices*/

$('.dropdown-selection').click(function () {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).find('.dropdown-menu-selection').slideToggle(300);
  });
  $('.dropdown-selection').focusout(function () {
  $(this).removeClass('active');
  $(this).find('.dropdown-menu-selection').slideUp(300);
  });
  $('.dropdown-selection .dropdown-menu-selection li').click(function () {
  $(this).parents('.dropdown-selection').find('span').text($(this).text());
  $(this).parents('.dropdown-selection').find('input').attr('value', $(this).attr('id'));
  });

  // INPUT
  const input = document.querySelectorAll('input');
  const inputSeason = input[0];
  const inputPerson = input[1];
  const inputView = input[2];

  // RESULT FORM
  const imgResult = document.querySelector('.dinamic-img');
  const roomFor = document.querySelector('.number');
  const price = document.querySelector('.price');
  const viewWord = document.querySelector('.view-word');
  const result = document.querySelector('.results');

  const gif = document.getElementById('gif');

//Listen for submit

document.getElementById('search-form').addEventListener('submit', searchOn);

function searchOn(e) {
  e.preventDefault();
  result.style.visibility = "hidden";
  gif.style.display = 'block';
  setInterval(function () {
    gif.style.display = 'none';

    if (inputSeason.value === 'high-season' && inputPerson.value === 'single' && inputView.value === 'lake-view') {
      window.alert("Sorry this rooms is not available.");
      setInterval(function () {
        location.reload();
      },3000);
      } 
    else if (inputSeason.value === 'high-season' && inputPerson.value === 'double' && inputView.value === 'lake-view') {
      imgResult.setAttribute('src', '../images/rooms-index2.png');
      roomFor.textContent = '2';
      price.textContent = '€ 100';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'lake-view') {
      imgResult.setAttribute('src', '../images/rooms-index2.png');
      roomFor.textContent = '3';
      price.textContent = '€ 130';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'lake-view') {
      window.alert("Sorry this rooms is not available.");
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'single' && inputView.value === 'garden-view') {
      window.alert("Sorry this rooms is not available.");
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'double' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '2';
      price.textContent = '€ 96';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '3';
      price.textContent = '€ 125';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '4';
      price.textContent = '€ 160';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'single' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '1';
      price.textContent = '€ 50';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'double' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '2';
      price.textContent = '€ 96';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'triple' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '3';
      price.textContent = '€ 110';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'high-season' && inputPerson.value === 'quadruple' && inputView.value === 'mountain-view') {
      window.alert("Sorry this rooms is not available.");
      }
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'lake-view') {
      imgResult.setAttribute('src', '../images/rooms-index2.png');
      roomFor.textContent = '1';
      price.textContent = '€ 76.50';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'lake-view') {
      imgResult.setAttribute('src', '../images/rooms-index2.png');
      roomFor.textContent = '2';
      price.textContent = '€ 90';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'lake-view') {
      imgResult.setAttribute('src', '../images/rooms-index2.png');
      roomFor.textContent = '3';
      price.textContent = '€ 120';
      result.style.visibility = "visible";
      }
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'lake-view') {
      window.alert("Sorry this rooms is not available.");
      }
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'garden-view') {
      window.alert("Sorry this rooms is not available.");
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '2';
      price.textContent = '€ 88';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '3';
      price.textContent = '€ 115';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'garden-view') {
      imgResult.setAttribute('src', '../images/rooms-index.jpg');
      viewWord.textContent = 'giardino';
      roomFor.textContent = '4';
      price.textContent = '€ 140';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'single' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '1';
      price.textContent = '€ 45';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'double' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '2';
      price.textContent = '€ 86';
      result.style.visibility = "visible";
      } 
      else if  (inputSeason.value === 'low-season' && inputPerson.value === 'triple' && inputView.value === 'mountain-view') {
      imgResult.setAttribute('src', '../images/rooms-index1.jpg');
      viewWord.textContent = 'montagna';
      roomFor.textContent = '3';
      price.textContent = '€ 100';
      result.style.visibility = "visible";
      } 
      else if (inputSeason.value === 'low-season' && inputPerson.value === 'quadruple' && inputView.value === 'mountain-view') {
      window.alert("Sorry this rooms is not available.");
    } 
    else window.alert("Sorry something went wrong, try.");
  }, 3000);
}
