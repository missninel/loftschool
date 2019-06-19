/* burger slider */

const sliderArrowLeft = document.querySelector('.slider-arrow-left');
const sliderArrowRight = document.querySelector('.slider-arrow-right');
const sliderList = document.querySelector('#slider');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemCompute = document.querySelector('.slider__item');

let minRight = 0;
let maxRight = (sliderItem.length - 1) * sliderItemCompute.offsetWidth;
let step =  sliderItemCompute.offsetWidth; 
let currentRight = 0;

sliderList.style.right = currentRight;

function leftStep() {
    if (currentRight > minRight) {
        currentRight -= step;
        sliderList.style.right = currentRight + 'px';
    }
    else{
        currentRight = maxRight;
        sliderList.style.right = maxRight + 'px';
    }
      
}

function rightStep() {
    if (currentRight < maxRight) {
        currentRight += step;
        sliderList.style.right = currentRight + 'px';
        
    } else {
        currentRight = minRight;
        sliderList.style.right = minRight + 'px';

    }
}

sliderArrowLeft.addEventListener('click', function (event) {
    event.preventDefault();
    leftStep();
 
})

sliderArrowRight.addEventListener('click', function (event) {
    event.preventDefault();
    rightStep();
})



/*hamburger menu */
var hamMenu = document.querySelector('#openedHamMenu'); 
var hamMenuClose = document.querySelector('#closeHamMenu');
var hamMenuButton = document.querySelector('#hamburgerMenuButton');

hamMenuButton.addEventListener('click', function(){
     hamMenu.classList.add('active');
     
} 
)

hamMenuClose.addEventListener('click', function(){
    hamMenu.classList.remove('active');
} 
)

hamMenu.addEventListener('click', function (event) {
    event.preventDefault();
    let target = event.target; 

    if (target.classList.contains ('ham-menu__link')) {
        hamMenu.classList.remove('active');
        
    }
    
})
