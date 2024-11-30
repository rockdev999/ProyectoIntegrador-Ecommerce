import { Link } from "react-router-dom";
import { products } from "../../data";
import { useEffect, useState } from "react";

function Carrousel() {
  const info = products;
  const [active, setActive] = useState(0);

  const catchCard = (id) => {
    setActive(id);
  };

  useEffect(() => {
    const movimentCarrousel = setInterval(() => {
      setActive((valorActual) => {
        if (valorActual < products.length - 1) {
          return valorActual + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => {
      clearInterval(movimentCarrousel);
    };
  }, []);

  return (
    <article className={`relative z-0 lg:col-span-7 pt-8 lg:pl-12`}>
      {info.map((element, index) => {
        return (
          <div
            className={`bg-black lg:w-full lg:h-full pb-8" ${
              index === active ? "grid" : "hidden"
            } `}
            key={index}
          >
            <div className="grid lg:grid-cols-2 px-16">
              <div className="pt-4 flex justify-center items-center lg:items-start flex-col gap-8  lg:pt-24 ">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="w-16 rounded">
                      <img
                        className="w-full rounded"
                        src={element.logo}
                        alt=""
                      />
                    </div>
                  </div>
                  <h5
                    className="text-sm lg:text-2xl text-white font-medium pt-2"
                    style={{ fontFamily: "poppins" }}
                  >
                    {element.title}
                  </h5>
                </div>

                <h5 className="flex  text-xl tracking-wider gap-2 text-white lg:text-5xl font-semibold pr-8 leading-tight">
                  Up to {element.off}%  off Voucher
                </h5>
                <Link className="text-sm text-white flex items-center gap-4 lg:text-xl">
                  <p className="hover:border-white border-black border-b leading-normal">
                    Shop Now
                  </p>
                  <span className="text-sm lg:text-lg material-symbols-outlined text-white pt-1 ">
                    arrow_forward
                  </span>{" "}
                </Link>
              </div>
              <div className="mt-8 flex justify-center items-center lg:mt-4 lg:w-full lg:h-96">
                <img className="h-32 w-40 lg:h-full lg:w-full  max-w-fit " src={element.img} alt="" />
              </div>
            </div>
            <div className="carrousel-btns flex justify-center gap-4 m-8">
              {info.map((btn, btnIndex) => (
                <button
                  key={btnIndex}
                  onClick={() => {
                    catchCard(btnIndex);
                  }}
                  className={`w-4 h-4 border border-black rounded-full cursor-pointer hover:scale-150 ${
                    btnIndex === active ? "bg-red-800" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default Carrousel;
