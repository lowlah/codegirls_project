function addHighlightOnRadioClick() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const labels = document.querySelectorAll(".label-cell");
  const paragraphs = document.querySelectorAll(".radio-text");

  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("click", function () {
      // Remove the 'highlight' class from all labels
      for (let j = 0; j < labels.length; j++) {
        labels[j].classList.remove("highlight");
      }
      // Add the 'highlight' class to the selected label
      labels[i].classList.add("highlight");

      // Change the paragraph text color for the selected radio button
      for (let k = 0; k < paragraphs.length; k++) {
        paragraphs[k].style.color = i === k ? "white" : "#4285f4";
      }
    });
  }
}
addHighlightOnRadioClick();
const radioButtons = document.querySelectorAll(".label-cell");
function handleMouseOver(event) {
  // Add the CSS class on mouseover to enable the transition effect
  event.target.classList.add("transition-color");
  // Change the border color of the radio button on mouseover
 // event.target.style.borderColor = "orange";

  // Reset the border color and remove the CSS class after a short delay (e.g., 1 second)
  setTimeout(function () {
    event.target.classList.remove("transition-color");
    //event.target.style.borderColor = "";
  }, 1000);
}

// Loop through each radio button and add the event listener
for (let i = 0; i < radioButtons.length; i++) {
  let radioButton = radioButtons[i];
  radioButton.addEventListener("mouseover", handleMouseOver);
}

function submitMessage() {
  const form = document.getElementById("myForm");
  const container = document.querySelector(".container");
  const thankYouMessage = document.querySelector("h1");
  thankYouMessage.textContent = "Thank you for your feedback!";
  form.style.display = "none";
  container.appendChild(thankYouMessage);
}

//const form = document.getElementById("myForm");
const btn = document.querySelector("#btn"); 
btn.addEventListener("click", function (event) {
  event.preventDefault(); //form stays at the message
  const topic = document.getElementById("topic").value.trim();
  const date = document.getElementById("date").value.trim();
  const text= document.getElementById("textq").value.trim();
  let radioButtons = document.querySelector('input[name = "comfort-level"]:checked');

  if (topic === "" || date === "" || text ==="") {
    alert("Please fill in all the fields.");
  } else if (!radioButtons) {
    alert("Please select one of the comfort levels.");
  } else {
    submitMessage(); // Replace form with thank you message
  }
});
