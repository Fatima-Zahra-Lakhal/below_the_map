import { useState } from "react";

const testimonials = [
  {
    quote: "It didn’t try to sell me anything or push me somewhere. Just information and stories, at the right moment",
    name: "Sam",
    country: "Canada",
  },
  {
    quote: "My kids actually paid attention. I was surprised. They listened to the audio and asked questions after. It wasn’t childish, but it wasn’t boring either.",
    name: "Rez",
    country: "Pakistan",
  },
  {
    quote: "Pour le prix, ça vaut le coup.",
    name: "Claire",
    country: "France",
  },
  {
    quote: "I didn’t expect to like it this much. We bought the pass kind of last minute. I thought it would be basic, but it wasn’t.",
    name: "Claire",
    country: "France",
  },
];

export default function TravelerTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { quote, name, country } = testimonials[activeIndex];

  return (
    <>
    <div className="bg-[#faf3ea] rounded-[8px] p-6 relative w-full max-w-xl mx-auto">
      {/* Bordure fine */}
      <div className="absolute inset-0 border border-[#a4a987] rounded-[8px] pointer-events-none" />

      {/* Citation */}
      <p className="text-[20px] font-semibold text-[#1e1e1e] leading-snug tracking-tight mb-4 font-['Inter']">
        “{quote}”
      </p>

      {/* Nom + pays */}
      <p className="text-[#bf5d14] text-[16px] font-semibold font-['Inter']">
        {name}, {country}
      </p>

      {/* Navigation dots */}
    
    </div>
 <div className="flex gap-2 mt-6 justify-center items-center leading-none">
  {testimonials.map((_, i) => (
    <span
      key={i}
      onClick={() => setActiveIndex(i)}
      className={`block cursor-pointer transition-all duration-300 ${
        i === activeIndex
          ? "bg-[#bf5d14] w-[20px] h-[6px] rounded-[3px]"
          : "bg-[#ddd] w-[6px] h-[6px] rounded-full"
      }`}
    />
  ))}
</div>


    </>
  );
}
