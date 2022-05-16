sign = document.getElementById("booking")
popup = document.getElementById("popup")
sign.addEventListener('click',function(){
    popup.classList.add("active_popup")
})
var close = document.querySelector(".popup_close_btn")
close.addEventListener('click',function (){
    popup.classList.remove("active_popup")
})

sign = document.getElementById("bookin")
popup = document.getElementById("popup")
sign.addEventListener('click',function(){
    popup.classList.add("active_popup")
})
var close = document.querySelector(".popup_close_btn")
close.addEventListener('click',function (){
    popup.classList.remove("active_popup")
})

sign = document.getElementById("book")
popup = document.getElementById("popup")
sign.addEventListener('click',function(){
    popup.classList.add("active_popup")
})
var close = document.querySelector(".popup_close_btn")
close.addEventListener('click',function (){
    popup.classList.remove("active_popup")
})


let burger_menu = document.querySelector(".burger_menu")
let menu = document.querySelector(".menu")
let burger_menu_active = document.getElementById("burger_menu")
burger_menu.addEventListener('click', function(){
menu.classList.toggle("active_menu_all")
burger_menu.classList.toggle("burger_menu_active")

})
