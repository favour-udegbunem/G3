import founderImage from "../assets/founder.jpg";

const FounderSection = () => {
  return (
    <section className="bg-[#FFF8F5] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={founderImage}
                alt="G3 Founder"
                className="h-[500px] w-full object-cover sm:h-[600px]"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gray-950 px-6 py-5 text-white shadow-xl sm:-right-6">
              <p className="text-sm text-gray-300">The G3 Initiative</p>
              <p className="mt-1 text-lg font-bold">
                Raising Confident Girls
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
              Our Story
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Every Girl Deserves the Right Guidance.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Growing up comes with questions, choices, pressure and
                experiences that can shape a girl's future.
              </p>

              <p>
                G3 was created to give girls practical resources that help
                them understand themselves, build confidence and navigate
                important stages of growing up.
              </p>

              <p>
                We believe that when girls are equipped with the right
                knowledge and guidance, they can make wiser decisions and
                grow into confident young women.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-[#D84B83] pl-5">
              <p className="text-lg font-semibold italic leading-8 text-gray-950">
                "Our goal is not simply to give girls books. It is to give
                them knowledge they can carry with them as they grow."
              </p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-gray-950">
                G3 Initiative
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Empowering girls through knowledge, confidence and
                purposeful growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;