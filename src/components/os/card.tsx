import React from "react";

const NotionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-[#252525] uppercase border-2 border-[#252525] rounded bg-[#fafafa] shadow-[3px_3px_0_0_#252525]">
      {children}
    </div>
  );
};

export default NotionCard;
