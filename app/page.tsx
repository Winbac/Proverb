import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { PiNotepad } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaCode } from "react-icons/fa6";


const services = [
  {
    title: "Seo/Sem",
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

export default function Page() {
  return (
    <main className="bg-surface flex min-h-screen flex-col items-center `max-w-375` mx-auto ">
      <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-7 lg:px-24 pt-12 ">
        <div className="div">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            iure obcaecati! Laborum, assumenda est. Reprehenderit saepe porro,
            dolores illo
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Quisque convallis
            consectetur sit sit. mauris ac consectetur maecenas elementum
            habitant nisl. Sed enim diam sit sit.
          </p>
          <button className="bg-amber-400">Get Started</button>
          <button className="bg-blue-500 text-white">Login</button>
        </div>
        <div className="div">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            iure obcaecati! Laborum, assumenda est. Reprehenderit saepe porro,
            dolores illo
          </h1>
        </div>
      </section>
    
    <section className="relative `max-w-375`mx-auto lg:pt-12 lg:px-24">


      <div className="mx-auto text-center lg:mb-10">
        <h1 className="text-3xl font-bold font-sans">We Provide The Best <span className="text-[#60A5FA]">Services</span></h1>
      </div>

<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        className="relative min-h-[240px] overflow-hidden rounded-[10px] bg-white px-5 pb-5 pt-[68px] shadow-[3px_6px_5px_rgba(0,0,0,0.18)]"
      >
        {/* Blue rounded area */}
        <div className="absolute left-0 top-0 flex h-[58px] w-[70px] items-center justify-center rounded-br-[42px] bg-[#60A5FA]">
          <Icon className="text-[25px] text-white" />
        </div>

        {/* Title */}
        <h3 className="mb-1 font-sans text-[16px] font-bold text-[#1F2937]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[13px] leading-[20px] text-[#6B7280]">
          {service.description}
        </p>

        {/* Read More */}
        <Link
          href="#"
          className="mt-1 inline-block font-sans text-[10px] text-[#6B7280]"
        >
          Read More...
        </Link>
      </div>
    );
  })}
</div>

    </section>
    </main>
  );
}
