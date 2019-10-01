var classname = document.getElementsByClassName("link-landing");

var linkHover = function() {
    var attribute = 'm-theme--c'+this.getAttribute("id");
    document.getElementById("hero-line").className = attribute;
};
var linkPlain = function() {
    document.getElementById("hero-line").className = '';
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('mouseover', linkHover, false);
    classname[i].addEventListener('mouseout', linkPlain, false);
}
