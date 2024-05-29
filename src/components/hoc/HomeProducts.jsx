import React from "react";

const HomeProducts = ({ products, title , productsLimit}) => {
  const formatNumber = (num) => {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-title2 font-semibold mb-4">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, productsLimit).map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden space-y-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-center p-2 h-[4rem]">
              {truncateText(product.title, 45)}
            </h2>
            <img
              className="w-full h-48 object-contain"
              src={product.image}
              alt={product.title}
            />
            <div
              className={`p-4 ${
                product.category === "men's clothing" && "bg-[#2BD9AF]"
              } ${
                product.category === "women's clothing" && "bg-red-500/[.60]"
              } ${product.category === "jewelery" && "bg-blue-500/[.60]"} ${
                product.category === "electronics" && "bg-black/[.20]"
              } rounded-lg text-center h-full`}
            >
              <p className="text-lg text-green-600 mb-2 text-primery font-bold">
                Rs {formatNumber(product.price)}
              </p>
              <p className="text-gray-600 text-subtitle">
                {truncateText(product.description, 150)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
