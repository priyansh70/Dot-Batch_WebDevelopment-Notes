import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="grid justify-items-center gap-10">
      <h1 className="text-[#0398d4] text-xl capitalize font-medium">Increment And Decrement</h1>
      <div className="flex bg-white gap-12 rounded-sm px-5 py-3 text-[25px] text-[#344151] font-medium">
        <button className="border-r-2 pr-5 border-[#bfbfbf]" onClick={() => dispatch(decrement())}>-</button>
        <p className="">{count}</p>
        <button className="border-l-2 pl-5 border-[#bfbfbf]" onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Counter;
