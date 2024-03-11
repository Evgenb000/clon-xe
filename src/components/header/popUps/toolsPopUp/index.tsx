import Link from "next/link";

const items = [
  ["Currency Charts", "Trends for any currency"],
  ["IBAN Calculator", "Search and validate IBANs"],
  ["Rate Alerts", "Set your target rate and get alerted"],
  ["Apps", "Smartphone apps and more"],
  ["Historical Currency Rates", "Check rates for any date"],
  ["More Tools"],
];


export default function ToolsPopUp() {
  return (
    <div className="grid grid-cols-2 absolute top-12 -translate-x-56 bg-white text-black py-5 px-5 rounded-md">
      {items.map((item, index) => (
        <Link href='#' key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
          <h2 className="t16a24">{item[0]}</h2>
          <p className="t12a18">{item[1]}</p>
        </Link>
      ))}
    </div>
  );
}
