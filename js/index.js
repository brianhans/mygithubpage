$(document).ready(function() {

  //Typing Effect
  var name = "Brian Hans.";
  var nameArray = name.split("");
  var timer;

  function frameLooper() {
    if (nameArray.length > 0) {
      document.getElementById("name").innerHTML += nameArray.shift();
    } else {
      clearTimeout(timer);
      $("#description").fadeIn(2000);
      return false;
    }
    timer = setTimeout(frameLooper, 300);
  }
  frameLooper();

  var shown = false;

  function testScroll(ev) {
    var bottom = $("#info").height();
    if ($(window).scrollTop() < bottom) {
      $(".navbar").css("background-color", "#DCDCDC");
    } else {
      $(".navbar").css("background-color", "#FFF");
    }

    if (isScrolledIntoView("#about")) {
      $("#about-content").slideDown();
      shown = true;
    }
  }
  window.onscroll = testScroll

  $(".contact-button").hover(
    function() {
      this.style.fontSize = "20px";
    },
    function() {
      this.style.fontSize = "15px";
    }
  );

  function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  $("#button").click(
    
    function showContact() {
      if($("#contact-me").css("display") == "none"){
      $("#contact-me").slideDown();
      }else{
        $("#contact-me").slideUp();
      }
    });
  
  $("#portBtn").click(function(){
    
    $('html, body').animate({
    scrollTop: $("#portfolio").offset().top
}, 1000);
  });
  
  $("#aboutBtn").click(function(){
    
    $('html, body').animate({
    scrollTop: $("#about").offset().top
}, 1000);
  });
  
    $(".navbar-brand").click(function(){
    
    $('html, body').animate({
    scrollTop: $("#info").offset().top
}, 1000);
  });

});