const wrapper =document.querySelector('.wrapper')
const open = document.getElementById('open')
const close = document.getElementById('close')

open.addEventListener('click',()=>wrapper.classList.add('show-nav'))

close.addEventListener('click',()=>wrapper.classList.remove('show-nav'))