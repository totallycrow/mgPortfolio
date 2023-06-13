import React from "react";

const ImageCard = ({
  imageUrl,
  hoverText,
}: {
  imageUrl: string;
  hoverText: string;
  link: string;
}) => {
  return (
    <div>test</div>
    // <div className="relative w-full h-full overflow-hidden rounded bg-slate-200">
    //   <a href="#">
    //     <img
    //       className="w-full h-full transition-opacity duration-500 ease-in-out"
    //       src={imageUrl}
    //       alt="card content"
    //     />
    //     <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500 ease-in-out">
    //       <span className="text-black text-center">{hoverText}</span>
    //     </div>
    //   </a>
    // </div>
  );
};

export default ImageCard;
