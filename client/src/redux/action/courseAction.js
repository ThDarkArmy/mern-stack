export const POST_COURSE = "POST_COURSE";
export const GET_COURSES = "GET_COURSES";

export const getCourses = () => async(dispatch) =>{
    try {
        const res = await fetch("http://localhost:5000/dashboard");
        const autualdata = await res.json();
        console.log("autualdata",autualdata);
        dispatch ({
            type: GET_COURSES,
            payload: {
                courses: autualdata
            }
        })
    } catch (err) {
        console.log(err);
    }
    
}

export const postCourse = ()=>{
    return {
        type: POST_COURSE
    }
}