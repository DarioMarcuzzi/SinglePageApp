import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services/Services";
import Recomendaciones from "../Recomendaciones/Recomendaciones";
import Planes from "../Planes/Planes";
import Formulario from "../Formulario/Formulario";
import Nabvar from "../Nabvar/Nabvar";
import Footer from "../Footer/Footer";

const Pages = () => {
  return (
    <div className="overflow-hidden">
      <Nabvar />
      <div className="bg-bgLandingAndServices bg-center bg-cover  bg-no-repeat ">
        <LandingPage />
        <Services />
      </div>
      <Recomendaciones />
      <Planes />
      <Formulario />
      <Footer />
    </div>
  );
};

export default Pages;
