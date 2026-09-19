import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalOffer = () => {
  return (
    <section className="bg-gray-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-[#D84B83] px-6 py-12 text-center sm:px-10 lg:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Give Her the Gift of Growth
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Give Your Girl the Tools She Needs to Grow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Help her build confidence, make wiser decisions, understand
            herself and navigate important stages of growing up with the
            right guidance.
          </p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {[
              "Choose from 2-in-1, 4-in-1 or 6-in-1",
              "Practical lessons for everyday life",
              "Order from anywhere in Nigeria",
              "Bank Transfer or Selar payment",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-white"
                />
                <span className="text-sm font-medium text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#products"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-gray-950 transition hover:bg-gray-100"
          >
            Choose Your G3 Collection
            <ArrowRight size={19} />
          </a>

          <p className="mt-5 text-sm text-white/75">
            Scroll up to explore the collections before placing your order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;