$(function() {

    //create html markup for lightbox window
    var lightbox =
    '<div id="lightbox" style="display:none">' +
        '<p>Click to close</p>' +
            '<div id="content">' +
            '</div>' +
    '</div>';

    $('body').append(lightbox);

    $('.imgBox').click(function() {
        var image_href = $(this).children('img').attr('src');

        $('#content').html('<img src="' + image_href + '" />');
        var maxheightvalue = $('#lightbox').height() - 60;
        var maxwidthvalue = $('#lightbox').width() - 60;
        $('#lightbox img').css("max-height", maxheightvalue + "px");
        $('#lightbox img').css("max-width", maxwidthvalue + "px");
        //show lightbox window
        $('#lightbox').fadeIn(400);

    });

    //click anywhere on the page to get rid of lightbox window
    $(document).on('click', '#lightbox', function() {
        $('#lightbox').fadeOut(300);
    });
});
