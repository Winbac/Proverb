
export default function About() {
  const features = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ];

  const milestones = [
    {
      id: 1,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: true,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a2 2 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a2 2 0 011.21-.502l4.493 1.498a2 2 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: true,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a2 2 0 01.948.684l1.498 4.493a2 2 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a2 2 0 011.21-.502l4.493 1.498a2 2 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Retail Technology",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed mauris dictum at fringilla nec nec porttitor aliquam.",
      active: false,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#F2F8FB] text-[#1F2937]">

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-slate-50/50">
        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:min-h-[648px] lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-16 lg:py-24">

          <div>
            <h1 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-[48px]">
              About our firm
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Tellus arcu amet ut cras
              venenatis ipsum at aenean elementum. Dolor ac leo adipiscing sit
              elementum cras. Purus massa posuere neque tincidunt nulla ut id.
              Gravida massa amet fames nulla.
            </p>

            {/* STATS */}
            <div className="mt-12 grid max-w-[560px] grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  95%
                </p>
                <p className="mt-3 text-sm leading-snug text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  10+
                </p>
                <p className="mt-3 text-sm leading-snug text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  $10m
                </p>
                <p className="mt-3 text-sm leading-snug text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto lg:mr-0">
            <img
              src="/aboutusimg.png"
              alt="Business professional holding a tablet"
              className="block aspect-[1.3/1] w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="w-full bg-[#F4F9FD] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="relative w-full overflow-hidden rounded-xl shadow-sm">
            <img
              src="/abtsectionimg.png"
              alt="Colleagues looking at a tablet"
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col items-start">
            <span className="inline-block rounded-full border border-[#2563EB]/30 bg-[#EFF6FF] px-5 py-1.5 text-sm font-medium text-[#2563EB]">
              About Us
            </span>

            <h2 className="mt-5 font-heading text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-[32px]">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-500 lg:text-base">
              Lorem ipsum dolor sit amet consectetur. Ultricies etiam
              scelerisque vestibulum faucibus et lacus mauris. In neque viverra
              pulvinar quam. Convallis ut viverra a lectus in. Suscipit tempus
              et eget scelerisque.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid w-full grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white">
                    <svg
                      className="h-3.5 w-3.5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <span className="text-sm font-medium text-[#2563EB]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="w-full bg-[#F2F8FB] px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1500px]">

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              Our Journey
            </h3>

            <h2 className="mt-1 text-2xl font-bold text-gray-500 sm:text-3xl">
              Key Milestones and achievement
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <div
                key={item.id}
                className={`flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 ${
                  item.active
                    ? "bg-[#5B9DF8] text-white shadow-md"
                    : "bg-[#C4CBD3]/60 text-[#718096] hover:bg-[#C4CBD3]/80"
                }`}
              >
                <div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      item.active
                        ? "bg-[#2563EB]/40 text-white"
                        : "bg-white/60 text-slate-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <h4
                    className={`mt-6 text-lg font-bold ${
                      item.active ? "text-white" : "text-white/90"
                    }`}
                  >
                    {item.title}
                  </h4>

                  <p
                    className={`mt-3 text-xs leading-relaxed ${
                      item.active ? "text-blue-50" : "text-white/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full px-6 py-14 md:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-center rounded-xl bg-[#1A0948] px-6 py-14 text-center sm:px-8 lg:px-12 lg:py-16">

          <h2 className="font-jakarta text-2xl font-semibold leading-8 text-white sm:text-3xl sm:leading-10">
            Ready to get started?
          </h2>

          <p className="mt-4 max-w-[1200px] font-jakarta text-sm font-light leading-6 text-white sm:text-base">
            Partner with Proverb Technologies to build scalable software,
            modern websites,
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