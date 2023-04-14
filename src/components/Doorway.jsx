import CTABtn from "./CTABtn";

export default function Doorway({title, description, img}) {
  return (
    <article className="flex flex-col mx-6 my-4 md:max-w-[550px]">
      <img src={img} />
      <div className="max-w-[440px] mt-8 text-[13px]">
        <h3 className=" text-base">{title}</h3>
        <p className="text-[#808080]">
          {description}
        </p>
        <CTABtn name="Shop All" width={"125px"}/>
      </div>
    </article>
  );
}
