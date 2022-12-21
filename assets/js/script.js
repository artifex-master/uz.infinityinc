'use strict';

const selected = document.querySelector(".selected");
const options_container = document.querySelector(".options-container");
const optionList = document.querySelectorAll(".option");
const city = document.querySelector(".city");
const port = document.querySelector(".port");


const mobile_selected = document.querySelector(".mobile-selected");
const mobile_options_container = document.querySelector(".mobile-city-select-container");
const mobileOptionList = document.querySelectorAll(".mobile-city-option");
const mobile_city = document.querySelector(".mobile-city");

const port_selected = document.querySelector(".selected-port");
const port_options_container = document.querySelector(".port-select-container");
const portOptionList = document.querySelectorAll(".port-option");

const mobile_port_selected = document.querySelector(".port-initial");
const mobile_port_options_container = document.querySelector(".mobile-port-select-container");
const mobilePortOptionList = document.querySelectorAll(".mobile-port-option");
const mobile_port = document.querySelector(".mobile-port");

selected.addEventListener("click", () => {
  options_container.classList.toggle("active");
  selected.classList.toggle("active");
});

port_selected.addEventListener("click", function() {
  port_options_container.classList.toggle("active");
  port_selected.classList.toggle("active");
});

optionList.forEach(o => {
  o.addEventListener("click", function() {
    city.innerHTML = o.querySelector("label").innerHTML;
    options_container.classList.remove("active");
    selected.classList.remove("active");
  });
});

portOptionList.forEach(o => {
  o.addEventListener("click", function() {
    port.innerHTML = o.querySelector("label").innerHTML;
    port_options_container.classList.remove("active");
    port_selected.classList.toggle("active");
  });
});


mobile_selected.addEventListener("click", function() {
  mobile_options_container.classList.toggle("active");
  mobile_selected.classList.toggle("active");
});

mobileOptionList.forEach(o => {
  o.addEventListener("click", function() {
    mobile_city.innerHTML = o.querySelector("label").innerHTML;
    mobile_options_container.classList.remove("active");
    mobile_selected.classList.remove("active");
  });
});


mobile_port_selected.addEventListener("click", function() {
  mobile_port_options_container.classList.toggle("active");
  mobile_port_selected.classList.toggle("active");
});

mobilePortOptionList.forEach(o => {
  o.addEventListener("click", function() {
    mobile_port.innerHTML = o.querySelector("label").innerHTML;
    mobile_port_options_container.classList.remove("active");
    mobile_port_selected.classList.remove("active");
  });
});

const mobile_menu = document.querySelector(".mobile-header__menu-wrap");
const mobile_navbar_menu = document.querySelector(".mobile-navbar-menu");
const mobile_navbar = document.querySelector(".mobile-navbar");
const overlay = document.querySelector(".overlay");

mobile_menu.addEventListener("click", function() {
  mobile_navbar.classList.toggle("active");
  overlay.classList.toggle("active");

});

mobile_navbar_menu.addEventListener("click", function() {
  mobile_navbar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", function() {
  mobile_navbar.classList.remove("active");
  overlay.classList.remove("active");
});
