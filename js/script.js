var player = 1;
var gameOver = false;

$('.box').click(function() {
  if (!gameOver) {
    if (player === 1 && !$(this).hasClass("x") && !$(this).hasClass("o")) {
      $(this).addClass('x');
      $(this).addClass('m');
      player = 2;
    }else if (player === 2 && !$(this).hasClass("x") && !$(this).hasClass("o")) {
      $(this).addClass('o');
      $(this).addClass('m');
      player = 1;
    }
  }

  $('.new').click(function(event) {
    location.reload();
  });


  for (var i = 0; i < 9; i++) {
    if ($("#box"+i).hasClass("x")) {
    }
  }

  $("#box1").hasClass("x")&&$("#box2").hasClass("x")&&$("#box3").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')):
  $("#box4").hasClass("x")&&$("#box5").hasClass("x")&&$("#box6").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box7").hasClass("x")&&$("#box8").hasClass("x")&&$("#box9").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("x")&&$("#box4").hasClass("x")&&$("#box7").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box2").hasClass("x")&&$("#box5").hasClass("x")&&$("#box8").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box3").hasClass("x")&&$("#box6").hasClass("x")&&$("#box9").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box3").hasClass("x")&&$("#box5").hasClass("x")&&$("#box7").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("x")&&$("#box5").hasClass("x")&&$("#box9").hasClass("x") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("o")&&$("#box2").hasClass("o")&&$("#box3").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box4").hasClass("o")&&$("#box5").hasClass("o")&&$("#box6").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box7").hasClass("o")&&$("#box8").hasClass("o")&&$("#box9").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("o")&&$("#box4").hasClass("o")&&$("#box7").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box2").hasClass("o")&&$("#box5").hasClass("o")&&$("#box8").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box3").hasClass("o")&&$("#box6").hasClass("o")&&$("#box9").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box3").hasClass("o")&&$("#box5").hasClass("o")&&$("#box7").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("o")&&$("#box5").hasClass("o")&&$("#box9").hasClass("o") ? (gameOver = true, $(".content").text('Player ' + player +' Lost')) :
  $("#box1").hasClass("m")&&$("#box2").hasClass("m")&&$("#box3").hasClass("m")&&$("#box4").hasClass("m")&&$("#box5").hasClass("m")&&$("#box6").hasClass("m")
  &&$("#box7").hasClass("m")&&$("#box8").hasClass("m")&&$("#box9").hasClass("m") ? (gameOver = true, $(".content").text('DREW!')) : $('.player').text('Player '+ player);


});
