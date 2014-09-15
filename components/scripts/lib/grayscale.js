/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


/*this is the function to Load the gif before loading the Logo image*/
$(function(){
    var img = new Image();
    $(img).load(function(){
        /*Once the image is loaded, execute this code*/
        $(this).hide();
        /*Once the image is loaded, we can remove the loading icon*/
        $('#loader').css('display', 'none');
        $('#logoImage').append(this);

        /*Fade in effect*/
        $(this).fadeIn("slow");
    }).error(function(){
        alert('Error loading image');
    }).attr('src', '../img/innovo_logo.png');
        /**/
});/*this is the function to Load the gif before loading the Logo image*/








