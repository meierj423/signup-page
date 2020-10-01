// Find "TODO" in the comments and follow the instructions.

var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Fill in code here to retrieve the last email and password from storage.
  // If they are null, return early from this function
  // Else set the text of the userEmailSpan and userPasswordSpan
  // to the corresponding values from local storage
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    // TODO: Save email and password to localStorage
    // call function to render last registered email and password
  }
});

/* ----------------------------------------------------------------

  NOTE: You should not store user passwords in client side storage! Passwords
  are saved to storage in this activity for practice with local storage only.
  Do not do this in production code.
  
   ---------------------------------------------------------------- */
