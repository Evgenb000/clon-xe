import Link from "next/link";

const items = [
  { name: 'Help Center', link: '/HelpCenter' },
  { name: 'Refer A Friend', link: '/ReferAFriend' },
  { name: 'Blog', link: '/Blog' },
  { name: 'Money Transfer Tips', link: '/MoneyTransferTips' },
  { name: 'Currency Encyclopedia', link: '/CurrencyEncyclopedia' },
  { name: 'Currency Newsletters', link: '/CurrencyNewsletters' },
  { name: 'Glossary', link: '/Glossary' },
  { name: 'More Resources', link: '/MoreResources' },
];


export default function ResourcesPopUp() {
  return (
    <div className="grid grid-cols-1 top-12 absolute -translate-x-20 bg-white text-black py-5 px-5 rounded-md">
      {items.map((item, index) => (
        <Link href={item.link} key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
          <div key={index}>
            <h2>{item.name}</h2>
          </div>
        </Link>
    ))}
    </div>
  );
}
