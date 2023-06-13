import React from "react";
import { InstagramIcon } from "../utils/icons/InstagramIcon";
import { LinkedinIcon } from "../utils/icons/LinkedinIcon";
import { EmailIcon } from "../utils/icons/EmailIcon";

export const Header = () => {
  return (
    <header className="h-32 bg-slate-200">
      <div className="w-full h-full flex content-center justify-center container mx-auto">
        <nav className="flex w-1/3 justify-center content-center m-auto">
          <ul className="w-full flex justify-start">
            <li className="px-2">Work</li>
            <li className="px-2">Misc</li>
            <li className="px-2">About</li>
            <li className="px-2">Contact</li>
          </ul>
        </nav>
        <div className="flex w-1/3 justify-center m-auto">Logo</div>
        <ul className="flex w-1/3 justify-end my-auto">
          <li className="px-2">
            <InstagramIcon />
          </li>
          <li className="px-2">
            <LinkedinIcon />
          </li>
          <li className="px-2">
            <EmailIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};
