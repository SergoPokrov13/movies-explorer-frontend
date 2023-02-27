$(document).ready(function(){
    $('.navmenu__burger').click(function(event){
        $('.navmenu__burger,.span,.navmenu__buttons,.navmenu__button-account,.main,.logo').toggleClass('active');
        $('body').toggleClass('lock');
    })
});