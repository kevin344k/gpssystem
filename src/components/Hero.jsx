import React from "react";
import mundo_gif from "../assets/images/mundo.gif";
import logo_vertical from "../assets/images/logo_vertical.png";
import image_notifications from "../assets/images/image_notifications.jpg";
import image_maps from "../assets/images/image_maps.jpg";
import PhoneMockup from "./PhoneMockup";
import ButContactar from "./ButContactar";
export default function Hero() {
  return (
    <section id="hero">
<div className="lg:flex lg:flex-row-reverse lg:max-w-[900px] lg:m-auto lg:justify-between ">
        <div className="relative mt-10  flex items-center justify-center">
        <div className=" relative w-40 md:w-50 md:80 h-80  lg:mr-20   flex flex-col-reverse  items-center  bg-[url('/src/assets/images/marco_plateado2.png')] bg-contain bg-center justify-center gap-2 bg-no-repeat">
          <div className="absolute -top-[40px] -z-10 right-32 md:right-40">
            <PhoneMockup image={image_maps} width={""} />
          </div>

          <img className="w-23 md:w-30 " src={mundo_gif} alt="" />
          <img className="w-45 " src={logo_vertical} alt="" />
          <div className="absolute  -z-10 w-fit -top-10 left-32 md:left-40">
            {" "}
            <PhoneMockup image={image_notifications} width={""} />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center lg:max-w-[400px] lg:items-start lg:mb-10 lg:justify-end">
        <p className="text-new-blue-strong text-center font-bold text-3xl md:text-4xl font-be-vietnana-pro">
          GPSSYSTEM
        </p>
        <p className="text-center mt-4 text-lg text-new-gray-text lg:text-left">
          Siéntete seguro al transitar con tu vehículo y mantenerlo siempre a tu
          alcance.
        </p>
        <div className="mt-6">
          <ButContactar></ButContactar>
        </div>
      </div>
</div>
    </section>
  );
}
