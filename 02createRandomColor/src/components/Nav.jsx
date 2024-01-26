import React, { useEffect, useState } from "react";

function Nav() {
  const styleValue = "bg-gray-100  text-l rounded-xl py-2 px-4";
  const [hex, setHex] = useState([]);
  const [rgb, setRgb] = useState([]);
  const [generate, setGenerate] = useState("hex");
  let [col,setCol] = useState('');
  
  const hexCreate = function () {
    setGenerate("hex");
    randomGenerate("hex");
  };
  const rgbCreate = function () {
    setGenerate("rgb");
    randomGenerate("rgb");
  };

  const randomGenerate = function (value) {
    let colValue = [];
    let randomNum = 0;
    //hex generation
    if (value == "hex") {
      let offset;
      let remainder;

      for (let i = 0; i < 6; i++) {
        randomNum = Math.floor(Math.random() * 16);
        if (randomNum <= 9) {
          colValue.push(randomNum);
        } else {
          offset = "a".charCodeAt(0);
          remainder = (randomNum - 10) % 26;
          colValue.push(String.fromCharCode(remainder + offset));
        }
      }
      setHex(colValue);
    }
    // rgb generation
    else {
      for (let i = 0; i < 3; i++) {
        randomNum = Math.floor(Math.random() * 256);
        colValue.push(randomNum);
      }
      setRgb(colValue);
    }
  };

  const getCol = function(){
    col = generate == "rgb" ? "rgb(" + rgb + ")" : "#" + hex.join("") + "";
    setCol(col);
  }

  const copyText = async function(text){
    try {
        await navigator.clipboard.writeText(text);
        alert('Text copied successfully!');
      } catch (error) {
        alert.error('Error copying text:', error);
      }
  }

  useEffect(() => {
    randomGenerate(generate);
  }, []);

  useEffect(()=>{
    getCol();    
  },[randomGenerate])

  return (
    <div
      className="w-full min-h-[100vh]"
      style={{
        backgroundColor:
          col
      }}
    >
      <div className="flex gap-3 justify-center pt-4 text-slate-700">
        <button onClick={hexCreate} className={`${styleValue}`}>
          Create HEX Color
        </button>
        <button onClick={rgbCreate} className={`${styleValue}`}>
          Create RGB Color
        </button>
        <button
          onClick={() => {
            randomGenerate(generate);
          }}
          className={`${styleValue}`}
        >
          Generate Random Color
        </button>
      </div>

      <div className="text-center flex justify-center min-h-[40vh] text-6xl text-white font-bold my-auto items-center ">
        {generate.toUpperCase()} Color
      </div>

      <div className="flex justify-center items-center">
        <div className="min-h-[20vh] min-w-[60vw] my-auto flex justify-center text-8xl font-bold items-center text-white">
          {col}
        </div>
        <button onClick={()=>{copyText(col)}} className="absolute right-[15vw] py-2 px-3 transform -translate-y-1/2  rounded-2xl font-bold text-black text-2xl cursor-pointer bg-slate-100">
            copy
        </button>
      </div>
    </div>
  );
}

export default Nav;
