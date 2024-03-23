import Link from 'next/link'
import React from 'react'
import ToolsPopUp from "../popUps/toolsPopUp";
import ResourcesPopUp from '../popUps/resourcesPopUp';

const navList = [
  {name: 'Send Money', link: '/SendMoney'},
  {name: 'Converter', link: '/Converter'},
  {name: 'Currency API', link: '/CurrencyAPI'},
  {name: 'Tools', link: ''},
  {name: 'Resources', link: ''},
]

export default function NavMenuDesctop() {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);

  const handleMenuItemHover = (item: string) => {
    setActiveMenuItem(item);
  };

  const handleMenuItemLeave = () => {
    setActiveMenuItem(null);
  };

  return (
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

        <div className="flex gap-3 h-10 text-center items-center pl-20">
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
      </ul>
    </nav>
  )
}
