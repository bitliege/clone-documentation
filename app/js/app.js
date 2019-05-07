// =============================================================================

    // Utilities JavaScript (jQuery)

// =============================================================================

(function ($) {

    // Clone Shorthand =========================================================
    function clone(attr, option, selector) {
        if (option != null) {
            if (selector != null) {
                return '[data-c-' + attr + selector + '=\'' + option + '\']';
            }
            else {
                return '[data-c-' + attr + '=\'' + option + '\']';
            }
        }
        else {
            return '[data-c-' + attr + ']';
        }
    }

    $(document).ready(function () {

        $(clone("carousel")).slick({
            nextArrow: '<button class="slick-next" title="View the next slide." type="button"><i class="material-icons">arrow_forward_ios</i></button>',
            prevArrow: '<button class="slick-prev" title="View the previous slide." type="button"><i class="material-icons">arrow_back_ios</i></button>',
            lazyLoad: "progressive"
        });

    });

})(jQuery);
