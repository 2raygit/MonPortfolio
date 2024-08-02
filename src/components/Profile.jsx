import React from 'react';
import backgroundImage from '../assets/image/image.jpg';

const Profile = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-night-blue p-4">
      {/* Conteneur principal */}
      <div className="relative flex flex-col md:flex-row w-full max-w-7xl h-500 bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden">
        {/* Section avec l'image de fond */}
        <div
          className="relative flex-1 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 1px 200px 1px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white transform -skew-x-12 origin-bottom-right"></div>
          <div className="relative flex items-center justify-center h-full p-8">
            <div className="flex flex-col items-center">
              <a
                href="/assets/cv.pdf" // Assurez-vous que le chemin est correct
                download // Ajoutez l'attribut download pour forcer le téléchargement
                className="btn btn-primary justify-center ripple-btn mt-4"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>

        {/* Section avec le texte */}
        <div className="relative flex-1 bg-white p-8 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl  font-extrabold text-gray-800 mb-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Cheikhou TOURE
          </h1>
          <h2
            className="text-2xl md:text-4xl font-extrabold text-gray-600 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Développeur Web & Designer UX/UI
          </h2>
          <p
            className="text-sm md:text-base text-gray-600"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Je suis un développeur web et designer UX/UI avec une passion pour créer des expériences utilisateur intuitives et esthétiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
