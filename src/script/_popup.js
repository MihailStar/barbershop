$(function() {
    const $popup = $('.js-popup');
    const $popupOpenButton = $('.js-popup-open-button');
    const $popupCloseButton = $('.js-popup-close-button');
    const transitionDelay = 250;

    if ($popup.length) {
        if ($popupOpenButton.length) {
            $popupOpenButton.magnificPopup({
                alignTop: true,
                items: {
                    src: $popup,
                    type: 'inline'
                },
                removalDelay: transitionDelay * 2,
                showCloseBtn: false
            });
        }

        if ($popupCloseButton.length) {
            $popupCloseButton.on('click', () => {
                $.magnificPopup.close();
            });
        }
    }
});