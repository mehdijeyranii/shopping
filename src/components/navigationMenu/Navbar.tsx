import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative flex justify-start items-center gap-1 flex-[10]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md text-sm hover:bg-zinc-200 hover:text-zinc-700  
     ${isActive ? "bg-sky-500/15 text-sky-600" : "text-zinc-500"}`
        }
      >
        صفحه اصلی
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md text-sm hover:bg-zinc-200 hover:text-zinc-700  
     ${isActive ? "bg-sky-500/15 text-sky-600" : "text-zinc-500"}`
        }
      >
        محصولات
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md text-sm hover:bg-zinc-200 hover:text-zinc-700  
     ${isActive ? "bg-sky-500/15 text-sky-600" : "text-zinc-500"}`
        }
      >
        درباره ما
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-4 py-2 rounded-md text-sm hover:bg-zinc-200 hover:text-zinc-700  
     ${isActive ? "bg-sky-500/15 text-sky-600" : "text-zinc-500"}`
        }
      >
        تماس با ما
      </NavLink>
    </div>
  );
};

export default Navbar;
