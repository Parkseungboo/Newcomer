const searchE1 = document.querySelector('.search');
const searchInputE1= document.querySelector('input');

searchE1.addEventListener('click', function(){
    searchInputE1.focus();
})

searchInputE1.addEventListener('click', function(){
    searchE1.classList.add('focused');
    searchInputE1.setAttribute('placeholder', '통합검색');
})

const badgeE1 = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log('scroll!');

    if(window, scrollY > 500){
        // badgeE1.style.display ='none'; 배지 화면에서 사라지게 처리

        gsap.to(badgeE1, .6, {
            opacity: 0,
            display: 'none'
        })
    }
    else{
        // badgeE1.style.display = 'block'; 배지 화면에서 보이게 처리

        gsap.to(badgeE1, .6, {
            opacity: 1,
            display: 'block'
    });
}
}, 300))
