$('.toolbar-inner-my-info').on('click', function () {
    $('.toolbar-inner-more-info-ul').hide();
    $('.toolbar-inner-my-info-ul').show();
});
$('.toolbar-inner-more-info').on('click', function () {
    $('.toolbar-inner-my-info-ul').hide();
    $('.toolbar-inner-more-info-ul').show();
})
$('.toolbar-inner-index,.toolbar-inner-home').on('click', function () {
    $('.toolbar-inner-my-info-ul').hide();
    $('.toolbar-inner-more-info-ul').hide();
})