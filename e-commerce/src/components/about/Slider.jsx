import PropTypes from "prop-types";

function StatsCard({ icon, value, label }) {
  return (
    <div
      className={`flex flex-col items-center justify-center shadow-lg p-5 rounded-lg hover:bg-red-500 cursor-pointer`}
    >
      <div className="m-3 bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center border-[11px] border-neutral-300 hover:border-neutral-200">
        <span className="material-icons bg-black text-white text-3xl">
          {icon}
        </span>
      </div>
      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm mt-2">{label}</div>
    </div>
  );
}

StatsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function StatsGrid() {
  const stats = [
    { icon: "store", value: "10.5k", label: "Sellers active on our site" },
    { icon: "monetization_on", value: "33k", label: "Monthly Product Sale" },
    {
      icon: "shopping_bag",
      value: "45.5k",
      label: "Customers active in our site",
    },
    {
      icon: "attach_money",
      value: "25k",
      label: "Annual gross sale in our site",
    },
  ];

  return (
    <div className="w-full px-32 justify-between">
      {" "}
      {/* Limita el ancho del contenedor y lo centra */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            highlighted={stat.highlighted}
          />
        ))}
      </div>
    </div>
  );
}

// Envolviendo el componente con un div externo para modular la altura
function StatsPage() {
  return (
    <div className="h-96 flex items-center justify-center">
      {" "}
      {/* Controla la altura de toda la sección */}
      <StatsGrid />
    </div>
  );
}

export default StatsPage;
