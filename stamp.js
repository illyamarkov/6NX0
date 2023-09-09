// Get the current website's URL
var currentURL = window.location.hostname;

console.log(currentURL);

const anchor = document.createElement("a");
anchor.href = "http://500009.xyz/"; // Set the URL you want to link to

// Define a regular expression pattern to match XY0000, 0000XY, or X0000Y
const patternXY0000 = /^[1-9][1-9]*0{4}$/;
const pattern0000XY = /^0{4}[1-9][1-9]*$/;
const patternX0000Y = /^[1-9]*0{4}[1-9]*$/;

// Define a regular expression pattern to match X00000, 00000X, or 000000
const patternX00000 = /^[1-9]*0{5}$/;
const pattern00000X = /^0{5}[1-9]*$/;
const pattern000000 = /^0{6}$/;

// Check if the URL matches the specified patterns and has a ".xyz" domain
if (currentURL.endsWith(".xyz")) {
    console.log("is XYZ");
    currentURL = currentURL.replace(".xyz", "");
    console.log(currentURL);
    console.log(patternXY0000.test(currentURL));
    if (patternXY0000.test(currentURL)) {
        // Do something for XY0000 with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="XY0000.png" alt="Image for websites matching XY0000 with .xyz domain">';
    } 
    else if (pattern0000XY.test(currentURL)) {
        // Do something for 0000XY with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="0000XY.png" alt="Image for websites matching 0000XY with .xyz domain">';
    } 
    else if (patternX0000Y.test(currentURL)) {
        // Do something for X0000Y with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="X0000Y.png" alt="Image for websites matching X0000Y with .xyz domain">';
    } 
    else if (patternX00000.test(currentURL)) {
        // Do something for X00000 with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="X00000.png" alt="Image for websites matching X00000 with .xyz domain">';
    } 
    else if (pattern00000X.test(currentURL)) {
        // Do something for 00000X with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="00000X.png" alt="Image for websites matching 00000X with .xyz domain">';
    } 
    else if (pattern000000.test(currentURL)) {
        // Do something for 000000 with .xyz domain
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="000000.png" alt="Image for websites matching 000000 with .xyz domain">';
    } 
    // Handle other cases with .xyz domain
    else {
        const imageContainer = document.getElementById("image-container-6N4X0");
        imageContainer.innerHTML = '<img src="OTHER.png" alt="Image for other patterns with .xyz domain">';
    }
} 
// Handle cases without .xyz domain
else {
    const imageContainer = document.getElementById("image-container-6N4X0");
    const image = document.createElement("img");
    image.src = "NOTXYZ.png";
    image.alt = "Image for websites without .xyz domain";

    // Append the image to the anchor
    anchor.appendChild(image);
    imageContainer.appendChild(anchor);
}
