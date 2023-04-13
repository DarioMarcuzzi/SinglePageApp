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
    <div
      id="landingPage"
      className="flex w-screen h-screen overflow-hidden items-end"
    >
      <div className="w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] 2xl:w-[724px] 2xl:h-[820px]  xl:w-[400px] xl:h-[450px]  overflow-hidden absolute text-center  flex justify-center items-center rounded-full top-24 xl:top-0  left-0 right-0 m-auto">
        <img
          className="absolute duration-1000"
          style={{
            top: imageSeen ? "-800px" : "0px",
          }}
          ref={imageRef}
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047323/imagenes%20Uvi/logo1_1_2_1_5_kxhqn0.png"
          alt="logo"
        />
        <h1
          style={{
            opacity: imageSeen ? "100%" : "0%",
          }}
          ref={imageRef}
          className="font-serif duration-1000 w-full h-full flex justify-center items-center text-sm sm:text-xl  2xl:text-3xl p-4 rounded-full"
        >
          {descripcion}
        </h1>
      </div>
      <div className=" w-full flex sm:justify-around justify-center items-end ">
        <img
          style={{
            top: imageSeen ? "50%" : "800px",
            opacity: imageSeen ? "100%" : "0%",
          }}
          className=" hidden md:block sm:relative xl:w-[400px] xl:h-[400px] opacity-0 2xl:w-auto 2xl:h-auto sm:opacity-100 bottom-0 duration-1000 [transform:rotateY(180deg)]"
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047414/imagenes%20Uvi/LandingPage/undraw_Digital_nomad_re_w8uy-removebg-preview_mwnav6.png"
          alt="ilustracion"
        />
        <img
          style={{
            bottom: "0px",
          }}
          data-aos="fade-left"
          className="relative  xl:w-[370px] xl:h-[300px] 2xl:w-auto 2xl:h-auto"
          src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047402/imagenes%20Uvi/LandingPage/undraw_learning_sketching_nd4f-removebg-preview_yzbwns.png"
          alt="ilustracion2"
        />
      </div>
    </div>
  );
};

export default LandingPage;
