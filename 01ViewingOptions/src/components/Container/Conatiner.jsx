import React, { useState } from "react";
import data from "./data";
function Container() {
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState("singleValue");
  const [multiple,setMultiple] = useState([]);
  const valueHandler = function(){
    if(value==='singleValue'){
      setValue('multipleValue');
    }
    else{
      setValue('singleValue');
    }
  }
  const singleHandler = function (elementId) {
    setSelected(elementId === selected ? null : elementId);
  };

  const MultipleHandler = function(elementId){
    const multi = [...multiple];
    const index = multi.indexOf(elementId); // Check if elementId already exists
    if (index !== -1) {
      multi.splice(index, 1); // Remove if it exists
    } else {
      multi.push(elementId); // Add if it doesn't exist
    }
    setMultiple(multi);
  }


  return (
    <div className="w-vw min-h-[100vh] bg-slate-400">
      <div className="flex justify-center">
        <button className=" bg-red-100 p-5 rounded-2xl m-5" onClick={valueHandler}>
          {value === "singleValue" ? "Single Value" : "Multiple Value"}
        </button>
      </div>
      <div className="mt-5 flex justify-center text-center max-w-7xl mx-auto ">
        <div className="text-2xl px-5 rounded-xl bg-yellow-50">
          {data && data.length > 0
            ? data.map((element) => (
                <ul className="my-12 mx-10" key={element.id}>
                  <div className="flex justify-center gap-6">
                    <h3>{element.question}</h3>
                    <span
                      className="text-yellow-600"
                      onClick={() => {value === "singleValue" ? singleHandler(element.id) : MultipleHandler(element.id)}}
                    >
                      +
                    </span>
                  </div>
                  <div className="flex">
                    {value === "singleValue" ? (
                      
                      selected === element.id ? (<p className="bg-green-100">{element.answer}</p>) : null) 
                      
                      : multiple.map((elemId)=>(
                        elemId=== element.id ?(<p className="bg-green-100">{element.answer}</p>) : null
                      ))}
                    
                  </div>
                </ul>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default Container;
