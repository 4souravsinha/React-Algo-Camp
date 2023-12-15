//describe what is capture and bubbling
// Event Bubbling:

// In this phase, an event starts from the deepest element in the DOM and bubbles up to the outer elements.
// For example, if you have a button inside a form, and both elements have click event listeners, clicking the button triggers the event on the button first and then bubbles up to the form.
// Event Capturing (Opposite of Bubbling):

// This is the less commonly used phase.
// In event capturing, the event starts from the outermost element and travels down to the target element.
// Using the same example, if capturing is used, clicking the button would first trigger the click event on the form, then on the button.

const outerDiv = document.getElementById("outer");
const img = document.getElementById("img");

outerDiv.addEventListener("click", () => {
  console.log("capturing from outer div");
  if (outerDiv.style.border === "5px solid red") {
    outerDiv.style.border = "5px solid blue";
  } else {
    outerDiv.style.border = "5px solid red";
  }
} , {capture: true});

outerDiv.addEventListener("click", () => {
  console.log("bubbling from outer div");
})

img.addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("capturing from image");
  const imgsrc = img.getAttribute("src");
  if (imgsrc === "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png") {
    img.setAttribute("src", "https://placedog.net/500/280?id=1");
    img.setAttribute("alt" , "dog")
  } else {
    img.setAttribute("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png")
    img.setAttribute("alt" , "google")
  }
} , true);

img.addEventListener("click", () => {
  console.log("bubbling from image");
})

// click image
setInterval(() => {
  img.click();
}, 2000);
