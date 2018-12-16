"use strict";

var ul = document.querySelector(".list");
var li = document.querySelector(".child_li");
var divAdd = document.querySelector("nav");
var modal = document.querySelector(".modal");
var save_btn = document.querySelector("#save");
var spanClose = document.querySelector(".close");
var input_url = document.querySelector("#input_url");
var input_name = document.querySelector("#input_name");
var tabs = document.querySelector(".tabs-style-bar");

var siteItems = JSON.parse(localStorage.getItem("settings"));

function removeItem(event) {
  var ob = event.currentTarget.parentElement.querySelector("p").textContent;

  var parentParent = event.currentTarget.parentElement.parentElement;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = siteItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var obj = _step.value;

      if (ob === obj.name) siteItems.splice(siteItems.indexOf(obj), 1);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  localStorage.setItem("settings", JSON.stringify(siteItems));

  ul.removeChild(parentParent);
}

if (!siteItems) {
  siteItems = [];
}

if (siteItems.length > 0) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = siteItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var ob = _step2.value;

      createNewCard(ob);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
spanClose.onclick = function () {
  modal.hidden = true;
  ul.hidden = false;
};
tabs.onclick = function () {};
save_btn.onclick = function () {};

var check = function check() {
  return save_btn.disabled = input_url.value && input_name.value ? false : "disabled";
};

function createNewCard(ob) {
  var newLi = document.createElement("li");
  newLi.classList.add("child_li");
  var temp = "<div class=\"tabs tabs-style-bar\"><span class=\"close close_card\">&times;</span><a href=\"" + ob.url + "\" target=\"_blank\"><p>" + ob.name + "</p></a></div>";
  newLi.innerHTML = temp;
  var span = newLi.querySelector("span");
  span.addEventListener("click", removeItem);
  ul.prepend(newLi);
}

function btnPut() {
  modal.hidden = false;
  ul.hidden = true;
}

function btnSave() {
  var countLi = document.querySelectorAll("li").length - 1;
  ul.style.display = "flex";

  var newUrl = {
    id: name.split(" ")[0] + countLi,
    name: input_name.value,
    url: input_url.value
  };

  input_name.value = "";
  input_url.value = "";

  var newPost = siteItems.map(function (url) {
    return url.url;
  }).indexOf(newUrl.url);

  if (newPost >= 0) {
    alert("This URL is used in the card!");
    return;
  }

  siteItems.push(newUrl);

  localStorage.setItem("settings", JSON.stringify(siteItems));

  createNewCard(newUrl);

  modal.hidden = true;
}

divAdd.addEventListener("click", btnPut);
save_btn.addEventListener("click", btnSave);