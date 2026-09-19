import { X } from "lucide-react";
import OrderForm from "./OrderForm";

const OrderModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/60 p-0 sm:p-4"
      onClick={onClose}
    >
      <div className="flex min-h-full items-end justify-center sm:items-center">
        <div
          className="relative w-full overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-start justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-8">
            <div className="pr-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D84B83] sm:text-sm">
                Complete Your Order
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
                Order {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Enter your details below to complete your order.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
              aria-label="Close order form"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="max-h-[calc(100vh-100px)] overflow-y-auto px-5 py-6 sm:max-h-[85vh] sm:px-8 sm:py-8">
            {/* Selected Product */}
            <div className="flex gap-3 rounded-2xl bg-[#FFF8F5] p-4 sm:gap-4">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <p className="font-bold text-gray-950">
                  {product.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {product.type}
                </p>

                <p className="mt-1 font-bold text-[#D84B83]">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="mt-7">
              <OrderForm
                product={product}
                onSuccess={() => {
                  setTimeout(() => {
                    onClose();
                  }, 2500);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;