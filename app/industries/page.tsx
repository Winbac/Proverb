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
  ] as const;

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
              <h1 className="text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl lg:text-[38px] lg:leading-[1.3]">
                <span className="font-bold">
                  Lorem ipsum dolor sit amet consectetur.
                </span>{" "}
                Neque aliquam tempor placerat.
              </h1>

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
      <section className="w-full scroll-mt-8 px-4 py-12 sm:px-6 md:px-10 lg:px-16 lg:py-16">
        <div className=" relative mx-auto w-[350px]">
          <h1 className="font-jakarta text-2xl font-bold mb-2 ">Why Choose Us</h1>
          <span className="absolute w-[100px] h-[4px] bg-indigo-950 z-40 left-8 rounded-2xl" />
        </div>
             </section>

    </main>
  );
}
