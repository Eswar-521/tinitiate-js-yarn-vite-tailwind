import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Samantha",
    message:
      "Absolutely loved working with the team! The experience was smooth, efficient, and professional.",
  },
  {
    name: "John",
    message:
      "Their designs and code were top-notch. We saw improvements in user engagement within weeks!",
  },
  {
    name: "Priya",
    message:
      "Professional and timely delivery! Highly recommend this amazing team.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20 max-w-3xl mx-auto px-4" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">🌟 Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/10 p-6 rounded-lg shadow-lg backdrop-blur text-white text-center"
          >
            <p className="text-xl italic mb-4">“{t.message}”</p>
            <h4 className="text-lg font-semibold">- {t.name}</h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
