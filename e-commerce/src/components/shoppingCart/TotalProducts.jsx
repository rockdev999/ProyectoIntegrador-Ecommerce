import ProductItem from "./ProductItem";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductTotalPrice";

function TotalProducts() {
  const { data } = useContext(ProductContext);
  return (
    <div className="flex flex-col gap-12 ">
      <div className=" grid grid-cols-4 gap-16 border border-slate-100 shadow p-8 font-medium">
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>

      {data.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}

      <div className="flex justify-between">
        <Link
          to="/"
          className="flex justify-center border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600"
        >
          Return to Shop
        </Link>
        <button className="border py-4 w-60 hover:bg-black hover:text-white px-8 text-lg font-medium rounded border-gray-600">
          Update Cart
        </button>
      </div>
    </div>
  );
}

export default TotalProducts;
