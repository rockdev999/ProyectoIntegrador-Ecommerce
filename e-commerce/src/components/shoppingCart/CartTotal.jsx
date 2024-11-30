import { ProductContext } from "../../context/ProductTotalPrice";
import  {useContext} from 'react'
function CartTotal() {
  const { total } = useContext(ProductContext)



  return (
    <div className="grid grid-cols-3 pt-12">
      <div className="grid col-span-2 grid-cols-2 gap-8">
        <div className="flex border border-black h-16 px-4 rounded items-center justify-center">
          <input
            className="w-full focus:outline-none"
            type="number"
            placeholder="Coupon Code"
          />
        </div>
        <div>
          <button className="text-white rounded py-4 px-12 bg-red-500 hover:bg-black hover:text-white">
            Apply Coupon
          </button>
        </div>
      </div>
      <div className="flex ">
        <div className="grid p-12 w-full border-2 border-black rounded gap-8">
          <div className="font-bold text-xl">
            <h6>Cart Total</h6>
          </div>
          <div className="flex justify-between border-b border-black font-normal pb-4">
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between border-b border-black font-normal pb-4 ">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-normal">
            <p>Total:</p>
            <p>${total}</p> 
          </div>
          <button className="m-auto text-white rounded py-4 px-10 bg-red-500 hover:bg-black hover:text-white">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
