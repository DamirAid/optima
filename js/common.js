$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


$(".first_screen .text_wrap small,.title").animated("flipInX"); 
$(".first_screen p,h1,#progress2").animated("slideInUp"); 
$(".top_mnu,.about_company_sec .text_wrap,form input:nth-child(2)").animated("slideInRight"); 
$(".company_img, form input:first-child").animated("slideInLeft"); 
$(".uslugi_sec .item").animated("zoomIn"); 
$(".btn").animated("fadeIn"); 
		$(".about_company_sec .progress_bar_container").waypoint(function() {
		$(".about_company_sec .progress_bar_container .progress_bar").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 400*index);
		});
	}, {
		offset : "30%"
	});

//MAIN SLIDER

var MainSlide =	$('.main_slider').owlCarousel({
      loop:true,
      items: 1,	
      nav: true,
      dots: true,
			autoplay:true,
   		autoplayTimeout:3000,

      navText : ""



});

		$('.main_prev').click(function() {
		MainSlide.trigger('prev.owl.carousel');
	});

	$('.main_next').click(function() {
		MainSlide.trigger('next.owl.carousel');
	});




//mnu
$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu ").fadeOut(600);
					$(".top_mnu li a").removeClass("fadeInUp animated");
			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu").fadeIn(600);
					$(".top_mnu li a").addClass("fadeInUp animated");
			};
	});

});

   $(document).ready(function () {
    $("#progress1").progressBar({
     width: 500,
     height: 20,
     percent:50,
     showPercent: false,

    });
   });
      $(document).ready(function () {
    $("#progress2").progressBar({
     width: 500,
     height: 20,
     percent:70,
     showPercent: false,

    });
   });
      $(document).ready(function () {
    $("#progress3").progressBar({
     width: 500,
     height: 20,
     percent:70,
     showPercent: false,

    });
   });      


      /* Examples */
(function($) {


  $('.second').circleProgress({
    fill: {gradient: ['#ff8503', '#ff8503']},
    value: 1
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
  });
  $('.third').circleProgress({
    fill: {gradient: ['#ff8503', '#ff8503']},
    value: 0.8
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
  $('.fourth').circleProgress({
    fill: {gradient: ['#ff8503', '#ff8503']},
    value: 0.5
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + '<i>%</i>');
  });

})(jQuery);

var el = $('.circle'),
    inited = false;

el.appear({ force_process: true });

el.on('appear', function() {
  if (!inited) {
    el.circleProgress({ value: 0.7 });
    inited = true;
  }
});
