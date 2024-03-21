// 1. Alter the text color of the paragraph to a shade of aqua.
const myParagraph = document.querySelector("p");
myParagraph.style.color ="aqua";

// 2. Adjust the font size of the heading to 42 pixels.
const myHeading = document.querySelector("h1"); myHeading.style.fontSize = '42px';

// 3. Replace the text in the paragraph with the new Lorem Ipsum content.
myParagraph.innerText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices.";

// 4. Reduce the opacity of the 13th item to 30% transparency.
const list13 = document.getElementById("item-13");
list13.style.opacity = "30%";

// 5. Modify the text of the 3rd item to read "Greetings!"
document.getElementById("item-3").innerHTML = "Greetings!";

// 6. Update the image below the list to display the new image.
const myNewImg = document.querryselector("img");myNewImg.src = "https://pixabay.com/photos/polana-kalat%C3%B3wki-mountains-7958161/";

// 7. Resize the new image to a height of 250 pixels.
//const myNewImg
myNewImg.style.height =- "250px";
// 8. Integrate an additional image using innerHTML below the existing image.
const thirdPic = document.createElement("img");
const imageContainer =  document.querySelector(".imgDiv");

thirdPic.src = "https://pixabay.com/photos/forest-trees-path-nature-autumn-8584311/";

imageContainer.innerHTML  += "<img src ='https://pixabay.com/photos/forest-trees-path-nature-autumn-8584311'/>";

imageContainer.innerHTML +=   thirdPic.outerHTML;

// 9. Adjust the height of the new image to 280 pixels programmatically.
const newHeight = document.querySelectorAll("img")[2];
thirdPic.style.height = "280px";

// 10. Append a 16th <li> element to the list using innerHTML.
const newListItem = document.creaeElement("li");
newListItem.textContent = "Never gonna give you up."
const myUl  = document.querrySelector("ul");
myUl.appendChild(newListItem);
// 11. Assign the same class as the other list items to the new <li> element using JavaScript.
const item16 = document.getElementById("item-16");
item16.className = "item";
// 12. Populate the new <li> with the text "Never gonna give you up."
