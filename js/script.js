//login
const btnLoginClose = document.querySelector(".forma-login__close");
const btnInputLogin = document.querySelector("#btn-input-login");
const formaLogin = document.querySelector(".forma-login");
const mailingForm = document.querySelector(".mailing-form");
const btnMailingClose = document.querySelector(".mailing-form__close");
const btnSign = document.querySelector("#btn-input-sign-up");

function loginBtnLogin() {
  formaLogin.classList.remove("hidden");
  formaLogin.classList.add("animation");
}

function loginBtnClose() {
  formaLogin.classList.add("hidden");
  formaLogin.classList.remove("animation");
}

btnInputLogin.addEventListener("click", loginBtnLogin);
btnLoginClose.addEventListener("click", loginBtnClose);

//Форма рассылки
function mailingBtnSignUp() {
  mailingForm.classList.remove("hidden");
  mailingForm.classList.add("animation");
}

function mailingBtnClose() {
  mailingForm.classList.add("hidden");
  mailingForm.classList.remove("animation");
}

btnSign.addEventListener("click", mailingBtnSignUp);
btnMailingClose.addEventListener("click", mailingBtnClose);

//Слайдер отзывов
let dots = document.querySelectorAll(".fifth-content__dots-item");
let dotsBlock = document.querySelector(".fifth-content__dots-block");
let slider = document.querySelectorAll(".slider-conteiner__slider");
let leftBtn = document.querySelector(".fifth-content__left-button");
let rightBtn = document.querySelector(".fifth-content__right-button");
let sliderIndex = 1;

function showSlider(n) {
  if (n < 1) {
    sliderIndex = slider.length;
  } else if (n > slider.length) {
    sliderIndex = 1;
  }

  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slider[sliderIndex - 1].style.display = "block";
  dots[sliderIndex - 1].classList.add("active");
}
showSlider(sliderIndex);
function plusSlider(n) {
  showSlider((sliderIndex += n));
}
function currentSlider(n) {
  showSlider((sliderIndex = n));
}
leftBtn.onclick = function () {
  plusSlider(-1);
};
rightBtn.onclick = function () {
  plusSlider(1);
};

//Обработка форм
//1
const btnEntrance = document.querySelector(".forma-login__btn");

btnEntrance.addEventListener("click", function (event) {
  event.preventDefault();
  const mailLoginInput = document.querySelector("#mail-login");
  const passwordLoginInput = document.querySelector("#password");

  console.log(
    `Ваш логин ${mailLoginInput.value}\nВаш пароль ${passwordLoginInput.value}`
  );

  passwordLoginInput.value = "";
  mailLoginInput.value = "";
});

//2
const mailingBtn = document.querySelector(".mailing-form__btn");

mailingBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const mailingMailLogin = document.querySelector(".mailing-form__input");
  const mailingTextLogin = document.querySelector(".mailing-form__text-login");

  console.log(`Подписался на рассылку ${mailingMailLogin.value}`);
   mailingTextLogin.textContent = "Thank you for being with us";
  mailingMailLogin.value = "";
});

//3
const sixthBtn = document.querySelector(".sixth-content__form-btn");

sixthBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const sixthinputEmailInput = document.querySelector(
    ".sixth-content__input-email"
  );
  const sixthnewText = document.querySelector(".sixth-content__new-text");

  console.log(`Подписался на рассылку ${sixthinputEmailInput.value}`);
   sixthnewText.textContent = "Thank you for being with us";

  sixthinputEmailInput.value = ''
});
