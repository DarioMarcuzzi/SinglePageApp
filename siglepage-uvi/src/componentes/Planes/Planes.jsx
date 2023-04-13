import React, { useEffect, useState } from "react";
import { data } from "../../data.json";

const Planes = () => {
  const [plan, setPlan] = useState(0);
  const [infoPlanes, setInfoPlanes] = useState([]);

  useEffect(() => {
    setInfoPlanes(data.planesMes);
  }, []);

  const changePlan = (e) => {
    if (e.target.value === "Mes") {
      setInfoPlanes(data.planesMes);
    } else {
      setInfoPlanes(data.planesAnual);
    }
    if (e.target.value === "Mes") {
      setPlan(0);
    } else {
      setPlan(1);
    }
  };

  return (
    <div
      id="planes"
      className="bg-bgPlanes bg-cover bg-center  w-screen mt-10  bg-no-repeat font-serif"
    >
      <div className="justify-center flex h-1/5 ">
        <h1 className="text-5xl mb-10  xl:text-8xl">Nuestros Planes</h1>
      </div>
      <div className="justify-center h-32  flex gap-10">
        <button
          onClick={changePlan}
          value="Mes"
          className={`border-2 text-2xl hover:border-colorFormulario rounded-md h-10 w-20 ${
            plan === 0 ? "bg-colorFormulario border-colorFooter text-white" : ""
          }`}
        >
          Mes
        </button>

        <button
          onClick={changePlan}
          value="Anual"
          className={`border-2 text-2xl  hover:border-colorFormulario rounded-md h-10 w-20 ${
            plan === 1 ? "bg-colorFormulario border-colorFooter text-white" : ""
          }`}
        >
          Anual
        </button>
      </div>
      <div className=" flex flex-wrap gap-4  justify-around">
        {infoPlanes?.map((e, index) => {
          return (
            <div
              key={e.id}
              className=" xl:w-96 bg-colorCardServices overflow-hidden justify-end flex xl:h-[500px]  w-72 h-96 rounded-md shadow-md brightness-125 group"
            >
              <div className="absolute ">
                <div
                  style={{
                    left: "50%",
                    marginLeft: "0%",
                  }}
                  className=" relative  flex w-8 h-8 group-hover:w-52  group-hover:h-52 duration-500 bg-colorFormulario rounded-full"
                >
                  {" "}
                </div>
              </div>
              <div className="z-10  justify-center w-full flex flex-col">
                <div className=" w-full h-1/5 justify-center flex items-center">
                  <h1 className="text-2xl xl:text-3xl">{e.nombre}</h1>
                </div>
                <div className="flex w-full justify-center xl:justify-start items-center  mb-4">
                  <h1 className=" xl:text-right text-6xl xl:text-8xl border-r-4 pr-2  border-black xl:w-4/6">
                    {e.precio}$
                  </h1>
                  <h1 className="w-8  text-3xl  xl:text-5xl flex items-center text-gray-700">
                    {plan === 0 ? "Por Mes" : "Por Año"}
                  </h1>
                </div>
                <div className="flex flex-col mx-4 ">
                  {e.descripcion.map((d, index2) => {
                    return (
                      <div className="flex items-center ">
                        {index === 0 && index2 <= 0 ? (
                          <img
                            className="w-14 h-16 xl:w-fit xl:h-fit"
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : index === 1 && index2 < 2 ? (
                          <img
                            className="w-14 h-16 xl:w-fit xl:h-fit"
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : index === 2 ? (
                          <img
                            className="w-14 h-16 xl:w-fit xl:h-fit"
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : (
                          <img
                            className="w-14 h-16 xl:w-fit xl:h-fit"
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681253225/imagenes%20Uvi/Planes/Frame_4_bdug2d.png"
                            alt="iconB"
                          />
                        )}
                        <h1 className="border-b-2 text-right text-sm xl:text-xl border-black ">
                          {d.text}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planes;
