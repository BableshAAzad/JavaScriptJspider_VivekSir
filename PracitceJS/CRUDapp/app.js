let postData = document.getElementById("postData");
postData.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(postData);
  let username = formData.get("username");
  let password = formData.get("password");
  console.log(username, password);
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify({ username, password })
  })
})


let updateData = document.getElementById("updateData");
updateData.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(updateData)
  let username = formData.get("username");
  let password = formData.get("password");
  let update_id = document.getElementById("update_id").value;
  console.log(username, password);
  fetch(`http://localhost:3000/users/${update_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
})

let deleteData = document.getElementById("deleteData");
deleteData.addEventListener("submit", () => {
  let delete_id = document.getElementById("delete_id").value;
  fetch(`http://localhost:3000/users/${delete_id}`, {method: "DELETE"})
})

let getData = document.getElementById("getData");
let table_container = document.getElementById("table_container");
getData.addEventListener("click", () => {
  table_container.innerHTML = `
  <table>
    <thead>
       <tr>
          <td>SL NO</td>
          <td>User ID</td>
          <td>Use Name</td>
          <td>Password</td>
        </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  `;
  let tbody = document.getElementById("tbody");
  fetch("http://localhost:3000/users").then((res) => {
    return res.json();
  }).then((finalres) => {
    console.log(finalres);
    finalres.map((e, i) => {
      tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${e.id}</td>
        <td>${e.username}</td>
        <td>${e.password}</td>
      </tr>
      `
    })
  })
})

// *
// const promise = new Promise((res)=>res(2))
// promise.then((v)=>{
//     console.log(v);
//     return v*2;
// }).then((v)=>{
//     console.log(v);
//     return v*2;
// }).finally((v)=>{
//     console.log(v);
//     return 0;
// }).then((v)=>{
//     console.log(v);
// })
// *
// for(let x of arr){
//     console.log(x);
// }
// console.log(arr);
// var arr = [3,4,6,3];
// arr.foo = "Hello";
