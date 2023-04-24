let Featuresli = document.querySelector(".Features-li");
let ulFeatures = document.querySelector(".ul-features");
let companyli = document.querySelector(".company-li");
let ulCompany = document.querySelector(".company-ul");
let dropdownIconOne = document.querySelector(".dropdown-icon-one");
let dropdownIconTow = document.querySelector(".dropdown-icon-tow");
let loginPart = document.querySelector(".login-part");
let links = document.querySelector(".links");
let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");

let menusTOAddClass = [ulFeatures, ulCompany];

let menusTOListen = [Featuresli, companyli];//, menu

menusTOAddClass.forEach((e, i) => {
  let currentTarget = menusTOListen[i];

  if (e && currentTarget) {
    currentTarget.addEventListener("click", () => {
      console.log(e);
      e.classList.toggle("show");
      dropdownIconOne.classList.toggle("rotate");
      dropdownIconTow.classList.toggle("rotatetow");
    });
  }
  document.addEventListener("click", (ele) => {
    if (ele.target !== (e && currentTarget)) {
      if (e.classList.contains("show")) {
        e.classList.remove("show");
      }
    }
    if (ele.target !== Featuresli) {
      dropdownIconOne.classList.remove("rotate");
    }
    if (ele.target !== companyli) {
      dropdownIconTow.classList.remove("rotatetow");
    }
  });
});
function addClass(toClickElement, toAddClassElement, className) {
  toClickElement.addEventListener("click", () => {
    toAddClassElement.classList.toggle(className);
  });
}
addClass(menu, links, "reshow");
addClass(menu, loginPart, "reshow");
addClass(menu, navbar, "reshow");
addClass(menu, body, "reshow");
addClass(menu, menu, "close-menu");
