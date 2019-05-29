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

        if (localStorage.getItem("cookieTrigger") == "true") {
            $("#cookieAlert").remove();
        } else {
            $("#cookieAlert").addClass("active");
        }

        // Cookie & Analytics Alert Trigger ====================================
        function cookieTrigger(trigger) {
            localStorage.setItem("cookieTrigger", "true");
            $(trigger).parent("div").remove();
        }

        $(document).on("click", "[data-docs-cookie-trigger]", function (e) {
            e.preventDefault();
            cookieTrigger(this);
        });

        // Menu Search =========================================================
        $("#cloneSearch").keyup(function(e) {

            var input = this.value.toLowerCase().trim()
            var terms = input.split(" ");

            $(".clone-search-results >div >ul >li").each(function(e) {

                var searchText  =  $(this).find("a").data("terms").toLowerCase();

                var show = true;

                terms.forEach(function(term){
                    if ( !(searchText.indexOf(term.trim()) >= 0) ) {
                        show = false;
                    }
                });

                if (show) {
                    $(this).show();
                    $(this).addClass("show");
                }
                else {
                    $(this).hide();
                    $(this).removeClass("show");
                }

                if($(".clone-search-results .show").length) {
                    $(".clone-search-null").hide();
                }
                else {
                    $(".clone-search-null").show();
                }

            });

            if(terms == "") {
                $(".clone-search-results").removeClass("active");
                $(".clone-menu").removeClass("hidden");
            }
            else {
                $(".clone-search-results").addClass("active");
                $(".clone-menu").addClass("hidden");
            }

            // Prevents the user from submitting the form with the enter key.
            $('#cloneSearch').on('keyup keypress', function(e) {
                var keyCode = e.keyCode || e.which;
                if (keyCode === 13) {

                    // if ($(".site-grid__sidebar").hasClass("active")) {
                    //     $(".sidebar__trigger").removeClass("active");
                    //     $(".site-grid__sidebar-overlay").removeClass("active");
                    //     $(".site-grid__sidebar").removeClass("active");
                    // }

                    // var top = $('body').position().top;
                    // $('html,body').scrollTop(top);

                    e.preventDefault();

                    document.activeElement.blur();

                    return false;

                }
            });

            e.preventDefault();

        });

        // Menu Triggers =======================================================
        function menuTrigger(trigger) {
            if ($(trigger).hasClass("active")) {
                $(trigger).removeClass("active");
                $(trigger).next().removeClass("active");
            } else {
                $(trigger).addClass("active");
                $(trigger).next().addClass("active");
            }
          }
    
          $(document).on("click", "[data-docs-menu-trigger]", function(e) {
            menuTrigger(this);
          });

    });

})(jQuery);
