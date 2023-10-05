import React, { useState } from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faCaretDown, faMoneyBill, faCalendar, faCalendarDays, faSearch, faFilter, faStar } from '@fortawesome/free-solid-svg-icons';
import Search from '../../component/search/Search';
import img1 from '../../assets/ExploreSearch/img1.jpg'
import img2 from '../../assets/ExploreSearch/img2.jpg'
import img3 from '../../assets/ExploreSearch/img3.jpg'
import img4 from '../../assets/ExploreSearch/img4.jpg'
import { useNavigate } from 'react-router-dom';
function SearchPage() {

    // Filter
    // radio
    const [arrange,setArrange] = useState('Default')
    const handleSetArrange = (e) => {
        setArrange(e.target.value)
    }

    const [price, setPrice] = useState('0-1000')
    const handleSetPrice = (e) => {
        setPrice(e.target.value)
    }

    // checkbox
    const [sightseeingTour, setSightseeingTour] = useState(false)
    const [resortTour, setResortTour] = useState(false)
    const [adventureTour, setAdventureTour] = useState(false)
    const [culinaryTour, setCulinaryTour] = useState(false)
    const [otherTour, setOtherTour] = useState(false)

    const handleSightSeeingTour = () => {
        setSightseeingTour(sightseeingTour === true ? false : true)
    }

    const handleResortTour = () => {
        setResortTour(resortTour === true ? false : true)
    }

    const handleSetAdventureTour = () => {
        setAdventureTour(adventureTour === true ? false : true)
    }

    const handleSetCulinaryTour = () => {
        setCulinaryTour(culinaryTour === true ? false : true)
    }

    const handleSetOtherTour = () => {
        setOtherTour(otherTour === true ? false : true)
    }

    const navigate = useNavigate()
    const navigateToTourDetails = () => {
        navigate('/tourDetails/:1')
    }
    return ( 
        <>
            <div id = 'searchPage'>
                <Search />


                <div className='filterAndResults'>
                    <div>
                    <div className='filter'>
                        <span className='title'>Filter <FontAwesomeIcon icon={faFilter}/></span>
                        <div className='arrange'>
                            <span>Arrange</span>
                            
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Default"
                                checked={arrange === 'Default'}
                                onChange={handleSetArrange}/>
                                Default
                            </div>
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Time gradually increase"
                                checked={arrange === 'Time gradually increase'}
                                onChange={handleSetArrange}/>
                                Time gradually increase
                            </div>
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Time gradually decrease"
                                checked={arrange === 'Time gradually decrease'}
                                onChange={handleSetArrange}/>
                                Time gradually decrease
                            </div>
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Prices gradually increase"
                                checked={arrange === 'Prices gradually increase'}
                                onChange={handleSetArrange}/>
                                Prices gradually increase
                            </div>
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Prices gradually decrease"
                                checked={arrange === 'Prices gradually decrease'}
                                onChange={handleSetArrange}/>
                                Prices gradually decrease
                            </div>
                            <div>
                                <input type='radio'
                                name='arrange'
                                value="Highest rated"
                                checked={arrange === 'Highest rated'}
                                onChange={handleSetArrange}/>
                                Highest rated
                            </div>
                            
                        </div>

                        <div className='tourTypes'>
                            <span>Tour types</span>
                            <div>
                                <input type='checkbox'
                                name='sightseeingTour'
                                checked={sightseeingTour}
                                onChange={handleSightSeeingTour}/>
                                Sightseeing tour
                            </div>
                            <div>
                                <input type='checkbox'
                                name='resortTour'
                                checked={resortTour}
                                onChange={handleResortTour}/>
                                Resort tour
                            </div>
                            <div>
                                <input type='checkbox'
                                name='adventureTour'
                                checked={adventureTour}
                                onChange={handleSetAdventureTour}/>
                                Adventure Tour
                            </div>
                            <div>
                                <input type='checkbox'
                                name='culinaryTour'
                                checked={culinaryTour}
                                onChange={handleSetCulinaryTour}/>
                                Culinary tour
                            </div>
                            <div>
                                <input type='checkbox'
                                name='otherTour'
                                checked={otherTour}
                                onChange={handleSetOtherTour}/>
                                Other tour
                            </div>
                        </div>

                        <div className='tourPrices'>
                            <span>Prices</span>
                            <div>
                                <input type='radio'
                                name='price'
                                value="0-1000"
                                checked={price === '0-1000'}
                                onChange={handleSetPrice}/>
                                0-1000$
                            </div>
                            <div>
                                <input type='radio'
                                name='price'
                                value="0-200"
                                checked={price === '0-200'}
                                onChange={handleSetPrice}/>
                                0-200$
                            </div>
                            <div>
                                <input type='radio'
                                name='price'
                                value="200-400"
                                checked={price === '200-400'}
                                onChange={handleSetPrice}/>
                                200-400$
                            </div>
                            <div>
                                <input type='radio'
                                name='price'
                                value="400-600"
                                checked={price === '400-600'}
                                onChange={handleSetPrice}/>
                                400-600$
                            </div>
                            <div>
                                <input type='radio'
                                name='price'
                                value="600-800"
                                checked={price === '600-800'}
                                onChange={handleSetPrice}/>
                                600-800$
                            </div>
                            <div>
                                <input type='radio'
                                name='price'
                                value="800-1000"
                                checked={price === '800-1000'}
                                onChange={handleSetPrice}/>
                                800-1000$
                            </div>
                        </div>
                    </div>

                    <div className='results'>
                        <span className='title'>Results</span>

                        <div className='tour'>  
                            <img src='https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_1280.jpg'/> 
                            <div className='info' onClick={navigateToTourDetails}>
                                <div>
                                    <span class="tour-description fw-bold fs-5">An exciting journey to famous destinations.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$500</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Bali Island, Indonesia</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 7 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>12/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
                                </div>
                            </div>
                            
                        </div>

                        <div className='tour' onClick={navigateToTourDetails}>
                            <img src='https://cdn.pixabay.com/photo/2023/01/14/05/34/street-7717463_1280.jpg'/> 
                            <div className='info'>
                                <div>
                                    <span class="tour-description fw-bold fs-5">Explore beautiful landscapes and unique cultures.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$750</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Kyoto, Japan</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 10 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>15/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
                                </div>
                            </div>
                        </div>

                        <div className='tour' onClick={navigateToTourDetails}>
                            <img src='https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg'/> 
                            <div className='info'>
                                <div>
                                    <span class="tour-description fw-bold fs-5">Relax in a paradise by the sea.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$600</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Maldives</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 5 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>10/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
                                </div>
                            </div>
                        </div>

                        <div className='tour' onClick={navigateToTourDetails}>  
                            <img src='https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980_1280.jpg'/> 
                            <div className='info'>
                                <div>
                                    <span class="tour-description fw-bold fs-5">An exciting journey to famous destinations.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$500</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Bali Island, Indonesia</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 7 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>12/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
                                </div>
                            </div>
                            
                        </div>

                        <div className='tour' onClick={navigateToTourDetails}>
                            <img src='https://cdn.pixabay.com/photo/2023/01/14/05/34/street-7717463_1280.jpg'/> 
                            <div className='info'>
                                <div>
                                    <span class="tour-description fw-bold fs-5">Explore beautiful landscapes and unique cultures.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$750</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Kyoto, Japan</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 10 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>15/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
                                </div>
                            </div>
                        </div>

                        <div className='tour' onClick={navigateToTourDetails}>
                            <img src='https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg'/> 
                            <div className='info'>
                                <div>
                                    <span class="tour-description fw-bold fs-5">Relax in a paradise by the sea.</span>
                                    <span class="tour-price float-end fw-bold fs-5">$600</span>
                                </div>
                                <div>
                                    <span class="tour-location">Location: Maldives</span>
                                </div>
                                <div>
                                    <span class="tour-duration">Duration: 5 days</span>
                                </div>
                                <div>
                                    <span>05/10/2023</span> -
                                    <span>10/10/2023</span>
                                </div>
                                <div className='vote'>
                                    <FontAwesomeIcon icon={faStar} className='text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1 text-warning'/>
                                    <FontAwesomeIcon icon={faStar} className='ms-1'/>
                                </div>
                                <div>
                                    <button className='float-end'>Booking now</button>
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

export default SearchPage;