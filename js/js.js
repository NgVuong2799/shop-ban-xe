let showslides = 1 ;
    playslides(showslides);
function plusslides(n){
    playslides(showslides += n);
}
function hienslides(n){
    playslides(showslides = n);
}
function playslides(n) {
    let i;
    let slides = document.getElementsByClassName('slideshow')
    if (n > slides.length) {showslides = 1}
    if (n < 1){showslides = slides.length}
    for(i = 0 ;i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[showslides-1].style.display="block";
}
