import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../data/testimonials";

const TestimonialSection = () => {
  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            Parent Reviews
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            What Parents Are Saying
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            See why parents are choosing G3 to help their girls understand
            themselves, build confidence and navigate growing up.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;