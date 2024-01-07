const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


scroll.on('scroll', (scrollEvent) => {
    const mainDivHeight = document.getElementById('main').clientHeight;
    const totalScrollHeight = mainDivHeight - window.innerHeight;
    
    const verticalScrollPercentage = (scrollEvent.scroll.y / totalScrollHeight) * 100;
    console.log(verticalScrollPercentage);

    if (verticalScrollPercentage < 10) {
        document.getElementById('pages').style.backgroundColor = '#e3efea';
    } else if (verticalScrollPercentage > 10 && verticalScrollPercentage < 50) {
        document.getElementById('pages').style.backgroundColor = 'black';
    }
    else if (window.innerWidth < 768) {
        if (verticalScrollPercentage > 70) {
            animateFooter();
        }
    }
    else if (window.innerWidth > 768) {
        if (verticalScrollPercentage > 92) {
            animateFooter2();
        }
    }
});




const myText = new SplitType('#name-header')    
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.1,
    duration: .3,
});

const footerText = new SplitType('#footer-text')

var charElements = document.querySelectorAll('#footer .line .word .char');
charElements.forEach(function(element) {
    element.classList.remove('char');
    element.classList.add('footer-char'); 
});

function animateFooter() {
    gsap.to('.footer-char', {
        y: 0,
        stagger: 0.05,
        delay: 0.1,
        duration: .5,
    });
}

function animateFooter2() {
    gsap.to('.footer-char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: .5,
    });
}

var pagesElement = document.getElementById('pages');
var textElements = pagesElement.querySelectorAll('p, span, h1, h2, h3, h4, h5, h6, a, strong, em, small, b, i, u, s, mark, ins, del');
textElements.forEach(function(element) {
    element.style.zIndex = 100;
});


function changeAppearance(element, isHovered, videoSrc, pagesBackgroundColor, accentColor) {
    const pagesElement = document.getElementById('pages');
    const ulElement = document.querySelector('.skill-list');
    const video = document.getElementById('background-video');
    const skillItems = document.querySelectorAll('.skill-item h1, .con h1');
    const skillListItems = document.querySelectorAll('.skill-list li');
    const conCircleElements = document.querySelectorAll('.con #circle');
    const olItems = document.querySelectorAll('ol li::before');

    pagesElement.style.backgroundColor = isHovered ? pagesBackgroundColor : 'black';

    skillItems.forEach(item => item.style.color = isHovered ? accentColor : '');
    ulElement.classList.toggle('hovered', isHovered);

    skillListItems.forEach(item => item.style.setProperty('--accent-color', isHovered ? accentColor : 'white'));
    skillItems.forEach(item => item.style.setProperty('--accent-color', isHovered ? accentColor : ''));
    olItems.forEach(item => item.style.color = isHovered ? accentColor : '');
    conCircleElements.forEach(item => item.style.backgroundColor = isHovered ? accentColor : '');
    
    video.src = videoSrc;
}