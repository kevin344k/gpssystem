import React, { useState } from "react";
import logo_gps_mobile from "../assets/images/logo.png";
import logo_gps_desktop from "../assets/images/logo_horizontal.png";
import ButContactar from "./ButContactar";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = () => {
    setIsOpen(false); // animación de salida
    setTimeout(() => setIsModalOpen(false), 400); // espera 400ms hasta que termine la animación
  };

  return (
    <div className="m-auto p-4">
      <nav
        id="inicio"
        className="flex justify-between items-center  text-white"
      >
        <picture>
  <source srcSet={logo_gps_desktop} media="(min-width: 768px)" />
  <img className="w-15 md:w-30" src={logo_gps_mobile} alt="Logo" />
</picture>
        {/* Botón Hamburguesa */}
        <button
          onClick={toggleMenu}
          className="flex flex-col bg-neutral-100 rounded-sm gap-1.5 p-2 py-3 justify-center shadow-lg items-center origin-center relative z-50 md:hidden"
        >
          <span
            className={`block w-8 h-0.5 bg-neutral-700 transition-all duration-300 ${
              isOpen ? "rotate-45 origin-center translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-neutral-700 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-neutral-700 transition-all duration-300 ${
              isOpen ? "-rotate-45 origin-center -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <div
          className={`hidden md:flex px-12 items-center justify-center gap-12     `}
        >
          <ul className=" text-neutral-600  text-center flex  md:flex-row gap-4 text-md">
            <li className="relative group">
              <a href="#inicio" className="hover:text-secondary-yellow">
                Inicio
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary-yelloy transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#tecnologia" className="hover:text-secondary-yellow">
                Tecnología
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary-yelloy transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#servicios" className="hover:text-secondary-yellow">
                Servicios
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary-yelloy transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a href="#nuestra-app" className="hover:text-secondary-yellow">
                Nuestra App
              </a>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary-yelloy transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <div className=" flex items-center justify-center">
            <ButContactar />
          </div>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-start justify-center z-40">
            <div
              className={`bg-white w-70 p-6 mt-20 rounded-xl shadow-lg relative ${
                isOpen ? "animate-slide-down" : "animate-slide-up"
              }`}
            >
              <ul className="pt-12 pb-4 text-center flex flex-col gap-4 text-md">
                <li className="text-neutral-600 hover:text-secondary-yelloy cursor-pointer">
                  <a onClick={closeModal} href="#inicio">
                    Inicio
                  </a>
                </li>
                <li className="text-neutral-600 hover:text-secondary-yelloy cursor-pointer">
                  <a onClick={closeModal} href="#tecnologia">
                    Tecnologia
                  </a>
                </li>
                <li className="text-neutral-600 hover:text-secondary-yelloy cursor-pointer">
                  <a onClick={closeModal} href="#servicios">
                    Servicios
                  </a>
                </li>
                <li className="text-neutral-600 hover:text-secondary-yelloy cursor-pointer">
                  <a onClick={closeModal} href="#nuestra-app">
                    Nuestra App
                  </a>
                </li>
              </ul>
              <div className="my-3 flex items-center justify-center">
                <ButContactar />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
