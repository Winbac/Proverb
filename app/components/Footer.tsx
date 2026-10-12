
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-base-300 px-6 py-14 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-8">

        {/* LOGO AND SOCIAL LINKS */}
        <nav className="flex flex-col items-center gap-8 sm:items-start">
          <img
            src="/footer-logo.png"
            alt="Proverb Technologies"
            className="h-auto w-72 max-w-full"
          />

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="text-[#0866FF] transition-opacity hover:opacity-70"
            >
              <FaFacebookF size={26} />
            </a>

            <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="text-[#0A66C2] transition-opacity hover:opacity-70"
            >
              <FaLinkedinIn size={30} />
            </a>

            <a
              href="https://x.com/"
              aria-label="X"
              className="text-black transition-opacity hover:opacity-70"
            >
              <FaXTwitter size={26} />
            </a>
          </div>
        </nav>

        {/* SERVICES */}
        <nav className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold">
            Services
          </h2>

          <a className="link link-hover">Web Design</a>
          <a className="link link-hover">App Development</a>
          <a className="link link-hover">Billing Software</a>
          <a className="link link-hover">Digital Marketing</a>
          <a className="link link-hover">Custom Software</a>
        </nav>

        {/* LINKS */}
        <nav className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold">
            Links
          </h2>

          <a href="/" className="link link-hover">Home</a>
          <a href="/about" className="link link-hover">About Us</a>
          <a href="/services" className="link link-hover">Services</a>
          <a href="/contact" className="link link-hover">Contact Us</a>
        </nav>

        {/* TECHNOLOGY */}
        <nav className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold">
            Technology
          </h2>

          <a className="link link-hover">Next.js</a>
          <a className="link link-hover">React.js</a>
          <a className="link link-hover">Node.js</a>
          <a className="link link-hover">React Native</a>
          <a className="link link-hover">MongoDB</a>
        </nav>

        {/* CONTACT */}
        <nav className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-bold">
            Contact Us
          </h2>

          <p className="font-heading text-base font-medium leading-6 text-[#64748B]">
            Suite 104, 11th Floor,
            <br />
            SkyMarkOne, Noida UP
            <br />
            201301
          </p>
        </nav>

      </div>
    </footer>
  );
}
