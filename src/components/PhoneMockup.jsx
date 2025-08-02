import React from "react";

const PhoneMockup = ({ image,width }) => {
//width normal:190
//xs=
  
  return (
    <svg
      width="100"
      height="320"
      viewBox="0 0 250 500"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${width==""?"w-27 md:w-35":"w-[190px]"}  `}
    >
      {/* Marco del teléfono */}
      <rect
        x="5"
        y="5"
        width="240"
        height="490"
        rx="20"
        fill="#111"
        stroke="#333"
        strokeWidth=""
      />
      {/* Botones laterales */}
      {/* Botones de volumen (izquierda) */}
      <rect x="1" y="120" width="4" height="40" rx="2" fill="#444" />
      <rect x="1" y="180" width="4" height="40" rx="2" fill="#444" />

      {/* Botón de encendido (derecha) */}
      <rect x="245" y="160" width="4" height="50" rx="2" fill="#444" />
      {/* Pantalla (clipPath para recortar imagen) */}
      <clipPath id="phone-screen">
        <rect x="20" y="50" width="210" height="490" rx="20" />
      </clipPath>

      {/* Imagen dentro de la pantalla */}
      <foreignObject
        x="20"
        y="0"
        width="210"
        height="480"
        clipPath="url(#phone-screen)"
      >
        <img
          src={image}
          alt="Mockup"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </foreignObject>

      {/* Notch o cámara frontal */}
      <rect x="110" y="20" width="30" height="8" rx="4" fill="#222" />
    </svg>
  );
};

export default PhoneMockup;
