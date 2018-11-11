"use strict";

let get = document.querySelector("#get");
let post = document.querySelector("#post");
let del = document.querySelector("#delete");
let input_id = document.querySelector("#input_id");
let btnGetUserId = document.querySelector("#getUserById");
let input_name = document.querySelector("#input_name");
let input_age = document.querySelector("#input_age");

const tBody = document.querySelector("table > tbody");

//----------------------------------GET ALL USERS BEGIN-------------------------------------
function getAllUsers() {
  fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => response.json())
    .then(data_json => updateView([...data_json.data]));
}

function createTableRow({ id, name, age }) {
  return `
    <tr scope="row">
      <td align="center" style="width:200px;">${id}</td>
      <td align="center" style="width:200px;">${name}</td>
      <td align="right" style="width:50px;">${age}</td>
    </tr>
  `;
}

function updateView(users) {
  const htmlString = users.reduce(
    (acc, elem) => acc + createTableRow(elem),
    ""
  );
  tBody.innerHTML = htmlString;
}
//----------------------------------GET ALL USERS END-------------------------------------

function getUserById(id) {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
      tBody.innerHTML = createTableRow(data.data);
    });
}

//---------------------------------------------------------------------------------------

function addUser(name, age) {
  fetch(" https://test-users-api.herokuapp.com/users/", {
    method: "post",
    body: JSON.stringify({ name: `${name}`, age: `${age}` }),
    // body: JSON.stringify({ name: name, age: age}),
    headers: {
      "Content-Type": " application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

//---------------------------------------------------------------------------------------
function removeUser(id) {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "delete"
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

//---------------------------------------------------------------------------------------
function updateUser(id, user) {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "put",
    body: JSON.stringify({ name: `${user.name}`, age: `${user.age}` }),
    headers: {
      "Content-Type": " application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
//---------------------------------------------------------------------------------------

function onButtonClick(event) {
  switch (event.target.getAttribute("id")) {
    case "get": {
      getAllUsers();
      console.log("get");
      break;
    }
    case "post": {
      addUser(input_name.value, input_age.value);
      setTimeout(getAllUsers, 1000);
      input_age.value = '';
      input_name.value = '';
      console.log("post");
      break;
    }
    case "delete": {
      removeUser(input_id.value);
      setTimeout(getAllUsers, 1000);
      input_id.value = '';
      console.log("delete");
      break;
    }
    case "getUserById": {
      getUserById(input_id.value);
      console.log("getUserById");
      input_id.value = '';
      break;
    }
  }
}

get.addEventListener("click", onButtonClick);
post.addEventListener("click", onButtonClick);
del.addEventListener("click", onButtonClick);
btnGetUserId.addEventListener("click", onButtonClick);

//==========================================================================================
