function init(){
  const slides=document.querySelectorAll('.slide');
  const pages = document.querySelectorAll('.page');
  const background=['radial-gradient(#2B3760,#0B1023)','radial-gradient(#4E3022,#161616)','radial-gradient(#4E4342,#161616)'];

//Tracker

let current=0;
  slides.forEach((slide,index) => {
     slide.addEventListener("click",function(){
     changeDots(this);
     nextSlide(index);
     });
  });

function changeDots(dot){
   slides.forEach(slide =>{
     slide.classList.remove("active");
   });
  dot.classList.add("active");
}

function nextSlide(pageNumber){
  const nextPage=pages[pageNumber];
  const currentPage=pages[current];
  const nextLeft=nextPage.querySelector(".hero .model-left");
  const nextRight=nextPage.querySelector(".hero .model-right");
  const currentLeft=currentPage.querySelector(".hero .model-left");
  const currentRight=currentPage.querySelector(".hero .model-right");
  const nextText=nextPage.querySelector(".details");
  const portfolio=document.querySelector(".portfolio");
  const tl=new TimelineMax();

  tl.fromTo(currentLeft, 0.3,{y: '-10%'},{y: '-100%'})
  .fromTo(currentRight, 0.3,{y: '-10%'},{y : '-100%'},"-=0.2")

  .to(portfolio, 0.3, {backgroundImage: background[pageNumber]})
  .fromTo(currentPage, 0.3, {opacity:1, pointerEvents: "all"}, {opacity:0 , pointerEvents: "none"})
  .fromTo(nextPage,0.3,{opacity: 0,pointerEvents: "none"},{opacity: 1,pointerEvents: "all"})
  .fromTo(nextLeft,0.3,{y: "-100%"},{y: "-10%"},"-=0.6")
  .fromTo(nextRight,0.3,{y: "-100%"},{y: "10%"},"-=0.8")
  .fromTo(nextText,0.3,{opacity:0, y: 0},{opacity: 1, y: 0},"-=0.6")
  .set(nextLeft,{clearProps: 'all'})

  .set(nextRight,{clearProps: 'all'})
  .fromTo(currentRight,0.3,{y: "10%"},{y: "0%"},"-=0.6");
  current=pageNumber;


}
  const hamburger = document.querySelector('.menu');
  const hamburgerLines=document.querySelectorAll('.menu line');
  const navOpen =document.querySelector('.nav-open');
  const contact =document.querySelector('.contact');
  const social =document.querySelector('.social');
  const logo =document.querySelector('.logo');


    hamburger.addEventListener("click", function() {
        navOpen.classList.toggle("change");
        logo.classList.toggle("changelogo");
        

    });

}

init()
