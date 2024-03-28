import Link from 'next/link'
import React from 'react'

const navList = [
  {name: 'Send Money', link: '/SendMoney'},
  {name: 'Converter', link: '/Converter'},
  {name: 'Currency API', link: '/CurrencyAPI'},
  {name: 'Tools', link: ''},
  {name: 'Resources', link: ''}
]

const toolsList = [
  { name: "Currency Charts", description: "Trends for any currency", link: "CurrencyCharts" },
  { name: "IBAN Calculator", description: "Search and validate IBANs", link: "IBANCalculator" },
  { name: "Rate Alerts", description: "Set your target rate and get alerted", link: "RateAlerts" },
  { name: "Apps", description: "Smartphone apps and more", link: "Apps" },
  { name: "Historical Currency Rates", description: "Check rates for any date", link: "HistoricalCurrencyRates" },
  { name: "More Tools", link: "MoreTools" },
];

const resourcesList = [
  { name: 'Help Center', link: '/HelpCenter' },
  { name: 'Refer A Friend', link: '/ReferAFriend' },
  { name: 'Blog', link: '/Blog' },
  { name: 'Money Transfer Tips', link: '/MoneyTransferTips' },
  { name: 'Currency Encyclopedia', link: '/CurrencyEncyclopedia' },
  { name: 'Currency Newsletters', link: '/CurrencyNewsletters' },
  { name: 'Glossary', link: '/Glossary' },
  { name: 'More Resources', link: '/MoreResources' },
];

const toolsListOpen = (<div className="text-black px-5">
  {toolsList.map((item, index) => (
    <Link href={item.link} key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
      <h2 className="t16a24">{item.name}</h2>
      <p className="t12a18">{item?.description}</p>
    </Link>
  ))}
  </div>
);

const resourcesListOpen = (<div className=" text-black px-5">
  {resourcesList.map((item, index) => (
    <Link href={item.link} key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
      <div key={index}>
        <h2>{item.name}</h2>
      </div>
    </Link>
  ))}
  </div>
);

export default function NavMenuDesctop() {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string | null>(null);
  const [activeMenu, setActiveMenu] = React.useState(false);

  const openMenu = (item: string) => {
    if (activeMenuItem !== item) {
      setActiveMenuItem(item);
    } else {
      setActiveMenuItem(null);
    }
  }

  return (
    <nav className="px-10">
      {activeMenu
        ? <div onClick={() => setActiveMenu(false)} className='cursor-pointer'>
            Close
          </div>

        : <div onClick={() => setActiveMenu(true)} className='cursor-pointer'>
            Menu
          </div>
      }

      {activeMenu
        ?
          <ul className="flex flex-col gap-0 p-2 absolute left-0 top-16 bg-white text-black w-screen h-screen border">
            {navList.map(item =>
              <Link key={item.name} href={item.link}>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md"
                  onClick={() => openMenu(item.name)}
                >
                  {item.name}
                  {item.name === "Tools" && (activeMenuItem === "Tools" ? ' ▼'  : ' ►')}
                  {item.name === "Tools" && (activeMenuItem === "Tools" && toolsListOpen)}
                  {item.name === "Resources" && (activeMenuItem === "Resources" ? ' ▼' : ' ►')}
                  {item.name === "Resources" && (activeMenuItem === "Resources" && resourcesListOpen)}
                </li>
              </Link>
            )}

              <div
                className="flex -ml-2 w-24 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300"
              >
                Sigh In
              </div>

              <div
                className="flex w-24 ml-4 bg-blue-600 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-blue-500 transition duration-300"
              >
                Register
              </div>
          </ul>
        : ''
      }
    </nav>
  )
}
