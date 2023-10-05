import React, { useState } from 'react';
import './Question.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faUpLong } from '@fortawesome/free-solid-svg-icons';
function Question() {

    const [stateActive, setStateActive] = useState(false)

    const handleSetActive = () => {
        setStateActive(stateActive === false ? true : false)
    }
    return ( 
        <>
            <div className='containerQuestion'>
                <div className='question'>
                    How do I know if the tour is safe?
                    <FontAwesomeIcon icon={stateActive === false ? faDownLong : faUpLong}
                                    className='icon float-end'
                                    onClick={handleSetActive}
                        />
                </div>
                <div className={`answer ${stateActive === true ? 'active' : ''}`}>
                    Your safety is our top priority. We only partner with reputable 
                    and experienced tour providers. All tours adhere to safety standards 
                    and are carefully monitored. We also provide safety information and 
                    guidelines for each tour so you can explore with confidence.
                </div>
            </div>
        </>
     );
}

export default Question;