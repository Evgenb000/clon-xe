import Link from "next/link";

const items = [
  { name: "Currency Charts", description: "Trends for any currency", link: "CurrencyCharts" },
  { name: "IBAN Calculator", description: "Search and validate IBANs", link: "IBANCalculator" },
  { name: "Rate Alerts", description: "Set your target rate and get alerted", link: "RateAlerts" },
  { name: "Apps", description: "Smartphone apps and more", link: "Apps" },
  { name: "Historical Currency Rates", description: "Check rates for any date", link: "HistoricalCurrencyRates" },
  { name: "More Tools", link: "MoreTools" },
];



export default function ToolsPopUp() {
  return (
    <div className="grid grid-cols-2 absolute top-12 -translate-x-56 bg-white text-black py-5 px-5 rounded-md">
      {items.map((item, index) => (
        <Link href={item.link} key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
          <h2 className="t16a24">{item.name}</h2>
          <p className="t12a18">{item?.description}</p>
        </Link>
      ))}
    </div>
  );
}
