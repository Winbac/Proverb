import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-[20px]e-content p-10">
      <nav className="flex flex-col items-center gap-8">
        <img
          src="/footer-logo.png"
          alt="Proverb Technologies"
          className="h-auto w-72"
        />

        <div className="flex items-center justify-center gap-8">
          {/* Replace these URLs with your social profile links */}
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
      <nav className="flex flex-col gap-4">
        <h6 className="font-heading font-bold text-[20px]">Services</h6>
        <a className="link link-hover">Web Design</a>
        <a className="link link-hover">App Development</a>
        <a className="link link-hover">Billing Software</a>
        <a className="link link-hover">Digital Marketing</a>
        <a className="link link-hover">Custom Software</a>
      </nav>
      <nav className="flex flex-col gap-4">
        <h6 className="font-heading font-bold text-[20px]">Links</h6>
        <a className="link link-hover ">Web Design</a>
        <a className="link link-hover">App Development</a>
        <a className="link link-hover">Billing Software</a>
        <a className="link link-hover">Digital Marketing</a>
        <a className="link link-hover">Custom Software</a>
      </nav>
      <nav className="flex flex-col gap-4">
        <h6 className="font-heading font-bold text-[20px]">Technology</h6>
        <a className="link link-hover">Next.js</a>
        <a className="link link-hover">React.js</a>
        <a className="link link-hover">Node.js</a>
        <a className="link link-hover">Native.js</a>
        <a className="link link-hover">MongoDB</a>
      </nav>
      <nav className="flex flex-col gap-4">
        <h6 className="font-heading font-bold text-[20px] ">Contact Us</h6>
        <div className="grid grid-flow-col gap-4">
     <p className="font-heading font-medium text-[#64748B] leading-6 text-[16px]">

            Suite 104, 11th Floor, <br /> SkyMarkOne, Noida UP  <br />201301
          </p>
        </div>
      </nav>
    </footer>
  );
}
