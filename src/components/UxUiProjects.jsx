import { Link } from "react-router-dom";
import portfolioImage from '../assets/image/accueilPortfolio.png';
 import senAgro from  '../assets/image/senAgrobusiness.png';
const UXUIProjects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Il montre l'utilisation de technologies modernes et une interface utilisateur fluide.",
      image: portfolioImage
      ,lien :"https://www.figma.com/design/B8YlGXtIZfNC06J1uixO90/Untitled?node-id=0-1&t=4Xja82e1gyfLT8zY-1"
    },
    {
      title: "Projet 2",
      description: "Description du projet 2. Ce projet illustre des compétences avancées en développement web.",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69488.jpg?t=st=1722533722~exp=1722537322~hmac=b0e05dd179305a181363d4c6d7c1308fc43d37a529d8502c9b59cc374dc5ace7&w=996"
    },
    {
      title: "Sen Agrobusiness",
      description: "Description du projet 3. Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: senAgro,
      lien :"https://www.figma.com/design/SVhzv8IG9D4YAgoWAqa4nE/sen-Agro-business?node-id=0-1&t=apmo7nCswfhWgf6W-1"
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="px-4 py-2 mt-10 text-white bg-blue-500 rounded hover:bg-blue-700 inline-flex items-center"
        >
          Retour à l'accueil
        </Link>
        <h2 className="text-4xl font-extrabold text-blue-500 mb-8 text-center py-5">
          Projets UX/UI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-600 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-100 mb-4">{project.description}</p>
                <a
                  href={project.lien}
                  className="text-blue-100 hover:underline"
                >
                  lien Figma
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXUIProjects;
