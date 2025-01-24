import { Heart, LogIn, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col gap-12">
        <header className="shadow">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex justify-start items-center gap-4 w-9/12">
              <Link to="/" className="text-4xl">
                <strong className="text-sky-500">Palla</strong>Kala
              </Link>
              <div className="w-[1px] h-10 bg-zinc-400"></div>
              <div className="relative w-full max-w-xl">
                <input
                  className="text-sm text-zinc-500 bg-zinc-100 w-full py-3 px-8 pr-12 rounded-lg border border-zinc-300 focus:outline-none focus-visible:outline-none focus-visible:ring-0 placeholder:text-zinc-400"
                  type="text"
                  placeholder="جستجو کن..."
                />
                <Search className="absolute top-1/2 -translate-y-1/2 right-3 text-zinc-400" />
              </div>
            </div>
            <div className="w-3/12 grid place-content-end">
              <Link
                to="/"
                className="flex justify-center items-center gap-2 text-sm bg-transparent border border-zinc-300 py-2 px-4 text-zinc-800 rounded-md hover:bg-zinc-200 transition-all duration-150"
              >
                <LogIn strokeWidth={1} size={20} />
                <span>ثبت نام | ورود</span>
              </Link>
            </div>
          </div>
          <hr />
          <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <nav className="flex justify-start items-center gap-4 text-sm">
              <button>دسته بندی ها</button>
              <Link to="#">صفحه اصلی</Link>
              <Link to="#">محصولات</Link>
              <Link to="#">وبلاگ</Link>
              <Link to="#">درباره ما</Link>
              <Link to="#">تماس با ما</Link>
            </nav>
            <div className="flex justify-end items-center gap-2 ">
              <div className="size-10 grid place-content-center relative bg-transparent hover:bg-zinc-200 rounded-full">
                <Heart className="text-zinc-400" size={20}/>
                <span className="absolute size-3 rounded-full bg-sky-500 top-[6px] right-1"></span>
              </div>
              <div className="size-10 grid place-content-center relative bg-transparent hover:bg-zinc-200 rounded-full">
                <ShoppingCart className="text-zinc-400" size={20} />
                <span className="absolute size-3 rounded-full bg-sky-500 top-[6px] right-1"></span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomePage;
