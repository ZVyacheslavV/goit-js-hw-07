const generalList = document.querySelector(".task-one-general-list");
const generalListItems = generalList.querySelectorAll(
  ".task-one-general-litem"
);
const generalTitles = document.querySelectorAll(".task-one-title");

console.log("Number of categories:", generalListItems.length);

generalListItems.forEach((litem, i) => {
  const sublistItems = litem.querySelectorAll(".task-one-litem");

  console.log("Category:", generalTitles[i].textContent);
  console.log("Elements:", sublistItems.length);
});
