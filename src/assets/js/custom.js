$(document).ready(function() {
    $('#right').click(function() {
        console.log('Right')
        let width = $('.col-lg-4')[0].clientWidth;
        console.log(width)
        console.log($('.col-lg-4'));

    });
    $('#left').click(function() {
        console.log('Left')
    });
});