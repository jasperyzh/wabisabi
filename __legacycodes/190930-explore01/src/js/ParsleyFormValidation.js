import 'parsleyjs';
import jQuery from 'jquery';

class FormValidation {

  constructor() {

    // var $ = jQuery;
    var $ = jQuery;
    /* // (function ($) {
      $('#demo-form').parsley().on('field:validated', function () {
          var ok = $('.parsley-error').length === 0;
          $('.bs-callout-info').toggleClass('hidden', !ok);
          $('.bs-callout-warning').toggleClass('hidden', ok);
        })
        .on('form:submit', function () {
          return false; // Don't submit form for this demo
        });

    // })(jQuery);


    // (function ($) {
      $('.demo-form-2').parsley().on('form:validate', function (formInstance) {
        console.log(formInstance);
        var ok = formInstance.isValid({
          group: 'block1',
          force: true
        }) || formInstance.isValid({
          group: 'block2',
          force: true
        });
        $('.invalid-form-error-message')
          .html(ok ? '' : 'You must correctly fill *at least one of these two blocks!')
          .toggleClass('filled', !ok);
        if (!ok)
          formInstance.validationResult = false;
      });
    // })(jQuery); */
  }
}

export default FormValidation;