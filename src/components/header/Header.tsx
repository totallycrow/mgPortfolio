import React from "react";
import { InstagramIcon } from "../utils/icons/InstagramIcon";
import { LinkedinIcon } from "../utils/icons/LinkedinIcon";
import { EmailIcon } from "../utils/icons/EmailIcon";

export const Header = () => {
  return (
    <header className="w-screen flex content-center justify-center bg-slate-200">
      <nav className="flex w-1/3 justify-center">
        <ul className="w-full flex justify-center">
          <li>Work</li>
          <li>Misc</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex w-1/3 justify-center">Logo</div>
      <div className="flex w-1/3 justify-center">
        <InstagramIcon />
        <LinkedinIcon />
        <EmailIcon />
      </div>
    </header>
  );
};
