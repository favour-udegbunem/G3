const TrustBar = () => {
  const items = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      text: "Delivery available across Nigeria",
    },
    {
      icon: "📦",
      title: "Carefully Packaged",
      text: "Your books arrive ready to enjoy",
    },
    {
      icon: "💳",
      title: "Secure Ordering",
      text: "Simple and convenient checkout",
    },
    {
      icon: "💬",
      title: "Parent Support",
      text: "We're here when you need us",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-[#242F65]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`px-6 py-8 text-center ${
              index !== items.length - 1
                ? "border-r border-gray-200"
                : ""
            }`}
          >
            <div className="text-2xl">{item.icon}</div>

            <h3 className="mt-3 text-sm font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;