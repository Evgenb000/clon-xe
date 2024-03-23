'use client'

import React from "react";
import Logo from "../../logo";
import ResourcesPopUp from "./popUps/resourcesPopUp";
import ToolsPopUp from "./popUps/toolsPopUp";
import Link from "next/link";
import NavMenuDesctop from "./navMenuDesctop";
import NavMenuMobile from "./navMenuMobile";

const navList = [
  {name: 'Send Money', link: '/SendMoney'},
  {name: 'Converter', link: '/Converter'},
  {name: 'Currency API', link: '/CurrencyAPI'},
  {name: 'Tools', link: ''},
  {name: 'Resources', link: ''},
]

export default function Header() {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  const handleMenuItemHover = (item: string) => {
    setActiveMenuItem(item);
  };

  const handleMenuItemLeave = () => {
    setActiveMenuItem(null);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widthMobile = windowWidth < 1200;

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

        {!widthMobile
          ? <NavMenuDesctop />
          : <NavMenuMobile />
        }

      </header>
    </div>
  );
}
