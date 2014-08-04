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

var ctx = $("#cs_doughnut_chart").get(0).getContext("2d");
var myDoughnut = new Chart(ctx).Doughnut(data);


var legendHolder = document.getElementById('legend');
legendHolder.innerHTML = myDoughnut.generateLegend();

// Accordions

$(document).ready(function () {
  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
