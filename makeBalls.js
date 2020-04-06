//Make some static balls when the page loads for the background.
$(document).ready(makeBallsStay);

//Make a animated ball every second to add to the background.
setInterval(makeBallsAnimate, 1000);

//Makes a ball for the background randomly and animate it. Fade out the ball when animation is finished.
function makeBallsAnimate() {
  //Choose color, start point, and point to animate to randomly.
  let colors = ["blue", "green", "yellow", "purple", "pink", "red", "gray", "brown", "orange"];
  let colorID = Math.floor(Math.random() * colors.length);
  let  startX = Math.floor(Math.random() * 100 + 1);
  let  startY = Math.floor(Math.random() * 100 + 1);
  let  animateX = Math.floor(Math.random() * 100 + 1);
  let  animateY = Math.floor(Math.random() * 100 + 1);

  //Make ball and apply styles to it, then append it to body.
  let div = document.createElement('div');
  $(div).css({'background-color':colors[colorID], "top":startY + "vh", "left":startX + "vw"}); //Apply the styles randomly chosen live.
  $(div).addClass("balls"); //Apply static styles.
  $('body').append(div);

  //Determine the direction of the animation based on the start point.
  //Perhaps conditions should be made more detailed?
  if (startX > 180 || startY > 60) {
    $(div).animate({left: animateX, top: animateY, opacity: '0.2'}, "slow");
  } else {
    $(div).animate({left: "+=" + animateX, top: "+=" + animateY, opacity: '0.2'}, "slow");
  }

  //Fade out when animation complete.
  $(div).fadeOut("slow");

  setInterval(function (div) {$(div).remove(); console.log('I ran');}, 1000);
} //End makeBallsAnimate




//Makes the static background balls. Set points of balls randomly so you get a new background every time you reload it.
function makeBallsStay() {
//Make 20 balls and position randomly
  for (let i = 0; i < 20; i++) {
    //Choose random style settings
    let colors = ["blue", "green", "yellow", "purple", "pink", "red", "gray", "brown", "orange"];
    let colorID = Math.floor(Math.random() * colors.length);
    let  startX = Math.floor(Math.random() * 100 + 1);
    let  startY = Math.floor(Math.random() * 100 + 1);

    //Make the balls and apply styles to them.
    let div = document.createElement('div');
    $(div).css({'background-color':colors[colorID], "top":startY + "vh", "left":startX + "vw", "opacity":0.5}); //Applies randomly chosen styles live.
    $(div).addClass("balls"); //Applies static styles
    $('body').append(div);
  } // End for loop
} //End makeBallsStay
