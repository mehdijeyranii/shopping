import { SearchBox } from "../search";
import AuthButtons from "./AuthButtons";
import Logo from "./Logo";

const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3 flex-[7]">
        <Logo />
        <div className="w-px h-8 bg-zinc-500"></div>
        <SearchBox />
      </div>
     <div className="flex-[3] flex justify-end">
     <AuthButtons />
     </div>
    </div>
  );
};

export default HeaderTop;
