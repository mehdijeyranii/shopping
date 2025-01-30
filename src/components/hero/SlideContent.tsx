import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface SlideContentProps {
  title: string;
  description: string;
  link: string;
}

const SlideContent = ({ title, description, link }: SlideContentProps) => (
  <div>
    <h1 className="text-3xl font-bold tracking-tighter text-zinc-700 py-2 w-full">
      {title}
    </h1>
    <p className="text-zinc-500 leading-8 w-[600px] line-clamp-3">
      {description}
    </p>
    <div className="flex justify-start items-center gap-2 mt-10">
      <button className="size-10 bg-zinc-800 text-zinc-50 rounded-md grid place-content-center">
        <ShoppingCart />
      </button>
      <Link
        to={link}
        className="px-6 py-[7px] text-zinc-800 border-2 border-zinc-400 rounded-md bg-transparent hover:bg-sky-600/15 hover:border-sky-600 hover:text-sky-600 flex justify-center items-center gap-1 transition-colors duration-200"
      >
        اطلاعات بیشتر
      </Link>
    </div>
  </div>
);

export default SlideContent;
