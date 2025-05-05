import React from "react";

const PushButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="text-[#252525] uppercase border-2 border-[#252525] rounded bg-[#fafafa] shadow-[3px_3px_0_0_#252525] cursor-pointer  active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
    >
      {children}
    </button>
  );
};

export default PushButton;
