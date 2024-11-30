import References from "../components/contact/References";
import { Link } from "react-router-dom";
import FormContact from "../components/contact/FormContact";
// actualizado
function Contact() {
  return (
    <>
      <div className="flex mx-8 my-8 gap-4 flex flex-row md:mx-14 lg:mx-20 xl:mx-28 2xl:mx-32 2xl:my-12 gap-4">
        <Link className="text-gray-400 hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline">Contact</Link>
      </div>
      <div className="flex flex-col md:h-[410px] md:flex-row lg:flex-row 2xl:flex-row gap-5 justify-center items-center">
        <References />
        <FormContact />
      </div>
    </>
  );
}

export default Contact;
