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
      className="bg-bgPlanes bg-cover bg-center  w-screen h-screen bg-no-repeat font-serif"
    >
      <div className="justify-center flex h-1/5 ">
        <h1 className="text-8xl">Nuestros Planes</h1>
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
      <div className=" flex  justify-around">
        {infoPlanes?.map((e, index) => {
          return (
            <div
              key={e.id}
              className=" w-96 bg-colorCardServices overflow-hidden justify-end flex h-[500px] rounded-md shadow-md brightness-125 group"
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
              <div className="z-10  w-full flex flex-col">
                <div className=" w-full h-1/5 justify-center flex items-center">
                  <h1 className="text-3xl">{e.nombre}</h1>
                </div>
                <div className="flex  w-full">
                  <h1 className="text-right text-8xl border-r-4 pr-2 border-black w-4/6">
                    {e.precio}$
                  </h1>
                  <h1 className="w-8 text-5xl flex items-center text-gray-700">
                    {plan === 0 ? "Por Mes" : "Por Año"}
                  </h1>
                </div>
                <div className="flex flex-col m-4 ">
                  {e.descripcion.map((d, index2) => {
                    return (
                      <div className="flex items-center">
                        {index === 0 && index2 <= 0 ? (
                          <img
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : index === 1 && index2 < 2 ? (
                          <img
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : index === 2 ? (
                          <img
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681246157/imagenes%20Uvi/Planes/Frame_3_glfetd.png"
                            alt="iconA"
                          />
                        ) : (
                          <img
                            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681253225/imagenes%20Uvi/Planes/Frame_4_bdug2d.png"
                            alt="iconB"
                          />
                        )}
                        <h1 className="border-b-2 text-right  border-black ">
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
