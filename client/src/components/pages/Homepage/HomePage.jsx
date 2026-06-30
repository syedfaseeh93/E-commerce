import MainCarousel from "../../Carousel/MainCarousel";
import CardsCarousel from "../../Carousel/CardsCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { mens_Jeans } from "../../../Data/mens_Jeans";
import { mens_Shirt } from "../../../Data/mens_Shirts";
import { womens_Dress } from "../../../Data/womens_Dress";
import { lehnga_choli } from "../../../Data/lehnga_choli";
import { womens_saree } from "../../../Data/womens_saree";

const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <div className="bg-gray-50">
      <CardsCarousel data={mens_kurta} sectionName={"Men's Kurtas"} />
      <CardsCarousel data={womens_Dress} sectionName={"Women's Dress"} />
      <CardsCarousel data={mens_Shirt} sectionName={"Men's Shirts"} />
      <CardsCarousel data={womens_saree} sectionName={"Women's Saree"} />
      <CardsCarousel data={mens_Jeans} sectionName={"Men's Jeans"} />
      <CardsCarousel data={lehnga_choli} sectionName={"Lehnga Choli"} />
      </div>
    </>
  );
};

export default HomePage;
