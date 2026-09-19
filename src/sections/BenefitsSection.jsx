const BenefitsSection = () => {
  const benefits = [
    {
      icon: "💗",
      title: "Self-Confidence",
      text: "Help her understand her worth, believe in herself, and develop a healthier view of who she is.",
    },
    {
      icon: "🧠",
      title: "Emotional Awareness",
      text: "Give her simple tools to understand her feelings and handle everyday emotional challenges.",
    },
    {
      icon: "🌱",
      title: "Personal Growth",
      text: "Encourage positive habits, responsibility, discipline, and a mindset focused on growth.",
    },
    {
      icon: "🎯",
      title: "Focus & Goals",
      text: "Help her learn how to set meaningful goals, stay focused, and take steps toward what she wants.",
    },
    {
      icon: "🤝",
      title: "Better Relationships",
      text: "Teach important lessons about communication, kindness, respect, boundaries, and relating with others.",
    },
    {
      icon: "✨",
      title: "A Stronger Sense of Self",
      text: "Help her navigate growing up while becoming more comfortable with who she is and who she is becoming.",
    },
    {
      icon: "📚",
      title: "Practical Life Lessons",
      text: "Give her useful lessons she can apply at home, in school, with friends, and in everyday situations.",
    },
    {
      icon: "👩🏾",
      title: "Growing Into Her Future",
      text: "Equip her with conversations and ideas that can help prepare her for the young woman she is becoming.",
    },
  ];

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            More Than Just Books
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            What Your Girl Will Gain
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            G3 is designed to give girls practical lessons, conversations,
            and activities that support them through different stages of
            growing up.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0F5] text-2xl">
                {benefit.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-xl font-semibold leading-8 text-gray-950">
            Give her something she can return to, learn from, and grow with.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;