import React, { useState } from 'react';
import './style.scss'
import img1 from "../../assets/Bali_Indonesia.jpg"
import img2 from "../../assets/Canada.jpg"
import img3 from "../../assets/Francis.jpg"
import img4 from "../../assets/Terraces_VietNam.jpg"
import img5 from "../../assets/Singapore.jpg"
import img6 from "../../assets/Japan.jpg"
import { useEffect } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'; // Import CSS của slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Import theme CSS của slick-carousel
import {useDispatch, useSelector} from 'react-redux'
import { ActiveIndexAction } from './redux/ActiveIndexAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const arrImg = [img1,img2,img3,img4,img5,img6]

function SliderComponent() {

    const [activeIndex, setActiveIndex] = useState(0)

    const handleBtnPrev = ( ) => {
        setActiveIndex(activeIndex > 0 ? ( activeIndex - 1 ) : 5)
        dispatch(ActiveIndexAction(activeIndex > 0 ? ( activeIndex - 1 ) : 5))
        
    }
    const handleBtnNext = ( ) => {
        setActiveIndex(activeIndex < 5 ? ( activeIndex + 1 ) : 0) 
        dispatch(ActiveIndexAction(activeIndex < 5 ? ( activeIndex + 1 ) : 0))
    }
    
    const dispatch = useDispatch()
    


    function SampleNextArrow(props) {
        return (
          <span 
            className="custom-next-arrow"
            onClick={()=>{
                handleBtnNext();
                props.onClick();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight}/>
            </span>
    
        );
      }
      
      function SamplePrevArrow(props) {
        return (
          <span
            className="custom-prev-arrow"
            onClick={()=>{
                handleBtnPrev();
                props.onClick();
            }}
          ><FontAwesomeIcon icon={faChevronLeft}/></span>
        );
      }
    const settings = {
        dots: false, // Hiển thị chấm chỉ mục
        infinite: true, // Vô hạn lặp
        speed: 500, // Tốc độ trượt (milliseconds)
        slidesToShow: 4, // Số lượng mục hiển thị trên mỗi trang
        slidesToScroll: 1, // Số lượng mục trượt mỗi lần
        swipe: true, // Cho phép vuốt cảm ứng
        swipeToSlide: true, // Chuyển đổi slide bằng vuốt cảm ứng
        draggable: true, // Cho phép kéo slide bằng cảm ứng
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,

      };


    const index = useSelector(state => state.activeIndex.index)
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