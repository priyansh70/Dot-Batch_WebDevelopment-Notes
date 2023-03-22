import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";


const App = () => {
  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log(output.data);
      setCourses(output.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-bgDark2">
        <Filter filterData={filterData} />

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap items-center justify-center">
          <Cards courses={courses} />
        </div>
      </div>
    </div>
  )
};

export default App;
