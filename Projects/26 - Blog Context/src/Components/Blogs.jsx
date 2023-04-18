import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return ( 
    <div className="my-[100px]">
      <div className="flex flex-col gap-y-10 my-4">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <p className="font-bold text-3xl text-center my-[200px]">
            Data Not Found
          </p>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
