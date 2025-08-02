import React from "react";
import logo_horizontal from "../assets/images/logo_horizontal.png";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok.svg";
import ButContactar from "./ButContactar";
export default function Footer() {
  return (
    <div className="bg-new-blue-very-dark text-center pt-12 pb-3">
<div className="flex flex-col md:justify-between md:flex-row-reverse md:max-w-[500px] lg:max-w-[900px] md:m-auto md:my-5">
 <div className="md:flex md:gap-12 ">
       <ul className="text-white pb-4  flex flex-col gap-4 text-sm">
        <li className="hover:text-secondary-yelloy active:text-secondary-yelloy cursor-pointer">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="hover:text-secondary-yelloy active:text-secondary-yelloy cursor-pointer">
          <a href="#tecnologia">Tecnologia</a>
        </li>
        <li className="hover:text-secondary-yelloy active:text-secondary-yelloy cursor-pointer">
          <a href="#servicios">Servicios</a>
        </li>

        <li className="hover:text-secondary-yelloy active:text-secondary-yelloy cursor-pointer">
          <a href="#nuestra-app">Nuestra App</a>
        </li>
      </ul>
      <div className="mt-8 mb-12">
        <ButContactar></ButContactar>
      </div>
 </div>
<div className="md:flex md:flex-col-reverse md:items-center md:justify-start ">
        <div className="my-5 flex gap-6 justify-center items-center md:self-auto md:mt-4">
        <a href="https://www.instagram.com/gpssystem_ec?igsh=MThmYWVvcnRmN3k2Nw==">
          {" "}
          <img className="" src={instagram} alt="" />
        </a>

        <a
          href="
       "
        >
          <img className="" src={facebook} alt="" />
        </a>
        <a
          href="https://www.tiktok.com/@gpssystem_ec?_t=ZM-8yXwMG5j5V8&_r=1
       "
        >
          <img className="" src={tiktok} alt="" />
        </a>
      </div>

      <img className="w-40 m-auto mb-8 md:mb-0" src={logo_horizontal} alt="" />
</div>

</div>
      <p className="text-xs text-neutral-400">
        2024 - GPS system ec - <a href="">Política de Privacidad</a>
      </p>
    </div>
  );
}
