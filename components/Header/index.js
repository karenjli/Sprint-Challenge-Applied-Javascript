// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headContainer = document.querySelector(".header-container");

function Header() {
    //create element
    let headDiv = document.createElement("div");
    let dateSpan = document.createElement ("span");
    let headTitle = document.createElement ("h1");
    let tempSpan = document.createElement("span")

    //class name
    headDiv.classList.add ('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //add content
    dateSpan.textContent = "March 28, 2019";
    headTitle.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    //appendChild
    headDiv.appendChild(dateSpan);
    headDiv.appendChild(headTitle);
    headDiv.appendChild(tempSpan);
   
    return headContainer.appendChild(headDiv);
}
Header();