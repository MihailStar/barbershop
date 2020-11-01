$(function() {
    const $slider = $('.js-slider');
    const $sliderNextButton = $('.js-slider-next-button');
    const $sliderPrevButton = $('.js-slider-prev-button');

    if ($slider.length) {
        $slider.slick({
            arrows: false
        });

        if ($sliderNextButton.length) {
            $sliderNextButton.on('click', () => {
                $slider.slick('slickNext');
            });
        }

        if ($sliderPrevButton.length) {
            $sliderPrevButton.on('click', () => {
                $slider.slick('slickPrev');
            });
        }
    }
});