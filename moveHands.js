//Position hands on load
$(document).ready(changeAngle);

function changeAngle() {
  //Get the hour, minute, and second
  let date = new Date();
  let second = date.getSeconds();
  let minute = date.getMinutes();
  let hour =  date.getHours();

  // Keep it in a 12 hour frame as Analog clocks don't use 24 time
  if(hour >= 12)
  {
    hour -= 12;
  }

  // Determine angles of hands
  let secondAngle = second*6+270;
  let minuteAngle = minute*6+270;
  let hourAngle = (30 * ((hour % 12) + minute / 60)) + 270;

  //Reset angles to stay in the circle in the event they are greater than 360
  if ( secondAngle > 360 )
  {
    secondAngle -= 360;
  }
  if ( minuteAngle > 360 )
  {
    minuteAngle -= 360;
  }
  if ( hourAngle > 360 )
  {
    hourAngle -= 360;
  }

  //Set angles of hands
  $("#secondHand").css({'transform':'rotate(' + secondAngle +'deg)'});
  $("#minuteHand").css({'transform':'rotate(' +  minuteAngle +'deg)'});
  $("#hourHand").css({'transform':'rotate(' + hourAngle + 'deg)'});
}

//Move the hands every second
setInterval(changeAngle, 1000);
