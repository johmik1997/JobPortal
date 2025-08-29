import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  const faqs = [
    {
      number: 1,
      question: "Can I upload a CV?",
      answer:
        "Nunc sed at nisi purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio est in at. Felis eu ultricies a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum.",
    },
    {
      number: 2,
      question: "How long will the recruitment process take?",
      answer: "The recruitment process typically takes 2–3 weeks.",
    },
    {
      number: 3,
      question: "What does the recruitment and selection process involve?",
      answer: "Screening, interviews, and final evaluation with HR.",
    },
    {
      number: 4,
      question: "Do you recruit for Graduates, Apprentices and Students?",
      answer: "Yes, we have tailored opportunities for graduates and students.",
    },
    {
      number: 5,
      question:
        "Can I receive notifications for any future jobs that may interest me?",
      answer: "Yes, you can subscribe for job alerts in your profile settings.",
    },
  ];

  return (
    <section className="bg-white py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
      </p>

      <div className="mt-10 space-y-2">
        {faqs.map((faq) => (
          <FAQAccordion
            key={faq.number}
            number={faq.number}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
