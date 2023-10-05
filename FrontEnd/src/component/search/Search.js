import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faCaretDown, faMoneyBill, faCalendar, faCalendarDays, faSearch } from '@fortawesome/free-solid-svg-icons';
function Search() {
    return ( 
        <>
            <div className='wrapSearch'>
                <div className='containerSearch'>
                    <div className='search'>        
                        <form className='content'>
                            <div>
                                <FontAwesomeIcon icon={faLocation} className='iconLeft'/><input type='text' placeholder='Destination'/>
                                <FontAwesomeIcon icon={faCaretDown} className='iconRight'/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMoneyBill} className='iconLeft'/><input type='text' placeholder='Budget'/>
                                <FontAwesomeIcon icon={faCaretDown} className='iconRight'/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendar} className='iconLeft'/><input type='text' placeholder='Date'/>
                                <FontAwesomeIcon icon={faCalendarDays} className='iconRight'/>
                            </div>
                            <div>
                                <button type='iconLeft'>Search <FontAwesomeIcon icon={faSearch} className='iconSearch'/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Search;