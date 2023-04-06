const notMe = document.querySelector(".not-me");
const cardSide2 = document.querySelector(".card__side-2");
const card = document.querySelector(".card");
const cardAll = document.querySelectorAll(".card");
const cardBoxAll = document.querySelectorAll(".card-box");
const highlight = document.querySelector(".highlight");
const highlight1 = document.querySelector(".highlight-1");
const highlight2 = document.querySelector(".highlight-2");
const highlight_array = [highlight, highlight1, highlight2];
//SPAN IN HEADER
const addSpan = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    notMe.classList.remove("hidden", "inline-block");
    notMe.classList.add("inline-block");
  } else {
    notMe.classList.remove("hidden", "inline-block");
    notMe.classList.add("hidden");
  }
};

const headerObserver = new IntersectionObserver(addSpan, {
  root: card,
  threshold: 0.5,
  rootMargin: "0px",
});

headerObserver.observe(cardSide2);

//CARD-BOX
cardBoxAll.forEach((box) => box.classList.add("card-box__hidden"));

const cardBoxAppear = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) entry.target.classList.remove("card-box__hidden");
};

const cardBoxObserver = new IntersectionObserver(cardBoxAppear, {
  root: null,
  threshold: 0.5,
  rootMargin: "10%",
});

cardBoxAll.forEach((box) => cardBoxObserver.observe(box));

//READY TITLE
highlight.classList.add("appear_opacity-zero");
highlight1.classList.add("appear_from-left");
highlight2.classList.add("appear_from-right");

const highlightAppear = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    highlight1.classList.remove("appear_from-left");
    highlight2.classList.remove("appear_from-right");
    highlight.classList.remove("appear_opacity-zero");
  }
};

const highlightObserver = new IntersectionObserver(highlightAppear, {
  root: null,
  threshold: 1,
  rootMargin: "0%",
});

highlightObserver.observe(highlight);
