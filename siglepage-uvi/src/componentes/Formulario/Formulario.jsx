import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Formulario = () => {
  // const from = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3p7kjqj",
        "template_xg9twd2",
        form.current,
        "D_m2wzo8JV7pLO09c"
      )
      .then(
        (result) => {
          Swal.fire(
            "Mensaje Enviado!",
            "Nos estaremos comunicando pronto",
            "Muchas gracias"
          );
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      );
  };

  return (
    <div
      id="contacto"
      className="font-serif bg-no-repeat  bg-colorFormulario w-screen flex flex-col items-center justify-between"
    >
      <div className="w-[800px] bg-bgFormulario flex flex-col items-center  bg-no-repeat bg-cover bg-center h-[800px] mb-10">
        <div>
          <h1 className="text-5xl xl:text-8xl text-white mt-20 mb-10">
            Contacto
          </h1>
        </div>
        <div className="mt-2 p-4 flex justify-center bg-colorFormulario rounded-md shadow-md h-32 w-60">
          <img
            className="w-48 h-24"
            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047325/imagenes%20Uvi/logo1_1_2_1_5_1_idgr1v.png"
            alt="logo1"
          />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-screen xl:w-5/6 flex flex-col justify-center items-center  rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 w-full">
            <input
              className=" focus:border-2 border-2 focus:shadow-colorPunto  focus:border-colorPunto appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Nombre"
              name="form_nombre"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              className="shadow focus:border-2 border-2 focus:shadow-colorPunto  focus:border-colorPunto appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="correo"
              type="email"
              placeholder="Correo Electrónico"
              name="from_email"
            />
          </div>
          <div className="mb-4 w-full">
            <input
              className="shadow appearance-none focus:border-2 border-2 focus:shadow-colorPunto  focus:border-colorPunto rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telefono"
              type="tel"
              placeholder="Teléfono"
              name="form_telefono"
            />
          </div>
          <div className="mb-4  ">
            <label
              className="focus:border-2  focus:shadow-colorPunto  focus:border-colorPunto text-white  font-bold mb-2"
              htmlFor="plan"
            >
              Plan
            </label>
            <select
              className="shadow appearance-none focus:border-2 border-2 focus:shadow-colorPunto  focus:border-colorPunto rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="plan"
              name="form_plan"
            >
              <option value="basico">Básico</option>
              <option value="standar">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-white  font-bold mb-2"
              htmlFor="archivo"
            >
              Archivo{" "}
              <label className="ml-4 text-xs text-slate-400">Max: 5Mb</label>
            </label>
            <input
              id="archivo"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              max-size="5000000"
              className="block w-full py-2 px-3 mt-1 leading-5  placeholder-gray-400 transition duration-150 ease-in-out border 
               text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
