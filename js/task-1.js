const generalList = document.querySelector(".first-general-list");
const generalListItems = generalList.querySelectorAll(".first-general-litem");
const generalTitles = document.querySelectorAll(".first-title");

console.log("Number of categories:", generalListItems.length);

generalListItems.forEach((litem, i) => {
  console.log("Category:", generalTitles[i].textContent);
  console.log("Elements:", litem.querySelectorAll(".first-litem").length);
});
