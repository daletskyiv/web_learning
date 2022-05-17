var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/chaynik.jpg') {
        myImage.setAttribute('src', 'images/chaynik_2.jpg');
    } else {
        myImage.setAttribute('src', 'images/chaynik.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Винтажный чайник, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Винтажный чайник, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}