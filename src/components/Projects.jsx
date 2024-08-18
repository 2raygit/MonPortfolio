
import { Link } from "react-router-dom";
import siteweb from '../assets/image/siteweb.jpg'
import uxui from "../assets/image/projetux.jpg";
const Projects = () => {
  return (
    <section className="py-16 bg-white  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-500 mb-8 text-center">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Projets Web */}
          <div className="bg-blue-900 bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
            <img
              src={siteweb}
              alt="Projets Web"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Projets Web
              </h3>
              <p className="text-gray-200 py-3">
                Voici quelques-uns des projets web que j'ai réalisés. Ils
                montrent ma capacité à créer des sites web réactifs,
                interactifs, et performants.
              </p>
              <Link
                to="/webprojet"
                className="btn px-4 py-5 text-white bg-blue-950 hover:bg-yellow-400 rounded"
              >
                {" "}
                voir plus
              </Link>
            </div>
          </div>

          {/* Section Projets UX/UI */}
          <div className="bg-yellow-600 bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
            <img
              src={uxui}
              alt="Projets UX/UI"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-100 mb-4">
                Projets UX/UI
              </h3>
              <p className="text-gray-200 py-3">
                Voici quelques projets de design UX/UI que j'ai réalisés. Ils
                illustrent mon approche pour créer des interfaces utilisateurs
                intuitives et esthétiques.
              </p>
              <Link
                to="/uxuiprojet"
                className="btn px-4 py-5 text-white bg-blue-950 hover:bg-yellow-400 rounded"
              >
                {" "}
                voir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
