import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUniversity,
  FaTools,
  FaPalette,
  FaLanguage,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

class CvPrint extends React.Component {
  render() {
    return (
      
      <div className="w-full max-w-7xl mx-auto py-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
       
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 p-6 mb-4 rounded-lg shadow-lg text-center text-white">
          <div className="absolute inset-0 opacity-25 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
          <h1 className="relative text-5xl font-extrabold mb-2">Cheikhou TOURE</h1>
          <p className="relative text-xl font-semibold">
            Développeur Full-Stack & UX/UI Designer
          </p>
          <div className="relative mt-4 flex justify-center space-x-6">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" /> <span>tcheikhou@yahoo.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" /> <span>+221 77 470 35 70</span>
            </div>
          </div>
        </div>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaTools className="mr-2" /> Profil
          </h3>
          <p className="text-lg text-gray-700">
            Développeur Full-Stack passionné avec une solide expérience dans la
            conception et le développement de projets web et mobile.
            Compétences avancées en JavaScript, React, Node.js, ainsi qu'en
            design UX/UI. Capable de gérer des projets de A à Z avec une
            attention particulière aux détails et aux exigences des
            utilisateurs.
          </p>
          <hr className="my-6 border-blue-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaBriefcase className="mr-2" /> Expérience Professionnelle
          </h3>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">
              Gestion de Projet et Maintenance, SENELEC
            </h4>
            <p className="italic text-blue-600">
              Thiès, Janvier 2022 - Février 2023
            </p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>
                Gestion de projets informatiques, analyse et gestion des
                systèmes d'information
              </li>
              <li>
                Maintenance des machines et proposition de solutions
                informatiques adaptées
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">
              Community Manager et Spécialiste en Marketing Digital, Maktum
              Corporation
            </h4>
            <p className="italic text-blue-600">Janvier 2021 - Décembre 2021</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>
                Gestion des réseaux sociaux, y compris Facebook, Instagram, et
                LinkedIn
              </li>
              <li>Création et gestion de campagnes publicitaires sur Facebook Ads</li>
              <li>
                Développement de stratégies de marketing digital pour augmenter
                la visibilité de la marque et engager le public
              </li>
              <li>
                Analyse des performances des campagnes et génération de rapports
                sur les indicateurs clés de performance (KPI)
              </li>
              <li>
                Interaction avec la communauté en ligne pour répondre aux
                questions et recueillir des retours
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Projets personnels</h4>
            <p className="italic text-blue-600">Janvier 2023 - Présent</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>
                Développement d'une plateforme web et mobile pour la gestion des
                événements de Sup de Co, comprenant la conception de l'interface
                utilisateur et l'implémentation de fonctionnalités pour la
                gestion des inscriptions et des événements.
              </li>
              <li>
      Développement d'une application météo interactive, fournissant des prévisions météorologiques en temps réel avec une interface utilisateur attrayante et des fonctionnalités de géolocalisation.
    </li>
              <li>
      Conception de maquettes et prototypage pour des applications mobiles et web en utilisant Figma et Adobe XD, améliorant l'expérience utilisateur et l'interface des projets.
    </li>
              <li>
                Création d'un site portfolio personnel, mettant en avant des
                projets et des blogs personnels avec une navigation fluide et
                interactive.
              </li>
              <li>
                Développement d'une application de gestion des tâches,
                permettant de créer, suivre et organiser les tâches de manière
                efficace.
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Projets professionnels</h4>
            <p className="italic text-blue-600">avril 2021 - Présent</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>
                Conception et développement d'une application e-commerce
                full-stack, offrant une interface utilisateur réactive et des
                fonctionnalités complètes pour la gestion des produits et des
                utilisateurs.
              </li>
              <li>
                Développement d'une plateforme de gestion de contenu (CMS) avec wordpress pour
                PME, permettant aux utilisateurs de gérer leurs sites web avec
                des fonctionnalités de gestion des utilisateurs et des rôles.
              </li>
              <li>
                Création d'une application wordpress de réservation de services en ligne,
                incluant un système de paiement sécurisé et une gestion des
                réservations en temps réel. 
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Projets en freelance</h4>
            <p className="italic text-blue-600">Janvier 2022 - Présent</p>
            <ul className="list-disc ml-5 text-gray-700">
            
              <li>
              Création de maquettes interactives pour des sites web d'entreprises, avec une attention particulière à l'UX/UI et à l'optimisation de la navigation.
            </li>
              <li>
                Implémentation de sites vitrines   et des sites ecommerces pour des particulier
              </li>
              <li>
                creation de logo et d'affiche publicitaires .
              </li>
              <li>
                Marketing digital pour des PME .
              </li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaUniversity className="mr-2" /> Formation
          </h3>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Certificat en Génie Logiciel</h4>
            <p className="italic text-blue-600">GOMYCODE, Dakar - Janvier 2024 - Juillet 2024</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Front-end : JavaScript, React, TypeScript, Next.js, Laravel</li>
              <li>Back-end : Node.js, PHP, Express.js</li>
              <li>Outils de Développement : Git, VSCode, GitHub</li>
              <li>Tests : Jest, Mocha, Chai</li>
              <li>Déploiement : Serveurs, cloud</li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">
              Licence 3 MIage (informatique appliqué a la gestion des
              Entreprises)
            </h4>
            <p className="italic text-blue-600">
              SUP DE CO, Dakar - Octobre 2021 - Septembre 2022
            </p>
            <ul className="list-disc ml-5 text-gray-700">
              <li> Systèmes d'Information (SI)</li>
              <li>Gestion de Projet</li>
              <li>Développement Web et Mobile</li>
              <li>Gestion des Entreprises</li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Licence 2 informatique</h4>
            <p className="italic text-blue-600">
              SUP DE CO, Dakar - Octobre 2020 - Juillet 2021
            </p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Conception Système d’Information</li>
              <li>Programmation Avancée</li>
              <li>Réseaux Informatiques</li>
            </ul>
          </div>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <h4 className="text-xl font-bold text-gray-700">Licence 1 Informatique</h4>
            <p className="italic text-blue-600">
              SUP DE CO, Dakar - Octobre 2019 - Juillet 2020
            </p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Programmation de Base</li>
              <li>Architecture des Ordinateurs</li>
              <li>Introduction aux Réseaux</li>
            </ul>
          </div>

          <hr className="my-6 border-blue-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaPalette className="mr-2" /> Compétences
          </h3>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <ul className="list-disc ml-5 text-gray-700">
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>nextJs</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Laravel</span>
                  <span>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>React</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-400 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Node.js</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Express.js</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Git</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>MongoDb</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-900 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Tailwindcss</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Adobe XD</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Figma</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-950 h-2.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-blue-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaLanguage className="mr-2" /> Langues
          </h3>
          <div className="bg-white shadow-md p-4 mb-4 rounded-lg">
            <ul className="list-disc ml-5 text-gray-700">
              <li>Français : Langue maternelle</li>
              <li>Anglais : Courant</li>
              <li>Espagnol : Intermédiaire</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

const App = () => {
  const componentRef = useRef();

  return (
    <div className="App py-20 bg-blue-100 min-h-screen">
        <Link to="/" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 inline-flex items-center">
          Retour à l'accueil
        </Link>
      <div className="flex justify-center items-center pb-10">
        <ReactToPrint
          trigger={() => (
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
              Télécharger CV
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <CvPrint ref={componentRef} />
    </div>
  );
};

export default App;
