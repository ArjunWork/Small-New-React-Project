import React from "react";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const resposne = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await resposne.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    {
      return (
        <div className="w-full text-center bg-red-100 font-bold">
          Loading Data ! Please Wait
        </div>
      );
    }
  }

  if (images) {
    console.log(images);
  }

  if (errorMsg !== null) {
    return (
      <div className="w-full text-center bg-red-100 font-bold">
        Error occured ! {errorMsg}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100vh] bg-gray-500">
        <BsArrowLeftCircleFill className=""/>
        {images && images.length 
        ?  images.map((imageItem)=>{
            <img
            key={imageItem.id}
            alt = {imageItem.download_url}
            src = {imageItem.download_url}
            className="" 
            />
        })
        :  null}
        <BsArrowRightCircleFill className=""/>
    </div>
    );
}

export default ImageSlider;
