const ProblemSection = () => {
  const problems = [
    {
      icon: "😟",
      title: "She struggles with confidence",
      text: "You notice that she doubts herself, compares herself to others, or finds it difficult to believe in what she can do.",
    },
    {
      icon: "📱",
      title: "Too much screen time",
      text: "You want her to spend more time doing something meaningful, but finding engaging activities isn't always easy.",
    },
    {
      icon: "💭",
      title: "She keeps things to herself",
      text: "Sometimes you know something is bothering her, but getting her to open up and talk isn't always easy.",
    },
    {
      icon: "⏰",
      title: "Building good habits is difficult",
      text: "You want her to become more responsible, disciplined and consistent without constantly reminding her.",
    },
    {
      icon: "❤️",
      title: "Growing up brings new questions",
      text: "As she grows, she's facing new experiences and emotions that can be difficult for both of you to navigate.",
    },
    {
      icon: "🌱",
      title: "You want to prepare her for life",
      text: "You don't just want her to succeed academically. You want her to grow into a confident, capable young woman.",
    },
  ];

  return (
    <section className="bg-[#FFF8F5] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            Sound Familiar?
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            If You Are a Parent, You Have Probably Noticed...
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Growing up comes with questions, changes and challenges.
            Sometimes, knowing how to guide your girl through them can
            be just as challenging.
          </p>
        </div>

        {/* Problems */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-[#F1DFE5] bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F5] text-2xl">
                {problem.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                {problem.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        {/* Transition to solution */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-950 sm:text-3xl">
            Your Girl Isn't the Problem.
          </h3>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            She is growing, learning and figuring things out. What she
            needs is the right guidance, conversations and resources to
            help her understand herself and navigate each stage with
            confidence.
          </p>

          <p className="mt-5 text-lg font-semibold text-gray-950">
            That's exactly what G3 was created to provide.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;