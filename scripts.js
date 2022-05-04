function onScroll () {
  let navigation = document.querySelector("nav")
  if (scrollY > 0) {
    navigation.classList.add("scroll")
    document.getElementById("logo").src="../assets/icons/logo-white.svg"
    document.getElementById("menu-hamburger").src="../assets/icons/icon-white.svg"
  } else {
    navigation.classList.remove("scroll")
    document.getElementById("logo").src="../assets/icons/logo.svg"
    document.getElementById("menu-hamburger").src="./assets/icons/icon.svg"
  }
}

function openMenu () {
  let body = document.querySelector("body")
  
  document.getElementById("logo").src="../assets/icons/logo-white.svg"
  body.classList.add("menu-expanded")
}

function closeMenu () {
  let body = document.querySelector("body")
  document.getElementById("logo").src="../assets/icons/logo.svg"
  body.classList.remove("menu-expanded")
}