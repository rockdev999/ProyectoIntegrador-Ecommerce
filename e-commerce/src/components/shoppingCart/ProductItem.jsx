import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductTotalPrice";
import PropTypes from "prop-types";

function ProductItem({ product }) {
  const { handleTotalUpdate, removeProduct } = useContext(ProductContext);
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [active, setActive] = useState(false);

  const toggleClose = () => {
    setActive((prevActive) => !prevActive);
  };

  const increase = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    const newSubtotal = product.product.price * quantity;
    setSubtotal(newSubtotal);
    handleTotalUpdate(product.product.id, newSubtotal);
  }, [quantity, product.product.price, product.product.id]);

  return (
    <div className="grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium items-center">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-4" onClick={toggleClose}>
          <div className="flex">
            <span
              className={`${
                active ? "absolute" : "hidden"
              } material-symbols-outlined bg-red-500 text-white rounded-full cursor-pointer z-50 text-base px-1 font-bold`}
              onClick={() => {
                removeProduct(product.product.id);
              }}
            >
              close
            </span>
            <img
              src={product.product.img}
              alt={product.product.title}
              className="w-20 z-0"
            />
          </div>
          <p>{product.product.title}</p>
        </button>
      </div>
      <p>${product.product.price}</p>
      <div>
        <div className="flex gap-2 w-4/12 border-2 border-gray-700 rounded justify-evenly p-1 items-center">
          <span className="cantidad ml-2 w-2/5">{quantity}</span>
          <div className="flex flex-col text-xs">
            <button onClick={increase}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_up
              </span>
            </button>
            <button onClick={decrease}>
              <span className="material-symbols-outlined cursor-pointer">
                keyboard_arrow_down
              </span>
            </button>
          </div>
        </div>
      </div>
      <p>${subtotal}</p>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
  }).isRequired,
};


export default ProductItem;
