import NotchedImage  , { type Variant } from "./../components/NotchedImage";
type Industry = { image: string; alt: string; variant: Variant };

export default function Industries() {
 const industries: Industry[]  = [
    {
      image: "/subtract.png",
      alt: "Fashion retail business",
   variant: "tl-br"     },
    {
      image: "/womenretail.png",
      alt: "Grocery and retail industry",
  variant: "tr-bl" 
    },
    {
      image: "/realestate.png",
      alt: "Renewable energy and engineering",
  variant: "tr-bl" 
    },
    {
      image: "/hoarding1.png",
      alt: "Outdoor digital advertising",
 variant: "tl-br" },
  ];

const stepsData = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  },
  {
    id: "05",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  },
  {
    id: "06",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet consectetur. Scelerisque scelerisque massa nibh vel viverra. Scelerisque nunc sem molestie sagittis."
  }
];



  return (
    <main className="min-h-screen bg-[#F2F8FB] text-[#1F2937]">
      {/* Hero Section */}
      <section className="w-full px-4 py-6 md:px-10 lg:px-16 lg:py-10">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="relative isolate flex min-h-[420px] items-center overflow-hidden rounded-md bg-[#031321] sm:min-h-[480px] lg:min-h-[520px]">
            <img
              src="/womenindark.png"
              alt="Professional working in a technology environment"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
            />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020914]/95 via-[#020914]/55 to-transparent" />

            <div className="w-full max-w-2xl px-6 py-16 sm:px-10 md:px-12 lg:px-10 lg:py-20">
              <h3 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.3]">
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </span>{" "}
                Neque aliquam tempor placerat.
              </h3>

              <p className="mt-6 max-w-[490px] text-sm leading-6 text-white/80 sm:text-[15px]">
                Lorem ipsum dolor sit amet consectetur. At neque donec ac dolor
                sollicitudin augue at ornare mauris. Aliquam amet nisl mattis
                rhoncus tristique mattis. Parturient enim nisl pulvinar arcu
                aliquet leo. Quam ut mattis ligula congue sed commodo sagittis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        id="industries"
        className="w-full scroll-mt-8 px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-16"
      >
        <div className="mx-auto w-full max-w-[1500px]">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-[420px] text-center sm:mb-16">
            <h2 className="font-jakarta text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
              Industries we serve
            </h2>

            <p className="mt-3 font-inter text-xs leading-[1.6] text-[#374151] sm:text-[13px]">
              Lorem ipsum dolor sit amet consectetur. Consectetur commodo eu et
              a tristique pretium vitae. Praesent sit sed sed sed pellentesque
              urna at.
            </p>

            <div className="mx-auto mt-3 h-[2px] w-10 rounded-full bg-[#2563EB]" />
          </div>

          {/* Four-Image Collage */}
 <div className="relative mx-auto max-w-[1500px]">
  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
    {industries.map((item) => (
      <NotchedImage
        key={item.image}
        src={item.image}
        alt={item.alt}
        variant={item.variant}
      />
    ))}
  </div>

  {/* Center card sits in the four inner notches */}
  <div className="absolute left-1/2 top-1/2 z-10 w-[40%] max-w-[460px] -translate-x-1/2 -translate-y-1/2">
    <div className="relative overflow-hidden rounded-xl bg-[#2f5280] p-3 text-white sm:rounded-2xl sm:p-6">
      <p className="max-w-[75%] text-[10px] leading-snug sm:text-sm">
        Lorem ipsum dolor sit amet consectetur. Congue non pulvinar at integer
        sed aenean at varius mi.
      </p>
      <div className="absolute bottom-0 right-0 flex h-10 w-14 items-center justify-center rounded-tl-full bg-gray-200 sm:h-16 sm:w-24">
        {/* icon */}
      </div>
    </div>
  </div>
</div>
        </div>
      </section>
   <section className="w-full px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-16">
  <div className="mx-auto max-w-[1500px]">
    {/* Heading */}
    <div className="text-center">
      <h2 className="font-jakarta text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
        Why Choose Us
      </h2>
      <div className="mx-auto mt-2 h-[2px] w-12 rounded-full bg-[#2563EB]" />
    </div>

    {/* Steps */}
    <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-14">
      {stepsData.map((step) => (
        <div key={step.id} className="flex items-start gap-3">
          {/* Number + line */}
          <div className="flex h-6 w-[52px] shrink-0 items-center gap-1.5">
            <span className="text-xs text-[#3B82F6]">{step.id}</span>
            <span className="h-px flex-1 bg-[#111827]" />
          </div>

          {/* Title + description */}
          <div className="max-w-[360px]">
            <h3 className="text-base font-bold leading-6 text-[#111827]">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-5 text-[#6B7280]">
              {step.description}
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
