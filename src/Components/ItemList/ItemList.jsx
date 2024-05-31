import React from "react";
import Item from "./Item";

const ItemList = ({ pageName, data: products, handleDelete }) => {
  console.log("🚀 ~ ItemList ~ data:", products);
  return (
    <section>
      <div className="mx-auto lg:p-0 sm:px-6 sm:py-12">
        <div className="mx-auto">
          <header className="text-center">
            <h1 className="lg:text-3xl font-bold text-gray-900 sm:text-xl">
              Your {pageName}
            </h1>
          </header>
          {products.length !== 0 &&
            products.map((product, idx) => (
              <Item key={idx} data={product} handleDelete={handleDelete}></Item>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
