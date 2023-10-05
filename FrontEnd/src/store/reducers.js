import {combineReducers} from 'redux'
import activeIndexReducer from '../component/slider/redux/ActiveIndexReducer'
export default combineReducers({
    activeIndex: activeIndexReducer
})