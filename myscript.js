"use strict";

const valueEmail = document.getElementById("email");
const btnSubmit = document.querySelector(".btn-submit");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const mainContent = document.querySelectorAll(".main-content");
const exp = document.querySelector(".exp");
const view = document.querySelectorAll(".view");
const item = document.querySelectorAll(".item");

// Submit
btnSubmit.addEventListener("click", function () {
  if (regex.test(valueEmail.value)) {
    document.querySelector(".form-email").classList.add("hidden");
    document.querySelector(".infomation").classList.remove("hidden");
  } else {
    alert("Nhập đúng định dạng");
  }
});

// Hide main content
for (let i = 0; i < mainContent.length; i++) {
  mainContent[i].classList.add("hidden");
}
// Run a 0 - 5
for (let a = 0; a < item.length; a++) {
  // Mouse Over
  const mouseOver = function () {
    view[a].classList.remove("hidden");
  };

  item[a].addEventListener("mouseover", mouseOver);

  // Mouse Out
  const mouseOut = function () {
    view[a].classList.add("hidden");
    mainContent[a].classList.add("hidden");
    view[a].textContent = "🔽 View more";
  };
  item[a].addEventListener("mouseout", function () {
    if (mainContent[a].classList.contains("hidden")) {
      mouseOut();
    }
  });

  // Click Button View

  view[a].addEventListener("click", function () {
    if (!mainContent[a].classList.contains("hidden")) {
      mainContent[a].classList.add("hidden");
      view[a].textContent = "🔽 View more";
    } else {
      view[a].textContent = "🔼 View less";
      mainContent[a].classList.remove("hidden");
    }
  });
}
