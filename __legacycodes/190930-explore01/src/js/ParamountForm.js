import jQuery from 'jquery';
import 'parsleyjs';

let html_paramount_form = `
<section class="paramount-form">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 col-md-10">

						<section class="parsley">
							<div class="alert alert-warning d-none">
								<h4>Oh snap!</h4>
								<p>This form seems to be invalid :(</p>
							</div>

							<div class="alert alert-success d-none">
								<h4>Yay!</h4>
								<p>Everything seems to be ok :)</p>
							</div>


							<form class="form__property-interest" action="" method="POST" data-parsley-validate="">

								<div class="form-group">
									<div class="form-row">
										<div class="col col-sm-6">
											<!-- <label for="fullname">Full Name:</label> -->
											<input type="text" class="form-control" placeholder="Full Name" name="fullname"
												data-parsley-trigger="change" data-parsley-length="[8, 40]" required="">
                    </div>
                    
										<!--<div class="col-12 col-sm-6">
                      <input type="email" class="form-control" placeholder="E-mail" name="email"
                        data-parsley-trigger="change" required="">
                    </div>-->
									</div>

                  <div class="form-row">
                    <div class="col-12 col-sm-6">
                      <!-- <label for="email">Email:</label> -->
                      <input type="email" class="form-control" placeholder="E-mail" name="email"
                        data-parsley-trigger="change" required="">
                    </div>
										<!--<div class="col-12 col-sm-6">
                      <input type="text" class="form-control" placeholder="Mobile Phone" name="mobile"
                        data-parsley-type="digits" data-parsley-trigger="change" data-parsley-length="[8, 10]"
                        maxlength="10" required="">
                    </div>
										<div class="col-12 col-sm-6">
                    <select class="form-control" id="exampleFormControlSelect1">
                      <option disabled selected> &mdash; Please select &mdash; </option>
                      <option value="3001">General Enquiries</option>
                      <option value="3002">Products</option>
                      <option value="3003">Customer Care</option>
                      <option value="3004">Leasing Enquiries</option>
                    </select>
										</div>-->
                  </div>
                  <div class="form-row">
                  <div class="col-12 col-sm-6">
                      <!-- <label for="mobile">Mobile Number:</label> -->
                      <input type="text" class="form-control" placeholder="Mobile Phone" name="mobile"
                        data-parsley-type="digits" data-parsley-trigger="change" data-parsley-length="[8, 10]"
                        maxlength="10" required="">
                    </div>
                  </div>
                  
								</div>

								<!--<div class="form-group">
									<div class="form-row">
										<div class="col">
											<p>Please select the property you're interested in:</p>
										</div>
									</div>
									<div class="form-row pp_projects">

										<div class="col-12 col-md-6 pp_projects--1">
										</div>

										<div class="col-12 col-md-6 pp_projects--2">
										</div>

									</div>
								</div>-->

                <!-- agreement checkbox -->
                <div class="form-group form-group__acceptance">
                  <div class="form-row">
                    <div class="col">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="privacy" id="privacy" data-parsley-required>
                        <label class="form-check-label" for="privacy">
                          I have understood and accepted the <a href="https://paramountproperty.my/sejati/privacy-policy-disclaimer/" target="_blank">Privacy Policy and Disclaimer Notices</a>. *
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="pdpn" id="pdpn" data-parsley-required>
                        <label class="form-check-label" for="pdpn">
                          I have understood and accepted the <a href="https://paramountproperty.my/wp-content/uploads/PDPA-Notice-PP-18042018-2.pdf" target="_blank">Personal Data
                          Protection Notification</a>. *
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

								<!-- google recaptcha -->
								<!-- <input type="hidden" id="token" name="token">-->

								<!-- submit button -->
								<input type="submit" class="btn btn-primary submit" name="submit_contact">

							</form>

						</section>
					</div>
				</div>
			</div>
		</section>
`;
document.body.innerHTML += html_paramount_form;


(function ($) {

  var currentProject = 314;
  var pp_projects = [{
      'id': 1001,
      'name': 'ATWATER Serviced Apartments',
      'location': 'Petaling Jaya'
    },
    {
      'id': 1003,
      'name': 'ATWATER Office Towers',
      'location': 'Petaling Jaya'
    },
    {
      'id': 1002,
      'name': 'Bukit Banyan',
      'location': 'Sungai Petani'
    },
    {
      'id': 1004,
      'name': 'Berkeley Uptown',
      'location': 'Klang'
    },
    {
      'id': 1005,
      'name': 'Kemuning Idaman',
      'location': 'Shah Alam'
    },
    {
      'id': 1006,
      'name': 'Greenwoods',
      'location': 'Salak Perdana'
    },
    {
      'id': 1007,
      'name': 'Sekitar26',
      'location': 'Shah Alam'
    },
    {
      'id': 1008,
      'name': 'Urbano',
      'location': 'Glenmarie'
    },
    {
      'id': 1009,
      'name': 'Utropolis',
      'location': 'Glenmarie'
    },
    {
      'id': 1010,
      'name': 'Laguna Merbok Business Park',
      'location': 'Sungai Petani'
    },
    {
      'id': 1012,
      'name': 'Utropolis Batu Kawan',
      'location': 'Penang'
    },
    {
      'id': 1013,
      'name': 'Section 14',
      'location': 'Petaling Jaya'
    },
    {
      'id': 314,
      'name': 'Sejati Lakeside',
      'location': 'Cyberjaya'
    },
    {
      'id': 1015,
      'name': 'Sejati Residences',
      'location': 'Cyberjaya'
    },
  ];

  // sort the object by name
  let compare = function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  pp_projects.sort(compare);

  // output properties options
  let output_column1 = '';
  let output_column2 = '';

  // template for each property
  let checkit = function (id, name, location) {
    let checked = (currentProject == id) ? 'checked' : '';
    let outputName = name.toLowerCase().split(' ').join('_');
    return `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="${id}" name="${outputName}" ${checked}>
        <label class="form-check-label" for="${id}">
        ${name}<small>, ${location}</small>
        </label>
      </div>
      `;
  }

  // loop through for two column
  pp_projects.forEach(function (value, index) {
    if (index < pp_projects.length / 2) {
      output_column1 += checkit(value.id, value.name, value.location);
    } else {
      output_column2 += checkit(value.id, value.name, value.location);
    }
  });
  // document.querySelector('.pp_projects--1').innerHTML = output_column1;
  // document.querySelector('.pp_projects--2').innerHTML = output_column2;


  var userData = {
    remark: "Interested in landed projects."
  }

  // form selector
  let formPropertyInterest = document.querySelector('.form__property-interest');
  let submitButton = formPropertyInterest.querySelector('.submit');

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    let ppProjects = document.querySelectorAll('.pp_projects input');
    let get_propert_interest = function (ppProjects) {
      // join all projects
      let propertyArray = [];
      ppProjects.forEach((element, index) => {
        if (element.checked) {
          propertyArray.push(element.name);
        }
      });
      return propertyArray;
    }

    userData.name = document.querySelector('input[name="fullname"]').value;
    userData.email = document.querySelector('input[name="email"]').value;
    userData.phone = document.querySelector('input[name="mobile"]').value;
    userData.project_interested = get_propert_interest(ppProjects).join();

    // validate
    validate_form(userData);

    // form submission - to SAMPROPERTY
    submit_samproperty(userData);
  });

  function validate_form(userData) {
    $('.form__property-interest').parsley().on('field:validated', function () {
        var ok = $('.parsley-error').length === 0;
        $('.bs-callout-info').toggleClass('hidden', !ok);
        $('.bs-callout-warning').toggleClass('hidden', ok);
      })
      .on('form:submit', function () {
        return false; // Don't submit form for this demo
      });
  }

  function submit_samproperty(userData) {
    var samapi = {
      url: "https://api.samproperty.com/api/1.5/lead/test-send",
      apiKey: "ppd-QUka7(5B",
      project_id: 314,
      slug: "1c770a9b",
    }
    $.ajax({
      type: "POST",
      url: `${samapi.url}?slug=${samapi.slug}&project_id=${samapi.project_id}&apikey=${samapi.apiKey}`,
      data: userData,
      dataType: "jsonp",
      crossDomain: true,
      beforeSend: function (response) {
        // submitButton.style.border = "4px solid yellow";
        console.log('sending!!', response);
      },
      success: function (response) {
        console.log('success', response);
        // if (response.status == 'ERROR') {
        //   submitButton.style.border = "4px solid red";
        // } else if (response.status == 'SUCCESS') {
        //   submitButton.style.border = "4px solid green";
        // }
      },
      error: function (response) {
        console.log('error!!', response);
        // submitButton.style.border = "4px solid red";
      }
    });
  }


})(jQuery);