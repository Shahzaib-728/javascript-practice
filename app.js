const colors=["red","yellow","rgba(133,122,200)","#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click", function ()
{
    const randomNUm=getRandomNum();
    //console.log(randomNUm);
    document.body.style.backgroundColor=colors[randomNUm];
    color.textContent=colors[randomNUm];
 
});

function getRandomNum(){
    return Math.floor(Math.random() * colors.length);
}