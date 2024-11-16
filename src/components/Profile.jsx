
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/image/img.jpeg'; 

import bgImage from '../assets/image/bgimage.jpg'

const Profile = () => {
  return (
    <section className="relative py-90 h-screen flex items-center justify-center pt-28">
      {/* Image de fond */}
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src={bgImage}
          alt="Profil"
          className="absolute inset-0 w-full h-full object-cover object-center  border-t-3  shadow-lg"
          style={{
             clipPath: "polygon(0 0%, 100% 0, 100% 100%, 10% 49%)", // Effet de rogner le haut
          }}
        />
      </div>

      {/* Conteneur principal */}
      <div className="relative z-10 flex flex-col  md:flex-row w-full max-w-7xl h-90  bg-blue-900 backdrop-blur-md  bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
        {/* Section avec le texte */}
        <div className="relative flex-1 flex items-center justify-center p-8">
          <div className="flex flex-col justify-center items-start py-3 px-4">
            <h2
              className="text-md  md:text-md py-2  leading-3 opacity-80  text-yellow-600 "
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(to right,  white,white )",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
             Artiste peintre & Artiste vfx & filmaker & DEV Full-Stack & Designer Ux Ui
            </h2>
            <h1
              className="text-4xl md:text-4xl  text-gray-400 "
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(to right, white,orange)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hello je suis ,
            </h1>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-gray-400 mb-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(to right,white, white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cheikhou Toure
            </h1>

            <p
              className="text-lg md:text-md text-gray-400/90 mb-5"
              style={{
                fontFamily: "'Poppins', sans-serif",
                background: "linear-gradient(to right,  gray, white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Je suis passionné par l'art , le cinema , l'animation 3d et vfx ,  le développement web , l'ux ui   et la création de
              solutions innovantes.
            </p>
            <div className="flex items-center">
              <section className="p-4">
                <a
                  href="/assets/cv-cheikhou-touré.pdf"
                  download
                  className="inline-block bg-yellow-600 text-white  mt-5 px-4 py-2 rounded-full shadow-2xl hover:bg-blue-700 transition duration-300 mb-6"
                >
                  Télécharger mon CV
                </a>
              </section>
              <section className=" p-4 ml-auto">
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-800"
                  >
                    <FaGithub size={40} />
                  </a>
                  <a
                    href="https://linkedin.com/in/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-800"
                  >
                    <FaLinkedin size={40} />
                  </a>
                  <a
                    href="https://twitter.com/votre-profil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-800"
                  >
                    <FaTwitter size={40} />
                  </a>
                  <a
                    href="mailto:cheikhou.toure@example.com"
                    className="text-blue-800 hover:text-blue-800"
                  >
                    <FaEnvelope size={40} />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* Section avec l'image de profil */}
        <div className="relative flex-1 flex items-center  justify-center p-8">
          <img
            src={profileImage}
            alt="Cheikhou TOURE"
            className="w-2/3 rounded-full border-t-3 opacity-90 shadow-lg"
            style={{
              objectFit: "cover",
              clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0 100%)", // Effet de rogner le haut
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
