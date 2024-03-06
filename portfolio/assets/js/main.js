// testimaniols-carousel
$(".carousel-wrap-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>",
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(function () {
  var owl = $(".owl-theme");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
        margin: 20,
      },
    },
  });
});

//------------------------------

const BASE_URL = "http://localhost:8080";
const blogSection = document.querySelector(".blog-cards");
const seeAllBtn = document.querySelector(".see-all-btn");
const header = document.querySelector("header");

let array = [];
let limit = 3;

async function getAllData(endpoint) {
  const res = await axios(`${BASE_URL}/${endpoint}`);
  array = res.data;
  console.log(res.data);
  drawCards(res.data.slice(0, limit));
  //   drawCards(res.data);
}

getAllData("blog");

function drawCards(data) {
  blogSection.innerHTML = "";
  data.forEach((element) => {
    blogSection.innerHTML += `
    <div class="blog-card">
    <div class="blog-image">
      <img src="${element.image}" alt="Frame 60" />
      <a href="#"> <i class="fa-solid fa-arrow-up"></i></a>
    </div>
    <div class="blog-body">
      <button>${element.title}</button>
      <div class="day">
        <a href="#"><span></span> ${element.name}</a>
        <a href="#"><span></span> ${element.day}</a>
      </div>
      <p>${element.desc}</p>
    </div>
  </div>
    `;
  });
}

seeAllBtn.addEventListener("click", function () {
  limit += 3;
  drawCards(array.slice(0, limit));

  if (limit > array.length) {
    this.remove();
  }
});

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
