$(document).ready(function (event) {
  
  $('#form').submit(function (event) {
    var formdata = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdFrTq6VAjLYUAPJRHpZGiqG-LP07WP_cKR2VRZ9Rtmk4UkBQ/formResponse",
      data: formdata,
      type: 'POST',
      dataType: 'xml',
      statusCode: {
        0: function () {
          $('.end-message').slideDown();
          $('.submit-btn').fadeOut();
        },
        200: function () {
          $('.false-message').slideDown();
        }
      }
    });
    event.preventDefault();
  });
}); 