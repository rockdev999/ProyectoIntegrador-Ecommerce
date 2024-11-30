import ProductsCard from "./ProductsCard";
import { products } from "../../data";
import HeadSection from "./HeadSection";
import Clock from "./Clock";
import Arrows from "./Arrows";
import TitleSections from "./TitleSections";

function Catalog() {
  return (
    <section className="flex flex-col gap-8 border-b-2 pb-20">
      <div className="flex flex-col gap-8 ">
        <div>
          <HeadSection title={"Today's"} />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-2">
          <TitleSections desc={"Flash Sales"} />
          <Clock />
          <Arrows />
        </div>
      </div>
      <div className="grid grid-cols-1 w-3/5 m-auto sm:w-2/5 md:w-3/5 md:grid-cols-2 lg:w-full lg:grid-cols-4 2xl:grid-cols-5 gap-10">
        {products.map((product) => {
          return (
            <ProductsCard
              key={product.id}
              img={product.img}
              title={product.title}
              price={product.price}
              oldPrice={product.oldPrice}
              rate={product.rate}
              off={product.off}
              id={product.id}
            />
          );
        })}
      </div>
      <button className="bg-red-500 lg:w-1/5 p-4 text-sm rounded text-white font-medium m-auto mt-6 hover:bg-black hover:text-white active:bg-gray-500 ">
        View All Product
      </button>
    </section>
  );
}

export default Catalog;
