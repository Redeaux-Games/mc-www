            $(document).ready(function () {
                $('.inner-nav li a').click(function(e) {

                    $('.inner-nav li.active').removeClass('active');

                    var $parent = $(this).parent();
                    $parent.addClass('active');
                    e.preventDefault();
                });
            });

            window.onscroll = () => {
            var current = "parent";

            sections.forEach((page-section) => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop ) {
                current = section.getAttribute("main"); }
            });

            navLi.forEach((li) => {
                li.classList.remove("active");
                if (li.classList.contains(current)) {
                li.classList.add("active");
                }
            });
            };
