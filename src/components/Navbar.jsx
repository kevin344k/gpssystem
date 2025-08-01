import React,{useState} from "react";
import logo_gps_mobile from "../assets/images/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
  <div className="m-auto">
      <nav className="flex justify-between items-center  text-white">
      <div>
        <img className="w-15" src={logo_gps_mobile} alt="" />
      </div>
      {/* Botón Hamburguesa */}
      <button
        onClick={toggleMenu}
        className="flex flex-col bg-neutral-100 rounded-sm gap-1 w-8 h-8 justify-center items-center origin-center relative z-50"
      >
        <span
          className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
            isOpen ? "rotate-45 origin-center translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-neutral-700 transition-all duration-300 ${
            isOpen ? "-rotate-45 origin-center -translate-y-1" : ""
          }`}
        ></span>
      </button>
           {/* Modal */}
      {isModalOpen && (
        <div className="fixed pt-15 left-0 inset-0 bg-black/50 flex items-start justify-center  z-40">
          <div className="bg-white w-70 p-6 rounded-xl shadow-lg relative">
            <button
              onClick={toggleMenu}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <ul className="space-y-4  text-lg text-gray-700">
              <li className="hover:text-blue-600 cursor-pointer">Inicio</li>
              <li className="hover:text-blue-600 cursor-pointer">Servicios</li>
              <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  </div>
  );
}
