window.onload = function () {
	var linksLanding = document.getElementsByClassName("link-landing");
	var linksDocs = document.getElementsByClassName("link-docs");

	var linkLandingHover = function() {
	    var attribute = 'm-theme--'+this.getAttribute("id");
	    document.getElementById("hero-line").className = attribute;
	    document.getElementById("nav-logo").className = attribute;
	};
	var linkLandingOut = function() {
	    document.getElementById("hero-line").className = 'm-theme-neutral';
	    document.getElementById("nav-logo").className = 'm-theme-neutral';
	};

	var linkDocsHover = function() {
	    var attribute = 'm-theme--'+this.getAttribute("id")+'--override';
	    document.getElementById("nav-logo").className = attribute;
	};
	var linkDocsOut = function() {
	    document.getElementById("nav-logo").className = '';
	};

	for (var i = 0; i < linksLanding.length; i++) {
	    linksLanding[i].addEventListener('mouseover', linkLandingHover, false);
	    linksLanding[i].addEventListener('mouseout', linkLandingOut, false);
	}
	for (var i = 0; i < linksDocs.length; i++) {
	    linksDocs[i].addEventListener('mouseover', linkDocsHover, false);
	    linksDocs[i].addEventListener('mouseout', linkDocsOut, false);
	}
}