'use client'

import Link from "next/link";
import React from "react";
import Converter from "./converter";

const items = [
  ["Convert", "/"],
  ["Send", "/SendMoney"],
  ["Charts", "/Charts"],
  ["Alerts", "/Alerts"],
]

export default function TabBox() {
  const [activeBox, setActiveBox] = React.useState('Convert');

  return (
    <div className="bg-white mt-6 h-432 rounded-md relative shadow-md">
      <ul className="flex text-center items-center rounded-md">
        {items.map((item, index) => (
          <Link key={item[0]} href={item[1]} onClick={() => setActiveBox(item[0])}>
            {activeBox === item[0] ? (
              <li
                className={`mb-2 w-72 h-14 flex items-center justify-center t14a21 bg-white t-active font-bold ${
                  index === 0 ? 'rounded-l-md' : ''
                } ${index === items.length - 1 ? 'rounded-r-md' : ''}`
                }
              >
                {item[0]}
              </li>
            ) : (
              <li
                className={`mb-2 w-72 h-14 flex items-center justify-center t14a21 bg-blue-50 t-gray ${
                  index === 0 ? 'rounded-l-md' : ''
                } ${index === items.length - 1 ? 'rounded-r-md' : ''}`
                }
              >
                {item[0]}
              </li>
            )}
          </Link>
        ))}
      </ul>

      <Converter />
    </div>
  );
}
