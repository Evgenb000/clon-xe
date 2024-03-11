'use client'

import { SetStateAction, useState } from "react";
import Logo from "../logo";
import ResourcesPopUp from "./popUps/resourcesPopUp";
import ToolsPopUp from "./popUps/toolsPopUp";

const navList = [
  'Send Money',
  'Converter',
  'Currency API',
  'Tools',
  'Resources'
]

export default function Header() {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  const handleMenuItemHover = (item: string) => {
    setActiveMenuItem(item);
  };

  const handleMenuItemLeave = () => {
    setActiveMenuItem(null);
  };

  return (
    <div className="fixed top-0 main-bg-blue w-screen text-base">
      <header className="flex flex-row items-center gap-10 h-16 max-w-8xl justify-center t15a22">
        <div className="flex flex-row px-4 py-3 items-center">
          <Logo />

          <div className="t15a24 px-3 py-2 ml-3 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md">Personal</div>
            |
          <div className="t15a24 px-3 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md opacity-50">Business</div>
        </div>

        <nav className="px-10">
          <ul className="flex flex-row gap-0 p-2">
            {navList.map(item =>
              <li
                key={item}
                className="px-4 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md"
                onMouseEnter={() => handleMenuItemHover(item)}
                onMouseLeave={handleMenuItemLeave}
              >
                {item === "Tools" && activeMenuItem === "Tools" && <ToolsPopUp />}
                {item === "Resources" && activeMenuItem === "Resources" && <ResourcesPopUp />}
                {item}
              </li>
            )}
          </ul>
        </nav>

        <div className="flex gap-3 h-10 text-center items-center">
          <div
            className="flex w-24 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300"
          >
            Sigh In
          </div>

          <div
            className="flex w-24 bg-blue-600 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-blue-500 transition duration-300"
          >
            Register
          </div>
        </div>
      </header>
    </div>
  );
}
