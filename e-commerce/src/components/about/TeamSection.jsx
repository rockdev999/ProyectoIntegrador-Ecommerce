import React from "react";

// Componente para una Tarjeta de Miembro del Equipo
function TeamCard({ image, name, title, social }) {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden text-center">
      {/* Imagen del Miembro */}
      <img
        className="w-full h-90 object-cover"
        src={image}
        alt={`${name}'s photo`}
      />
      {/* Información del Miembro */}
      <div className="p-5">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-600 mb-4">{title}</p>
        {/* Redes Sociales */}
        <div className="flex justify-center space-x-4">
          {social.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className={`fab fa-${icon.name}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente de la Sección de Equipo
function TeamSection() {
  const team = [
    {
      image: "tomcruise.png", // Cambia esta URL por la imagen del miembro
      name: "Tom Cruise",
      title: "Founder & Chairman",
      social: [
        { name: "twitter", url: "https://twitter.com" },
        { name: "instagram", url: "https://instagram.com" },
        { name: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      image: "mujer.png", // Cambia esta URL por la imagen del miembro
      name: "Emma Watson",
      title: "Managing Director",
      social: [
        { name: "twitter", url: "https://twitter.com" },
        { name: "instagram", url: "https://instagram.com" },
        { name: "linkedin", url: "https://linkedin.com" },
      ],
    },
    {
      image: "foto.png", // Cambia esta URL por la imagen del miembro
      name: "Will Smith",
      title: "Product Designer",
      social: [
        { name: "twitter", url: "https://twitter.com" },
        { name: "instagram", url: "https://instagram.com" },
        { name: "linkedin", url: "https://linkedin.com" },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        {/* Grid de Tarjetas de Equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
