document.addEventListener("DOMContentLoaded", function() {
    const openAnnouncementButton = document.getElementById("Lec1button");
    const openCoursesScheduleButton = document.getElementById("Lec2button");
    const openYourInfoButton = document.getElementById("Lec3button");
    const openMedicalCareButton = document.getElementById("Lec4button");
  
    const popupLec1 = document.getElementById("popup_lec1");
    const popupLec2 = document.getElementById("popup_lec2");
    const popupLec3 = document.getElementById("popup_lec3");
    const popupLec4 = document.getElementById("popup_lec4");
  
    openAnnouncementButton.addEventListener("click", function() {
      popupLec1.style.display = "block";
    });
  
    openCoursesScheduleButton.addEventListener("click", function() {
      popupLec2.style.display = "block";
    });
  
    openYourInfoButton.addEventListener("click", function() {
      popupLec3.style.display = "block";
    });
  
    openMedicalCareButton.addEventListener("click", function() {
      popupLec4.style.display = "block";
    });
  
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const popup = this.closest(".popup");
        if (popup) {
          popup.style.display = "none";
        }
      });
    });
  
    window.addEventListener("click", function(event) {
      if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
      }
    });
  });
  

// Generate a random code based on the current date lec1
function generateRandomCode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = Math.floor(currentDate.getMinutes() / 10) * 10; // Round down to the nearest 10 minutes

    // Combine year, month, day, hour, and minute to create a unique seed for random number generation
    const seed = year * 1000000 + month * 10000 + day * 100 + hour * 10 + minute;

    // Generate a random number using the seed
    const randomNumber = Math.floor(Math.random() * 10000);

    // Format the random number as a 4-digit code
    const randomCode = randomNumber.toString().padStart(4, '0');

    return randomCode;
}

// Update the code element with the generated random code
function updateRandomCode() {
    const codeElement = document.getElementById('random-code');
    if (codeElement) {
        const currentTime = Date.now();
        const storedTime = localStorage.getItem('staticRandomCodeTime');
        
        if (!storedTime || currentTime - storedTime >= 600000) { // 600000 milliseconds = 10 minutes
            // Generate a new code and store its value and the current time in localStorage
            const randomCode = generateRandomCode();
            localStorage.setItem('staticRandomCode', randomCode);
            localStorage.setItem('staticRandomCodeTime', currentTime);
            
            codeElement.textContent = randomCode;
        } else {
            // Use the stored code
            codeElement.textContent = localStorage.getItem('staticRandomCode');
        }
    }
}

// Call the updateRandomCode function on page load
window.addEventListener('load', updateRandomCode);
// Generate a random code based on the current date lec1
{
function generateRandomCode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
  
    // Combine year, month, day, and hour to create a unique seed for random number generation
    const seed = year * 1000000 + month * 10000 + day * 100 + hour;
  
    // Generate a random number using the seed
    const randomNumber = Math.floor(Math.random() * 10000);
  
    // Format the random number as a 4-digit code
    const randomCode = randomNumber.toString().padStart(4, '0');
  
    return randomCode;
  }
  
  // Update the code element with the generated random code
  function updateRandomCode() {
    const codeElement = document.getElementById('random-code-1');
    if (codeElement) {
      let randomCode = localStorage.getItem('staticRandomCode');
      const storedTime = localStorage.getItem('staticRandomCodeTime');
  
      if (!randomCode || !storedTime) {
        // Generate a new code and store its value and the current time in localStorage
        randomCode = generateRandomCode();
        localStorage.setItem('staticRandomCode', randomCode);
        localStorage.setItem('staticRandomCodeTime', Date.now());
      }
  
      codeElement.textContent = randomCode;
    }
  }
  
  // Call the updateRandomCode function on page load
  window.addEventListener('load', updateRandomCode);
}
// Generate a random code based on the current date lec1
{
function generateRandomCode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
  
    // Combine year, month, day, and hour to create a unique seed for random number generation
    const seed = year * 1000000 + month * 10000 + day * 100 + hour;
  
    // Generate a random number using the seed
    const randomNumber = Math.floor(Math.random() * 10000);
  
    // Format the random number as a 4-digit code
    const randomCode = randomNumber.toString().padStart(4, '0');
  
    return randomCode;
  }
  
  // Update the code element with the generated random code
  function updateRandomCode() {
    const codeElement = document.getElementById('random-code-3');
    if (codeElement) {
      let randomCode = localStorage.getItem('staticRandomCode');
      const storedTime = localStorage.getItem('staticRandomCodeTime');
  
      if (!randomCode || !storedTime) {
        // Generate a new code and store its value and the current time in localStorage
        randomCode = generateRandomCode();
        localStorage.setItem('staticRandomCode', randomCode);
        localStorage.setItem('staticRandomCodeTime', Date.now());
      }
  
      codeElement.textContent = randomCode;
    }
  }
  
  // Call the updateRandomCode function on page load
  window.addEventListener('load', updateRandomCode);
}
// Generate a random code based on the current date lec1
{
function generateRandomCode() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
  
    // Combine year, month, day, and hour to create a unique seed for random number generation
    const seed = year * 1000000 + month * 10000 + day * 100 + hour;
  
    // Generate a random number using the seed
    const randomNumber = Math.floor(Math.random() * 10000);
  
    // Format the random number as a 4-digit code
    const randomCode = randomNumber.toString().padStart(4, '0');
  
    return randomCode;
  }
  
  // Update the code element with the generated random code
  function updateRandomCode() {
    const codeElement = document.getElementById('random-code-4');
    if (codeElement) {
      let randomCode = localStorage.getItem('staticRandomCode');
      const storedTime = localStorage.getItem('staticRandomCodeTime');
  
      if (!randomCode || !storedTime) {
        // Generate a new code and store its value and the current time in localStorage
        randomCode = generateRandomCode();
        localStorage.setItem('staticRandomCode', randomCode);
        localStorage.setItem('staticRandomCodeTime', Date.now());
      }
  
      codeElement.textContent = randomCode;
    }
  }
  
  // Call the updateRandomCode function on page load
  window.addEventListener('load', updateRandomCode);
}
