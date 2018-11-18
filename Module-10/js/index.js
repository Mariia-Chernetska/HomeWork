"use strict";

let input_id = document.querySelector("#input_id");
let input_name = document.querySelector("#input_name");
let input_age = document.querySelector("#input_age");

let radioDelete = document.querySelector("#delete");
let radioPost = document.querySelector("#post");
let radioAllUser = document.querySelector("#allusers");
let radioGet = document.querySelector("#get");

let panel_radiobuttons = document.querySelector("#radiobuttons");
let radiobuttons = [...panel_radiobuttons.querySelectorAll("input")];
let excute = document.querySelector("#btnexcute");
const tableData = document.querySelector("table");
const tBody = document.querySelector("table > tbody");

function getAllUsers() {
  fetch("https://test-users-api.herokuapp.com/users/")
    .then(response => response.json())
    .then(data_json => {
      if (data_json.status != 200) {
        alert(data_json.errors);
      } else {
        tableData.hidden = false;
        updateView([...data_json.data]);
      }
    });
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

//--------------------------------------------------------------------------------------
function getUserById(id) {
  let res = false;

  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => response.json())
    .then(data => {
      if (data.status != 200) {
        alert(data.errors);
      } else {
        tableData.hidden = false;
        tBody.innerHTML = createTableRow(data.data);
      }
    })
    .catch(error => {
      res = true;
      alert(error);
    });

  return res;
}

//--------------------------------------------------------------------------------------

function addUser(name, age) {
  fetch(" https://test-users-api.herokuapp.com/users/", {
    method: "post",
    body: JSON.stringify({ name: `${name}`, age: `${age}` }),
    headers: {
      "Content-Type": " application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status != 200 && data.status != 201) {
        alert(data.errors);
      } else {
        setTimeout(getAllUsers, 1000);
        input_age.value = "";
        input_name.value = "";
        tableData.hidden = false;
        console.log(data);
      }
    })
    .catch(error => alert(error));
}

//---------------------------------------------------------------------------------------
function removeUser(id) {
  fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: "delete"
  })
    .then(res => res.json())
    .then(data => {
      if (data.status != 200) {
        alert(data.errors);
      } else {
        setTimeout(getAllUsers, 1000);
        input_id.value = "";
        tableData.hidden = false;

        console.log(data);
      }
    })
    .catch(error => {
      alert(error);
    });
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
    .catch(error => alert(error));
}
//---------------------------------------------------------------------------------------

function onButtonClick(event) {
  let radioChecked = radiobuttons.find(_ => _.checked);

  switch (radioChecked.getAttribute("id")) {
    case "allusers": {
      getAllUsers();
      console.log("get");
      break;
    }
    case "post": {
      addUser(input_name.value, input_age.value);
      console.log("post");
      break;
    }
    case "delete": {
      removeUser(input_id.value);
      console.log("delete");
      break;
    }
    case "get": {
      getUserById(input_id.value);
      console.log("getUserById");
      input_id.value = "";
      break;
    }
  }
}

//-------------FOR GUI--------------------
function disabledFromRadioChecked(event) {
  switch (event.target.getAttribute("id")) {
    case "allusers": {
      tableData.hidden = true;
      input_age.value = "";
      input_name.value = "";
      input_id.value = "";
      input_age.disabled = true;
      input_name.disabled = true;
      input_id.disabled = true;
      break;
    }
    case "post": {
      tableData.hidden = true;
      input_age.value = "";
      input_name.value = "";
      input_id.value = "";
      input_age.disabled = false;
      input_name.disabled = false;
      input_id.disabled = true;
      break;
    }
    case "delete": {
      tableData.hidden = true;
      input_age.value = "";
      input_name.value = "";
      input_id.value = "";
      input_age.disabled = true;
      input_name.disabled = true;
      input_id.disabled = false;
      break;
    }
    case "get": {
      tableData.hidden = true;
      input_age.value = "";
      input_name.value = "";
      input_id.value = "";
      input_age.disabled = true;
      input_name.disabled = true;
      input_id.disabled = false;
      break;
    }
  }
}
//----------------------------------------

radioAllUser.addEventListener("change", disabledFromRadioChecked);
radioDelete.addEventListener("change", disabledFromRadioChecked);
radioGet.addEventListener("change", disabledFromRadioChecked);
radioPost.addEventListener("change", disabledFromRadioChecked);

excute.addEventListener("click", onButtonClick);

//==========================================================================================
