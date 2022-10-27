const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySource = myImage.getAttribute("src");

    if(mySource === "images/firefox-logo.jfif") {
        myImage.setAttribute("src", "images/firefox-logo-blue.jfif");
    }
    else {
        myImage.setAttribute("src", "images/firefox-logo.jfif");
    }
};

//setting up the variables with referrences to the DOM objects
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


//initialized function
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


//setting up function for the personalized greeting
function setUserName() {
    const myName = prompt("Please enter your  name: ");
    if(!myName){
        setUserName();
        
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
 
}

myButton.onclick = () => {
    setUserName();
};
