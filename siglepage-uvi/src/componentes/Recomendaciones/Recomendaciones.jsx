import React, { useEffect, useState, Component } from "react";
import { data } from "../../data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recomendaciones = () => {
  const recomendaciones = data.recomendaciones;

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    dots: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      id="recomendaciones"
      className="flex flex-col h-screen w-screen sm:mt-20  overflow-hidden  font-serif"
    >
      <div className="flex h-1/5 w-full   items-center  justify-center ">
        <h1 className="text-2xl md:text-5xl xl:text-7xl 2xl:text-8xl  z-10 text-white  font-serif ">
          Recomendaciones de clientes
        </h1>
        <div className=" absolute -z-20">
          <img
            className="relative "
            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681222875/imagenes%20Uvi/Ellipse_16_jh36j0.png"
            alt="fondo"
          />
        </div>
      </div>

      <div
        // data-aos="fade-left"
        className="flex md:mt-10 xl:mt-40 flex-col h-3/5 w-screen border-t-2 border-black "
      >
        <Slider {...settings}>
          {recomendaciones?.map((e, index) => (
            <div
              className={`flex h-[500px]  ${
                dragging ? "cursor-grabbing" : "hover:cursor-grab"
              }`}
              onMouseDown={handleMouseDown}
            >
              <div>
                <h1 className="text-2xl flex justify-center rotate-90 -mt-1 ">
                  ⟶
                </h1>
                <h1 className="absolute">{e.fecha}</h1>
              </div>
              <div className="w-11/12 flex flex-col h-4/5 rounded-md bg-colorCardServices   shadow-md ">
                <div className=" flex  w-full items-center justify-center h-40">
                  <img className="w-44 z-10 h-40" src={e.avatar} alt="avatar" />
                  <div className="absolute">
                    <img
                      className="h-30 w-40 md:h-40 md:w-60"
                      src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681222878/imagenes%20Uvi/Ellipse_13_a3w3fx.png"
                      alt="fondo-avatar"
                    />
                  </div>
                </div>
                <div className="flex flex-col  m-3 items-center h-96">
                  <h1 className="text-4xl my-4">{e.nombre}</h1>
                  <div className="w-full bg-gray-500 h-[1px]"></div>
                  <div className=" h-full text-center flex items-center justify-center mx-4 my-4">
                    <p>{e.descripcion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recomendaciones;
