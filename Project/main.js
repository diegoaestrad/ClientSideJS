//let actbtn1 = document.querySelectorAll("button")[0];

let addbutton = document.getElementById("btnadd");
let listdiego = document.getElementById("uldiego");
let textin = document.getElementById("intext");

addbutton.onclick = addElement;

function addElement() {
  let usertext = document.getElementById('intext').value;
  let text = document.createTextNode(usertext);
  let listitem = document.createElement("li");
  let inElement = document.createElement('input');
  let inEleButton = document.createElement('button');
  inElement.type = "checkbox";
  inElement.setAttribute("onclick", "selectedItem");
  inEleButton.innerHTML = "Delete";
  inEleButton.className = "delbtn";
  inEleButton.id = "delbtn"; //deletebutton
  if (usertext === '') {
    alert("You must write something!");
  } else {
    //document.getElementById("myUL").appendChild(li);
    listdiego.appendChild(listitem);
    listitem.appendChild(text);
    listitem.appendChild(inElement);
    listitem.appendChild(inEleButton);
  }

}



//actbtn1.addEventListener('click',addList);
// Create a "close" button and append it to each list item

let myNodelist = document.getElementsByTagName("LI");
let i;

for (i = 0; i < myNodelist.length; i++) {
  let btnElement = document.createElement("button");
  let txt = document.createTextNode("Delete");
  btnElement.className = "delbtn";
  btnElement.appendChild(txt);
  myNodelist[i].appendChild(btnElement);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("delbtn");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul'); //ul
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


let inputValue1 = document.getElementsByName("inputText").value;
// Create a new list item when clicking on the "Add" button