/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/金盏花2.jpg");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "奥里给！！！" + myName;
}

myButton.onclick = function () {
    setUserName();
}
