/*******************************************************************************
*
* (c) 2019 Copyright A-Vision Software
*
* File description :        A-Vision web applications
*                           (Non ripple related javascript)
*
* Created by       :        Arnold Velzel
* Created on       :        27/10/2019
*
*******************************************************************************/

window.addEventListener('DOMContentLoaded', (event) => {

let elementsArray = document.querySelectorAll(".login-container");
  if (elementsArray.length) {
    let form = elementsArray[0];
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      window.setTimeout(function(){
        let success = Math.random() > 0.5;

        if (success) {
          ripple.success();
        } else {
          ripple.error();
        }

      }, 1500);


      return false;
    });
  }
});
