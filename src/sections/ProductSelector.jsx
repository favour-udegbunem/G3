import { useState } from "react";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";
import products from "../data/products";

const ProductSelector = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOrder = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section
        id="products"
        className="bg-white px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
              Choose Your Collection
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Find the Right G3 Collection for Your Girl
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Choose the collection that best fits what you want
              your girl to explore and learn.
            </p>
          </div>

          {/* Products */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={handleOrder}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={closeModal}
      />
    </>
  );
};

export default ProductSelector;