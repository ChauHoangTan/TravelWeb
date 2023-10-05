import React, { useState } from 'react';
import './Home.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocation, faMoneyBill, faCalendar, faSearch, faCaretDown, faCalendarDays, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons'
import video1 from "../../assets/Bali_Indonesia.mp4"
import video2 from "../../assets/Canada.mp4"
import video3 from "../../assets/Francis.mp4"
import video4 from "../../assets/Terraces_VietNam.mp4"
import video5 from "../../assets/Singapore.mp4" 
import video6 from "../../assets/Japan.mp4"
import Slider from '../../component/slider/Slider';

import img1 from "../../assets/ExploreSearch/img1.jpg"
import img2 from "../../assets/ExploreSearch/img2.jpg"
import img3 from "../../assets/ExploreSearch/img3.jpg"
import img4 from "../../assets/ExploreSearch/img4.jpg"
import { useSelector } from 'react-redux';
import Rating from '../../component/rating/Rating';
import Question from '../../component/question/Question';
import Search from '../../component/search/Search';

const arrVideo = [video1,video2,video3,video4,video5,video6]
function Home() {

    // Code for Introduce > Famous Place
    const [statePlace, setStatePlace] = useState(0)
    const handleSetStatePlace = (index) => {
        setStatePlace(index)
    }
    const indexVideo = useSelector(state=>state.activeIndex.index)


    // Code for submit question
    const [inputEmail, setInputEmail] = useState('')
    const [inputQuestions, setInputQuestions] = useState('')

    const handleEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const handleQuestions = (e) => {
        setInputEmail(e.target.value)
    }
    const handleSubmitQuestions = () => {

    }
    return ( 
        <>
            <div id="home">
                <video className='video' src={arrVideo[indexVideo]} muted autoPlay loop type="video/mp4"></video>

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

                <div className='containerSearch'>
                    <div className='containerContent'>
                        <div className='introduceSearch'>
                            <div className='child1'>
                                <div className='title'>Discover Your Next Destination</div>
                                <div className='mt-2 '>At TravelLuxe, we're passionate about helping you explore the world. 
                                    Whether you're craving a beach escape, an urban adventure, or a cultural immersion, 
                                    we've got you covered. Browse our curated selection of destinations, find inspiration, 
                                and plan your next getaway with confidence. Your dream vacation awaits!</div>
                            </div>

                            <div className='child2'>
                                <div><img src={img1}/></div>
                                <div><img src={img2}/></div>
                                <div><img src={img3}/></div>
                                <div><img src={img4}/></div>
                            </div>
                        </div>
                        

                        <div className='search'>
                            <Search />
                        </div>
                        
                    </div>

                    
                    
                </div>

                <div className='containerPlaces'>
                    <div className='containerFilter'>
                        <div className='filter'>
                            <span className={`${statePlace === 0 && "active"}`} onClick={()=>handleSetStatePlace(0)}>All</span>
                            <span className={`${statePlace === 1 && "active"}`} onClick={()=>handleSetStatePlace(1)}>Famous</span>
                            <span className={`${statePlace === 2 && "active"}`} onClick={()=>handleSetStatePlace(2)}>Recomendation</span>
                            <span className={`${statePlace === 3 && "active"}`} onClick={()=>handleSetStatePlace(3)}>Available</span>
                            <span className={`${statePlace === 4 && "active"}`} onClick={()=>handleSetStatePlace(4)}>Beach</span>
                            <span className={`${statePlace === 5 && "active"}`} onClick={()=>handleSetStatePlace(5)}>Mountain</span>
                            <span className={`${statePlace === 6 && "active"}`} onClick={()=>handleSetStatePlace(6)}>Nature</span>
                        </div>
                    </div>

                    <div className='containerListPlaces'>
                        <div className='listPlaces'>
                            <div className='place'>
                                <img src={img1}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img2}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img3}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div> 
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img4}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>

                            <div className='place'>
                                <img src={img1}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img2}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img3}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img4}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>

                            <div className='place'>
                                <img src={img1}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img2}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img3}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                            <div className='place'>
                                <img src={img4}/>
                                <div className='info'>
                                    <div>Bali</div>
                                    <div><FontAwesomeIcon icon={faLocationDot}/> Indonesia</div>
                                </div>
                                <div className='vote'><Rating vote={5}/></div>
                                <div className='overlay'></div>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className='commit'>
                    <div className='containerExp'>
                        <div className='exp'>
                            <div>
                                <span className='title'>Why Should You Accompany Us</span>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <div>
                                        <div className='d-flex justify-content-center fs-3'>10+</div>
                                        <div className='d-flex justify-content-center'>World Experiences</div>
                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-center fs-3'>200+</div>
                                        <div className='d-flex justify-content-center'>Destinations</div>
                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-center fs-3'>10K+</div>
                                        <div className='d-flex justify-content-center'>Customer</div>
                                    </div>

                                    <div>
                                        <div className='d-flex justify-content-center fs-3'>40K+</div>
                                        <div className='d-flex justify-content-center'>Average Votes</div>
                                    </div>
                                </div>
                                <div className='mt-3 text-dark'>
                                    <ul>
                                        <li>
                                            <span className='fw-bold'>Enhance Your Journey:</span> "We are committed to enhancing your travel experience. 
                                            With our carefully crafted tours and expert guides, we ensure every moment of
                                            your journey is memorable."
                                        </li>
                                        <li>
                                            <span className='fw-bold'>Unforgettable Adventures:</span> "Experience unforgettable adventures with us. 
                                            Our dedication to quality and safety guarantees that you'll explore the world's wonders with confidence."
                                        </li>
                                        <li>
                                            <span className='fw-bold'>Your Trust, Our Priority:</span> "Your trust is our top priority. We promise transparent pricing, 
                                            exceptional customer service, and a commitment to responsible travel for a worry-free booking experience."
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <img src='https://timviec365.vn/pictures/images_12_2020/luong-huong-dan-vien-du-lich%20(6).jpg' />
                            </div>
                        </div>
                    </div>

                    <div className='containerReviewsAndQuestions'>
                        <div className='listReviewsAndQuestions'>
                            <div className='reviews'>
                                <span className='title'>Customer Reviews</span>
                                <div className='review'>
                                    <span>Booking my vacation through this website was a breeze! The options were extensive, 
                                        the prices were competitive, and the support team was incredibly helpful. 
                                        I had an amazing trip, and I'll definitely be coming back for more adventures!</span>
                                    <div className='containRating'>
                                        <FontAwesomeIcon icon={faStar} className='icon'/>
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                    </div>
                                    <div className='user'>
                                        <img src='https://anhdephd.vn/wp-content/uploads/2022/02/anh-avatar-cute-dep-ngau.jpg'/>
                                        <span>Jessica</span>
                                    </div>
                                </div>
                                <div className='review'>
                                    <span>Booking my vacation through this website was a breeze! The options were extensive, 
                                        the prices were competitive, and the support team was incredibly helpful. 
                                        I had an amazing trip, and I'll definitely be coming back for more adventures!</span>
                                    <div className='containRating'>
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                        <FontAwesomeIcon icon={faStar} className='icon' />
                                    </div>
                                    <div className='user'>
                                        <img src='https://magiamgia247.vn/wp-content/uploads/2023/06/anh-avatar-dep-cho-con-trai2b2528242529.jpg'/>
                                        <span>Alex</span>
                                    </div>
                                </div>
                            </div>

                            <div className='questions'>
                                <span className='title'>Frequently Questions</span>
                                <Question />
                                <Question />
                                <Question />
                                <Question />
                            </div>
                        </div>
                    </div>

                    <div className='containerContact'>
                        <div className='content'>
                            <div className='submitQuestions'>
                                <span className='title'>Do You Have Any Question?</span>
                                <span className='d-inline-block'>
                                    Please fill in your email address and question,
                                    we will reply to your email as soon as!          
                                </span>
                                <form onSubmit={handleSubmitQuestions}>
                                    <input type='email' placeholder='Email address...'
                                        value={inputEmail}
                                        onChange={handleEmail}
                                    />
                                    <textarea placeholder='Your questions...'
                                        value={inputQuestions}
                                        onChange={handleQuestions}
                                    />
                                    <button type='submit'>Submit questions</button>
                                </form>
                            </div>

                            <div className='contactInfo'>
                                <span className='title'>Contact With Us</span>
                                <div>
                                    <div className='info'>
                                        <div className='my-2'>
                                            <span className='fw-bold'>Địa chỉ: </span>
                                            12X đường Nguyễn Thị Thập, Tân Quy, 
                                            Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                                        </div>
                                        <div className='my-2'>
                                            <span className='fw-bold'>Zalo: </span>
                                            09012345678
                                        </div>
                                        <div className='my-2'>
                                            <span className='fw-bold'>FaceBook: </span>
                                            TravelLuxe
                                        </div>
                                        <div className='my-2'>
                                            <span className='fw-bold'>Email: </span>
                                            TravelLuxe@gmail.com
                                        </div>
                                    </div>
                                    <div className='img'>
                                        <img src='https://vinalands.com/Uploads/images/EditSetting/z4313921095166_71d45f90f745627adfcdac62037299f8.jpg' />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Home;