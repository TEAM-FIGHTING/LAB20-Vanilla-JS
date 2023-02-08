import { getNode } from "../lib/index.js";

const kategori = getNode(".kategorie__item__name");
const kategoriMenu = getNode(".kategorie__item__menu");
const kategoriSummary = getNode("#kategorie__item__name--summary");
const kategoriMenuSummary = getNode("#kategorie__item__menu--summary");
const navigation = getNode(".navigation--summary");

function handleKategoriDown() {
  if (kategoriMenu.style.display === "block") {
    kategoriMenu.style.display = "none";
  } else {
    kategoriMenu.style.display = "block";
  }
}

function handleKategoriSummaryDown() {
  if (kategoriMenuSummary.style.display === "block") {
    kategoriMenuSummary.style.display = "none";
  } else {
    kategoriMenuSummary.style.display = "block";
  }
}

function handleNavigationOn() {
  if (window.scrollY > 200) {
    navigation.style.display = "block";
  } else {
    navigation.style.display = "none";
  }
}

function handlekategoriMenuSummaryOn() {
  if (window.scrollY < 750) {
    kategoriMenuSummary.style.display = "none";
  }
}

kategori.addEventListener("mouseover", handleKategoriDown);
kategoriMenu.addEventListener("mouseleave", handleKategoriDown);
window.addEventListener("scroll", handleNavigationOn);
kategoriSummary.addEventListener("mouseover", handleKategoriSummaryDown);
kategoriMenuSummary.addEventListener("mouseleave", handleKategoriSummaryDown);
window.addEventListener("scroll", handlekategoriMenuSummaryOn);
