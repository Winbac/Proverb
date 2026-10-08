export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-50/50">
      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1500px]
          grid-cols-1 items-center
          gap-12
          px-6 py-16
          md:px-10
          lg:min-h-[648px]
          lg:grid-cols-[1.1fr_1fr]
          lg:gap-16
          lg:px-16
          lg:py-24
        "
      >
        {/* LEFT: TEXT & STATS */}
        <div>
          <h1
            className="
              font-sans
              text-4xl
              font-bold
              leading-[1.15]
              tracking-tight
              text-gray-900
              sm:text-5xl
              lg:text-[48px]
            "
          >
            About our firm
          </h1>

          <p
            className="
              mt-6
              max-w-[560px]
              text-base
              leading-relaxed
              text-gray-500
            "
          >
            Lorem ipsum dolor sit amet consectetur. Tellus arcu amet ut cras
            venenatis ipsum at aenean elementum. Dolor ac leo adipiscing sit
            elementum cras. Purus massa posuere neque tincidunt nulla ut id.
            Gravida massa amet fames nulla.
          </p>

          {/* STATS GRID */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-[560px]">
            {/* Stat 1 */}
            <div>
              <p className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                95%
              </p>
              <p className="mt-3 text-sm leading-snug text-gray-400">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                10+
              </p>
              <p className="mt-3 text-sm leading-snug text-gray-400">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                $10m
              </p>
              <p className="mt-3 text-sm leading-snug text-gray-400">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: PHOTO */}
        <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto lg:mr-0">
          <img
            src="/aboutusimg.png"
            alt="Business professional holding a tablet"
            className="
              block
              aspect-[1.3/1]
              w-full
              rounded-2xl
              object-cover
              shadow-sm
            "
          />
        </div>
      </div>
    </section>
  );
}