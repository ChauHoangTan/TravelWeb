import React, { useState } from 'react';
import './style.scss'
import img1 from "../../assets/Bali_Indonesia.jpg"
import img2 from "../../assets/Canada.jpg"
import img3 from "../../assets/Francis.jpg"
import img4 from "../../assets/Terraces_VietNam.jpg"
import img5 from "../../assets/Singapore.jpg"
import { useEffect } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; // Import CSS của slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Import theme CSS của slick-carousel

const arrImg = [img1,img2,img3,img4,img5]

function SliderComponent() {

    const settings = {
        dots: true, // Hiển thị chấm chỉ mục
        infinite: true, // Vô hạn lặp
        speed: 500, // Tốc độ trượt (milliseconds)
        slidesToShow: 4, // Số lượng mục hiển thị trên mỗi trang
        slidesToScroll: 1, // Số lượng mục trượt mỗi lần
        swipe: true, // Cho phép vuốt cảm ứng
        swipeToSlide: true, // Chuyển đổi slide bằng vuốt cảm ứng
        draggable: true, // Cho phép kéo slide bằng cảm ứng
      };

    // useEffect(()=>{
    //     let items = document.querySelectorAll(`.carousel-item`)
      
    //         items.forEach((el) => {
            
    //             const minPerSlide = 4
    //             if(el.childElementCount < minPerSlide){
    //                 let next = el.nextElementSibling
    //                 for (var i=1; i<minPerSlide; i++) {
    //                     if (!next) {
    //                     // wrap carousel by using first child
    //                     next = items[0]
    //                     }
    //                     let cloneChild = next.cloneNode(true)
                       
    //                     el.appendChild(cloneChild.children[0])
    //                     next = next.nextElementSibling
                        
    //                 }
    //             }
                
    //         })
            
    // },[])

    return ( 
        <>
            <div id='carouselSlider'>
                <Slider {...settings} >
                {arrImg.map((image) => {
                    return(
                        
                            <div className='containerImg'>
                                <img src={image} className="d-block w-100" alt="..."/>
                            </div>
                        
                    )})}
                </Slider>
            </div>
            
    

        </>
     );
}

export default SliderComponent;