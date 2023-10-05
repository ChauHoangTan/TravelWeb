import { ACTIVE_INDEX } from "./ActiveIndexType";

const ActiveIndexAction = (index) => {
    return {
        type: ACTIVE_INDEX,
        payload: index
    }
}

export {ActiveIndexAction}