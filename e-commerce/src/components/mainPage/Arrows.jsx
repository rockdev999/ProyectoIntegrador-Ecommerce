import PropTypes from "prop-types";
function Arrows({ scrollLeft, scrollRight }) {
  return (
    <div className="flex w-full justify-center lg:items-end lg:justify-end md:items-center gap-8 select-none">
      <span
        className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer hover:bg-black hover:text-white"
        onClick={scrollLeft}
      >
        arrow_back
      </span>
      <span
        className="material-symbols-outlined rounded-full bg-gray-200 p-1 cursor-pointer hover:bg-black hover:text-white"
        onClick={scrollRight}
      >
        arrow_forward
      </span>
    </div>
  );
}

Arrows.propTypes = {
  scrollLeft : PropTypes.func,
  scrollRight: PropTypes.func
}

export default Arrows;
