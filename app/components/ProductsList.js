import ProductItem from "./ProductItem";

const Products = [
  {
    headingArab: "انظمه الاطفاء برذاذ الماء الضبابى",
    headingEng: "Water Spray (mist) Extinguishing Systems",
    src: "/images/product1.jpg",
  },
  {
    headingArab: "انظمه انذار الحريق",
    headingEng: "Fire Alarm Systems",
    src: "/images/product1.jpg",
  },
  {
    headingArab: "محطات مضخات الحريق",
    headingEng: "Fire Pump Stations",
    src: "/images/product1.jpg",
  },
  {
    headingArab: "انظمه كاميرات المراقبه",
    headingEng: "CCTV Systems",
    src: "/images/product1.jpg",
  },
  {
    headingArab: "خراطيم وعساكر وطفايات الحريق",
    headingEng: "Fire Hoses, Hydrant and Fire Extinguishers",
    src: "/images/product1.jpg",
  },
  {
    headingArab: "انظمه الاطفاء الالى بالماء والرغوة",
    headingEng: "Automatic Water and Foam Extinguishing Systems",
    src: "/images/product1.jpg",
  },
];

function ProductsList() {
  return (
    <div className="mx-20 mt-12 grid grid-cols-2 gap-x-8 gap-y-14 max-lg:grid-cols-1 max-md:mx-10 max-md:gap-x-4 max-sm:mx-4">
      {Products.map((product, i) => (
        <ProductItem product={product} key={i} />
      ))}
    </div>
  );
}

export default ProductsList;
