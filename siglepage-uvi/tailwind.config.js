/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgLandingPage:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681051769/imagenes%20Uvi/DescripcionDefinitiva_c7r6cq.png')",
        bgLandingAndServices:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681062956/imagenes%20Uvi/DescripcionAhora_zzfocb.png')",
        bgServices:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681052223/imagenes%20Uvi/DescriccionDefinitivo1_fmdipw.png')",
        bgPlanes:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047130/imagenes%20Uvi/InfoPlanes1_vin41o.png')",
        bgFormulario:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681312653/imagenes%20Uvi/Component_1_xegxue.png')",
        fondoTitulo:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681222875/imagenes%20Uvi/Ellipse_16_jh36j0.png')",
        fondoFormulario:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681298669/formulario/Formulario_kecnp0.png')",
        fondoAvatar:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681222878/imagenes%20Uvi/Ellipse_13_a3w3fx.png')",
        logoUvi:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047323/imagenes%20Uvi/logo1_1_2_1_5_kxhqn0.png')",
        logoUvi1:
          "url('https://res.cloudinary.com/dmpqjroj5/image/upload/v1681047325/imagenes%20Uvi/logo1_1_2_1_5_1_idgr1v.png')",
      },
      animation: {
        recomendacion: "slideToLeft 1s ease-in-out",
      },
      keyframes: {
        recomendacion: {},
      },
      colors: {
        colorFormulario: "#bd72fd",
        colorFooter: "#7721bf",
        colorCardServices: "#FFFBFB",
        colorPunto: "#00FF00",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
