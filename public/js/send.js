

$(document).on("click", ".list-img", function(e) {
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