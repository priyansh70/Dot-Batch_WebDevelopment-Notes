import "./App.css";
import React, { useContext, useEffect } from 'react'
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from './Context/AppContext';

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (

    <div className="flex flex-col justify-center items-center gap-y-1 w-full h-screen">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App