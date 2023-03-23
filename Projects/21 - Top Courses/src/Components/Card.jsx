import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    // console.log(props)
    const course = props.course;
    const likedCourses = props.likedCourses;
    const setLikedCourses = props.setLikedCourses;

    const clickHandler = () => {
        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((id) => id !== course.id));
            toast.warning("Liked Removed");
        }
        else {
            // // Abhi tk 1 bhi course like nhi hua ha
            // if(likedCourses.length === 0)
            // {
            //     setLikedCourses([course.id]);
            // }

            // // Kuch Courses Like ho gaye hai
            // else{
            //     setLikedCourses((prev) => [...prev,course.id]);
            // }
            setLikedCourses((prev) => [...prev,course.id]);
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative">
                <img
                    src={course.image.url}
                    alt={course.image.alt}
                    className="w-full min-h-[168px] object-cover"
                />
                <div className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center absolute right-2 -bottom-3 shadow-xl">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>

            <div className="p-4 text-white">
                <p className="font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-base mt-2">
                    {course.description.length > 100
                        ? course.description.substring(0, 100) + "..."
                        : course.description}
                </p>
            </div>
        </div>
    );
};

export default Card;
