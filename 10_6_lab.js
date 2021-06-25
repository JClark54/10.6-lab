'use strict'


function changeColorIn(){
  document.getElementById('threeA').style.backgroundColor = 'red';
}

function changeColorOut(){
  document.getElementById('threeA').style.backgroundColor = 'green';


}


function changeText(){
 document.getElementById('threeB').innerHTML = 'Changed By JS';
}


function createObject(){
  let value1 = document.getElementById('objectValue1').value;
  let value2 = document.getElementById('objectValue2').value;

  let jsObject = {value1, value2};
  document.getElementById('fourA').innerHTML = JSON.stringify(jsObject);


}


 function checkPW() {
  let pwd1 = document.getElementById('pwd1').value;
  let pwd2 = document.getElementById('pwd2').value;

  if(pwd1==pwd2){
    document.getElementById('fourB').innerHTML = 'Password Match';
  }
  else{
    document.getElementById('fourB').innerHTML = 'Password does not match.'
  }


 }



 function storeInBrowser(){
  let storageItem = document.getElementById('storeInBrowser').value;
  window.sessionStorage.setItem(storageItem, storageItem);
 }

 function changeFive(){
  let border = document.getElementById("five");

  if (border.style.border == '5px solid red'){
    document.getElementById("five").style.border = '5px solid black';
  }
  else{
  document.getElementById("five").style.border = '5px solid red';
  }

 }


 document.getElementById("five").addEventListener("click", changeFive);
