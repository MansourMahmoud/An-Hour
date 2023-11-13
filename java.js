/* setInterval => the Hour */
setInterval(() => {
  var myTime = new Date();
  var myH1_Hour = document.querySelector(".Hour");
  var myH1_zero_before_hour = document.querySelector(".my_zero_before_hour");
  var theHour = myTime.getHours();
  var PM = document.querySelector(".PM");

  if (theHour >= 12) {
    myH1_Hour.innerHTML = 0 + theHour - 12 + ":";
    PM.innerHTML = "PM";

    // If inside if
    if ((theHour = (13 && theHour < 22) || theHour < 10)) {
      myH1_zero_before_hour.innerHTML = "0";
    } else {
      myH1_zero_before_hour.innerHTML = "";
    }
  } else {
    myH1_Hour.innerHTML = theHour + ":";
    PM.innerHTML = "AM";

    if ((theHour >= 12 && theHour !== 20) || (theHour >= 0 && theHour !== 10)) {
      myH1_zero_before_hour.classList.remove("hide");
    } else {
      myH1_zero_before_hour.classList.add("hide");
    }
  }
}, 1000);

/* setInterval => the Minute */
setInterval(() => {
  var myTime = new Date();
  var myH1_Minute = document.querySelector(".Minute");
  var theMinute = myTime.getMinutes();

  if (theMinute < 10) {
    myH1_Minute.innerHTML = "0" + theMinute + ":";
  } else {
    myH1_Minute.innerHTML = theMinute + ":";
  }
}, 1000);

/* setInterval => the Second */
setInterval(() => {
  var myTime = new Date();
  var myH1_Second = document.querySelector(".Second");
  var theSecond = myTime.getSeconds();

  if (theSecond < 10) {
    myH1_Second.innerHTML = "0" + theSecond + ": ";
  } else {
    myH1_Second.innerHTML = theSecond + ":";
  }
}, 1000);
