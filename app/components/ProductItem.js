import ImageServices from "./ImageServices";
import TextBoxService from "./TextBoxService";

function ProductItem({ product }) {
  const { headingArab, headingEng, src } = product;
  return (
    <div className="flex items-center justify-between gap-4">
      <ImageServices src={src} />
      <TextBoxService
        type="primary"
        headingArab={headingArab}
        headingEng={headingEng}
      />
    </div>
  );
}

export default ProductItem;
