import Catalog from "../components/mainPage/Catalog";
import Categories from "../components/mainPage/Categories";
import CategoriesProducts from "../components/mainPage/CategoriesProducts";

function MainPage() {
  return (
    <main className="mx-2 sm:mx-4 md:mx-12 lg:mx-32">
      <Categories />
      <Catalog />
      <CategoriesProducts/>
    </main>
  );
}

export default MainPage;
