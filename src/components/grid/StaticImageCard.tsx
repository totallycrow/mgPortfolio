import React from "react";

const StaticImageCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded bg-slate-200">
      <img className="w-full h-full" src={imageUrl} alt="card content" />
    </div>
  );
};

export default StaticImageCard;
