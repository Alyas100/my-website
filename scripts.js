const myImage = document.getElementById("img");

myImage.onclick = function(){
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Hero-UnknownIsla-shutterstock_1100288969.jpg"){
        myImage.setAttribute("src", "images/FX_Design_Blog_Header_1400x770.jpg");
    } else {
        myImage.setAttribute("src", "images/Hero-UnknownIsla-shutterstock_1100288969.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
      }
  
  myButton.onclick = function() {
    setUserName();
  };
  
