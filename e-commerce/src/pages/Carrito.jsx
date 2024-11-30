import CartTotal from "../components/shoppingCart/CartTotal";
import NavLinks from "../components/nav/NavLinks";
import TotalProducts from "../components/shoppingCart/TotalProducts";

function Carrito() {
  return (
    <section className=" mx-32">
      <NavLinks/>
      <TotalProducts />
      <CartTotal/>
    </section>
  );
}

export default Carrito;
