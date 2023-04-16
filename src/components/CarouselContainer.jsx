import React from "react";
import Product from "./Product";

import product1 from "/images/product-image-1.webp";
import product2 from "/images/product-image-2.webp";
import product3 from "/images/product-image-3.webp";
import product4 from "/images/product-image-4.webp";
import product5 from "/images/product-image-5.webp";
import CTABtn from "./CTABtn";

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
      <div className="flex items-baseline mx-6 my-12 ">
        <h2 className="text-xl md:text-2xl mr-auto">Best Sellers</h2>
        <CTABtn name="Shop All"/>
      </div>
      {/* Product Container */}
      <div className="carousel overflow-x-auto whitespace-nowrap mx-8 lg:justify-center lg:items-center focus:outline-2 outline-blue-600">
        <div className="inline-flex w-screen space-x-6">{productList}</div>
      </div>
    </section>
  );
}
