// Toggle nav

$( ".mainmenu a" ).click(function() {
  $( "body" ).toggleClass( "popout-nav" );
});

$( ".mainmenu li" ).click(function() {
  $( this ).toggleClass( "active" );
});

// Set width of wrapper

$(".wrap").width($(window).width()-270);

$(window).resize(function(){
    $(".wrap").width($(window).width()-270);
});