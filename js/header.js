let menu_button = document.getElementById("menu_button");
let menu = document.getElementById("menu_categorie");

menu_button.onclick = function () {
  if (menu.style.visibility === "visible" || menu.style.visibility === "") {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
    menu_button.classList.remove("fa-xmark");
    menu_button.classList.add("fa-bars");
  } else {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
    menu_button.classList.remove("fa-bars");
    menu_button.classList.add("fa-xmark");
  }
};
