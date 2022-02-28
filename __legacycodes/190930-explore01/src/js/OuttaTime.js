class OuttaTime {
  constructor() {
    console.log('outta time');

    this.html_outtatime = `
    <!-- outtatime - start -->
		<section id="outtatime">
			<div class="container">
				<div class="row">
					<div class="col">
						<p id="countdown"></p>

					</div>
				</div>
			</div>
		</section>
		<!-- outtatime - end -->
    `;

    document.body.innerHTML += this.html_outtatime;

    this.setup();

    var d = new Date();
    // var n = d.getTime();
    // console.log(n);
    console.log(d.getFullYear());
    console.log(d.getMonth());
    console.log(d.getDate());
    console.log(d.getDay());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getMilliseconds());
    // console.log(d.getTimezoneOffset());
  }

  setup() {
    // Set the date we're counting down to
    // var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get today's date and time
      // var now = new Date().getTime();

      // Find the distance between now and the count down date
      // var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let d = new Date();

      // Display the result in the element with id="demo"
      // document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
      // minutes + "m " + seconds + "s ";
      document.getElementById("countdown").innerHTML = ` 
        ${d.getHours()}:${d.getMinutes()}
        `;

      // If the count down is finished, write some text 
      // if (distance < 0) {
      //   clearInterval(x);

      //   document.getElementById("countdown").innerHTML = "EXPIRED";
      // }
    }, 6);
  }
}

export default OuttaTime;