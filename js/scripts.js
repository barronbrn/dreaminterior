$(() => {
  $(".new-card").slice(0, 4).show();
  $(".load-more").click(function (e) {
    e.preventDefault();
    $(".new-card:hidden").slice(0, 4).slideDown();
  });
});

$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

var swiper = new Swiper(".mySwiperPopular", {
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".bxs-chevron-right-circle",
    prevEl: ".bxs-chevron-left-circle",
  },
});
