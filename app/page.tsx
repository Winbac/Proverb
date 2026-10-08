"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { PiNotepad } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
const faqs = [
  {
    question: "What does Proverb Technologies do?",
    answer:
      "We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We provide web design, app development, digital marketing, billing software, and custom software solutions.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can contact us through our contact page to request a free consultation.",
  },
  {
    question: "Do you provide custom software?",
    answer:
      "Yes, we build custom software solutions according to your business requirements.",
  },
  {
    question: "Do you provide mobile applications?",
    answer:
      "Yes, we develop modern mobile applications for business requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us to discuss your requirements and get a free consultation.",
  },
];
const services = [
  {
    title: "SEO / SEM",
    icon: IoMdSearch,
    description:
      "Lorem ipsum dolor sit amet consectetur. Est imperdiet integer venenatis praesent adipiscing non. Risus nisl a velit tellus quis sed lectus turpis nibh.",
  },
  {
    title: "Content Marketing",
    icon: PiNotepad,
    description:
      "Lorem ipsum dolor sit amet consectetur. Est imperdiet integer venenatis praesent adipiscing non. Risus nisl a velit tellus quis sed lectus turpis nibh.",
  },
  {
    title: "Meta Ads",
    icon: HiOutlineSpeakerphone,
    description:
      "Lorem ipsum dolor sit amet consectetur. Est imperdiet integer venenatis praesent adipiscing non. Risus nisl a velit tellus quis sed lectus turpis nibh.",
  },
  {
    title: "Custom Design",
    icon: FaCode,
    description:
      "Lorem ipsum dolor sit amet consectetur. Est imperdiet integer venenatis praesent adipiscing non. Risus nisl a velit tellus quis sed lectus turpis nibh.",
  },
];

const benefits = [
  {
    title: "Lorem Ipsum Doloe Set",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet facilisi a pretium scelerisque nunc donec nisl. Sed praesent facilisis fringilla porttitor. Egestas turpis diam erat non hac consectetur pretium.",
  },
  {
    title: "Lorem Ipsum Doloe Set",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet facilisi a pretium scelerisque nunc donec nisl. Sed praesent facilisis fringilla porttitor. Egestas turpis diam erat non hac consectetur pretium.",
  },
  {
    title: "Lorem Ipsum Doloe Set",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet facilisi a pretium scelerisque nunc donec nisl. Sed praesent facilisis fringilla porttitor. Egestas turpis diam erat non hac consectetur pretium.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F2F8FB] text-[#1F2937]">
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Dotted background */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/dotted1.png')",
          }}
        />

        {/* Blue blurred circle above the dotted image */}
        <div
          className="absolute -left-[180px] top-0
                       h-[650px] w-[950px]
                       rounded-full bg-[#8EC5E0]
                       opacity-60 blur-[100px]"
        />
      </div>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden">
        <div
          className="
            relative z-10 mx-auto grid w-full max-w-[1500px]
            grid-cols-1 items-center
            gap-12
            px-6 py-16
            md:px-10
            lg:min-h-[648px]
            lg:grid-cols-[1.2fr_1fr]
            lg:gap-24
            lg:px-16
            lg:py-24
          "
        >
          {/* LEFT: TEXT */}
          <div>
            <h1
              className="
                font-sans
                text-4xl
                leading-[1.15]
                tracking-tight
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Lorem ipsum dolor sit amet consectetur.{" "}
              <span className="font-bold text-[#38BDF8]">Ultrices etiam</span>{" "}
              sit ac urna viverra.
            </h1>

            <p
              className="
                mt-6
                max-w-[600px]
                text-base
                leading-relaxed
                text-gray-500
              "
            >
              Lorem ipsum dolor sit amet consectetur. Quisque convallis
              consectetur sit sit. Mauris ac consectetur maecenas elementum
              habitant nisl. Sed enim diam sit sit.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="
                  rounded-xl
                  bg-blue-600
                  px-6 py-4
                  text-center
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-blue-700
                "
              >
                Free Consultation
              </Link>

              <Link
                href="#services"
                className="
                  rounded-xl
                  bg-gray-500
                  px-6 py-4
                  text-center
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-gray-600
                "
              >
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT: PHOTO */}
          <div className="relative mx-auto w-full max-w-[552px] lg:ml-auto lg:mr-0">
            <img
              src="/afrowomen.png"
              alt="Business professional holding a tablet"
              className="
                block
                aspect-[1.28/1]
                w-full
                rounded-2xl
                object-cover
              "
            />

            {/* FLOATING CONVERSION CARD */}
            <div
              className="
                absolute
                bottom-4 left-4
                z-10
                w-[176px]
                rounded-3xl
                bg-[#F5F5F5]
                p-5
                shadow-sm
                sm:bottom-10
                sm:left-[-24px]
                sm:w-[200px]
                lg:bottom-14
                lg:left-[-88px]
              "
            >
              <p className="text-xs font-bold text-[#123477] sm:text-sm">
                Today&apos;s Conversion
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-base font-bold text-black">10,150</span>

                <span
                  className="
                    rounded-full
                    bg-lime-300
                    px-2 py-1
                    text-[9px]
                    font-bold
                    text-black
                  "
                >
                  +6.2%
                </span>
              </div>

              {/* Progress bar */}
              <div
                aria-hidden="true"
                className="
                  mt-2
                  h-2
                  w-full
                  overflow-hidden
                  rounded-full
                  bg-gray-300
                "
              >
                <div className="h-full w-[65%] rounded-full bg-[#123477]" />
              </div>

              {/* Location */}
              <div className="mt-4 flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="
                    mt-1.5
                    h-1.5 w-1.5
                    shrink-0
                    rounded-full
                    bg-blue-500
                  "
                />

                <div>
                  <p className="text-xs text-gray-700 sm:text-sm">
                    Lajpat Nagar
                  </p>

                  <p className="text-xs font-bold text-[#123477] sm:text-sm">
                    1,035 Visitors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
      <section
        id="services"
        className="
          mx-auto w-full max-w-[1500px]
          scroll-mt-8
          px-6 py-14
          md:px-10
          lg:px-16
        "
      >
        <h2
          className="
            mb-10
            text-center
            font-sans
            text-3xl
            font-bold
          "
        >
          We Provide The Best <span className="text-[#60A5FA]">Services</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  relative
                  flex
                  min-h-[240px]
                  flex-col
                  overflow-hidden
                  rounded-xl
                  bg-white
                  px-6
                  pb-6
                  pt-20
                  shadow-[3px_6px_5px_rgba(0,0,0,0.18)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    absolute
                    left-0 top-0
                    flex
                    h-16 w-20
                    items-center
                    justify-center
                    rounded-br-[40px]
                    bg-[#60A5FA]
                  "
                >
                  <Icon aria-hidden="true" className="text-[25px] text-white" />
                </div>

                <h3 className="mb-2 text-base font-bold">{service.title}</h3>

                <p className="text-[13px] leading-5 text-gray-500">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="
                    mt-auto
                    pt-4
                    text-xs
                    text-gray-600
                    hover:text-blue-600
                  "
                >
                  Read More...
                  <span className="sr-only">about {service.title}</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          WHY TO WORK WITH US
      ========================================================= */}
      <section
        id="why-us"
        className="
          mx-auto w-full max-w-[1500px]
          scroll-mt-8
          px-6 py-14
          md:px-10
          lg:px-16
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            bg-white
            px-8 py-10
            shadow-[3px_6px_5px_rgba(0,0,0,0.18)]
          
              lg:px-12
            lg:py-12
          "
        >
          {/* HEADING */}
          <h2
            className="
             text-center
              font-sans
              text-3xl
              font-bold
              text-[#1F2937]
              lg:text-[32px]
            "
          >
            Why To <span className="text-[#38BDF8]">Work</span> With Us
          </h2>

          {/* CONTENT */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* LEFT - BENEFITS */}
            <div className="space-y-12 mt-10">
              {benefits.map((benefit, index) => {
                return (
                  <div key={index} className="flex items-start gap-2 mb-6">
                    {/* CHECK ICON */}
                    <FaCircleCheck
                      className="
                        mt-[3px]
                        shrink-0
                        text-[14px]
                        text-[#60A5FA]
                      "
                      aria-hidden="true"
                    />

                    {/* TEXT */}
                    <div>
                      <h3
                        className="
                          font-inter
                          text-[18px]
                          font-semibold
                          leading-tight
                          text-[#374151]
                        "
                      >
                        {benefit.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[390px]
                          font-inter
                          text-[14px]
                          leading-[1.35]
                          text-[#8491A5]
                        "
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT - IMAGE */}
            <div
              className="
                relative
                flex
                items-center
                justify-center
              "
            >
              {/* LADY */}
              <img
                src="/ladyfinal1.png"
                alt="Business woman holding a tablet"
                className="
                  relative
                  z-10
                  h-72
                  w-auto
                  object-contain
                  lg:h-[320px]
                "
              />

              {/* ARROW */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[-16%]
                  top-[40%]
                  z-20
                  hidden
                  lg:block
                "
              >
                <img src="/line1.png" alt="" />
              </div>

              {/* LARGE SPARKLE */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[4%]
                  right-[4%]
                  z-20
                "
              >
                <img src="/stars2.png" alt="" />
              </div>

              {/* SMALL SPARKLE */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[18%]
                  right-[15%]
                  z-20
                  text-[24px]
                  text-[#E0EBFF]
                "
              >
                ✦
              </div>
            </div>
          </div>
        </div>
      </section>

   
      {/* =========================================================FAQ SECTION
========================================================= */}
    <section
  id="faq"
  className="w-full px-6 py-14 md:px-10 lg:px-16 lg:py-16"
>
  <div
    className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#8389DD]/25 to-transparent px-8 py-10 shadow-[3px_6px_5px_rgba(0,0,0,0.18)] lg:px-12 lg:py-12 lg:min-h-[700px]"
  >
    <h2
      className="mb-12 font-sans text-3xl font-bold text-[#1F2937] text-center lg:text-[32px]"
    >
      Frequently Asked <span className="text-[#38BDF8]">Question</span>
    </h2>

    {/* FAQ Item 1 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" defaultChecked />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>

    {/* FAQ Item 2 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>

    {/* FAQ Item 3 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>

    {/* FAQ Item 4 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>

    {/* FAQ Item 5 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>

    {/* FAQ Item 6 */}
    <div className="collapse collapse-arrow mb-4 border-none bg-gradient-to-r from-[#203299] via-[#1E41B5] to-[#2B83E2] text-white rounded-lg shadow-sm">
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-base font-semibold text-white">
        What does Proverb Technologies do?
      </div>
      <div className="collapse-content text-sm text-blue-100 opacity-90">
        We build custom websites, web applications, mobile apps, CRM systems, ERP software, and provide digital marketing solutions to help businesses grow.
      </div>
    </div>
  </div>
</section>
      <section
        className="
    w-full
    px-6
    py-14
    md:px-10
    lg:px-16
    lg:py-16
  "
      >
        <div
          className="
      mx-auto
      flex
      w-full
      max-w-[1500px]
      flex-col
      items-center
      justify-center
      rounded-xl
      bg-[#1A0948]
      px-6
      py-14
      text-center
      sm:px-8
      lg:px-12
      lg:py-16
    "
        >
          <h2
            className="
        font-jakarta
        text-2xl
        font-semibold
        leading-8
        text-white
        sm:text-3xl
        sm:leading-10
      "
          >
            Ready to get started?
          </h2>

          <p
            className="
        mt-4
        max-w-[1200px]
        font-jakarta
        text-sm
        font-light
        leading-6
        text-white
        sm:text-base
      "
          >
            Partner with Proverb Technologies to build scalable software, modern
            websites,
            <br className="hidden sm:block" />
            mobile applications, and digital solutions that drive business
            growth.
          </p>

          <button
            className="
        mt-6
        rounded-xl
        bg-[#F8FAFC]
        px-10
        py-3.5
        font-jakarta
        text-sm
        font-medium
        leading-5
        text-[#1A3A6B]
        transition
        duration-200
        hover:bg-white
      "
          >
            Get a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
  ``;
}
