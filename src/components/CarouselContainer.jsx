import React from "react";
import RightArrow from "../assets/right-arrow-black.svg";
import Product from "./Product";
import product1 from "../assets/product-image-1.png";
import product2 from "../assets/product-image-2.png";
import product3 from "../assets/product-image-3.png";
import product4 from "../assets/product-image-4.png";
import product5 from "../assets/product-image-5.png";

const productsData = [
  { id: 1, img: product1, name: "Fredo Jacket", price: "£230" },
  { id: 2, img: product2, name: "Powell Jacket", price: "£350" },
  { id: 3, img: product3, name: "Lazar Jacket in Denim", price: "£395" },
  { id: 4, img: product4, name: "Lazar Jacket in Black", price: "£395" },
  { id: 5, img: product5, name: "Lazar Leather Jacket", price: "£395" },
];

const productList = productsData.map((product) => (
  <Product key={product.id} {...product} />
));

export default function CarouselContainer() {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center mx-6 mt-12 ">
        <h2 className="text-xl md:text-2xl">Best Sellers</h2>
        <div className="flex m-6 items-center justify-center max-w-[220px] border-gray-400 border-2 cursor-pointer">
          <div className="p-4">
            <p>Shop All</p>
          </div>
          <div className="items-stretch border-l-2 p-4">
            <img src={RightArrow} className="fill-black" />
          </div>
        </div>
      </div>
      {/* Product Container */}
      <div className="overflow-x-auto whitespace-nowrap mx-8">
        <div className="inline-flex w-screen space-x-6">{productList}</div>
      </div>
    </section>
  );
}
