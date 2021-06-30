import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCourses } from "../redux/action/courseAction";
import Course from "./Course";

const DashBoard = ({ courses, fetchAllCourse }) => {
  useEffect(() => {
    fetchAllCourse();
  }, []);

 

  return (
    <div>
      <h1 className="heading">All Available Courses</h1>

      {courses
        ? courses.courses.map((course) => <Course course={course} />
          )
        : null}

    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: state.courseReducer.courses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllCourse: () => {
    return dispatch(getCourses());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
