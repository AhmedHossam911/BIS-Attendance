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
  function generateAndStoreRandomCode1() {
    const storedRandomCode = getCookie('staticRandomCode1');
    const currentTime = Date.now();
  
    if (!storedRandomCode || currentTime - parseInt(getCookie('staticRandomCodeTime1')) >= 180000) {
      const randomCode = generateRandomCode1();
      setCookie('staticRandomCode1', randomCode, 1); // Expires in 1 day
      setCookie('staticRandomCodeTime1', currentTime.toString(), 1); // Expires in 1 day
      codeElement.textContent = randomCode;
    }
  }
  
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
  
  function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }

  function generateRandomCode() {
    const randomIndex = generateRandomIndex(givenCodes.length);
    return givenCodes[randomIndex];
  }

  function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  function updateRandomCode() {
    const codeElement = document.getElementById('random-code');
    if (codeElement) {
      const storedRandomCode = getCookie('staticRandomCode');
      if (!storedRandomCode) {
        const randomCode = generateRandomCode();
        setCookie('staticRandomCode', randomCode, 1); // Expires in 1 day
        setCookie('staticRandomCodeTime', Date.now().toString(), 1); // Expires in 1 day
        codeElement.textContent = randomCode;
      } else {
        const storedTime = parseInt(getCookie('staticRandomCodeTime'));
        const currentTime = Date.now();
        
      }
    }
  }

  updateRandomCode();
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
    
    function generateRandomIndex(maxIndex) {
      return Math.floor(Math.random() * maxIndex);
    }
  
    function generateRandomCode() {
      const randomIndex = generateRandomIndex(givenCodes.length);
      return givenCodes[randomIndex];
    }
  
    function setCookie(name, value, days) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + expirationDate.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  
    function getCookie(name) {
      const cookieName = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return "";
    }
  
    function updateRandomCode() {
      const codeElement = document.getElementById('random-code-1');
      if (codeElement) {
        const storedRandomCode = getCookie('staticRandomCode');
        if (!storedRandomCode) {
          const randomCode = generateRandomCode();
          setCookie('staticRandomCode', randomCode, 1); // Expires in 1 day
          setCookie('staticRandomCodeTime', Date.now().toString(), 1); // Expires in 1 day
          codeElement.textContent = randomCode;
        } else {
          const storedTime = parseInt(getCookie('staticRandomCodeTime'));
          const currentTime = Date.now();
          
        }
      }
    }
  
    updateRandomCode();
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
      
      function generateRandomIndex(maxIndex) {
        return Math.floor(Math.random() * maxIndex);
      }
    
      function generateRandomCode() {
        const randomIndex = generateRandomIndex(givenCodes.length);
        return givenCodes[randomIndex];
      }
    
      function setCookie(name, value, days) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expirationDate.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }
    
      function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
        return "";
      }
    
      function updateRandomCode() {
        const codeElement = document.getElementById('random-code-2');
        if (codeElement) {
          const storedRandomCode = getCookie('staticRandomCode');
          if (!storedRandomCode) {
            const randomCode = generateRandomCode();
            setCookie('staticRandomCode', randomCode, 1); // Expires in 1 day
            setCookie('staticRandomCodeTime', Date.now().toString(), 1); // Expires in 1 day
            codeElement.textContent = randomCode;
          } else {
            const storedTime = parseInt(getCookie('staticRandomCodeTime'));
            const currentTime = Date.now();
            
          }
        }
      }
    
      updateRandomCode();
    }
                        
    // Generate a random code based on the current date lec4
    {
      const givenCodes = [
        " 43E9C21LC7  ",
        " 43E5LC72CE9 ",
        " 43L6E8C4E2  ",
        " 43E1CN7EL93 ",
        " 43E8C7E26LC ",
        " 43C5E1E94LC ",
        " 43L3CE79CE8 ",
        " 43L1E6C2E8C ",
        " 43E9L5CE12  ",
        " 43C8CE719EL ",
      ];
    
      function generateRandomIndex(maxIndex) {
        return Math.floor(Math.random() * maxIndex);
      }
    
      function generateRandomCode() {
        const randomIndex = generateRandomIndex(givenCodes.length);
        return givenCodes[randomIndex];
      }
    
      function setCookie(name, value, days) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + expirationDate.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
      }
    
      function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
          let cookie = cookieArray[i];
          while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
          }
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
        return "";
      }
    
      function updateRandomCode() {
        const codeElement = document.getElementById('random-code-3');
        if (codeElement) {
          const storedRandomCode = getCookie('staticRandomCode');
          if (!storedRandomCode) {
            const randomCode = generateRandomCode();
            setCookie('staticRandomCode', randomCode, 1); // Expires in 1 day
            setCookie('staticRandomCodeTime', Date.now().toString(), 1); // Expires in 1 day
            codeElement.textContent = randomCode;
          } else {
            const storedTime = parseInt(getCookie('staticRandomCodeTime'));
            const currentTime = Date.now();
            
          }
        }
      }
    
      updateRandomCode();
    }
                        
