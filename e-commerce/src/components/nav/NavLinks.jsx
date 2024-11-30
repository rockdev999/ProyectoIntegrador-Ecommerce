import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function NavLinks({route}) {
  return (
    <div className="flex  my-12 gap-4">
    <Link className="text-gray-400 hover:underline" to="/">
      Home
    </Link>
    <span>/</span>
    <Link className="hover:underline">{route}</Link>
  </div>
  )
}

NavLinks.propTypes ={
  route:PropTypes.string.isRequired
}
export default NavLinks