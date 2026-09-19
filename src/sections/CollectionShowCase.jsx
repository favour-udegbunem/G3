import products from "../data/products";

const CollectionShowcase = () => {
  return (
    <section className="bg-[#FFF8F5] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            What's Inside
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            More Than Just Books
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Each G3 collection brings together carefully selected books
            designed to help girls grow in confidence, character,
            decision-making and self-understanding.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm"
            >
              <div
                className={`grid items-center lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="h-full min-h-[320px] bg-[#F9F1EE] p-6 sm:p-10">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-10 lg:p-14">
                  <span className="inline-flex rounded-full bg-[#FFF0F5] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D84B83]">
                    {product.type}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                    {product.name}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-gray-600">
                    {product.description}
                  </p>

                  <div className="mt-7">
                    <p className="font-bold text-gray-950">
                      Included in this collection:
                    </p>

                    <div className="mt-4 space-y-3">
                      {product.books.map((book) => (
                        <div
                          key={book}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D84B83] text-xs font-bold text-white">
                            ✓
                          </span>

                          <p className="text-sm leading-6 text-gray-600">
                            {book}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <span className="text-2xl font-bold text-gray-950">
                      ₦{product.price.toLocaleString()}
                    </span>

                    <button
                      type="button"
                      onClick={() => {
                        document
                          .getElementById("products")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-full bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
                    >
                      View Collection
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;