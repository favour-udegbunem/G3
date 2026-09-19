import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the G3 books about?",
    answer:
      "The G3 books cover important areas of a girl's development, including confidence, decision-making, purpose, peer pressure and understanding herself as she grows.",
  },
  {
    question: "Which G3 collection should I choose?",
    answer:
      "The 2-in-1 collection is a smaller starting point, the 4-in-1 collection gives your girl a wider range of topics, while the 6-in-1 collection gives access to the complete G3 book collection.",
  },
  {
    question: "Are the books suitable for girls of different ages?",
    answer:
      "Yes. The books focus on topics and experiences that are relevant to girls as they grow. Choose the collection that best matches what you want your girl to learn and develop.",
  },
  {
    question: "What happens after I place my order?",
    answer:
      "Once your order is submitted, we receive your details and begin processing the order. You will receive further communication about your order and delivery.",
  },
  {
    question: "How can I pay for my order?",
    answer:
      "You can pay using Bank Transfer or Selar. Your selected payment method will show the relevant instructions during checkout.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "Yes. G3 orders can be delivered to customers across Nigeria. Enter your delivery state and exact address when placing your order.",
  },
  {
    question: "Can I order more than one collection?",
    answer:
      "Yes. You can place orders for multiple collections if you want to give your girl access to more of the G3 books.",
  },
  {
    question: "How can I contact G3 if I have questions about my order?",
    answer:
      "You can contact G3 through the WhatsApp support option provided on the website. For payment by Bank Transfer, you can also use the WhatsApp contact provided to send your payment receipt.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D84B83]">
            Got Questions?
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Everything you need to know before choosing a G3 collection
            for your girl.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-[#D84B83]"
                    : "border-gray-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-bold text-gray-950">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#D84B83] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6">
                    <p className="leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;