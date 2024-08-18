import React from 'react';
import portfolioImage from '../assets/image/portfolio.png';
import { Link } from 'react-router-dom';

const WebProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Application de gestion de tâche",
      description: " Il montre l'utilisation de technologies modernes et une interface utilisateur fluide.",
      image: "https://s3-alpha.figma.com/hub/file/3258857591/80a53487-a98c-438e-bd34-43b65f3574c3-cover.png"
     ,lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 2,
      title: "Application Méteo",
      description: " Ce projet illustre des compétences avancées en développement web.",
      image: "https://s3-alpha.figma.com/hub/file/3581851921/resized/800x480/cd8de689-cdd1-4311-bfa6-cedcb23a22bd-cover.png"
    ,lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 3,
      title: "Application de gestion d'événement",
      description: " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: "https://s3-alpha.figma.com/hub/file/3264164744/resized/800x480/081c5663-fb49-463f-a6ad-033a6543cedd-cover.png"
     ,lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 4,
      title: "Portfolio personnel",
      description: " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: portfolioImage, // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
     lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 5,
      title: "Projet 5",
      description: " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: "", // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
     lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 6,
      title: "Projet 6",
      description: " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: "", // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
     lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    },
    {
      id: 7,
      title: "Projet 7",
      description: " Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: "", // Assurez-vous que portfolioImage est défini comme une chaîne de caractères contenant le chemin de l'image
     lien: "https://github.com/2raygit/gestion_de_tache_App.git"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-t from-purple-900 via-purple-800 ">
      <div className="container mx-auto px-4">
        <Link to="/" className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-blue-700 inline-flex items-center">
          Retour à l'accueil
        </Link>
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center py-5">Projets Web</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.lien} className="text-blue-500 hover:underline">
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
