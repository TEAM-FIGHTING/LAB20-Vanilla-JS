import { getNode } from "../lib/index.js";

const kategori = getNode(".kategorie__item__name");
const kategoriMenu = getNode(".kategorie__item__menu");

function handleKategoriDown() {
  if (kategoriMenu.style.display === "block") {
    kategoriMenu.style.display = "none";
  } else {
    kategoriMenu.style.display = "block";
  }
}

kategori.addEventListener("mouseover", handleKategoriDown);
kategoriMenu.addEventListener("mouseleave", handleKategoriDown);
