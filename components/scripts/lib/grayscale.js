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




/*##############################################################################*/

/*  JavaScript Document - Gallery lynda.com  */

var thumbnailSpacing = 15;


$(document).ready(function (){

        /*This will provide custom anchor links to our page*/
    $('a.sortLink').on('click',function(e){
        e.preventDefault(); /*Prevent default links*/
        $('a.sortLink').removeClass('selected');
        $(this).addClass('selected');
        var keyword = $(this).attr('data-keyword');
        sortThumbnails(keyword);
    });
        /*End of custom anchor links to our page*/




    $(".gallery .sorting").css('margin-bottom', window.thumbnailSpacing + 'px');
    /*Add a new class for fancybox*/
    $(".thumbnail_container a.thumbnail").addClass('showMe').addClass('fancybox').attr('rel', 'group');

    positionThumbnails();
    setInterval('checkViewPort()',750); /*Javascript inbuilt function which triggers an event every 3/4th second*/
    
});

/*Javascript Window resize function*/
function checkViewPort (){
    var photosWidth = $('.photos').width();
    var thumbnailContainerWidth = $('.thumbnail_container').width();
    var thumbnailWidth = $('.thumbnail_container a.thumbnail:first-child').outerWidth();


if(photosWidth < thumbnailContainerWidth){
    positionThumbnails();
}
if((photosWidth - thumbnailWidth) > thumbnailContainerWidth){
    positionThumbnails ();
}

/*debug*/ $('.debug-size').html('photosWidth = '+photosWidth + " | thumbnailContainerWidth = "+thumbnailContainerWidth);


}




        /*Custom sorting thumbnails function*/
function sortThumbnails(keyword){
    $('.thumbnail_container a.thumbnail').each(function(){
        var thumbnailKeywords = $(this).attr('data-keywords');

        if(keyword == 'all'){
            $(this).addClass('showMe').removeClass('hideMe').attr('rel', 'group');
        }else{
            if(thumbnailKeywords.indexOf(keyword)!=-1){
                $(this).addClass('showMe').removeClass('hideMe').attr('rel', 'group');
            }else{
                $(this).addClass('hideMe').removeClass('showMe').attr('rel', 'none');
            }
        }


    });
    positionThumbnails();
}




/*Position thumbnails function*/
function positionThumbnails (){
    
    /*debug */ $(".debug-remainder").html('');

    /*Animate the tags which have hideMe class*/
    $('.thumbnail_container a.thumbnail.hideMe').animate({opacity:0},500,function(){
        $(this).css({'display':'none', 'top': '0px', 'left' : '0px'});
    });



    var containerWidth = $('.photos').width();
    var thumbnail_R = 0;
    var thumbnail_C = 0;
    var thumbnailWidth = $('a.thumbnail img:first-child').outerWidth() + window.thumbnailSpacing;
    var thumbnailHeight = $('a.thumbnail img:first-child').outerHeight() + window.thumbnailSpacing;
    var max_C = Math.floor(containerWidth / thumbnailWidth); /*How many thumbnails we can fit inside each row*/

    /*Calculating each thumbnails which goes in one row - Remainders*/
    $('.thumbnail_container a.thumbnail.showMe').each(function (index){
        var remainder = (index%max_C)/100;
        var maxIndex = 0;
        /*Debug*/$('.debug-remainder').append(remainder + ' - ');

        /*Placing the thumbnail position based on if they exceed current row*/
        if(remainder == 0){
            if(index != 0){
                thumbnail_R += thumbnailHeight;
            }
            thumbnail_C = 0;
        }else {
            thumbnail_C += thumbnailWidth;
        }

        /*Animating each thumbnail to position itself based on the remainder value - Cool part*/
        $(this).css('display', 'block').animate({
            'opacity' : 1,
            'top' : thumbnail_R + 'px',
            'left' : thumbnail_C + 'px'
        }, 500);

        /*Resizing the Width of the photo container*/
        var newWidth = max_C * thumbnailWidth;
        var newHeight = thumbnail_R + thumbnailHeight;
        $('.thumbnail_container').css({
            'width' : newWidth+'px',
            'height' : newHeight +'px'
        });

    });

    /*FancyBox activated*/
    
    detectFancyboxLinks ();

    /*Adjusting the width of the sorting div to match the width of the thumbnail container*/

    var sortingWidth = $('.thumbnail_container').width()/ thumbnailWidth;
    var newWidth = sortingWidth * thumbnailWidth - window.thumbnailSpacing;
    $('.sorting').css('width', newWidth +'px');

}


function detectFancyboxLinks (){

    $('a.fancybox[rel="group"]').fancybox({
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'titlePosition' : 'over',
        'speedIn' : 500,
        'overlay' : '#000',
        'padding' : 0,
        'overlayOpacity' : .75

    });
    
}/*end of fancybox plugin*/










