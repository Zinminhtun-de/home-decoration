// Explore Our Project
const projectBtn =document.querySelectorAll('.item');
//slideshow categories
const projectAlu =document.querySelector('.project-1');
const projectBat =document.querySelector('.project-2');
const projectGpa =document.querySelector('.project-3');
const projectGsc =document.querySelector('.project-4');
const projectHar =document.querySelector('.project-5');
//######
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

//slide
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slides=document.querySelectorAll('.slide');
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
    // for the nextBtn
    // if(counter<slides.length-1){
    //     nextBtn.style.display='block'
    //     nextBtn.style.opacity='100%'
    // }else{
    //     nextBtn.style.opacity='0%'
    //     nextBtn.style.display='none'
    // }
    // ######
    // for the prevBtn
    // if(counter>0){
    //     prevBtn.style.display='block'
    //     prevBtn.style.opacity='100%'
    // }else{
    //     prevBtn.style.display='none'
    //     prevBtn.style.opacity='0%'
    // }
    // #####
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*200}%)`
    })
}
// #######

//  dynamic to set the date
const year = document.querySelector('.year');
year.innerHTML=new Date().getFullYear();

// #######
