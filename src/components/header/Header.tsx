import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
