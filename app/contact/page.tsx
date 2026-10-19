const fields = [
  { id: "firstName", label: "First Name", placeholder: "Enter your first name", type: "text" },
  { id: "lastName", label: "Last Name", placeholder: "Enter your last name", type: "text" },
  { id: "email", label: "Email Address", placeholder: "Enter your email address", type: "email" },
  { id: "phone", label: "Phone Number", placeholder: "Enter your phone number", type: "tel" },
];

const underlineInput =
  "w-full border-0 border-b border-[#9CA3AF] bg-transparent pb-2 pt-2 text-xs text-[#111827] placeholder:text-[#6B7280] focus:border-[#2563EB] focus:outline-none focus:ring-0";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#2563EB] text-white">
      {children}
    </span>
  );
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F2F8FB] text-[#1F2937]">
      {/* Contact hero + form */}
      <section className="w-full px-4 py-6 md:px-10 lg:px-16 lg:py-10">
        <div className="mx-auto w-full max-w-[1500px]">
          {/* Blue panel */}
          <div className="relative overflow-hidden rounded-t-lg bg-[#1A3A6B] px-6 pb-64 pt-14 sm:px-10 lg:px-16 lg:pt-16">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <h1 className="font-jakarta text-3xl font-bold leading-tight text-white lg:text-[40px] lg:leading-[1.2]">
                Contact Us Now — Let&apos;s{" "}
                <span className="text-[#60A5FA]">Pave the Smooth Road</span> for
                Your Business
              </h1>

              <p className="max-w-[420px] text-sm leading-6 text-white/80 lg:justify-self-center">
                Reach out to us, and we&apos;ll get to know your business so we
                can work the way you do. At Proverb Technologies, every system
                we build begins with truly understanding your business.
              </p>
            </div>

            {/* Curved bottom edge: page-colored arch that cuts into the blue */}
            <svg
              className="absolute bottom-0 left-0 h-[60px] w-full"
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0,80 Q720,-40 1440,80 Z" fill="#F2F8FB" />
            </svg>
          </div>

          {/* Card overlapping the blue panel */}
          <div className="relative z-10 mx-auto -mt-56 w-[94%] max-w-[1100px] rounded-lg border border-[#9CA3AF] bg-[#F0F0F0] p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              {/* Left: contact information */}
              <div className="rounded-md bg-white px-6 py-10 shadow-sm sm:px-10 lg:px-12 lg:py-14">
                <h2 className="font-jakarta text-xl font-semibold text-[#111827]">
                  Contact Information
                </h2>
                <p className="mt-2 max-w-[260px] text-xs leading-5 text-[#6B7280]">
                  We are available — reach out to us with your query or idea,
                  and we&apos;ll provide the best customized solution for your
                  business.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-center gap-3">
                    <IconBox>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    </IconBox>
                    <div>
                      <p className="text-[11px] text-[#6B7280]">Email Us</p>
                      <p className="text-[11px] font-bold text-[#111827]">
                        support@proverbtechnologies.com
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <IconBox>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                        <circle cx="12" cy="9.5" r="2.5" />
                      </svg>
                    </IconBox>
                    <div>
                      <p className="text-[11px] text-[#6B7280]">Our Office</p>
                      <p className="text-[11px] font-bold text-[#111827]">
                        Skymark One Suite -104 Sec-94 Noida
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <IconBox>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                      </svg>
                    </IconBox>
                    <div>
                      <p className="text-[11px] text-[#6B7280]">Call Us</p>
                      <p className="text-[11px] font-bold text-[#111827]">
                        +91 9910581049
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex items-center gap-3">
                  <span className="text-[11px] font-bold text-[#111827]">
                    Follow Us:
                  </span>
                  {[
                    { label: "Facebook", text: "f" },
                    { label: "LinkedIn", text: "in" },
                    { label: "X", text: "X" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB] text-[9px] font-bold text-white transition hover:bg-[#1D4ED8]"
                    >
                      {s.text}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <form className="px-2 py-6 sm:px-6 lg:py-10">
                <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                  {fields.map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="block text-xs font-bold text-[#111827]"
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        className={underlineInput}
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-[#111827]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={1}
                      placeholder="Enter your message here"
                      className={`${underlineInput} resize-none sm:max-w-[calc(50%-20px)]`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full rounded-full bg-[#2563EB] py-3 text-xs font-medium text-white transition duration-200 hover:bg-[#1D4ED8]"
                >
                  Send Message
                </button>
              </form>
            </div>
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