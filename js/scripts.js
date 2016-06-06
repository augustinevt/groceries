


// $(function() {
//
// });

$(document).ready(function() {
  $('button').click(function(event) {
    event.preventDefault();
    var groceries = $('textarea').val().split(", ");
    var final_list = groceries.map(function(item) {
      var item = item.toUpperCase()
      return item.toUpperCase();
    });
    final_list.sort();
    final_list.forEach(function(item) {
      $(".output ul").append("<li> " + item + " </li>" );
    });

      //
      // var main_list = groceries.map(function(item) {
      //   $(".output ul").append("<li> " + item + " </li>" );
      //   return item;
    // });

  });
});
