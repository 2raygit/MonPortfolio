import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full p-4 bg-transparent backdrop-blur-md flex items-center justify-between z-50">
        <div className="navbar-start">
            <a className="navbar-item text-white font-bold">Portfolio </a>
        </div>
        <div className="navbar-center space-x-4">
      
          <Link to="/webprojet" className="text-white px-4 py-2 hover:bg-blue-700 rounded"> Web</Link>
          <Link to="/uxuiprojet" className="text-white px-4 py-2 hover:bg-blue-700 rounded"> UX/UI</Link>
          <Link to="/skills" className="text-white px-4 py-2 hover:bg-blue-700 rounded">Skills</Link>
          <Link to="/cv" className="text-white px-4 py-2 hover:bg-blue-700 rounded">CV</Link>
        </div>
        <div className="navbar-end">
        <Link to="/" className="text-white px-4 py-2 hover:bg-blue-700 rounded">Accueil</Link>
        </div>
    </div>
  );
};

export default Navbar;
