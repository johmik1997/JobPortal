import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function FAQAccordion({ number, question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className={`flex justify-between w-full text-left items-center ${
          open ? "text-primary font-semibold" : "text-gray-800"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className="flex items-center space-x-3">
          <span
            className={`font-semibold ${
              open ? "text-primary" : "text-gray-500"
            }`}
          >
            {number.toString().padStart(2, "0")}
          </span>
          <span>{question}</span>
        </span>
        {open ? (
          <FaTimes className="text-primary" />
        ) : (
          <FaPlus className="text-gray-500" />
        )}
      </button>

      {open && (
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
