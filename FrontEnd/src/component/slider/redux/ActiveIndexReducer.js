import { ACTIVE_INDEX } from "./ActiveIndexType";

const initialState = {
    index: 0 
}

const activeIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_INDEX:
            return {
                ...state, index: action.payload
            }
    
        default:
            return state
    }
}

export default activeIndexReducer