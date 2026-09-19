import {
  BookOpen,
  Heart,
  Home,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Engaging Books",
    description:
      "The books are written to be relatable and engaging, helping girls learn without feeling like they are sitting through another lesson.",
  },
  {
    icon: Target,
    title: "Practical Lessons",
    description:
      "The lessons focus on real situations girls may face as they grow, giving them ideas they can actually apply in everyday life.",
  },
  {
    icon: Heart,
    title: "Builds Confidence",
    description:
      "G3 helps girls understand their value, make better decisions and develop a stronger sense of confidence.",
  },
  {
    icon: Home,
    title: "Learn at Home",
    description:
      "Parents can use the books at home as a simple way to start meaningful conversations and support their girl's growth.",
  },
  {
    icon: Lightbulb,
    title: "Age-Appropriate",
    description:
      "The collections are designed around important stages of a girl's development, making the lessons easier to understand and relate to.",
  },
  {
    icon: ShieldCheck,
    title: "Character Development",
    description:
      "The books address important areas such as decision-making, peer pressure, confidence, purpose and personal responsibility.",
  },
  {
    icon: Users,
    title: "Parent-Child Connection",
    description:
      "The books can create opportunities for parents and girls to discuss subjects that may otherwise be difficult to bring up.",
  },
  {
    icon: Sparkles,
    title: "Made for Girls",
    description:
      "G3 focuses specifically on the experiences, questions and challenges girls encounter while growing up.",
  },
];

const WhyParentsLove = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            Why Parents Choose G3
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            More Than Books. Tools for Growing Girls.
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            G3 gives parents practical resources they can use to support
            their girls through important stages of growing up.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-gray-200 bg-[#FFF8F5] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#D84B83] shadow-sm">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-gray-950 px-6 py-10 text-center sm:px-10">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Give Her More Than Advice.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Give her resources she can return to as she learns, grows and
            navigates the different stages of life.
          </p>

          <a
            href="#products"
            className="mt-7 inline-flex rounded-full bg-[#D84B83] px-7 py-4 font-semibold text-white transition hover:opacity-90"
          >
            Explore G3 Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyParentsLove;