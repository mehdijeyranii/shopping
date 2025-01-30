import Auth from "./Auth";
import { SearchBox } from "../search";
import Logo from "./Logo";

const HeaderTop = () => {
  return (
    <div className="h-20 flex justify-between items-center">
      <div className="flex justify-start items-center flex-[10] gap-4">
        <Logo />
        <div className="w-px h-10 bg-zinc-400"></div>
        <SearchBox />
      </div>
      <div className="flex-[2] flex justify-end">
        <Auth />
      </div>
    </div>
  );
};

export default HeaderTop;
