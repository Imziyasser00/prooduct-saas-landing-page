"use client";

import { testimonials } from "@/data";
import TextGradient from "./TextGradient";
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };
  return (
    <div className="w-full w-4/5 mx-auto py-20">
      <div className="w-full text-center">
        <TextGradient text="What our clients say" />
        <p className="text-gray-400 w-1/2 mx-auto">
          Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
          lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
          urna sapien.
        </p>
      </div>
      <div className="flex px-8 flex-col lg:flex-row gap-8 py-10 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((item)=>(
                <TestimonialCard icon={item.icon} name={item.name} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
