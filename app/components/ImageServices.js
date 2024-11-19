import Image from "next/image";

function ImageServices({ src }) {
  return (
    <div className="image-services relative h-32 w-40 object-cover">
      <Image src={src} fill alt="services image" />
    </div>
  );
}

export default ImageServices;
