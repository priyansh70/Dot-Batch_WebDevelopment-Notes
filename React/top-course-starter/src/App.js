import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from './data.js';
import {toast} from "react-toastify";
import { useEffect,useState } from "react";

const App = () => {
  
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

         // Save data
        setCourses(output.data);
      }
      catch (err) {
        toast.error("Something Went Wrong");
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses}/>
    </div>
  );
};

export default App;
