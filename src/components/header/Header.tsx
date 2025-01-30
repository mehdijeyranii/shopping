import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full h-32 shadow-md bg-zinc-50">
      <div className="container mx-auto h-full w-full divide-y-[1px] divide-zinc-300 px-2">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
};

export default Header;
