import React from 'react';
import portfolioImage from '../assets/image/portfolio.png';
import Image1 from "../assets/image/imagew1.png";
import Image2 from "../assets/image/imagew2.png";
import Image3 from "../assets/image/imagew3.png";
import defaultimage from "../assets/image/default.png";
import bgImage from "../assets/image/bgimage.jpg";
import { Link } from 'react-router-dom';

const WebProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Application de gestion de tâche",
      description:
        " Il montre l'utilisation de technologies modernes et une interface utilisateur fluide.",
      image: Image1,
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 2,
      title: "Application Méteo",
      description:
        " Ce projet illustre des compétences avancées en développement web.",
      image: Image2,
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 3,
      title: "Application de gestion d'événement",
      description:
        " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: Image3,
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 4,
      title: "Portfolio personnel",
      description:
        " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: portfolioImage, // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 5,
      title: "Projet 5",
      description:
        " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: defaultimage, // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 6,
      title: "Projet 6",
      description:
        " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: defaultimage, // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
    {
      id: 7,
      title: "Projet 7",
      description:
        " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: defaultimage, // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
      lien: "https://github.com/2raygit/gestion_de_tache_App.git",
    },
  ];

  return (
    <section className="py-20 bg-white ">
     
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="px-4 py-2 text-white bg-yellow-500 mt-10 rounded hover:bg-blue-700 inline-flex items-center"
        >
          Retour à l'accueil
        </Link>
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-8 text-center py-5">
          Projets Web
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-yellow-400 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  {project.title}
                </h3>
                <p className="text-white mb-4">{project.description}</p>
                <a
                  href={project.lien}
                  className="text-blue-900 hover:underline"
                >
                  lien github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
