import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[650px] flex flex-col gap-y-10 my-[100px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <p className="font-bold text-3xl text-center my-[200px]">
          Data Not Found
        </p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="max-w-2xl mx-auto">
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm my-1">
              By <span className="italic">{post.author}</span> on{"  "}
              <span className="font-semibold underline cursor-pointer">{post.category}</span>
            </p>
            <p className="text-sm">Posted On {post.date}</p>
            <p className="mt-4 mb-2">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag) => (
                <span className="text-blue-700 font-semibold text-xs underline cursor-pointer"> #{tag}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
