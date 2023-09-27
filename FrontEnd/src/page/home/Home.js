import React from 'react';
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import video from "../../assets/Bali_Indonesia.mp4"
import Slider from '../../component/slider/Slider';
function Home() {
    return ( 
        <>
            <div id="home">
                <video className='video' src={video} muted autoPlay loop type="video/mp4"></video>
                <div className='introduce'>
                    <div className='fw-bold fs-1 text-light'>Satisfy your exploration with us</div>
                    <div className='fs-5 text-light'>Come to us, we will bring you experiences you will never forget!</div>
                    <div className='my-3'>
                        <button className='btnStart fs-5 px-5 py-2'>
                            Let's Start
                            <FontAwesomeIcon className='ms-2' icon={faArrowRight}/>
                        </button>
                    </div>

                    <div className='famousPlaces'>
                        <div className='w-100 d-flex align-items-center my-3'>
                            <span className='pe-3 text-light fs-5'>Famous Places</span>
                            <span className='dash'></span>
                        </div>
                        <Slider/>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default Home;