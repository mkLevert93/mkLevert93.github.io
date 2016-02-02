$(document).ready(function() {
    $('#rightMove').click(function() {
        $('.boxCon').animate({
    'marginLeft' : "+=200px"});

});

    $('#LeftMove').click(function() {
        $('.boxCon').animate({
            'marginRight' : "-=200px"});

    });
});
