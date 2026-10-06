"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden rounded-lg border border-[#D9E5EC] bg-gradient-to-r from-[#273793] to-[#2F9CCB]">

      {/* QUESTION */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-[60px] w-full items-center justify-between px-5 text-left"
      >
        <span className="font-semibold text-[#D0D1D2]">
          {question}
        </span>

        <span
          className={`text-xl text-white transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-6 text-[#D0D1D2]">
            {answer}
          </div>
        </div>
      </div>

    </div>
  );
}