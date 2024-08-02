import React from 'react';

const WebProjects = () => {
  const projects = [
    {
      title: "Projet 1",
      description: "Description du projet 1. Il montre l'utilisation de technologies modernes et une interface utilisateur fluide.",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69534.jpg?t=st=1722523448~exp=1722527048~hmac=554f5f81eba640ac7bfca63704db1e9335efcd214f6cf85d875ac767aef85b8b&w=996"
    },
    {
      title: "Projet 2",
      description: "Description du projet 2. Ce projet illustre des compétences avancées en développement web.",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69488.jpg?t=st=1722533722~exp=1722537322~hmac=b0e05dd179305a181363d4c6d7c1308fc43d37a529d8502c9b59cc374dc5ace7&w=996"
    },
    {
      title: "Projet 3",
      description: "Description du projet 3. Un projet qui combine design et fonctionnalité avec des technologies récentes.",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149051560.jpg?t=st=1722533766~exp=1722537366~hmac=d7672c9c328bb28210bf19a98955fe3347a0abd65c1e1524cbc5b33952e5dc19&w=996"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-purple-900 via-purple-800 ">
      <div className="container mx-auto px-4">
        
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
                <a href="#" className="text-blue-500 hover:underline">
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
