import React from "react";
import Card from './Card';

const Cards = (props) => {

    let allCourse = [];

    // It Returns list of all courses received from the api Response 

    const getCourses = () => {
        Object.values(props.courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourse.push(course);
            })
        });
        return allCourse;
    }
    console.log(allCourse);
    return <div>
        {
            !courses ? 
        }
        {
            getCourses().map((course) => {
                return <Card course={course} key={props.id}/>
            })
        }
    </div>;
};

export default Cards;
