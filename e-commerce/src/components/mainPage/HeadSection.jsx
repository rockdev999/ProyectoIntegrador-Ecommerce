import PropTypes from "prop-types";
function HeadSection({ title }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex mt-32  items-center gap-4 ">
        <div className="bg-red-500 w-8 h-16 rounded "></div>
        <div className="text-red-500 font-semibold text-lg">{title}</div>
      </div>
    </div>
  );
}

HeadSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeadSection;
