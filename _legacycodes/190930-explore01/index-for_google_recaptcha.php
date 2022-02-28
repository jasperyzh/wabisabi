<?php
if (isset($_POST['submit_contact'])){
	$url = "https://www.google.com/recaptcha/api/siteverify";
	$data = [
		'secret' => '6Lci77AUAAAAAMacpJ0ACBM-kSiWnFTbCh65YCjQ',
		'response' => $_POST['token'],
		'remoteip' => $_SERVER['REMOTE_ADDR'],
	];
	print_r($data);

	$options = array(
		'http'	=> array(
			'header'	=> "Content-type: application/x-www-form-urlencoded\r\n",
			'method' => 'POST',
			'content'	=> http_build_query($data),
		)
	);
	print_r($options);

	$context = stream_context_create($options);
	$response =  file_get_contents($url, false, $context);

	$res = json_decode($response, true);
	if($res['success']){
		// save data to database
		echo '<br>';
		echo 'data successfully recaptcha';
	} else {
		// print error message
		echo '<br>';
		echo 'sum ting wong';
	}
}
?>

<html>

<head>
  <meta charset="utf-8">

  <title>VueApp</title>
  <meta name="description" content="VueApp">
  <meta name="author" content="VueApp">
  <meta name="viewport" content="width=device-width">
</head>

<body class="body">
  <div class="site-container">

    <!-- preloader - start -->
    <div class="preloader">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <!-- preloader - end -->

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


    <section id="app">
    </section>

    <!-- <section id="app">
			<button v-on:click="increase(3, $event)">Click!</button>
			<p>{{ counter }}</p>

			<p v-on:mousemove="updateCoordinate">
				Coordinate: {{x}}, {{y}}
				- <span v-on:mousemove.stop=""> Hello World </span>
			</p>
			<input type="text" v-on:keyup.enter="alertMe">
			<hr>
			<button v-on:click="showAlert">Show Alert</button>
			<input type="text" v-on:keyup="keydowningFunc">
			<p>Keydown value: {{ keydowning }}</p>

			<input type="text" v-on:keydown.enter="keyEnterFunc">
			<p>KeyEnter value: {{keyEnter}}</p>
		 <p><a v-bind:href="defaultUrl" v-bind:target="getTarget">Google</a></p>

			<hr>

			<p :style="{color: color}">Current Value: {{ value }}</p>
			<input type="text" v-model="color">
			<button @click="value += 5">Add 5</button>
			<button @click="value += 1">Add 1</button>
			<p>Result: {{ result }}</p>

			<hr>
		</section> -->
    <!--
		<section class="grid">
			<div class="content__1">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore at quos repellat sit ut laboriosam, quidem
				autem placeat.
			</div>
			<div class="content__2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste commodi recusandae itaque velit expedita
				error minima alias!
			</div>
			<div class="content__3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste commodi recusandae itaque velit expedita
				error minima alias!
			</div>
			<div class="content__4">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste commodi recusandae itaque velit expedita
				error minima alias!
			</div>
			<div class="content__5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste commodi recusandae itaque velit expedita
				error minima alias!
			</div>
			<div class="content__6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste commodi recusandae itaque velit expedita
				error minima alias!
			</div>
		</section> -->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10">


          <section class="parsley">


            <div class="bs-callout bs-callout-warning hidden">
              <h4>Oh snap!</h4>
              <p>This form seems to be invalid :(</p>
            </div>

            <div class="bs-callout bs-callout-info hidden">
              <h4>Yay!</h4>
              <p>Everything seems to be ok :)</p>
            </div>

            <!-- <form id="demo-form" data-parsley-validate="">

							<label for="fullname">Full Name * :</label>
							<input type="text" class="form-control" name="fullname" required="">


							<label for="email">Email * :</label>
							<input type="email" class="form-control" name="email" data-parsley-trigger="change" required="">

							<label for="contactMethod">Preferred Contact Method *:</label>
							<p>
								Email: <input type="radio" name="contactMethod" id="contactMethodEmail" value="Email" required="">
								Phone: <input type="radio" name="contactMethod" id="contactMethodPhone" value="Phone">
							</p>

							<label for="hobbies">Hobbies (Optional, but 2 minimum):</label>
							<p>
								Skiing <input type="checkbox" name="hobbies[]" id="hobby1" value="ski" data-parsley-mincheck="2"><br>
								Running <input type="checkbox" name="hobbies[]" id="hobby2" value="run"><br>
								Eating <input type="checkbox" name="hobbies[]" id="hobby3" value="eat"><br>
								Sleeping <input type="checkbox" name="hobbies[]" id="hobby4" value="sleep"><br>
								Reading <input type="checkbox" name="hobbies[]" id="hobby5" value="read"><br>
								Coding <input type="checkbox" name="hobbies[]" id="hobby6" value="code"><br>
							</p>

							<p>
								<label for="heard">Heard about us via *:</label>
								<select id="heard" required="">
									<option value="">Choose..</option>
									<option value="press">Press</option>
									<option value="net">Internet</option>
									<option value="mouth">Word of mouth</option>
									<option value="other">Other..</option>
								</select>
							</p>

							<p>
								<label for="message">Message (20 chars min, 100 max) :</label>
								<textarea id="message" class="form-control" name="message" data-parsley-trigger="keyup"
									data-parsley-minlength="20" data-parsley-maxlength="100"
									data-parsley-minlength-message="Come on! You need to enter at least a 20 character comment.."
									data-parsley-validation-threshold="10"></textarea>
							</p>

							<br>
							<input type="submit" class="btn btn-primary" value="validate">

							<p><small>* Please, note that this demo form is not a perfect example of UX-awareness. The aim here is to
									show a
									quick overview of parsley-API and Parsley customizable behavior.</small></p>
						</form>

						<hr>


						<form class="demo-form-2" data-parsley-validate="">
							<div class="first">
								<label for="firstname">Firstname:</label>
								<input type="text" class="form-control" name="firstname" data-parsley-length="[4, 20]"
									data-parsley-group="block1">

								<label for="lastname">Lastname:</label>
								<input type="text" class="form-control" name="lastname" data-parsley-length="[4, 20]"
									data-parsley-group="block1">
							</div>
							<hr>
							<div class="second">
								<label for="fullname">Fullname:</label>
								<input type="text" class="form-control" name="fullname" data-parsley-length="[8, 40]"
									data-parsley-group="block2">
							</div>

							<div class="invalid-form-error-message"></div>
							<input type="submit" class="btn btn-primary validate">
						</form> -->

            <form class="form__property-interest" action="" method="GET" data-parsley-validate="">

              <div class="form-group">
                <div class="form-row">
                  <div class="col col-sm-6">
                    <!-- <label for="fullname">Full Name:</label> -->
                    <input type="text" class="form-control" placeholder="Full Name" name="fullname"
                      data-parsley-trigger="change" data-parsley-length="[8, 40]" required="">
                  </div>
                </div>

                <div class="form-row">
                  <div class="col-12 col-sm-6">
                    <!-- <label for="email">Email:</label> -->
                    <input type="email" class="form-control" placeholder="E-mail" name="email"
                      data-parsley-trigger="change" required="">
                  </div>
                  <div class="col-12 col-sm-6">
                    <!-- <label for="mobile">Mobile Number:</label> -->
                    <input type="text" class="form-control" placeholder="Mobile Phone" name="mobile"
                      data-parsley-type="digits" data-parsley-trigger="change" data-parsley-length="[8, 10]"
                      maxlength="10" required="">
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <p>Please select the property you're interested in:</p>
                  </div>
                </div>
                <div class="form-row">

                  <div class="col-12 col-md-6 pp_projects--1">
                  </div>

                  <div class="col-12 col-md-6 pp_projects--2">
                  </div>

                </div>
              </div>

              <!-- agreement checkbox -->
              <div class="form-row">
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="privacy" id="privacy">
                    <label class="form-check-label" for="privacy">
                      I have understood and accepted the Privacy Policy and
                      Disclaimer Notices. *
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="pdpn" id="pdpn">
                    <label class="form-check-label" for="pdpn">
                      I have understood and accepted the Personal Data
                      Protection Notification. *
                    </label>
                  </div>
                </div>
              </div>

              <!-- submit button -->
              <input type="submit" class="btn btn-primary" name="submit_contact">

            </form>


          </section>
        </div>
      </div>
    </div>

  </div>

  <!-- <div style="height: 3000px; background-color: #aaa">
		start
	</div>
	<div id="basic-waypoint" style="height: 1000px">
		trigger waypoints
	</div>
	<div style="height: 3000px; background-color: #aaa">
		end
	</div>
	<div class="sidebar-table">
	</div> -->

  <script src="./src/apps.js"></script>
</body>

</html>