import React from "react";
import { data } from "../../data.json";

const Services = () => {
  const dataService = data.ilustraciones.servicios;

  console.log(dataService);
  return (
    <div
      id="servicios"
      className=" w-full h-screen flex flex-col justify-center "
    >
      <div className="h-1/4  flex justify-center items-center w-full">
        <h1 className="text-8xl font-serif text-white ">Nuestros Servicios</h1>
      </div>
      <div className="flex  justify-around w-full">
        {dataService?.map((e, index) => {
          return (
            <div className="bg-colorCardServices shadow-md rounded-md  w-[350px] h-[500px] ">
              <div className="h-1/2">
                <img className="h-72 " src={e.url} alt="title-service" />
              </div>
              <div className="h-1/2 flex justify-center items-center">
                <h1 className="text-4xl  font-serif m-4 font-bold">
                  {e.title}
                  {index === 0 ? (
                    <a className="text-blue-800"> Linkedin</a>
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
