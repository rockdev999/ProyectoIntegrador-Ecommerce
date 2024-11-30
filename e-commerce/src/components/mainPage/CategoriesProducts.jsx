import Arrows from "./Arrows";
import CarrouselCategories from "./CarrouselCategories";
import HeadSection from "./HeadSection";
import TitleSections from "./TitleSections";
import { useRef } from 'react';

function CategoriesProducts() {

  const carouselRef = useRef(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left:300 , behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col gap-8 border-b-2 pb-20">
      <HeadSection title={"Categories"} />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-2">
        <TitleSections desc={"Browse By Category"} />
        <Arrows scrollLeft={scrollLeft} scrollRight={scrollRight}/>
      </div>
      <CarrouselCategories carouselRef={carouselRef}/>
    </section>
  );
}

export default CategoriesProducts;
