import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductTotalPrice";
import PropTypes from "prop-types";

function ProductsCard({ img, title, price, oldPrice, rate, off, id }) {
  const { addProduct } = useContext(ProductContext);
  const [active, setActive] = useState(false);
  const [addToFavorites, setAddToFavorites] = useState(false);

  const changeActive = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  const addToFavorite = () => {
    if (!addToFavorites) {
      setAddToFavorites(true);
    } else {
      setAddToFavorites(false);
    }
  };
  return (
    <div className="flex flex-col shadow pb-8 gap-6 sm:1/2 ">
      <div className="relative">
        <div className="">
          <div className="absolute top-2 left-2 z-20 bg-red-500 text-white py-1 px-6 rounded">
            <span className="">-{off}%</span>
          </div>
          <div className="absolute top-2 right-2 z-20 flex flex-col gap-1 select-none">
            <span onClick={addToFavorite}
              className={` bg-white p-2 rounded-full border  cursor-pointer material-symbols-outlined`}
            >
             {addToFavorites ? <img className="w-6" src="heart.svg"/> : "favorite"} 
            </span>
            <span className="p-2 rounded-full border bg-white cursor-pointer material-symbols-outlined">
              visibility
            </span>
          </div>
        </div>
        <button className="w-full mt-0 z-0 bg-gray-100" onClick={changeActive}>
          <img className="w-full p-12 h-60" src={img} alt={title} />
        </button>
        <div
          className={`${
            active ? "absolute" : "hidden"
          } z-50 bottom-0 bg-black w-full text-white text-center cursor-pointer py-2 hover:bg-red-500 active:bg-gray-500`}
        >
          <button
          className=""
            onClick={() => {
              addProduct(img, title, price, id);
            }}
          >
            add to cart
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-semibold">{title}</p>
        <div className="flex gap-4">
          <span className="text-red-500 font-semibold">${price}</span>
          <span className="text-gray-400 line-through">${oldPrice}</span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex">
            <span className="material-symbols-outlined text-yellow-500">
              star_rate_half
            </span>
            <span className="material-symbols-outlined text-yellow-500">
              star_rate_half
            </span>
            <span className="material-symbols-outlined text-yellow-500">
              star_rate_half
            </span>
            <span className="material-symbols-outlined text-yellow-500">
              star_rate_half
            </span>
            <span className="material-symbols-outlined text-yellow-500">
              star
            </span>
          </div>
          <span className="text-gray-400 text-sm font-semibold">({rate})</span>
        </div>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  off: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProductsCard;
