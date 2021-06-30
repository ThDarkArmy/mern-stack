import {GET_COURSES, POST_COURSE} from '../action/courseAction';

const courseReducer = (state=[], action) =>{
    switch(action.type){
        case GET_COURSES: 
            // state.courses = action.payload
            return action.payload;

        case POST_COURSE:
            return {}
        default: 
            return state;
    }
}

export default courseReducer;