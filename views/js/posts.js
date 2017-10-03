$(document).ready(function(){

    $('.vote-up').submit(function (e) {
      e.preventDefault();
      var postId = JSON.parse($(this).data('id'));
      var postUrl = (postId + "/vote-up");

      $.post(postUrl, function(data) {
          $('.voteCount').html(data.voteScore);
      });
    });

    $('.vote-down').submit(function (e) {
      e.preventDefault();

      var postId = JSON.parse($(this).data('id'));
      var postUrl = (postId + "/vote-down");

      $.post(postUrl, function(data) {
          $('.voteCount').html(data.voteScore);
      });
    });

});
