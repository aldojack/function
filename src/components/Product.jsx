import placeholder from "../assets/product-image-1.png";
import Heart from "../assets/heart.svg";

export default function Product({img, name, price}) {
  return (
    <div className="max-w-[253px] md:max-w-[332px] shrink-0">
      <img src={img} />
      <div className="flex justify-between items-center mt-6">
        <div className="flex flex-col space-y-1 text-sm">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div>
          <img src={Heart} />
        </div>
      </div>
    </div>
  );
}
