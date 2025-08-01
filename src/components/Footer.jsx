import React from "react";
import logo_horizontal from "../assets/images/logo_horizontal.png";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
export default function Footer() {
  return (
    <div className="bg-new-blue-very-dark text-center pt-12 pb-3">
      <ul className="text-white pb-4  flex flex-col gap-2 text-sm">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
    <div className="my-4 flex gap-4 justify-center items-center">
      <img  className="" src={instagram} alt="" />
       <img  className="" src={facebook} alt="" />
    </div>
      <img className="w-40 m-auto mb-12" src={logo_horizontal} alt="" />
      <p className="text-xs text-neutral-400">
        2024 - GPS system ec - <a href="">Política de Privacidad</a>
      </p>
    </div>
  );
}
