import React from "react";
import autos_gps from "../assets/images/autos.jpg";
import image_notifications from "../assets/images/image_notifications.jpg";
import image_maps from "../assets/images/image_maps.jpg";
import playstore from "../assets/images/playstore.png";
import logo_app from "../assets/images/logo_app.webp";
import gps_screenshot from "../assets/images/gps_screenshot.webp";
import image_full_logo from "../assets/images/complete_logo_with_bg_solid.png";
import PhoneMockup from "./PhoneMockup";
import ButContactar from "./ButContactar";
export default function MainContent() {
  return (
    <main className="mt-12 md:mt-25">
      {/**tcenologia */}
      <div className="lg:max-w-[900px] lg:m-auto" id="tecnologia ">
        {" "}
        <div className="text-center  md:max-w-[500px] md:m-auto">
          <p className="text-xl font-bold text-new-blue-strong">Tecnologia</p>
          <p className="mt-4 leading-relaxed text-sm text-new-gray-text md:text-md">
            Actualmente la tecnología se encuentra al alcance de todos nosotros.
            Lo importante es saber darle el uso necesario a nuestra conveniencia
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 my-6 md:flex-row md:justify-center md:mt-12">
          <div className=" max-w-[300px] relative py-6 px-4 border border-neutral-100 shadow-lg rounded-md text-center">
            <p className="absolute font-bold text-new-blue-strong bg-new-secondary-yellow-soft/30 p-1 px-3 top-2 rounded-full right-4  ">
              Autos
            </p>
            <p className="text-new-blue-strong mt-4">GPS Coban TK303F</p>
            <img className="w-50 m-auto" src={autos_gps} alt="" />
            <p className="text-sm my-3 text-new-gray-text ">
              Este rastreador GPS Coban TK303F es un rastreador gps para
              automóviles que funciona según la red 3G GSM / GPRS y el sistema
              de posicionamiento por satélite GPS 
            </p>
          </div>
          <div className=" max-w-[300px] relative py-6 px-4 border border-neutral-100 shadow-lg rounded-md text-center">
            <p className="absolute right-4 font-bold text-new-blue-strong bg-new-secondary-yellow-soft/30 p-1 px-3 top-2 rounded-full ">
              Motos
            </p>
            <p className="text-new-blue-strong mt-4">GPS ats</p>
            <img className="w-50 m-auto" src={autos_gps} alt="" />
            <p className="text-sm my-3 text-new-gray-text ">
              El sistema Emite las Coordenadas en tiempo real, las cuales son
              recibidas mediante un (SMS) a su teléfono celular, también podría
              ser consultada Via Internet o mediante nuestra app.
            </p>
          </div>
        </div>
      </div>
      {/*servicios */}
      <div id="servicios" className="pl-3 md:mt-20">
        <div className="p-4  my-12 text-center md:max-w-[500px] md:m-auto">
          <p className="text-new-blue-strong font-bold text-center text-xl">
            Servicios
          </p>
          <p className="mt-4 leading-relaxed text-sm text-new-gray-text">
            Nuestro personal técnico está altamente capacitado para realización
            de la instalación y configuración de nuestros dispositivos
          </p>
        </div>
        <div className="flex flex-col gap-12 md:max-w-[500px] md:m-auto md:mt-12 lg:flex-row lg:max-w-[900px]">
          <div>
            <div className="flex gap-6 items-center bg-gradient-to-r from-new-secondary-yellow-soft/30 to-transparent rounded-tl-full rounded-bl-full">
              <div className="bg-secondary-yelloy w-15 flex h-9 items-center justify-center py-2 rounded-full ">
                <p className="font-bold text-white">01</p>
              </div>
              <p className="text-new-blue-strong font-bold  text-md">
                Notificaciones
              </p>
            </div>
            <div className="pl-3">
              <p className="text-sm my-3 text-new-gray-text">
                Contamos con notificaciones push directamente al whatsapp de los
                usuarios seleccionados
              </p>
              <div className=" flex items-center gap-6">
                <PhoneMockup image={image_notifications} />
                <div className=" flex flex-col items-center gap-4 justify-center ">
                  <p className="block p-2 py-0 self-start text-center items-center  shadow-md text-2xl bg-neutral-100 text-neutral-400 rounded-full">
                    +
                  </p>
                  <p className="text-xs text-new-gray-text">
                    El historial del recorrido del vehículo <br></br> tambien
                    queda registrado
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-6 items-center bg-gradient-to-r from-new-secondary-yellow-soft/30 to-transparent rounded-tl-full rounded-bl-full">
              <div className="bg-secondary-yelloy w-15 flex h-9 items-center justify-center py-2 rounded-full ">
                <p className="font-bold text-white">02</p>
              </div>
              <p className="text-new-blue-strong font-bold  text-md">
                Geocerca
              </p>
            </div>
            <div className="pl-3">
              <p className="text-sm my-3 text-new-gray-text">
                Tambien contamos con geocercas para el vehiculo selecionado
              </p>
              <div className=" flex items-center ">
                <PhoneMockup image={image_maps} />
                <div className=" flex flex-col items-center gap-4 justify-center ">
                  <p className="block px-3 py-0 self-start text-center items-center  shadow-md text-2xl bg-neutral-100 text-neutral-500 rounded-full">
                    !
                  </p>
                  <p className="text-xs  text-wrap text-new-gray-text">
                    Una geocerca es una cerca virtual o perímetro alrededor de
                    una ubicación física. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative my-12">
        <div className="inset-0 pb-20 flex justify-center items-end pb-5  absolute bottom-0 left-0 lg:max-w-[700px] lg:m-auto">
          <ButContactar></ButContactar>
        </div>
        <img className="lg:m-auto lg:rounded-lg lg.sahdow-lg lg:max-w-[700px]" src={image_full_logo} alt="" />
      </div>
      {/*nuestra app */}
      <div id="nuestra-app" className="my-16">
        <div className="text-center p-4 md:max-w-[500px] md:m-auto">
          <div>
            <p className="text-xl font-bold text-new-blue-strong">
              Nuestra App
            </p>
            <p className="text-sm my-3 text-new-gray-text">
              Nuestra app ya se encuentra disponible con una interfas muy fácil
              y práctica de uso Par apode cuidar nuestro transporte o
              herramienta de trabajo
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-8">
              <PhoneMockup image={gps_screenshot} />
              <img
                className="absolute shadow-[0px_10px_15px_rgba(244,150,1,0.6)] -bottom-5 bg-white right-0 border-1 w-25  border-neutral-300 rounded-2xl"
                src={logo_app}
                alt=""
              />
            </div>

            <a href="https://play.google.com/store/apps/details?id=com.gpssytem.ec">
              <img className="w-50" src={playstore} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/*  */}
    </main>
  );
}
