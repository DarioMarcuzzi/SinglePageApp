import React from "react";

const Nabvar = () => {
  return (
    <div className="fixed flex h-20 z-10 bg-slate-600/50 w-full">
      <div className="w-1/6  h-full">
        <div className=" ml-2 h-full flex justify-center items-center w-3/5">
          <img
            className="h-16"
            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047325/imagenes%20Uvi/logo1_1_2_1_5_1_idgr1v.png"
            alt="logo1"
          />
        </div>
      </div>
      <div className="w-4/6  h-full text-white text-2xl font-serif flex">
        <div className="w-1/2 h-full flex  items-center   justify-around  ">
          <a
            href="#servicios"
            className="hover:cursor-pointer hover:border-white border-transparent border-b-2"
          >
            Servicios
          </a>
          <a
            href="#recomendaciones"
            className="hover:cursor-pointer hover:border-white border-transparent border-b-2"
          >
            Recomendaciones
          </a>
        </div>
        <div className="w-1/2 h-full  flex  items-center  justify-around  ">
          <a
            href="#planes"
            className="hover:cursor-pointer hover:border-white border-transparent border-b-2"
          >
            Planes
          </a>
          <a
            href="#contacto"
            className="hover:cursor-pointer hover:border-white border-transparent border-b-2"
          >
            Contacto
          </a>
        </div>
      </div>
      <div className="w-1/6 h-full"></div>
    </div>
  );
};

export default Nabvar;
