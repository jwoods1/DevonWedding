$("#btnYes").on( "click", function() {
  $("#btnNo").remove();
  $(this).replaceWith("<form action='/rsvp/create' method='post' role='form'><div class='form-group'><input type='text' class='form-control' placeholder='your first name' name='firstName'></div><div class='form-group'><input type='text' class='form-control' placeholder='Last Name' name='lastName'></div><div class='form-group'><input type='text' class='form-control' placeholder='Number in party' name='guestNum'></div><div class='form-group'><input type='email' class='form-control' name='email' placeholder='Enter email'></div><input type='submit' class='btn btn-lg btn-primary btn-block' value='RSVP'/><input type='hidden' name='_csrf' value='<%=_csrf %>' /></form>");
  $("#myModalLabel").text("Please fill in your information below");
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
      "/images/1000%20Pixel%20Wide/12.jpg",
      "/images/1000%20Pixel%20Wide/13.jpg",
      "/images/1000%20Pixel%20Wide/14.jpg",
      "/images/1000%20Pixel%20Wide/15.jpg",
      "/images/1000%20Pixel%20Wide/16.jpg",
      "/images/1000%20Pixel%20Wide/17.jpg",
      "/images/1000%20Pixel%20Wide/18.jpg",
      "/images/1000%20Pixel%20Wide/19.jpg",
      "/images/1000%20Pixel%20Wide/20.jpg",
      "/images/1000%20Pixel%20Wide/21.jpg",
      "/images/1000%20Pixel%20Wide/22.jpg",
      "/images/1000%20Pixel%20Wide/23.jpg",
      "/images/1000%20Pixel%20Wide/24.jpg",
      "/images/1000%20Pixel%20Wide/25.jpg",
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
      "/images/1000%20Pixel%20Wide/38.jpg",
      "/images/1000%20Pixel%20Wide/39.jpg",
      "/images/1000%20Pixel%20Wide/40.jpg",
      "/images/1000%20Pixel%20Wide/41.jpg",

  ], {duration: 2000, fade: 750});

