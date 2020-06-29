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
  inEleButton.id = "deletebutton";
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





// Create a list with all the created items of the list
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].appendChild(document.getElementById('deletebutton'));
}
let inputfield = document.getElementsByName('input');

// Add a "checked" symbol when clicking on a list box
let list = document.querySelector('ul'); //ul
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

/*
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("delbtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/
/*
let chkbox = document.getElementById("checkbox");
//chkbox.onclick = selectedItem;

// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function selectedItem(e){
    let p = e.target;
    
    var checkBox = document.getElementById("checkbox");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        className = "Checked";
    } else {
        className = "UnChecked";
    }
}

*/

