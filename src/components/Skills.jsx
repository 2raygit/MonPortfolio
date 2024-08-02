import React from 'react';
import { DiGithub, DiIllustrator, DiJavascript, DiPhotoshop } from 'react-icons/di';
import { FaReact, FaHtml5, FaCss3Alt, FaFigma, FaBootstrap, FaNodeJs, FaGithub } from 'react-icons/fa';
import { FaWebflow } from 'react-icons/fa6';
import { SiAdobexd, SiCanva, SiMongodb, SiSketch, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { id: 1, name: 'React', icon: <FaReact className="text-7xl text-blue-600" /> },
  { id: 2, name: 'HTML', icon: <FaHtml5 className="text-7xl text-orange-600" /> },
  { id: 3, name: 'CSS', icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
  { id: 4, name: 'Javascript', icon: <DiJavascript className="text-7xl text-yellow-400" /> },
  { id: 9, name: 'Bootstrap', icon: <FaBootstrap className="text-7xl text-purple-900" /> },
  { id: 10, name: 'Tailwind', icon: <SiTailwindcss className="text-7xl text-blue-500" /> },
  { id: 11, name: 'NodeJs', icon: <FaNodeJs className="text-7xl text-green-700" /> },
  { id: 12, name: 'MongoDB', icon: <SiMongodb className="text-7xl text-green-800" /> },
  { id: 5, name: 'Adobexd', icon: <SiAdobexd className="text-7xl text-purple-950" /> },
  { id: 6, name: 'Sketch', icon: <SiSketch className="text-7xl text-orange-600" /> },
  { id: 7, name: 'Illustrator', icon: <DiIllustrator className="text-7xl text-yellow-600" /> },
  { id: 8, name: 'Figma', icon: <FaFigma className="text-7xl text-purple-600" /> },
  { id: 13, name: 'Photoshop', icon: <DiPhotoshop className="text-7xl text-blue-700" /> },
  { id: 14, name: 'Canva', icon: <SiCanva className="text-7xl text-blue-500" /> },
  { id: 15, name: 'Webflow', icon: <FaWebflow className="text-7xl text-blue-500" /> },
  { id: 16, name: 'Github', icon: <FaGithub className="text-7xl text-gray-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 animated-background">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-white mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
          {skillsData.map(skill => (
            <div key={skill.id} className="bg-white shadow-lg  bg-opacity-5 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="mb-3">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
