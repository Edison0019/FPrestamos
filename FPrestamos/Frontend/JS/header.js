/* SLIDESHOW */
var slideindex = 0;

mySlide(slideindex);

function mySlide(n){
    slideindex++
    var slide = document.getElementsByClassName('slides');
    var dot = document.getElementsByClassName('dot');
    if(slideindex > slide.length){slideindex = 1};
    for(var i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    };
    for(var i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(' active', '');
    };
    slide[slideindex - 1].style.display = 'block';
    dot[slideindex - 1].className += ' active';
    setTimeout(mySlide, 5000);
}
