// document.addEventListener("DOMContentLoaded", function() {
//     const carouselTrack = document.querySelector(".carousel-track");
//     const images = document.querySelectorAll(".carousel-track img");
//     const slideWidth = images[0].clientWidth;
//     let counter = 0;
  
//     function slide() {
//       counter++;
//       if (counter > images.length) {
//         counter = 0;
//       }
//       carouselTrack.style.transform = `translateX(-${counter * slideWidth}px)`;
//     }
  
//     setInterval(slide, 3000); // Change slide every 3 seconds
//   });
  




//////////////////////////////////////////





// import React from 'react';
// import React, { useState, useEffect } from 'react';
// import './Slider.css'


// function Slider() {
//   var [itemActive, setItemActive] = useState(0);

// let items = document.querySelectorAll('.slider .list .items');
// let countItem = items.length;
//   // let item= document.querySelectorAll(' .slider .list .items')
//   console.log(items)
//   let Next=document.querySelector('.Next')
//   let Prev=document.querySelector('.Prev')
//   // let countItem=item.length;
//   console.log(countItem)
//   // let itemActive=0;
  
// const slideNextImg = () => {
//   setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
// };
//   // function slideNextImg(){
  //       itemActive=itemActive+1;
  //       if(itemActive>=countItem){
  //         itemActive=0;
  //       }
  //       showSlider();
  // }

const slidePrevImg = () => {
  setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem);
};
  // function slidePrevImg(){
  //   itemActive=itemActive-1;
  //   if(itemActive<0){
  //     itemActive=countItem-1;
  //   }
  //   showSlider();
  // }
//   function showSlider(){
// let itemActiveOld=document.querySelector('.slider .list .items.active')
// itemActiveOld.classList.remove('active')
// items[itemActive].classList.add('active')



//   }

// const [itemActive, setItemActive] = useState(0);

// const items = document.querySelectorAll('.slider .list .items');
// const countItem = items.length;

// const slideNextImg = () => {
//   setItemActive((prevItemActive) => (prevItemActive + 1) % countItem);
// };

// const slidePrevImg = () => {
//   setItemActive((prevItemActive) => (prevItemActive - 1 + countItem) % countItem);
// };

const showSlider = () => {
  const itemActiveOld = document.querySelector('.slider .list .items.active');
  if (itemActiveOld) {
    itemActiveOld.classList.remove('active');
  }
  items[itemActive].classList.add('active');
};

useEffect(() => {
  showSlider();
}, [itemActive]);