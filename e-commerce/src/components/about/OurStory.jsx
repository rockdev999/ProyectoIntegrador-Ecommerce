import { Link } from "react-router-dom";
import logo from "../../assets/logo-about.jpeg";
// actualizado
function OurStory() {
  return (
    <>
      <div className="flex mx-8 my-8 gap-4 flex flex-row md:mx-20 lg:mx-20 xl:mx-28 2xl:mx-32 2xl:my-12 gap-4">
        <Link className="text-gray-400 hover:underline" to="/">
          Home
        </Link>
        <span>/</span>
        <Link className="hover:underline">About</Link>
      </div>
      <div className="w-full flex justify-end">
        <div className=" w-[92.5%] h-full flex flex-col lg:flex-row xl:flex-row 2xl:flex-row gap-10">
          <div className="w-[90%] text-justify 2xl:text-start flex flex-col gap-6 justify-center lg:w-[30%] xl:w-[40%]  2xl:w-[3000px]">
            <h1 className="w-full text-black text-5xl font-semibold mb-3">
              Our Story
            </h1>
            <article className="w-full">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </article>
            <article className=" w-full">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </article>
          </div>
          <div className="h-full lg:w-[70%] xl:w-[60%] 2xl:w-[4000px]">
            <img className="h-full w-full" src={logo} alt="logo about" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
