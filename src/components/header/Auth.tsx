import { Loader2, LogIn } from "lucide-react";
import React, { ButtonHTMLAttributes, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  navigateTo?: string;
  isLoading?: boolean;
}

const Auth = ({
  icon = <LogIn size={18} />,
  label = "ورود | ثبت‌نام",
  navigateTo = "/auth",
  isLoading = false,
  ...props
}: AuthProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(
    () => navigate(navigateTo),
    [navigate, navigateTo]
  );

  return (
    <button
      {...props}
      onClick={handleClick}
      className="px-4 py-2 text-zinc-800 border border-zinc-300 rounded-lg bg-transparent hover:bg-zinc-800 hover:text-zinc-50 flex justify-center items-center gap-1 transition-colors duration-200"
      aria-label={label}
      disabled={isLoading}
    >
      {isLoading ? (
        <span>
          <Loader2 className="animate-spin" />
        </span>
      ) : (
        icon
      )}
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default Auth;
