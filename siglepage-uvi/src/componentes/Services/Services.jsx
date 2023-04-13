import React from "react";
import { data } from "../../data.json";

const Services = () => {
  const dataService = data.ilustraciones.servicios;

  console.log(dataService);
  return (
    <div
      id="servicios"
      className=" w-full flex flex-col justify-center   overflow-hidden"
    >
      <div className="h-1/4  flex justify-center items-center w-full">
        <h1 className=" text-3xl mb-9 xl:text-8xl font-serif text-white ">
          Nuestros Servicios
        </h1>
      </div>
      <div className="flex flex-wrap my-4 sm:flex-wrap gap-4 justify-around w-full">
        {dataService?.map((e, index) => {
          return (
            <div
              className="bg-colorCardServices shadow-md rounded-md w-60 h-72   xl:w-72 xl:h-96"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="h-3/5">
                <img className="h-full" src={e.url} alt="title-service" />
              </div>
              <div className="h-2/5 flex flex-col justify-center items-center p-4 ">
                <h1 className=" text-xl 2xl:text-2xl font-bold">
                  {e.title}
                  {index === 0 ? (
                    <a
                      href="https://www.linkedin.com/company/universo-i/"
                      target="_black"
                      className="text-blue-800 mt-2"
                    >
                      {" "}
                      Linkedin
                    </a>
                  ) : (
                    <></>
                  )}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
