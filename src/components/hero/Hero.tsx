import React, { useState } from "react";
import SlideContent from "./SlideContent";
import SlideControls from "./SlideControls";
import SlideDots from "./SlideDots";
import { slides } from "../../data/slides";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [currentX, setCurrentX] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const dragDistance = currentX - startX;

    if (dragDistance > 50) {
      prevSlide();
    } else if (dragDistance < -50) {
      nextSlide();
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="hero w-full h-[450px] bg-zinc-50 shadow-lg rounded-lg p-4">
      <div className="w-full h-full bg-zinc-200 rounded-lg grid place-content-center overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center gap-20"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="bg-hero-pattern bg-contain bg-no-repeat size-80 relative">
              <img
                className="size-full object-cover"
                src={currentSlide.image}
                alt={currentSlide.title}
              />
              <SlideControls onPrev={prevSlide} onNext={nextSlide} />
              <SlideDots
                slides={slides}
                currentIndex={currentIndex}
                onDotClick={goToSlide}
              />
            </div>
            <SlideContent
              title={currentSlide.title}
              description={currentSlide.description}
              link={currentSlide.link}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
