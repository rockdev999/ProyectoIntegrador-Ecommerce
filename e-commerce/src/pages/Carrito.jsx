import CartTotal from "../components/shoppingCart/CartTotal";
import NavLinks from "../components/nav/NavLinks";
import TotalProducts from "../components/shoppingCart/TotalProducts";

function Carrito() {
  return (
    <section className="2xl:mx-32">
      <NavLinks route="shop" />
      <TotalProducts />
      <CartTotal />
    </section>
  );
}

export default Carrito;
