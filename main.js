//    open shoping
const shoping=document.getElementById("shoping");
const shop=document.querySelector(".shop")
const close=document.querySelector(".close")

const shop_open=document.querySelector(".shop-open")
const none=document.querySelector(".none")



shoping.onclick=function(){
shop.classList.add("show-shoping")
}

close.onclick=function(){
shop.classList.remove("show-shoping")

}
none.onclick=function(){
shop.classList.remove("show-shoping")

}
// ------------------
// searching
const searching= document.getElementById("searching")
const search =document.querySelector(".search")
const search_close=document.querySelector(".search-close")
 searching.onclick=function(){
    console.log("momoS")
  search.classList.add("search-hiden")
   
}
search_close.onclick=function(){
  search.classList.remove("search-hiden")

}
// bar/
const  bar= document.getElementById("bar");
const  nav= document.getElementById("nav");
const close_bar= document.querySelector(".close-bar")
bar.onclick=function(){
  console.log("hdh")
  nav.classList.add("show-shoping")
 
}

close_bar.onclick=function(){

  console.log("kkkk")
  nav.classList.remove("show-shoping")
}
 






















