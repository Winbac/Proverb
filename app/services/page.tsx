import React from "react";

export default function Services() {
  const serviceCards = [
    {
      id: 1,
      title: "App Development",
      image: "/appdevelopment.png",
    },
    {
      id: 2,
      title: "Website Development",
      image: "/wevdev.png",
    },
    {
      id: 3,
      title: "Content Writing",
      image: "/contentwriting.png",
    },
    {
      id: 4,
      title: "Digital Marketing",
      image: "/digitalmarketing.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F2F8FB] text-[#1F2937]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#1B3B6F] text-white lg:mt-8">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-24 ">
          {/* Left Text Content */}
          <div className="z-10 max-w-2xl">
            <h1 className="font-sans text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">
              <span className="text-[#CFA870]">Services</span> — consectetur
              <br />
              ipsum sit amet consectetur
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-300 lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Ac ut elit amet interdum.
              Cras integer etiam magnis ut pellentesque sed sit lorem tristique.
            </p>

            <button className="mt-8 flex items-center gap-2 rounded-md bg-[#CFA870] px-6 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:bg-[#b8925b]">
              Read More
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Graphic/Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/group.png"
              alt="Tech network graphic"
              className="h-auto w-full max-w-[550px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="w-full px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* Header */}
          <div className="text-center">
            <span className="inline-block rounded-full border border-blue-200 bg-white px-5 py-1.5 text-xs font-medium text-[#2563EB] shadow-sm">
              Our Services
            </span>
            <h2 className="mt-4 font-sans text-2xl font-bold text-[#1E293B] sm:text-3xl">
              Solution to{" "}
              <span className="text-[#2563EB]">Grow Your Business</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-xs text-gray-500 sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Ac ut elit amet interdum.
              Cras integer etiam magnis ut pellentesque.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-[#7B8B9E] shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full overflow-hidden p-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-4 pt-1">
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-200">
                      Lorem ipsum dolor sit amet consectetur. Sed mauris dictum
                      at fringilla nec nec.
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-5 flex justify-center">
                    <button className="w-full rounded bg-[#B4C2D0]/60 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#B4C2D0]/80">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE SECTION */}
      <section className="w-full bg-white px-6 py-12 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#292929] sm:text-3xl">
              Industries We <span className="text-[#2563EB]">Serve</span>
            </h2>

            <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Auctor
              <br className="hidden sm:block" />
              fringilla ultrices in amet enim.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Hospital ERP */}
            <div className="min-h-[164px] rounded-lg border border-[#9CC3FF] bg-white p-4 transition-shadow duration-300 hover:shadow-md">
              <svg
                className="h-6 w-6 text-[#64748B]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
                <circle cx="12" cy="9" r="4.5" />
                <path d="M12 6.5v5M9.5 9h5" />
              </svg>

              <h3 className="mt-2 text-[11px] font-bold text-[#292929]">
                Hospital ERP
              </h3>
              <p className="mt-1 text-[10px] leading-[1.4] text-[#4B5563]">
                Lorem ipsum dolor sit amet consectetur. Leo morbi sagittis
                curabitur mauris gravida vel. Interdum massa nisl maecenas et
                neque rutrum.
              </p>
            </div>

            {/* Retail Industries */}
            <div className="min-h-[164px] rounded-lg border border-[#9CC3FF] bg-white p-4 transition-shadow duration-300 hover:shadow-md">
              <svg
                className="h-6 w-6 text-[#292929]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 4h2l2 12h11l2-9H6" />
                <path d="M7 8h12M8 11h10" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
                <path d="M4 2h15" />
              </svg>

              <h3 className="mt-2 text-[11px] font-bold text-[#292929]">
                Retail Industries
              </h3>
              <p className="mt-1 text-[10px] leading-[1.4] text-[#4B5563]">
                Lorem ipsum dolor sit amet consectetur. Leo morbi sagittis
                curabitur mauris gravida vel. Interdum massa nisl maecenas et
                neque rutrum.
              </p>
            </div>

            {/* Ecommerce */}
            <div className="min-h-[164px] rounded-lg border border-[#9CC3FF] bg-white p-4 transition-shadow duration-300 hover:shadow-md">
              <svg
                className="h-6 w-6 text-[#64748B]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 22s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z" />
                <circle cx="12" cy="9" r="4.5" />
                <path d="M9.5 7h5M9.5 9h5M10 11h4" />
              </svg>

              <h3 className="mt-2 text-[11px] font-bold text-[#292929]">
                Ecommerce
              </h3>
              <p className="mt-1 text-[10px] leading-[1.4] text-[#4B5563]">
                Lorem ipsum dolor sit amet consectetur. Leo morbi sagittis
                curabitur mauris gravida vel. Interdum massa nisl maecenas et
                neque rutrum.
              </p>
            </div>

            {/* EdTech */}
            <div className="min-h-[164px] rounded-lg border border-[#9CC3FF] bg-white p-4 transition-shadow duration-300 hover:shadow-md">
              <svg
                className="h-6 w-6 text-[#292929]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="m2 8 10-5 10 5-10 5L2 8Z" />
                <path d="M6 10v5c4 3 8 3 12 0v-5" />
                <path d="M22 8v7" />
                <path d="M20.5 17h3" />
              </svg>

              <h3 className="mt-2 text-[11px] font-bold text-[#292929]">
                EdTech
              </h3>
              <p className="mt-1 text-[10px] leading-[1.4] text-[#4B5563]">
                Lorem ipsum dolor sit amet consectetur. Leo morbi sagittis
                curabitur mauris gravida vel. Interdum massa nisl maecenas et
                neque rutrum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="w-full px-6 py-14 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center rounded-xl bg-[#1A0948] px-6 py-14 text-center sm:px-8 lg:px-12 lg:py-16">
          <h2 className="font-jakarta text-2xl font-semibold leading-8 text-white sm:text-3xl sm:leading-10">
            Ready to get started?
          </h2>

          <p className="mt-4 max-w-[1200px] font-jakarta text-sm font-light leading-6 text-white sm:text-base">
            Partner with Proverb Technologies to build scalable software, modern
            websites,
            <br className="hidden sm:block" />
            mobile applications, and digital solutions that drive business
            growth.
          </p>

          <button className="mt-6 rounded-xl bg-[#F8FAFC] px-10 py-3.5 font-jakarta text-sm font-medium leading-5 text-[#1A3A6B] transition duration-200 hover:bg-white">
            Get a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}