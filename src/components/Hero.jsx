import React from "react";
import mundo_gif from "../assets/images/mundo.gif";
import logo_vertical from "../assets/images/logo_vertical.png";
import image_notifications from "../assets/images/image_notifications.jpg";
import image_maps from "../assets/images/image_maps.jpg";
import PhoneMockup from "./PhoneMockup";
import ButContactar from "./ButContactar";
export default function Hero() {
  return (
    <section>
    
      <div className="relative mt-20 flex items-center justify-center">
        <div className="absolute -top-10 z-0 right-35">
          <PhoneMockup image={image_maps} />
        </div>

        <div className=" relative w-60 h-80  z-11  overflow-hidden flex flex-col-reverse  items-center  bg-[url('/src/assets/images/marco_plateado2.png')] bg-contain bg-center justify-center gap-2 bg-no-repeat">
          <img className="w-30 " src={mundo_gif} alt="" />
          <img className="w-45 " src={logo_vertical} alt="" />
     
        </div>
        <div className="absolute  z-10 w-fit -top-10 left-35">
          {" "}
          <PhoneMockup image={image_notifications} />
        </div>
      </div>
        <div className="mt-8 flex flex-col items-center justify-center">
        <p className="text-new-blue-strong text-center font-bold text-3xl font-be-vietnana-pro">
           GPSSYSTEM
        </p>
        <p className="text-center mt-4 text-lg text-new-gray-text">
            Siéntete seguro al transitar con tu vehículo y mantenerlo siempre a tu
          alcance.
        </p>
        <ButContactar></ButContactar>
      </div>
    </section>
  );
}
