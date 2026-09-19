const ProductCard = ({ product, onOrder = () => {} }) => {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border bg-white ${
        product.featured
          ? "border-[#D84B83] shadow-xl"
          : "border-gray-200 shadow-sm"
      }`}
    >
      {product.featured && (
        <div className="absolute left-5 top-5 z-10 rounded-full bg-[#D84B83] px-4 py-2 text-xs font-bold text-white">
          COMPLETE COLLECTION
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-[4/3] overflow-hidden bg-[#FFF8F5]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <p className="text-sm font-semibold text-[#D84B83]">
          {product.type}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-gray-950">
          {product.name}
        </h3>

        <p className="mt-3 leading-7 text-gray-600">
          {product.description}
        </p>

        {/* What's Included */}
        <div className="mt-5">
          <p className="text-sm font-bold text-gray-950">
            What's included:
          </p>

          <ul className="mt-3 space-y-2">
            {product.books.map((book) => (
              <li
                key={book}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="text-[#D84B83]">✓</span>
                {book}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="mt-6 border-t border-gray-100 pt-5">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-950">
              ₦{product.price.toLocaleString()}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          </div>

          <span className="mt-2 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
            {product.discount}
          </span>
        </div>

        {/* Order Button */}
        <button
          type="button"
          onClick={() => onOrder(product)}
          className="mt-6 w-full rounded-full bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
        >
          Order Now
        </button>
      </div>
    </article>
  );
};

export default ProductCard;