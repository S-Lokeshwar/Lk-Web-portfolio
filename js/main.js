var slider_img = document.querySelector('.c1');
var images = ['C1.png','C2.png','C3.png','C4.png','C5.png','C6.png','C7.png','C8.png','C9.png','C10.png'];
var i=0;
function prev()
{
    if(i<=0) i=images.length;
    i--;
    return setImg();
}
function next()
{
    if(i>=images.length-1) i=-1;
    i++;
    return setImg();
}
function setImg()
{
    return slider_img.setAttribute('src','Img/'+images[i]);
}

function scrollToTop()
{
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    const button = document.querySelector('.home-button');
    if (window.scrollY > 100) { // Show button after scrolling down 100px
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
};