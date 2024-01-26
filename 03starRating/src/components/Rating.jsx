import React, { useState } from "react";
import Star from "./Star";

function Rating() {
  let j = 0;
  const numberOfButtons = 7;
  const [value, setValue] = useState(Array(numberOfButtons).fill([j++, "regular"]));

  // array of size = number of button is constructed
  let arr = [];
  for (let i = 0; i < numberOfButtons; i++) {
    arr[i] = i;
  }

  const changeProp = (index, val) => {
      const updatedValue = value.map((item, i) =>
        i <= index?  [item[1] != "solid"]? [item[0], "solid"]: [item[0], "regular"]: i
      );
      setValue(updatedValue);
  };

  return (
    <div className="w-full min-h-[100vh] bg-slate-500 flex items-center justify-center">
      <div className="p-5">
        {arr.map((index) => (
          <button
            key={index}
            className="text-2xl p-3"
            onClick={() => {changeProp(index, value[index][1]);}}
          >
            <Star prop={value[index][1]} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Rating;
