import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const SlideControls = ({ onPrev, onNext }: SlideControlsProps) => (
  <div className="absolute w-full flex justify-between items-center inset-y-1/2">
    <button
      onClick={onPrev}
      className="bg-zinc-50 text-zinc-700 hover:bg-zinc-700 hover:text-zinc-50 rounded-full"
    >
      <ChevronRight size={28} strokeWidth={1.5} />
    </button>
    <button
      onClick={onNext}
      className="bg-zinc-50 text-zinc-700 hover:bg-zinc-700 hover:text-zinc-50 rounded-full"
    >
      <ChevronLeft size={28} strokeWidth={1.5} />
    </button>
  </div>
);

export default SlideControls;
