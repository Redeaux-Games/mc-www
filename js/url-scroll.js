function isScrolledIntoView(elem)
{
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  	if (isScrolledIntoView("#home")) { window.history.pushState("state", "Home", "/"); return; }
  	if (isScrolledIntoView("#about")) { window.history.pushState("state", "About", "/about"); return; }
  	if (isScrolledIntoView("#features")) { window.history.pushState("state", "Features", "/features"); return; }
    if (isScrolledIntoView("#magma")) { window.history.pushState("state", "ṂȺ₲ṂѦ", "/magma"); return; }
  	if (isScrolledIntoView("#news")) { window.history.pushState("state", "Blog", "/blog"); return; }
  	if (isScrolledIntoView("#mail-list")) { window.history.pushState("state", "Newsletter", "/newsletter"); return; }
    if (isScrolledIntoView("#socials")) { window.history.pushState("state", "Socials", "/socials"); return; }
});
