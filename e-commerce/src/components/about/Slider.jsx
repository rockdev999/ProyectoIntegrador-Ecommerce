import PropTypes from "prop-types";

function StatsCard({ icon, value, label }) {
  return (
    <div
      className={`flex flex-col items-center justify-center shadow-lg p-4 rounded-lg hover:bg-red-500 cursor-pointer`}
    >
      <div className="m-3 bg-black w-14 h-14 rounded-full flex justify-center items-center border-4 border-neutral-300 hover:border-neutral-200 md:w-16 md:h-16 lg:w-20 lg:h-20">
        <span className="material-icons bg-black text-white text-2xl md:text-3xl lg:text-4xl">
          {icon}
        </span>
      </div>
      <div className="text-xl font-bold md:text-2xl lg:text-3xl">{value}</div>
      <div className="text-sm mt-2 text-center md:text-base lg:text-lg">
        {label}
      </div>
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
    <div className="w-full px-4">
      {/* Grid con diseño mobile-first */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-6">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-auto flex items-center justify-center py-6 md:py-10 lg:py-14">
      <StatsGrid />
    </div>
  );
}

export default Slider;
