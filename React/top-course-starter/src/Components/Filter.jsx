import React from "react";

const Filter = (props) => {
  console.log(props);
  return (
    <div>
      {props.filterData.map((data) => {
        return <button>{data.title}</button>;
      })}
    </div>
  );
};

export default Filter;
