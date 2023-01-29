// btn for widget 
const informationItem = document.querySelectorAll('.widget-glass');
//###

// selected for glass item information div
const IteminfoOne =document.querySelector('.paragrah-1');
const IteminfoTwo =document.querySelector('.paragrah-2');
const IteminfoThr =document.querySelector('.paragrah-3');
//###

//slideshow categories
const projectAlu =document.querySelector('.swiper-1');
const projectBat =document.querySelector('.swiper-2');
const projectGpa =document.querySelector('.swiper-3');
const projectGsc =document.querySelector('.swiper-4');
const projectHar =document.querySelector('.swiper-5');
//###

// explore our project section 
const projectBtn =document.querySelectorAll('.item');
// ###

// client testimonials slider btn
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides=document.querySelectorAll('.slide');
//###

// In client testimonial section, want to blur the other widget when it'd been clicked to current widget
let infoOne =document.querySelector('.info-1').style;
let infoTwo =document.querySelector('.info-2').style;
let infoThree =document.querySelector('.info-3').style;
//###

// for footer section, to get current full year
const year = document.querySelector('.year');
//###


// Items' Information
 informationItem.forEach(p=>{
     p.addEventListener('click',o=>{
        const eashItem =o.currentTarget.classList;
        if(eashItem.contains('info-1')){
            IteminfoOne.style.display='flex';
            IteminfoTwo.style.display='none';
            IteminfoThr.style.display='none';
        }else if(eashItem.contains('info-2')){
            IteminfoOne.style.display='none';
            IteminfoTwo.style.display='flex';
            IteminfoThr.style.display='none';
        }else{
            IteminfoOne.style.display='none';
            IteminfoTwo.style.display='none';
            IteminfoThr.style.display='flex';
        }
     })
 })
// #######

// Explore Our Project
 projectBtn.forEach((c)=>{
     c.addEventListener('click',(k)=>{
        const target =k.currentTarget.classList;
        if(target.contains('item-1')){
            projectAlu.style.display='flex';
            projectBat.style.display='none'
            projectGpa.style.display ='none';
            projectGsc.style.display ='none';
            projectHar.style.display='none';
        }
        if(target.contains('item-2')){
           projectAlu.style.display ='none'
           projectGpa.style.display ='none';
            projectBat.style.display ='flex';
            projectGsc.style.display ='none';
            projectHar.style.display='none';
        }
        if(target.contains('item-3')){
            projectAlu.style.display ='none'
            projectBat.style.display ='none';
            projectGsc.style.display ='none';
            projectHar.style.display='none';
             projectGpa.style.display ='flex';
         }
         if(target.contains('item-4')){
            projectAlu.style.display ='none'
            projectBat.style.display ='none';
            projectGsc.style.display ='flex';
            projectHar.style.display='none';
             projectGpa.style.display ='none';
         }
         if(target.contains('item-5')){
            projectAlu.style.display ='none'
            projectBat.style.display ='none';
            projectGsc.style.display ='none';
            projectHar.style.display='flex';
             projectGpa.style.display ='none';
         }
     })
 })
// #######

// client testimonial silder

slides.forEach((slide,i)=>{
    slide.style.left=`${i*100}%`
});
// prevBtn.style.display='none'
let counter =0;
nextBtn.addEventListener('click',()=>{
    counter++;
    slider();
    console.log('hi');
});
prevBtn.addEventListener('click',()=>{
    counter--;
    slider();
    console.log('he');
});
function slider(){
    if(counter==slides.length){
        counter=0;
    }
    if(counter<0){
        counter=slides.forEach.length-1
    }

    
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}
// #######


// client testimonials section. Blur the widget
function toggle(value){
    switch (value) {
        case 1:
            infoOne.opacity = "1";
            infoTwo.opacity = "0.5";
            infoThree.opacity = "0.5";
          break;
        case 2:
            infoTwo.opacity = "1";
            infoOne.opacity = "0.5";
            infoThree.opacity = "0.5";
          break;
        case 3:
            infoTwo.opacity = "0.5";
            infoOne.opacity = "0.5";
            infoThree.opacity = "1";
          break;
        default:
          break;
      }
}
// ###

//set the current year in footer section
year.innerHTML=new Date().getFullYear();
// #######