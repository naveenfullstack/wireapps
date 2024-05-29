import React from "react";
import { useSelector } from "react-redux";

//Components
import HomeProducts from "../components/hoc/HomeProducts";
import Header from "../components/header/Header";
import Categories from "../components/Categories";

export default function Home() {
  const products = useSelector((state) => state.products.products);
  const mensClothing = useSelector((state) => state.categories.mensClothing);
  const womensClothing = useSelector(
    (state) => state.categories.womensClothing
  );
  const jewelery = useSelector((state) => state.categories.jewelery);
  const electronics = useSelector((state) => state.categories.electronics);

  return (
    <div>
      <Header />

      <div className="flex justify-center">
        <div className="w-full max-w-defult space-y-6">
          <HomeProducts
            products={products}
            title={"Flash Sale"}
            productsLimit={8}
          />
          <Categories />
          <HomeProducts
            products={mensClothing}
            title={"Men's Clothing"}
            productsLimit={8}
          />
          <HomeProducts
            products={womensClothing}
            title={"Women's Clothing"}
            productsLimit={8}
          />
          <HomeProducts
            products={jewelery}
            title={"Jewelery"}
            productsLimit={8}
          />
          <HomeProducts
            products={electronics}
            title={"Electronics"}
            productsLimit={8}
          />
        </div>
      </div>
    </div>
  );
}
