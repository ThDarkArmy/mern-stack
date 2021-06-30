import React,{useState} from "react";
import signup from "../images/signup.svg";
import { useHistory } from "react-router-dom";
const Home = () => {

    const history = useHistory();
    const[user,setUser] = useState({
    coursename:"", dcsp:"",number:"",Sdate:"", weekno:"", })

    const handlerInputs=(e)=>{
       console.log(e);
       let name=e.target.name;
       let  value=e.target.value;

       setUser({...user,[name]:value})

    }
    const PostData = async(e)=>{
             e.preventDefault();
             const {coursename, dcsp,number,Sdate, weekno} = user;
              const res  = await fetch("/course" , {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
              coursename, dcsp,number,Sdate, weekno
             })
           });
           const data =await res.json();

           if(data.status===422 || !data)
           {
           window.alert("invalid");
           console.log("invalid");
           }else{
            window.alert("success");
            console.log("success");
           history.push("/dashboard");
           }
    }

  return (
    <>
      <div>
        <section className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="sighup-form">
                <h2 className="form-title">Course</h2>
                <form method="POST" className="register-form" id="form-group">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-book material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="coursename"
                      id="name"
                      value={user.coursename}
                      autoComplete="off"
                      onChange={handlerInputs}
                      placeholder="Course Title"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dcsp">
                      <i className="zmdi zmdi-comment-text material-icons-name"></i>
                    </label>
                    <textarea
                      type="text"
                      name="dcsp"
                      id="dcsp"
                      value={user.dcsp}
                      autoComplete="off"
                      onChange={handlerInputs}
                      placeholder="Course Description"
                      maxLength="200"
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="number">
                      <i className="zmdi zmdi-assignment material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={user.number}
                      autoComplete="off"
                      onChange={handlerInputs}
                      placeholder="No of Classes"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="Sdate">
                      <i className="zmdi zmdi-calendar material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="Sdate"
                      id="Sdate"
                      autoComplete="off"
                      value={user.Sdate}
                      onChange={handlerInputs}
                      placeholder="Start Date Of Course (DD/MM/YYYY)"
                    ></input>
                  </div>

                  <div className="form-group">
                    <label htmlFor="weekno">
                      <i className="zmdi zmdi-assignment material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="weekno"
                      id="weekno"
                      value={user.weekno}
                      autoComplete="off"
                      onChange={handlerInputs}
                      placeholder="Days of the week when the course will be taught"
                    ></input>
                  </div>
                  {/* <div className="form-group">
                    <label htmlFor="cpassword">
                      <i class="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      placeholder="Confirm your Password"
                    ></input>
                  </div> */}

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="add"
                      id="add"
                      className="form-submit"
                      value="Add Course"
                      onClick={PostData}
                    ></input>
                  </div>
                </form>
              </div>

              <div className="signup-image">
                <figure>
                  <img src={signup} alt="ragistration pic" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};




export default Home;
