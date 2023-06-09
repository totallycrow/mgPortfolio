import React from "react";
import { InstagramIcon } from "../utils/icons/InstagramIcon";
import { LinkedinIcon } from "../utils/icons/LinkedinIcon";
import { EmailIcon } from "../utils/icons/EmailIcon";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Work</li>
          <li>Misc</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>Logo</div>

      <InstagramIcon />
      <LinkedinIcon />
      <EmailIcon />
    </header>
  );
};
