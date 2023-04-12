import React, { useEffect, useState, useRef } from "react";
import { data } from "../../data.json";

const LandingPage = () => {
  const descripcion = data.descripcion;

  const imageRef = useRef();
  const [imageSeen, setImageSeen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
      }, 800);

      const image = imageRef.current;
      if (image && !imageSeen) {
        const imagePosition = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (imagePosition.bottom >= 0 && imagePosition.top <= windowHeight) {
          setImageSeen(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imageSeen]);

  return (
    <div className="flex w-screen h-screen overflow-hidden items-end">
      <div className="w-[730px] h-[830px] overflow-hidden absolute text-center flex justify-center items-center rounded-full top-0  left-0 right-0 m-auto">
        <img
          className="absolute duration-1000"
          style={{
            top: imageSeen ? "-800px" : "0px",
          }}
          ref={imageRef}
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047323/imagenes%20Uvi/logo1_1_2_1_5_kxhqn0.png"
          alt="logo"
        />
        <h1 className="font-serif w-5/6 h-5/6 flex justify-center items-center text-3xl   p-20 rounded-full">
          {descripcion}
        </h1>
      </div>
      <div className=" w-full flex justify-around ">
        <img
          style={{
            top: imageSeen ? "0px" : "800px",
          }}
          className=" relative duration-1000 [transform:rotateY(180deg)]"
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047414/imagenes%20Uvi/LandingPage/undraw_Digital_nomad_re_w8uy-removebg-preview_mwnav6.png"
          alt="ilustracion"
        />
        <img
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047402/imagenes%20Uvi/LandingPage/undraw_learning_sketching_nd4f-removebg-preview_yzbwns.png"
          alt="ilustracion2"
        />
      </div>
    </div>
  );
};

export default LandingPage;
