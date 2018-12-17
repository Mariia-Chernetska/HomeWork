"use strict";

const ul = document.querySelector(".list");
const li = document.querySelector(".child_li");
const divAdd = document.querySelector("nav");
const modal = document.querySelector(".modal");
const save_btn = document.querySelector("#save");
const spanClose = document.querySelector(".close");
const input_url = document.querySelector("#input_url");
const input_name = document.querySelector("#input_name");
const tabs = document.querySelector(".tabs-style-bar");


let siteItems = JSON.parse(localStorage.getItem("settings"));

function removeItem(event) {
  const ob = event.currentTarget.parentElement.querySelector("p").textContent;

 const parentParent = event.currentTarget.parentElement.parentElement;

  for (const obj of siteItems) {
    if (ob === obj.name) siteItems.splice(siteItems.indexOf(obj), 1);
  }

  localStorage.setItem("settings", JSON.stringify(siteItems));
 
  ul.removeChild(parentParent);
}

if(!siteItems){
  siteItems = [];
}

if (siteItems.length > 0) {
  for (const ob of siteItems) {
    createNewCard(ob);
  }
}
spanClose.onclick = function() {
  modal.hidden = true;
  ul.hidden = false;
};
tabs.onclick = function(){
};
save_btn.onclick = function(){
}

const check = () => save_btn.disabled = input_url.value && input_name.value ? false:"disabled";

function createNewCard(ob) {
  var newLi = document.createElement("li");
  newLi.classList.add("child_li");
  const temp = `<div class="tabs tabs-style-bar"><span class="close close_card">&times;</span><a href="${ob.url}" target="_blank"><p>${ob.name}</p></a></div>`;
  newLi.innerHTML = temp;
  const span = newLi.querySelector("span");
  span.addEventListener("click", removeItem);
  ul.prepend(newLi);
}

function btnPut() {
  modal.hidden = false;
  ul.hidden = true;
}

function btnSave() {
  const countLi = document.querySelectorAll("li").length - 1;
  ul.style.display = "flex";
  
  const newUrl = {
    id: name.split(" ")[0] + countLi,
    name: input_name.value,
    url: input_url.value
  };

  input_name.value = "";
  input_url.value = "";

  const newPost = siteItems.map(function(url){
    return url.url;
  }).indexOf(newUrl.url);
  
  if(newPost >= 0 ){
    alert ("This URL is used in the card!");
    return;
  }

  siteItems.push(newUrl);

  localStorage.setItem("settings", JSON.stringify(siteItems));

  createNewCard(newUrl);

  modal.hidden = true;
}

divAdd.addEventListener("click", btnPut);
save_btn.addEventListener("click", btnSave);