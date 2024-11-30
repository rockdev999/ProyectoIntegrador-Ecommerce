import PropTypes from "prop-types"
function TitleSections({desc}) {
  return (
    <div className=" lg:flex-row lg:w-1/2 ">
      <h5 className="text-2xl  lg:text-left font-semibold lg:text-3xl xl:text-4xl tracking-wider">
        {desc}
      </h5>
  </div>
  )
}

TitleSections.propTypes={
    desc:PropTypes.string.isRequired
}



export default TitleSections