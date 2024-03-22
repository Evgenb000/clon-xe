'use client'

import { useState } from "react";
import Logo from "../../logo";
import ResourcesPopUp from "./popUps/resourcesPopUp";
import ToolsPopUp from "./popUps/toolsPopUp";
import Link from "next/link";

const navList = [
  {name: 'Send Money', link: '/SendMoney'},
  {name: 'Converter', link: '/Converter'},
  {name: 'Currency API', link: '/CurrencyAPI'},
  {name: 'Tools', link: ''},
  {name: 'Resources', link: ''},
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
    <div className="fixed top-0 main-bg-blue w-screen t-white z-10">
      <header className="flex flex-row items-center gap-10 h-16 max-w-8xl justify-center t15a22">
        <div className="flex flex-row px-4 py-3 items-center">
          <Logo />

          <div className="t15a24 px-3 py-2 ml-3 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md">
            <Link href='/'>Personal</Link>
          </div>
            |
          <div className="t15a24 px-3 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md opacity-50">
            <Link href='/Business'>Business</Link>
          </div>
        </div>

        <nav className="px-10">
          <ul className="flex flex-row gap-0 p-2">
            {navList.map(item =>
              <Link key={item.name} href={item.link}>
                  <li
                  className="px-4 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md"
                  onMouseEnter={() => handleMenuItemHover(item.name)}
                  onMouseLeave={handleMenuItemLeave}
                >
                  {item.name === "Tools" && activeMenuItem === "Tools" && <ToolsPopUp />}
                  {item.name === "Resources" && activeMenuItem === "Resources" && <ResourcesPopUp />}
                  {item.name}
                </li>
              </Link>
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
