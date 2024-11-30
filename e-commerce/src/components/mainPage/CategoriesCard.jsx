import PropTypes from "prop-types";

export function CategoriesCard2({ img, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-1/2 p-12 border border-gray-300 rounded cursor-pointer hover:bg-red-500">
      <span className="material-symbols-outlined text-4xl">{img}</span>
      <h6 className="text-base  w-20 text-center">{title}</h6>
    </div>
  );
}

CategoriesCard2.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

