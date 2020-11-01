$(function() {
    const $zoom = $('.js-zoom');
    const link = $zoom.attr('href');

    if ($zoom.length && link) {
        $zoom
            .on('click', (event) => {
                event.preventDefault();
            })
            .css('cursor', 'default')
            .zoom({
                url: link
            });
    }
});