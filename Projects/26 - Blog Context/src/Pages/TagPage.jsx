import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const TagPage = () => {
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");

  const navigate = useNavigate();
  return (
    <div className="mt-[100px]">
      <Header />
      <div className="max-w-2xl mx-auto flex items-center space-x-2 w-11/12 -mb-[50px]">
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md" onClick={() => navigate(-1)}>Back</button>
        <h2 className="font-bold text-xl">
          Blogs Tagged <span className="underline text-blue-700">#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};

export default TagPage;
