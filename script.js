
let inputcontainer = document.querySelector('.container-data');
let createbtn = document.querySelector('.btn');
let inputbox = document.querySelector('.input-box');
showData()

createbtn.addEventListener("click",()=>{

  var createlement = document.createElement('p');
  let img = document.createElement('img');
  createlement.className = 'input-box';
  img.className = 'delete';
  createlement.setAttribute("contenteditable","true");
  img.src = './images/delete.png'
  inputcontainer.appendChild(createlement).appendChild(img);
  storeData()
})


inputcontainer.addEventListener('click',(e)=>{
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove()
  }
  storeData()
})

inputcontainer.addEventListener('input', storeData);


function storeData(){

  localStorage.setItem('notes',inputcontainer.innerHTML);
}

function showData(){
  inputcontainer.innerHTML = localStorage.getItem('notes') || "";
}

// let inputcontainer = document.querySelector('.container-data');
// let createbtn = document.querySelector('.btn');

// // load saved notes on page load
// showData();

// createbtn.addEventListener("click", () => {

//   let createlement = document.createElement('p');
//   let img = document.createElement('img');

//   createlement.className = 'input-box';
//   createlement.setAttribute("contenteditable", "true");

//   img.src = './images/delete.png';
//   img.className = 'delete';

//   // image inside <p>
//   createlement.appendChild(img);
//   inputcontainer.appendChild(createlement);

//   storeData();
// });

// // delete note
// inputcontainer.addEventListener('click', (e) => {
//   if (e.target.tagName === "IMG") {
//     e.target.parentElement.remove();
//     storeData();
//   }
// });

// // ✅ auto-save while typing
// inputcontainer.addEventListener('input', storeData);

// // save notes
// function storeData() {
//   localStorage.setItem('notes', inputcontainer.innerHTML);
// }

// // get notes
// function showData() {
//   inputcontainer.innerHTML = localStorage.getItem('notes') || "";
// }