import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinks({ route }) {
  return (
    <div className="flex mx-8 my-8 gap-4 flex flex-row md:mx-20 lg:mx-20 xl:mx-28 2xl:mx-32 2xl:my-12 gap-4">
      <Link className="text-gray-400 hover:underline" to="/">
        Home
      </Link>
      <span>/</span>
      <Link className="hover:underline">{route}</Link>
    </div>
  );
}

NavLinks.propTypes = {
  route: PropTypes.string.isRequired,
};
export default NavLinks;
