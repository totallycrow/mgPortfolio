import React from "react";

export const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto text-center">
      GridContainer
      <div className="grid grid-cols-2 gap-4 content-center justify-center w-full mx-auto text-center">
        {children}
      </div>
    </div>
  );
};
