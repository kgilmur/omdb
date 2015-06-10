$(function(){


    $('.favoritesform').on('submit',function(e) {
      e.preventDefault();

      var myUrl = $(this).attr('action');
      var thisAddButton = $(this).serialize();
      // var value = $(".favoritesform input:last-child").attr("value");
      // console.log(value);

    $.ajax({
      method:'POST',
      url:myUrl,
      data:thisAddButton
    }).done(function(data) {
      // console.log('save complete',data);
      location.href="/favorites";

    })
  });

console.log("script loading")

//       $('#favoritesbutton').val('Remove from Favorites');

//     });
//   }else{
//     var imdbdID = $('.favoritesform input:last-child').val()
//     $.ajax({
//         method: 'DELETE',
//         url:myUrl + '/' + imdbdID
//       }).done(function(data) {
//         $('#favoritesbutton').val('Added to Favorites');
//       })

//     }
// });
//   })

  $('.delete-link').on('click',function(e) {
    e.preventDefault();
    var delBtn = $(this);
    if(confirm("Are you sure you want to delete this?")) {
    var myUrl = $(this).attr('href');
      $.ajax({
        method: 'DELETE',
        url:myUrl
      }).done(function(data) {
        //reload page or...
        //remove div row from dom
        delBtn.closest('tr').fadeOut('slow',function() {
          $(this).remove();
        })
      });
    }
  });
});