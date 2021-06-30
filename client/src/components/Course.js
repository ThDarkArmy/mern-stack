import React from "react";

const Course = ({course}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{course.coursename}</h3>
        <p className="card-text">"{course.dcsp}"</p>
        <p className="card-text">courses date:{course.Sdate}</p>
        <p className="card-text">No of classes:{course.number}</p>
        <p className="card-text">
          Days of the week when the course will be taught:
          {course.weekno}
        </p>
      </div>
    </div>
  );
};

export default Course;
