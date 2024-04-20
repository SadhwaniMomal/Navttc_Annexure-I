// Ensure DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("inputclass");
  let buttons = document.querySelectorAll("button");

  let string = "";

  // Convert NodeList to Array for forEach
  let arr = Array.from(buttons);
  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Get innerHTML of clicked button
      let buttonText = e.target.innerHTML;
      if (buttonText == "=") {
        // Evaluate expression and update input value
        string = eval(string);
        input.value = string;
      } else if (buttonText == "AC") {
        // Clear input
        string = "";
        input.value = string;
      } else if (buttonText == "DEL") {
        // Remove last character from string
        string = string.substring(0, string.length - 1);
        input.value = string;
      } else {
        // Append clicked button's text to input
        string += buttonText;
        input.value = string;
      }
    });
  });
});
