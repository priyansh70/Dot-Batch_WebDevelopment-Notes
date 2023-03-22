import React from "react";

const Filter = (props) => {
  // console.log(props);
  return (
    <div className="w-11/12 mx-auto flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-center">
      {props.filterData.map((data) => {
        return (
          <button
            key={data.id}
            className="text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 text-white transition-all duration-300 border-white font-medium "
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
