$("#btnYes").on( "click", function() {
  $("#btnNo").remove();
  $(this).replaceWith("<header>Please fill in your information below</header><form role='form'><div class='form-group'><label for='exampleInputEmail1'>Email address</label><input type='email' class='form-control' id='exampleInputEmail1' placeholder='Enter email'></div></form>");
});

$("#btnNo").on("click", function(){
  $("#btnYes").remove();
  $(this).replaceWith("<h2>You Selected No! :( </h2>");
});