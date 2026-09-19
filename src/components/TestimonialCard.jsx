const TestimonialCard = ({ name, role, text, image }) => {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex gap-1 text-[#D84B83]">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p className="mt-5 text-base leading-7 text-gray-600">
        "{text}"
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <img
          src={image}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-950">
            {name}
          </p>

          <p className="text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;