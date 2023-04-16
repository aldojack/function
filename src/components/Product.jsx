import Heart from "../assets/heart.svg";

export default function Product({img, name, price}) {
  return (
    <div className="max-w-[16rem] md:max-w-[20.75rem] shrink-0 focus:outline-2 outline-blue-600">
      <img src={img} className="cursor-pointer p-4" alt={`A picture of ${name}`} tabIndex="0"/>
      <div className="flex justify-between items-center mt-6">
        <div className="flex flex-col space-y-1 text-sm">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div>
          <img src={Heart} className="cursor-pointer" alt="A heart icon to favoutite item" tabIndex="0"/>
        </div>
      </div>
    </div>
  );
}
