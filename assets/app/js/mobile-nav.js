$(document).ready(function(){
    $('.mobile-nav').hide();


    $('.hamburger-menu').click(function(){
        $('.mobile-nav').slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $('body').css('overflow', 'hidden');
        });
    })
    $( ".close").click(function() {
        $( ".mobile-nav" ).slideToggle( "slow", function() {
        $( ".hamburger" ).show();
        $('body').css('overflow', 'scroll');
        });
    });
});