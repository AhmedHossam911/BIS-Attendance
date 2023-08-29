// popups

    {
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
    }
  
// Generate a random code based on the current date lec1

    {
      const givenCodes = [
        "1E7LC9E3C21",
        "1L5EC2L9C7E",
        "1C8LE6E4C2L",
        "19E3C7L1ELC",
        "1L2CE8ELC6E",
        "1C4LE9E5L1C",
        "1E7C3L8C9LE",
        "1L6EC1E8C3C",
        "1C5LE9E2L1E",
        "1E4LC7C1LE9"
          ];

      const codeElement = document.getElementById('random-code');
      if (codeElement) {
        const randomIndex = Math.floor(Math.random() * givenCodes.length);
        codeElement.textContent = givenCodes[randomIndex];
      }
    }

// Generate a random code based on the current date lec2
      
    {
      const givenCodes = [
        " 22E9C23L7C1 ",
        " 22E5L7C2CE9 ", 
        " 22L8E4C6E2C ",
        " 22C7L3NE9E1 ",
        " 22E8C6E2LC7 ",
        " 22L4CE5E9C1 ",
        " 22C7E9L3CL8 ",
        " 22C6E1E8LC3 ",
        " 22C5E1LE9E2 ",
        " 22LE7C1CE94 ",
          ];
    
      const codeElement = document.getElementById('random-code-1');
      if (codeElement) {
        const randomIndex = Math.floor(Math.random() * givenCodes.length);
        codeElement.textContent = givenCodes[randomIndex];
      }
    }

// Generate a random code based on the current date lec3
            
    {
      const givenCodes = [
        "32E9C7L23C1" ,
        "32E5LC7E29C" ,
        "32L4E6C8E2C" ,
        "32E1C7NL39E" ,
        "32E8C6E72LC" ,
        "32C4E9E15CL" ,
        "32L3C79CE8L" , 
        "32L1E3C86EC" ,
        "32E9LC5E21E" ,
        "32C1E7CE94L" ,
          ];
    
      const codeElement = document.getElementById('random-code-2');
      if (codeElement) {
        const randomIndex = Math.floor(Math.random() * givenCodes.length);
        codeElement.textContent = givenCodes[randomIndex];
      }
    }
        

// Generate a random code based on the current date lec4
    {
      const givenCodes = [
        "43E9C21LC7",
        "43E5LC72CE9",
        "43L6E8C4E2",
        "43E1CN7EL93",
        "43E8C7E26LC",
        "43C5E1E94LC",
        "43L3CE79CE8",
        "43L1E6C2E8C",
        "43E9L5CE12",
        "43C8CE719EL",
      ];
    
      const codeElement = document.getElementById('random-code-3');
      if (codeElement) {
        const randomIndex = Math.floor(Math.random() * givenCodes.length);
        codeElement.textContent = givenCodes[randomIndex];
      }
    }
    
// sscript for rotate-message but.
{
  document.addEventListener('DOMContentLoaded', function () {
    const rotateMessage = document.querySelector('.rotate-message');
    const closeRotateMessageButton = document.getElementById('closeRotateMessage');
  
    closeRotateMessageButton.addEventListener('click', function () {
      rotateMessage.style.display = 'none';
    });
  });
  }
  //end of script
  