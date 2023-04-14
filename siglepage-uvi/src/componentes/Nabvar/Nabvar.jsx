import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full z-20 bg-colorFooter/50 backdrop-blur-xl text-gray-100 body-font font-serif fixed shadow-sm">
      <div className="mx-auto flex justify-start  w-full items-center py-4">
        <div className="w-1/6 ">
          <a href="#landingPage">
            <img
              src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047325/imagenes%20Uvi/logo1_1_2_1_5_1_idgr1v.png"
              className="w-fit h-fit xl:w-fit xl:h-10 text-white ml-2 "
              alt="logo1"
            ></img>
          </a>
        </div>

        <nav className="hidden w-full xl:w-4/6  md:flex flex-wrap items-center justify-around text-2xl tracking-wide">
          <a
            href="#servicios"
            className="mr-8  hover:border-b-2 border-b-2 border-transparent hover:border-white"
          >
            Servicios
          </a>
          <a
            href="#recomendaciones"
            className="mr-8 hover:border-b-2 border-b-2 border-transparent hover:border-white"
          >
            Recomendaciones
          </a>
          <a
            href="#planes"
            className="mr-8  hover:border-b-2 border-b-2 border-transparent hover:border-white"
          >
            Planes
          </a>
          <a
            href="#contacto"
            className="mr-8  hover:border-b-2 border-b-2 border-transparent hover:border-white"
          >
            Contacto
          </a>
        </nav>

        <div className=" w-full  md:w-auto  flex justify-end mr-4 ">
          <button
            className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-colorFooter/50 text-base uppercase text-center font-semibold">
          <a
            href="#servicios"
            className="block px-3 py-2 rounded-md text-gray-300  hover:text-white hover:bg-gray-700"
          >
            Servicios
          </a>
          <a
            href="#recomendaciones"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Recomendaciones
          </a>
          <a
            href="#planes"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Planes
          </a>
          <a
            href="#contacto"
            className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
