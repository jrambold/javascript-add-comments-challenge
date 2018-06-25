$(document).ready(function(){
  // add your code here
  $("form").hide();

  $('#new_comment_button').on("click", function() {
    $("form").show();
    $("#new_comment_button").hide();
  });

  $('#form_submit').on("click", function(event) {
    event.preventDefault();
    $("form").hide();
    $("#new_comment_button").show();
    let comment = $('input[name="comment"]').val();
    let user = $('input[name="user"]').val();

    if (comment) {
      $(`<li>${comment}<span class="author">${user}</span></li>`).appendTo("#comment_list");
    }
  });
})
