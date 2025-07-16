import React, { useState } from "react";

const QuestionAccordion: React.FC<{
  question: { id: string; question: string; answer: string };
}> = ({ question }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-secondary/20">
      <button
        className="w-full text-left py-sm px-0 flex items-center justify-between focus:outline-none transition-default hover:text-primary"
        onClick={() => setOpen((o) => !o)}
        type="button"
      >
        <span className="font-semibold text-body">{question.question}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 py-xs" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="text-secondary text-caption pl-md pr-sm pb-sm">
          {question.answer}
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
