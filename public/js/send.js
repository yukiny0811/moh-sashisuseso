

$(document).on("click", ".list-img", function(e) {
  
  console.log("test");
  
  let id = parseInt($(this).attr("id"));
  console.log(id);
  
  var request = {
      url: '/append_readyphoto/' + id.toString(),
      method: 'POST',
      data: {},
      success: function (response) {
          console.log(response.responseText);
      }
  };
  $.ajax(request);
});

$('.single-item').slick({
    autoplay: true,
    dots: true,
    arrows: true,
});

$(function() {
    var loader = $('.loader-wrap');
    setTimeout(function() {
        loader.fadeOut();
    }, 3000);
});