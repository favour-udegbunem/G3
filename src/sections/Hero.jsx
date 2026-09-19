import cover from "../assets/Cover.png";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[#FFF8F5]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* LEFT */}
        <div>
          {/* Rating / Trust */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex text-[#D84B83]">
              ★★★★★
            </div>

            <p className="text-sm font-medium text-gray-600">
              Trusted by parents
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl">
            Give Your Girl the Tools She Needs to Grow With Confidence.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            A carefully created collection of resources designed to help
            girls understand themselves, build confidence and navigate
            important stages of growing up.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-full bg-gray-950 px-7 py-4 text-center font-semibold text-white transition hover:bg-gray-800"
            >
              Get the G3 Collection
            </a>

            <a
              href="#products"
              className="rounded-full border border-gray-300 bg-white px-7 py-4 text-center font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Choose a Book
            </a>
          </div>

          {/* Reassurance */}
          
        </div>

        {/* RIGHT — ACTUAL PRODUCT IMAGE */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={cover}
              alt="G3 book collection"
              className="h-[500px] w-full object-cover sm:h-[600px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;