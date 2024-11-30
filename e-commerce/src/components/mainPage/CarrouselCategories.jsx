import { categories } from "../../data";
import { CategoriesCard2 } from "./CategoriesCard";
import PropTypes from "prop-types";

function CarrouselCategories({ carouselRef }) {
  const categoriesInfo = [...categories];

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex overflow-x-scroll hide-scrollbar snap-x snap-mandatory gap-12"
        ref={carouselRef}
        style={{ scrollBehavior: 'smooth' }} // Para navegadores que no soporten scroll-smooth de Tailwind
      >
        {categoriesInfo.map((card, index) => (
         
            <CategoriesCard2 img={card.img} title={card.title} key={index} />
         
        ))}
      </div>
    </div>
  );
}

export default CarrouselCategories;


CarrouselCategories.propTypes = {
    carouselRef : PropTypes.object.isRequired
}