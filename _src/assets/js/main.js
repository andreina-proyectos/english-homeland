'use strict';
const burguerMenu = document.querySelector('.burguer-menu');
const headerNav = document.querySelector('.header__nav');



function handlerBurguerMenuClick() {
  headerNav.classList.toggle('header__nav-fade-in');
}

burguerMenu.addEventListener('click', handlerBurguerMenuClick);

//Google Maps funcionality

// Initialize and add the map
function initMap() {
  // The location
  var englishHomelandCoords = {lat: 42.878876, lng: -8.539355};
  // The map, centered at location
  var map = new google.maps.Map(
    document.querySelector('.gmaps_frame__map'),
    {
      zoom: 17,
      center: englishHomelandCoords
    }
  );
  // The marker, positioned at location
  var marker = new google.maps.Marker({
    position: englishHomelandCoords,
    map: map
  });
}
