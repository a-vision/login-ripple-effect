/*******************************************************************************
*
* (c) 2019 Copyright A-Vision Software
*
* File description :        A-Vision web applications
*                           (Login handler)
*
* Created by       :        Arnold Velzel
* Created on       :        27/10/2019
*
*******************************************************************************/

class loginRipple {

  constructor(id) {
    this.loginContainerID = id;
  }

  add() {
    // Add ripple to login
    let loginContainer = document.getElementById(this.loginContainerID);
    if (loginContainer) {
      let rippleDiv = document.createElement('div');
      rippleDiv.className = 'ripple';
      loginContainer.parentNode.appendChild(rippleDiv);
      window.setTimeout(function(){
        rippleDiv.parentNode.removeChild(rippleDiv);
      }, 10000);
    }
  }
};

var ripple = new loginRipple('login-container');

window.addEventListener('DOMContentLoaded', (event) => {
  ripple.add();

  let elementsArray = document.querySelectorAll(".login-container > label input");
  elementsArray.forEach(function(elem) {
    elem.addEventListener("keydown", function() {
      ripple.add();
    });
  });
});
