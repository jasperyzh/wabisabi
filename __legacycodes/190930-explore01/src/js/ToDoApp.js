/**
 * get server's date via ajax
 */
var xmlHttp;

function srvTime() {
  try {
    //FF, Opera, Safari, Chrome
    xmlHttp = new XMLHttpRequest();
  } catch (err1) {
    //IE
    try {
      xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
    } catch (err2) {
      try {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      } catch (eerr3) {
        //AJAX not supported, use CPU time.
        console.log("AJAX not supported");
        // alert("AJAX not supported");
      }
    }
  }
  xmlHttp.open('HEAD', window.location.href.toString(), false);
  xmlHttp.setRequestHeader("Content-Type", "text/html");
  xmlHttp.send('');
  return xmlHttp.getResponseHeader("Date");
}
var st = srvTime();
var serverDate = new Date(st);
let getServerTime = document.querySelector('.server-time');
getServerTime.innerHTML = serverDate;

/**
 * get local time
 */
var localTime = new Date();
let getClientTime = document.querySelector('.client-time');
getClientTime.innerHTML = localTime;


/**
 * countdown functions
 */
// set the target date/time
let countdownTarget = 'Aug 31, 2019 00:00:00'
var countdownDate = new Date(countdownTarget).getTime();

// Update the count down every 1 second
var countdownInterval = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let getTargetTime = document.querySelector('.target-time');
  getTargetTime.innerHTML = countdownTarget;


  let getCountdownTime = document.querySelector('.countdown-time');
  getCountdownTime.innerHTML = `
  ${days}<small>days</small> ${pad(hours,2)}<small>hr</small> ${pad(minutes,2)}<small>min</small> ${pad(seconds,2)}<small>s</small>
  `;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(countdownInterval);
    getCountdownTime.innerHTML = `Countdown is over`;
  }
}, 1000);


/**
 * helper - pad
 * @param {*} n 
 * @param {*} width 
 * @param {*} z 
 */
// pad the digit with 0
// pad(value, number_of_digit);
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}


/**
 * petition form
 */
