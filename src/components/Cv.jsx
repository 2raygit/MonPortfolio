import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FaBriefcase, FaUniversity, FaTools, FaPalette, FaLanguage } from "react-icons/fa";

class CvPrint extends React.Component {
  render() {
    return (
      <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="bg-white p-4 mb-4 rounded-lg shadow-md border jtext border-blue-200">
          <h1 className="text-4xl font-bold text-blue-900">Cheikhou TOURE</h1>
          <p className="text-xl text-gray-600">Développeur Full-Stack et UX UI Design</p>
        </div>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaTools className="mr-2" /> Profil
          </h3>
          <p className="text-lg text-gray-700">
            Développeur Full-Stack passionné avec une solide expérience dans la conception et le développement de projets web et mobile.
            Compétences avancées en JavaScript, React, Node.js, ainsi qu'en design UX/UI. Capable de gérer des projets de A à Z avec une
            attention particulière aux détails et aux exigences des utilisateurs.
          </p>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaBriefcase className="mr-2" /> Expérience Professionnelle
          </h3>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Gestion de Projet, SENELEC</h4>
            <p className="italic text-gray-600">Thiès, Janvier 2022 - Février 2023</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Gestion de projets informatiques, analyse et gestion des systèmes d'information</li>
              <li>Maintenance des machines et proposition de solutions informatiques adaptées</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Community Manager et Spécialiste en Marketing Digital, Maktum Corporation</h4>
            <p className="italic text-gray-600">Janvier 2021 - Décembre 2021</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Gestion des réseaux sociaux, y compris Facebook, Instagram, et LinkedIn</li>
              <li>Création et gestion de campagnes publicitaires sur Facebook Ads</li>
              <li>Développement de stratégies de marketing digital pour augmenter la visibilité de la marque et engager le public</li>
              <li>Analyse des performances des campagnes et génération de rapports sur les indicateurs clés de performance (KPI)</li>
              <li>Interaction avec la communauté en ligne pour répondre aux questions et recueillir des retours</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Développeur Full-Stack</h4>
            <p className="italic text-gray-600">Janvier 2023 - Présent</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Conception d'une plateforme web et mobile pour la gestion des événements de Sup de Co</li>
              <li>Développement de l'interface utilisateur réactive avec Laravel et Angular</li>
              <li>Implémentation de fonctionnalités pour la création, la gestion et l'inscription aux événements</li>
              <li>Utilisation d'API REST PHP et Node.js pour le back-end</li>
              <li>Intégration de MySQL pour le stockage des données des événements et des utilisateurs</li>
              <li>Déploiement sur AWS</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Plateforme E-commerce</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Développement d'une application e-commerce full-stack</li>
              <li>Création d'une interface utilisateur réactive avec React et Redux</li>
              <li>Implémentation de l'authentification des utilisateurs avec JWT</li>
              <li>Développement d'API RESTful avec Node.js et Express</li>
              <li>Intégration de MongoDB pour la gestion des données produits et utilisateurs</li>
              <li>Déploiement sur Heroku et gestion du stockage d'images avec AWS S3</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Application de Gestion de Projets</h4>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Développement d'une application de gestion de projets avec React et Redux</li>
              <li>Gestion de l'état de l'application avec Redux et la gestion des tâches</li>
              <li>Création de formulaires dynamiques pour l'ajout et la modification des projets</li>
              <li>Intégration de l'API RESTful pour la gestion des projets et des utilisateurs</li>
              <li>Déploiement de l'application sur Vercel et intégration de Tailwind CSS pour le design</li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-3xl font-bold text-blue-800 mb-4 flex items-center">
            <FaUniversity className="mr-2" /> Formation
          </h3>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Certificat en Génie Logiciel</h4>
            <p className="italic text-gray-600">GOMYCODE, Dakar - Janvier 2024 - Juillet 2024</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Front-end : JavaScript, React, TypeScript, Next.js, Laravel</li>
              <li>Back-end : Node.js, PHP, Express.js</li>
              <li>Outils de Développement : Git, VSCode, GitHub</li>
              <li>Tests : Jest, Mocha, Chai</li>
              <li>Déploiement : Serveurs, cloud</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Licence 3</h4>
            <p className="italic text-gray-600">SUP DE CO, Dakar - Octobre 2021 - Septembre 2022</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Urbanisme et Cartographie des Systèmes d'Information (SI)</li>
              <li>Entrepôt de Données</li>
              <li>Développement Web et Mobile</li>
              <li>Statistiques Exploratoires</li>
              <li>Gestion des Entreprises</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Licence 2</h4>
            <p className="italic text-gray-600">SUP DE CO, Dakar - Octobre 2020 - Juillet 2021</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Conception Système d’Information</li>
              <li>Programmation</li>
              <li>Base de Données Relationnelle</li>
              <li>Réseaux et Systèmes</li>
            </ul>
          </div>
          <div className="bg-white p-4 mb-4 rounded-lg shadow-md border border-blue-200">
            <h4 className="text-xl font-bold text-blue-900">Licence 1</h4>
            <p className="italic text-gray-600">SUP DE CO, Dakar - Octobre 2019 - Juillet 2020</p>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Algorithmique</li>
              <li>Analyse 1 et 2</li>
              <li>Réseaux Informatiques</li>
              <li>Programmation</li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaTools className="mr-2" /> Compétences
          </h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Langages de Programmation : JavaScript, TypeScript</li>
            <li>Développement Front-end : React, Next.js, HTML, CSS, SASS, Laravel, Bootstrap, Tailwind CSS</li>
            <li>Développement Back-end : Node.js, Express.js</li>
            <li>Bases de Données : MongoDB, PostgreSQL</li>
            <li>Gestion de l'État : Redux, Context API</li>
            <li>APIs : Développement d'API RESTful et GraphQL</li>
            <li>Outils de Développement : Git, GitHub, CI/CD, Visual Studio Code, ESLint, Prettier</li>
            <li>Tests : Test unitaire et d'intégration (Jest, Mocha, Chai)</li>
            <li>Déploiement : AWS, Heroku, Vercel, Docker</li>
            <li>Droit Informatique : Réglementations et lois en informatique</li>
            <li>Marketing Digital : SEO, stratégies de contenu, gestion des campagnes publicitaires, analyse de performance web</li>
          </ul>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaPalette className="mr-2" /> Compétences en UX/UI Design
          </h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Design UX/UI : Conception de wireframes, prototypes et maquettes avec Figma</li>
            <li>Principes UX : Recherche utilisateur, tests d'usabilité, et amélioration continue de l'expérience utilisateur</li>
            <li>UI Design : Création d'interfaces utilisateur esthétiques et fonctionnelles, application des principes de design visuel et d'ergonomie</li>
            <li>Outils de Design : Figma, Adobe XD, Sketch</li>
          </ul>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaLanguage className="mr-2" /> Langues
          </h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Français : Courant</li>
            <li>Anglais : Intermédiaire</li>
          </ul>
          <hr className="my-6 border-gray-300" />
        </section>

        <section className="mb-6">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <FaPalette className="mr-2" /> Centres d’Intérêt
          </h3>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Art : Artiste peintre avec une passion pour la création visuelle, gestion d'expositions et participation à des projets artistiques locaux.</li>
            <li>Graphisme : Expérience en conception graphique, création de visuels pour des projets personnels et professionnels, utilisation de logiciels tels que Adobe Illustrator et Photoshop.</li>
          </ul>
        </section>
        
      </div>
    );
  }
}

const Cv = () => {
  const componentRef = useRef();

  return (
    <section className="bg-gray-50 py-10">
      <div className="w-full px-4">
        {/* Bouton de téléchargement PDF */}
        <div className="text-center mb-8">
          <ReactToPrint
            trigger={() => (
              <button className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700">
                Télécharger le CV en PDF
              </button>
            )}
            content={() => componentRef.current}
            documentTitle="Cheikhou_Toure_CV"
          />
        </div>

        <CvPrint ref={componentRef} />
      </div>
    </section>
  );
};

export default Cv;
