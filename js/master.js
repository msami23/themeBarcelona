// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

// console.log('Local Storage Is Not Empty You Can Set It On Root Now');
// console.log(localStorage.getItem("color_option"));
document.documentElement.style.setProperty('--main-color', mainColors)
//remove active class form all childerns list item 
document.querySelectorAll(".coloer-list li").forEach(element => {
    element.classList.remove("active");

//add active class on element with data-color === local storage item
if(element.dataset.color === mainColors){
//add active class
element.classList.add("active");
}
    
    });
}

//random background option
let backgroundOption = true;
//variable to control the inrerval 
let backgroundInterval;
//check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");
//check if random background local storage is not empty 
if(backgroundLocalItem !== null){
    if(backgroundLocalItem === true){
        backgroundOption = true;

    }else{
        backgroundOption = false;
    }
    //remove active class form all span
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });
    if(backgroundLocalItem === 'true'){
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else{
        document.querySelector(".random-backgrounds .no").classList.add("active");

    }

};


document.querySelector(".toggle-settings .fa-gear").onclick = function(){
this.classList.toggle("fa-spin");
//toggle class openon main settings box
document.querySelector(".settings-box").classList.toggle("open");
};

// switch color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li =>{
li.addEventListener("click" ,(e) =>{
// console.log(e.target.dataset.color);
// set color on root
document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
//set color on local storage
localStorage.setItem("color_option", e.target.dataset.color);
//remove active class form all childerns
e.target.parentElement.querySelectorAll(".active").forEach(element => {
element.classList.remove("active");

});
// add active class on self
e.target.classList.add("active");

});
});

// switch random backgrounds
const randomBackround = document.querySelectorAll(".random-backgrounds span");
//loop on all span
randomBackround.forEach(span =>{
//click on every span
span.addEventListener("click" ,(e) =>{

//remove active class form all span
e.target.parentElement.querySelectorAll(".active").forEach(element => {
element.classList.remove("active");

});
// add active class on self
e.target.classList.add("active");
if(e.target.dataset.background === 'yes'){
    backgroundOption = true;
    randomizeimge();
    localStorage.setItem("background_option" , true);

}else{
    backgroundOption = false;
    clearInterval(backgroundInterval);
    localStorage.setItem("background_option" , false);

}

});
});

//select landing page element
let landingPage = document.querySelector(".landing-page");

//get array of image
let imageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg","06.jpg"];


// founction to randomize image
function randomizeimge(){
if(backgroundOption === true){

    backgroundInterval =  setInterval(() => {
//get random number
let randomNumber = Math.floor(Math.random() * imageArray.length);
//change background image url
landingPage.style.backgroundImage = 'url("image/' + imageArray[randomNumber] +'")';
}, 1000);

};
};

// select skills 
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
//skilss offset top
let skillsOffsetTop = ourSkills.offsetTop;

//outer height 
let skillsOuterHeight = ourSkills.offsetHeight;

//window height

let windowHeight = this.innerHeight;

//window scroll top
let windowScrollTop = this.pageYOffset;

if (windowScrollTop < (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill =>{
        skill.style.width = skill.dataset.progress;

    });
}
}

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});
 
// Close Popup
document.addEventListener("click", function (e) {

  if (e.target.className == 'close-button') {

    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

  }

});

//select all links 
const allLinks = document.querySelectorAll(".links a");

  allLinks.forEach(link => {

    link.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {

      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");

      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");

    }

  }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
  e.stopPropagation();
}