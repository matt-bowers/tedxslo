// Animsition
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-down-sm',
    inDuration: 800,
    outDuration: 300,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: false,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

// Parallax Effect
$('#scene').parallax({
  originX: 0.5,
  originY: 0.5
});
      
// Mobile Navicon Open Nav
$(document).ready(function(){
  $('#navicon').click(function(){
    $(this).toggleClass('open');
    $('.navback').toggleClass('open');
    $('nav ul').toggleClass('open');
  });
});

// FastClick initialization
$(function() {
	FastClick.attach(document.body);
});