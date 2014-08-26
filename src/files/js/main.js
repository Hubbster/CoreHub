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

// Charts

var data = [      
  {
    value : 30,
    color: '#F38630',
    label: "Ej bokad workshop"
  },
  {
    value : 50,
    color: '#E0E4CC',
    label: "Bokad workshop"
  },
  {
    value : 100,
    color: '#69D2E7',
    label: "Avslutad workshop"
  },
];

Chart.defaults.Doughnut = {
  segmentShowStroke : true,
  segmentStrokeWidth : 1, 
  segmentStrokeColor : '#FFFFFF', 
  percentageInnerCutout : 50, 
  animation : true,
  animationSteps : 100, 
  animateRotate : true,
  responsive: true,
  animateScale : false, 
  animationEasing: 'easeOutQuart',
  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
}

// var ctx = $("#cs_doughnut_chart").get(0).getContext("2d");
// var myDoughnut = new Chart(ctx).Doughnut(data);


// var legendHolder = document.getElementById('legend');
// legendHolder.innerHTML = myDoughnut.generateLegend();

// Accordions

$(document).ready(function () {
  $('.tabs').each(function(index) {
    $(this).children('.tab-header-and-content').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.tabs').on('click', '.tab-header-and-content > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var tabs = $(this).closest('.tabs')
      tabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      tabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

$(document).ready(function () {
  $('.accordion').on('click', '.accordion-header-and-content > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordion = $(this).closest('.accordion')
      accordion.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordion.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

$(document).ready(function($) {
  $('#color').colorPicker();
});

$( "#edit-this-content" ).click(function() {
  $( ".markdowneditor" ).toggleClass( "visible" );
});

$( "#close" ).click(function() {
  $( ".markdowneditor" ).removeClass( "visible" );
});