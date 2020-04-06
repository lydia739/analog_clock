//Position numbers dynacially based on your screen size and re-position if it changes.
$(document).ready(positionNumbers);
$(window).resize(positionNumbers);

function positionNumbers(numbers) {
//Remove any other p elements
  $('p').remove();

  // variable
  let number = 12; // how many number to be placed
  let size = document.getElementById("clockShape").clientWidth; // size of circle
  let cx= size/2; // center of x(in a circle)
  let cy = size/2; // center of y(in a circle)
  let r = size/2; // radius of a circle

  for(let i=1; i<=number; i++) {
    let ang = i*(Math.PI/(number/2)) + 300; //Set the angle. Add 300 to position numbers at proper places on clock.
    let left = cx + (r*Math.cos(ang)); //Get point on X
    let top = cy + (r*Math.sin(ang)); //Get point on Y

    //Make the element and apply the styles to it.
    let num = document.createElement("p");
    $(num).text(i);
    $('#clockShape').append(num);
    $(num).css({'top':top, 'left':left, 'margin-top': '11vh'});
  } //End for loop
} //End positionNumbers
