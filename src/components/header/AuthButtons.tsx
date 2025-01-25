import { LogIn } from "lucide-react";

const AuthButtons = () => {
  return (
    <>
      <button className="px-4 py-2 text-zinc-800 border border-zinc-300 rounded-lg bg-transparent hover:bg-zinc-800 hover:text-zinc-50 flex justify-center items-center gap-1">
        <LogIn size={18}/>
        <span className="text-sm">ورود | ثبت‌نام</span>
      </button>
    </>
  );
};

export default AuthButtons;
