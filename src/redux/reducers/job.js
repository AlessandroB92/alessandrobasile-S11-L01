import { GET_JOBS } from "../actions";

const initialState = {
    joblist: []
}

const jobReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_JOBS:
            return {
                ...state,
                joblist: action.payload
            }
            default:
                return state;
            
    }
}

export default jobReducer;