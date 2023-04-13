import React from "react";

const Footer1 = () => {
  return (
    <footer className="w-full py-5 sm:py-10 px-4 bg-colorFooter font-serif">
      {" "}
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          <img
            className="w-40 h-40"
            src="https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047323/imagenes%20Uvi/logo1_1_2_1_5_kxhqn0.png"
            alt="logo"
          />

          <div className="mt-auto flex flex-col items-center">
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href="#link" className="text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>

              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Twitter</span>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Instagram</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>

              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>

            <span className="py-4 text-sm ">©2023 Uvi.</span>
          </div>

          <span
            className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2"
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 text-gray-400">
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-white font-bold tracking-wide">
              Navegacion
            </h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">
              <li>
                <a href="#landingPage" className="hover:text-gray-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gray-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#recomendaciones" className="hover:text-gray-200">
                  Recomencadiones
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-gray-200">
                  Planes
                </a>
              </li>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">
              UV! Company
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">info@uvi.com.ar</a>
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">
              Telefono de Contacto
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>01001-010101</span>
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-white font-bold tracking-wide">
              Contacto de desarrollador
            </h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-bold">
              <span>Dario Marcuzzi</span>
            </p>
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* GitHub */}
              <a
                href="https://github.com/DarioMarcuzzi"
                target="_blank"
                className="ml-3 text-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.84 9.488.5.09.687-.216.687-.482 0-.237-.008-.866-.013-1.698-2.806.61-3.405-1.353-3.405-1.353-.46-1.167-1.124-1.476-1.124-1.476-.917-.628.07-.616.07-.616 1.012.07 1.546 1.04 1.546 1.04.9 1.53 2.363 1.087 2.945.832.092-.656.352-1.087.64-1.337-2.245-.26-4.603-1.123-4.603-4.988 0-1.1.39-1.997 1.04-2.698-.105-.26-.453-1.277.1-2.66 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0112 5.5c.84 0 1.67.113 2.46.332 1.91-1.3 2.75-1.03 2.75-1.03.554 1.383.207 2.4.1 2.66.645.7 1.035 1.597 1.035 2.697 0 3.876-2.36 4.727-4.62 4.982.36.313.687.927.687 1.867 0 1.353-.013 2.44-.013 2.773 0 .267.18.58.695.48C19.138 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/dario-marcuzzi-399908224/"
                target="_blank"
                className="ml-3 text-gray-200"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
