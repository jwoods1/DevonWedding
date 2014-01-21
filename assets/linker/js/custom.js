
$(document).ready(function(){
  $("#first").hide();
  $("#last").hide();
  $("#party").hide();
  $("#email").hide();
  $("#rsvpSubmit").hide();
})

$("#modalClose").on("click", function(){
  $("#btnNo").show();
  $("#btnYes").show();
  $("#first").hide();
  $("#last").hide();
  $("#party").hide();
  $("#email").hide();
  $("#rsvpSubmit").hide();
})

$("#btnYes").on( "click", function() {
  $("#btnNo").hide();
  $(this).hide();
  $("#myModalLabel").text("Please fill in your information below")
  $("#first").show();
  $("#last").show();
  $("#party").show();
  $("#email").show();
  $("#rsvpSubmit").show();
});


$("#btnNo").on("click", function(){
  $("#btnYes").remove();
  $(this).replaceWith("<h3>Sorry you can't come, click the link below to see  where we have registered.</h3><a href='/Rsvp/reg'>Registry Page</a>");
  $("#myModalLabel").text("Change Text in assets/linker/js/custom.js");
});

 $.backstretch([
      "/images/1000%20Pixel%20Wide/1.jpg",
      "/images/1000%20Pixel%20Wide/2.jpg",
      "/images/1000%20Pixel%20Wide/3.jpg",
      "/images/1000%20Pixel%20Wide/4.jpg",
      "/images/1000%20Pixel%20Wide/5.jpg",
      "/images/1000%20Pixel%20Wide/6.jpg",
      "/images/1000%20Pixel%20Wide/7.jpg",
      "/images/1000%20Pixel%20Wide/8.jpg",
      "/images/1000%20Pixel%20Wide/9.jpg",
      "/images/1000%20Pixel%20Wide/10.jpg",
      "/images/1000%20Pixel%20Wide/11.jpg",
      "/images/1000%20Pixel%20Wide/13.jpg",
      "/images/1000%20Pixel%20Wide/15.jpg",
      "/images/1000%20Pixel%20Wide/16.jpg",
      "/images/1000%20Pixel%20Wide/17.jpg",
      "/images/1000%20Pixel%20Wide/19.jpg",
      "/images/1000%20Pixel%20Wide/20.jpg",
      "/images/1000%20Pixel%20Wide/21.jpg",
      "/images/1000%20Pixel%20Wide/22.jpg",
      "/images/1000%20Pixel%20Wide/23.jpg",
      "/images/1000%20Pixel%20Wide/24.jpg",
      "/images/1000%20Pixel%20Wide/26.jpg",
      "/images/1000%20Pixel%20Wide/27.jpg",
      "/images/1000%20Pixel%20Wide/28.jpg",
      "/images/1000%20Pixel%20Wide/29.jpg",
      "/images/1000%20Pixel%20Wide/30.jpg",
      "/images/1000%20Pixel%20Wide/31.jpg",
      "/images/1000%20Pixel%20Wide/32.jpg",
      "/images/1000%20Pixel%20Wide/33.jpg",
      "/images/1000%20Pixel%20Wide/34.jpg",
      "/images/1000%20Pixel%20Wide/35.jpg",
      "/images/1000%20Pixel%20Wide/36.jpg",
      "/images/1000%20Pixel%20Wide/37.jpg",
      "/images/1000%20Pixel%20Wide/39.jpg",
      "/images/1000%20Pixel%20Wide/40.jpg",
      "/images/1000%20Pixel%20Wide/41.jpg",

  ], {duration: 2000, fade: 750});

//Mandrill Mail

var emailAdd = $('#emailTest').val();
// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('4CNgZbD1hI1anejz-cnajw');

// create a variable for the API call parameters
var params = {
    "message": {
        "from_email":"hightower.devon.anthony@gmail.com",
        "to":[{"email":emailAdd}],
        "subject": "Sending a text email from the Mandrill API",
        "html": "<h1>Thanks for RSVPing for the wedding</h1>",
        "autotext":true,
        "track_clicks":true,
        "track_opens":true
    }
};

$("#btnYes").on("click",function sendTheMail() {
// Send the email!
    m.messages.send(params, function(res) {
        log(res);
    }, function(err) {
        log(err);
    });
});

