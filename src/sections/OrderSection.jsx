const problems = [
  {
    number: "01",
    title: "She is growing, but is she prepared?",
    description:
      "Growing up comes with questions, changes and experiences that girls may not always know how to navigate.",
  },
  {
    number: "02",
    title: "Some conversations are difficult to start.",
    description:
      "There are important things every girl needs to understand, but parents may not always know how to begin those conversations.",
  },
  {
    number: "03",
    title: "The world is teaching her too.",
    description:
      "Friends, social media and the world around her can influence how she sees herself, her choices and her future.",
  },
];

const Problem = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Growing Up Isn't Always Easy
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Every girl deserves the right guidance as she grows.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            There are conversations, questions and life experiences that
            become easier when a girl has the right information and someone
            she can trust to guide her.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="rounded-3xl border border-gray-100 bg-[#FFF9F5] p-8"
            >
              <span className="text-sm font-bold text-gray-400">
                {problem.number}
              </span>

              <h3 className="mt-8 text-2xl font-bold leading-tight text-gray-950">
                {problem.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;