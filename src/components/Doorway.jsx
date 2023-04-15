import CTABtn from "./CTABtn";

export default function Doorway({title, description, img}) {
  return (
    <article className="flex flex-col mx-6 my-4 md:max-w-[550px]">
      <img src={img} />
      <div className="max-w-[450px] mt-8 text-sm">
        <h3 className="text-xl md:text-2xl">{title}</h3>
        <p className="text-[#808080] mt-3 max-w-[350px] md:max-w-full text-sm">
          {description}
        </p>
        <CTABtn name="Shop All"/>
      </div>
    </article>
  );
}
