import React, { useRef, useState } from "react";

const HoverableButton = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  label: string;
  children: React.ReactNode;
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsShow(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsShow(false);
    }, 300);
  };

  const buttonStyles =
    "size-10 grid place-content-center relative bg-transparent hover:bg-zinc-200 rounded-full";
  const iconStyles = "text-zinc-400";
  const badgeStyles =
    "absolute size-5 rounded-md bg-sky-600 bottom-0 right-0 text-[10px] text-zinc-50 grid place-content-center font-bold";
  const popoverStyles =
    "absolute top-12 left-20 w-56 bg-white shadow-lg rounded-lg p-4";

  return (
    <div>
      <button
        className={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={label}
      >
        <Icon className={iconStyles} size={24} />
        <span className={badgeStyles} aria-hidden="true">
          9
        </span>
      </button>

      {isShow && (
        <div
          className={popoverStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="tooltip"
        >
          <h1 className="text-lg font-bold">{label}</h1>
          {children}
        </div>
      )}
    </div>
  );
};

export default HoverableButton;
