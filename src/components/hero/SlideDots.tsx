import { SlidesProps } from "../../data/slides";

interface SlideDotsProps {
  slides: SlidesProps[];
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const SlideDots = ({ slides, currentIndex, onDotClick }: SlideDotsProps) => (
  <div className="dot flex justify-center items-center gap-1 absolute -bottom-4 left-0 right-0">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => onDotClick(index)}
        className={`size-2 rounded-full cursor-pointer ${
          index === currentIndex ? "bg-zinc-700 w-6" : "bg-zinc-400"
        }`}
      ></div>
    ))}
  </div>
);

export default SlideDots;
