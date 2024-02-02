let box = document.querySelector(".box")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")

box.addEventListener("mouseenter",function(){
    box1.style.backgroundImage = "url('https://sxvstyle.com/cdn/shop/files/960-960swet_1-min_1512x.jpg?v=1695295914')";
box1.backgroundPosition = top;
    box1.style.transition= "all ease 5s"; 
})   

box.addEventListener("mouseleave",function(){
    box1.style.backgroundImage = "url('https://sxvstyle.com/cdn/shop/files/960-11-copy-min_900x.webp?v=1682085718')";
box1.backgroundPosition = top;
    box1.style.transition= "all ease 5s"; 
}) 

box.addEventListener("mouseenter",function(){
    box2.style.backgroundImage = "url('https://sxvstyle.com/cdn/shop/files/21-min_900x.webp?v=1682083363')";
box2.backgroundPosition = top;
    box2.style.transition= "all ease 5s"; 
})   

box.addEventListener("mouseleave",function(){
    box2.style.backgroundImage = "url('https://sxvstyle.com/cdn/shop/files/960-12-copy-min_900x.webp?v=1682085747')";
box2.backgroundPosition = top;
    box2 .style.transition= "all ease 5s"; 
}) 