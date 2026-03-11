/*
function Execute(){

let sentence = document.getElementById("sentence").value;

sentence = sentence.replace(/[^\w\s]/g,"");

let words = sentence.split(" ");

let count = words.length;

document.getElementById("sent-count").value = count;

let output = "";

for(let i=0; i<words.length; i++){
output += "<u>" + words[i] + "</u> ";
}

document.getElementById("words").innerHTML = output;

}   */

//Question 2

let removedCount = 0;

function addItem(){

let text = document.getElementById("item").value;

if(text == "") return;

let li = document.createElement("li");
li.textContent = text;

document.getElementById("list").appendChild(li);

}

function removeItem(){

let text = document.getElementById("item").value.toLowerCase();

let list = document.getElementById("list").getElementsByTagName("li");

for(let i=0; i<list.length; i++){

if(list[i].textContent.toLowerCase() == text){

let removedText = list[i].textContent;

list[i].remove();

removedCount++;

document.getElementById("removed").innerHTML =
"<p class='removed'>" + removedText + "</p>";

document.getElementById("count").innerHTML =
"<p class='count'>(" + removedCount + ") items removed</p>";

break;

}

}

}


