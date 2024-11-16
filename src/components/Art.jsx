import React from "react";
import { Link } from "react-router-dom";

// Les images seront importées ici une fois disponibles dans le dossier assets/image
import artworkImage1 from "../assets/image/lueurd'espoirI.jpeg";
import artworkImage2 from "../assets/image/lueurd'espoirII.jpeg";
import artworkImage3 from "../assets/image/i1.jpeg";
import artworkImage4 from "../assets/image/i2.jpeg";
import artworkImage5 from "../assets/image/i3.jpeg";
import artworkImage6 from "../assets/image/i4.jpeg";
import artworkImage7 from "../assets/image/i5.jpeg";
import artworkImage8 from "../assets/image/i6.jpeg";
import artworkImage9 from "../assets/image/i7.jpeg";
import artworkImage10 from "../assets/image/i8.jpeg";
// Exemple : import artworkImage1 from "../assets/image/artwork1.png";

const Art = () => {
  // Liste des œuvres d'art avec des espaces réservés pour les images et des liens
  const artworks = [
    {
      title: "Lueur d'espoir 1",
      description: "Description de l'œuvre d'art 1.",
      image: artworkImage1, // Remplacer par artworkImage1 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "https://www.instagram.com/reel/CzmCtTXqQ_n/?igsh=MWZpMG12bmcwdXJ4MA==", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Lueur d'espoir 2",
      description: "Description de l'œuvre d'art 2.",
      image: artworkImage2, // Remplacer par artworkImage2 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "https://www.instagram.com/reel/DCXNHsbt4xI/?igsh=cjdwOHR5MjQ0M3Aw", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 1",
      description: "Description de l'œuvre d'art 3.",
      image: artworkImage3, // Remplacer par artworkImage3 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 2",
      description: "Description de l'œuvre d'art 4.",
      image: artworkImage4, // Remplacer par artworkImage4 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 3",
      description: "Description de l'œuvre d'art 5.",
      image: artworkImage5, // Remplacer par artworkImage5 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 4",
      description: "Description de l'œuvre d'art 6.",
      image: artworkImage6, // Remplacer par artworkImage6 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 4",
      description: "Description de l'œuvre d'art 6.",
      image: artworkImage7, // Remplacer par artworkImage6 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 4",
      description: "Description de l'œuvre d'art 6.",
      image: artworkImage8, // Remplacer par artworkImage6 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 4",
      description: "Description de l'œuvre d'art 6.",
      image: artworkImage9, // Remplacer par artworkImage6 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
    {
      title: "Oeuvre Contemporaine 4",
      description: "Description de l'œuvre d'art 6.",
      image: artworkImage10, // Remplacer par artworkImage6 après import
      video: null, // Remplacer par un lien vidéo si nécessaire
      link: "#", // Remplacer par un lien vers plus d'infos
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="px-4 py-2 mt-10 text-white bg-blue-500 rounded hover:bg-blue-700 inline-flex items-center"
        >
          Retour à l'accueil
        </Link>
        <h2 className="text-4xl font-extrabold text-blue-500 mb-8 text-center py-5">
          Œuvres d'Arts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Image de l'œuvre d'art */}
              {artwork.image ? (
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-700 text-gray-400">
                  Image à venir
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  {artwork.title}
                </h3>
                <p className="text-gray-100 mb-4">{artwork.description}</p>

                {/* Vidéo de l'œuvre d'art si disponible */}
                {artwork.video && (
                  <div className="mb-4">
                    <video controls className="w-full">
                      <source src={artwork.video} type="video/mp4" />
                      Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                  </div>
                )}

                {/* Lien vers plus d'infos */}
                <a
                  href={artwork.link}
                  className="text-blue-100 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plus d'infos
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Art;
