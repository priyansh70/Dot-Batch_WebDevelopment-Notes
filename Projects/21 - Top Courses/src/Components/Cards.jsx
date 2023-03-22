import React from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  // console.log(Object.values(courses)[0][0].title);

  function getAllCourse() {
    let allCourse = [];
    Object.values(courses).forEach((course) => {
      // console.log(course)
      course.forEach((courseData) => {
        // console.log(courseData);
        allCourse.push(courseData);
      });
    });
    return allCourse;
  }

  // console.log(getAllCourse());

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getAllCourse().map((course) => {
          return (<Card key={courses.id} course={course} />)
        })
      }
    </div>
  );
};

export default Cards;
