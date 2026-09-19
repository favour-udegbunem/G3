import { CheckCircle2, CreditCard, Package, ShoppingCart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShoppingCart,
    title: "Choose Your Collection",
    description:
      "Select the G3 book collection that best suits what you want your girl to learn and develop.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Place Your Order",
    description:
      "Enter your details and choose your preferred payment method to complete your order.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Confirm Your Payment",
    description:
      "Make your payment through Bank Transfer or Selar and follow the instructions provided.",
  },
  {
    number: "04",
    icon: Package,
    title: "Receive Your Books",
    description:
      "Your G3 collection will be prepared and delivered to the address you provided.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Getting Your G3 Collection Is Simple
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            From choosing your collection to receiving your books, the
            process is simple and straightforward.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl border border-gray-200 bg-[#FFF8F5] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D84B83] shadow-sm">
                    <Icon size={26} />
                  </div>

                  <span className="text-4xl font-black text-[#D84B83]/15">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-4 font-semibold text-white transition hover:bg-gray-800"
          >
            Choose Your Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;