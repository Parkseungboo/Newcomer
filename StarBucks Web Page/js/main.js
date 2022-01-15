const searchE1 = document.querySelector('.search');
const searchInputE1= document.querySelector('input');

searchE1.addEventListener('click', function(){
    searchInputE1.focus();
})

searchInputE1.addEventListener('click', function(){
    searchE1.classList.add('focused');
    searchInputE1.setAttribute('placeholder', '통합검색');
})