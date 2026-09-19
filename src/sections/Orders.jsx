import { useState } from "react";
import products from "../data/products";
import OrderForm from "../components/OrderForm";

const OrderSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section
      id="order"
      className="bg-[#FFF8F5] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            Complete Your Order
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Get the G3 Collection for Your Girl
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Select the collection you want, then enter your
            details to complete your order.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Product Selection */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-950">
              Select Your Collection
            </h3>

            <div className="mt-6 space-y-4">
              {products.map((product) => {
                const selected =
                  selectedProduct?.id === product.id;

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      selected
                        ? "border-[#D84B83] bg-[#FFF8F5]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex gap-4">

                      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-gray-950">
                          {product.name}
                        </h4>

                        <p className="mt-1 text-sm text-gray-500">
                          {product.type}
                        </p>

                        <p className="mt-2 font-bold text-[#D84B83]">
                          ₦{product.price.toLocaleString()}
                        </p>
                      </div>

                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Shared Order Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <OrderForm
              product={selectedProduct}
              onSuccess={(result) => {
                console.log(
                  "Order successfully created:",
                  result.orderId
                );
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderSection;