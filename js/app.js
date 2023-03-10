
var elements = document.querySelectorAll(
  "header > #header_wrapper > nav > ul > li > a"
);
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const navItems = document.querySelector(".nav-items");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navItems.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navItems.classList.add("nav-items-fixed");
  } else {
    navItems.classList.remove("nav-items-fixed");
  }
});


// all btn for widget in client testimonials
const informationItem = document.querySelectorAll('.widget-glass');
//###

// selected for glass item information div
const IteminfoOne =document.querySelector('.paragrah-1');
const IteminfoTwo =document.querySelector('.paragrah-2');
const IteminfoThr =document.querySelector('.paragrah-3');
//###
// item information for mobile

const infoMobile =document.querySelectorAll('.widget-mobile');

const infoparaMobo1 =document.querySelector('.paragraph-mobile-1');
const infoparaMobo2 =document.querySelector('.paragraph-mobile-2');
const infoparaMobo3 =document.querySelector('.paragraph-mobile-3');

// ###
//slideshow categories in explore our projects
const projectAlu =document.querySelector('.swiper-1');
const projectBat =document.querySelector('.swiper-2');
const projectGpa =document.querySelector('.swiper-3');
const projectGsc =document.querySelector('.swiper-4');
const projectHar =document.querySelector('.swiper-5');
//###

// explore our project section 
const projectBtn =document.querySelectorAll('.item');
let itemOne =document.querySelector('.item-1').style;
let itemTwo =document.querySelector('.item-2').style;
let itemThree =document.querySelector('.item-3').style;
let itemFour =document.querySelector('.item-4').style;
let itemFive =document.querySelector('.item-5').style;
// ###

// client testimonials slider btn
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides=document.querySelectorAll('.slide-client');
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

 // item information mobile 
infoMobile.forEach((g)=>{
   g.addEventListener('click',(h)=>{
    const targetMoboInfo = h.currentTarget.classList;
    if(targetMoboInfo.contains('widget-mobo-1')){
        infoparaMobo2.style.display="none";
        infoparaMobo1.style.display="flex";
        infoparaMobo3.style.display="none"; 
    }else if(targetMoboInfo.contains('widget-mobo-2')){
        infoparaMobo2.style.display="flex";
        infoparaMobo1.style.display="none";
        infoparaMobo3.style.display="none"; 
    }else{
        infoparaMobo2.style.display="none";
        infoparaMobo1.style.display="none";
        infoparaMobo3.style.display="flex"; 
    }
   })
})
//###

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
prevBtn.style.display='none'
let counter =0;
nextBtn.addEventListener('click',()=>{
    counter++;
    slider();
   
});
prevBtn.addEventListener('click',()=>{
    counter--;
    slider();
    
});
function slider(){

    // if(counter==slides.length){
    //     counter=0;
    // }
    // if(counter<0){
    //     counter=slides.forEach.length-1
    // }


  // ---- working with BTN, want to hide next btn when the last slider
      // For The NEXTBTN in projects-section
 if(counter < slides.length-1){
  nextBtn.style.display ='block';
}else{
  nextBtn.style.display ='none';
}
// For The PREVBTN 
if(counter>0){
prevBtn.style.display ='block';
} else{
  prevBtn.style.display ='none';
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

        // for explore our projects
        case 4:
            itemOne.opacity='1';
            itemTwo.opacity='0.5';
            itemThree.opacity='0.5';
            itemFour.opacity='0.5';
            itemFive.opacity='0.5';
          break;
        case 5:
            itemOne.opacity='0.5';
            itemTwo.opacity='1';
            itemThree.opacity='0.5';
            itemFour.opacity='0.5';
            itemFive.opacity='0.5';
          break;
        case 6:
            itemOne.opacity='0.5';
            itemTwo.opacity='0.5';
            itemThree.opacity='1';
            itemFour.opacity='0.5';
            itemFive.opacity='0.5';
          break;
        case 7:
            itemOne.opacity='0.5';
            itemTwo.opacity='0.5';
            itemThree.opacity='0.5';
            itemFour.opacity='1';
            itemFive.opacity='0.5';
          break;
        case 8:
            itemOne.opacity='0.5';
            itemTwo.opacity='0.5';
            itemThree.opacity='0.5';
            itemFour.opacity='0.5';
            itemFive.opacity='1';
          break;
        // ####
        case 9:
            infoOne.opacity = "1";
            infoTwo.opacity = "0.5";
            infoThree.opacity = "0.5";
          break;
        default:
          break;
      }
}
// ###

//set the current year in footer section
year.innerHTML=new Date().getFullYear();
// #######

