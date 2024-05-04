(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
  });


  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // PARALLAX JS
  function initParallax() {
    $('#home').parallax("60%", 100);
    $('#about').parallax("100%", 80);
    $('#project').parallax("80%", 60);
    $('#team').parallax("40%", 40);
    $('#contact').parallax("20%", 20);
  }
  initParallax();


  // Owl Carousel
  var owl = $("#owl-team");
  owl.owlCarousel({
    autoPlay: 6000,
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
    Speedfast: 200,
  });

})(jQuery);

function startImageSlideshow() {
  const images = ["assets/images/slider-1.jpg", "assets/images/slider-2.jpg", "assets/images/slider-3.jpg"];
  let index = 0;

  function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("contact").style.backgroundImage = `url(${images[index]})`;
  }

  setInterval(nextImage, 3000);
}

startImageSlideshow();

const form = document.querySelector("#contact-form");
const modalContainer = document.querySelector("#modal-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const message = document.querySelector("input[type='text']:last-of-type").value;

  const nameValue = document.getElementById("name-value");
  const emailValue = document.getElementById("email-value");
  const messageValue = document.getElementById("message-value");

  nameValue.textContent = name;
  emailValue.textContent = email;
  messageValue.textContent = message;

  modalContainer.classList.add('view');

  form.reset();
});

const closeButton = document.querySelector(".not-view");

closeButton.addEventListener("click", function () {
  modalContainer.classList.remove('view');
});