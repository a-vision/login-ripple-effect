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

  add(type) {
    // Add ripple to login
    let loginContainer = document.getElementById(this.loginContainerID);
    if (loginContainer) {
      let rippleDiv = document.createElement('div');
      rippleDiv.className = 'ripple';
      if (type) {
        rippleDiv.className += ' ' + type;
      }
      loginContainer.parentNode.appendChild(rippleDiv);
      window.setTimeout(function(){
        rippleDiv.parentNode.removeChild(rippleDiv);
      }, 5000);
    }
  }

  loaded() {
    this.add('loaded');
  }

  keydown() {
    this.add('keydown');
  }

  processing() {
    // Three ripples for processing
    let self = this;
    window.setTimeout(function(){
      self.add('processing');
    }, 150);
    window.setTimeout(function(){
      self.add('processing');
    }, 300);
    this.add('processing');
  }

  success() {
    this.add('success');
  }

  error() {
    this.add('error');
  }

  reset() {
    this.add('reset');
  }
};

var ripple = new loginRipple('login-container');

window.addEventListener('DOMContentLoaded', (event) => {
  ripple.loaded();

  let inputsArray = document.querySelectorAll('.login-container > label input');
  inputsArray.forEach(function(elem) {
    elem.addEventListener("keydown", function() {
      ripple.keydown();
    });
  });

  let formsArray = document.querySelectorAll('.login-container');
  if (formsArray.length) {
    let form = formsArray[0];
    form.addEventListener("submit", function(e) {
      ripple.processing();

      e.preventDefault();
      return false;
    });
  }
});
