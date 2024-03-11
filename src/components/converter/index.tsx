import Image from "next/image";
import Link from "next/link";
import imageFromTo from "@/images/fromTo.svg";

const items = [
  ["Convert", "#"],
  ["Send", "#"],
  ["Charts", "#"],
  ["Alerts", "#"]
]

export default function Converter() {
  return (
    <div className="relative bg-white mt-6 top-10 mb-40 rounded-md">
      <div className=" rounded-md">
        <ul className="flex justify-between text-center items-center rounded-md">{items.map((item) =>
          <Link key={item[0]} href={item[1]}>
            {item[0] === 'Convert'
              ? <li className="mb-2 w-72 h-14 flex items-center justify-center t14a21 bg-white t-active font-bold">
              {item[0]}</li>
              : <li className="mb-2 w-72 h-14 flex items-center justify-center t14a21 bg-blue-100 t-gray">
              {item[0]}</li>
            }
          </Link>)}
        </ul>
      </div>
      
      <div className="grid grid-rows-2 grid-flow-col items-end justify-center text-left gap-4">
        <div>Amount</div>
        <div className=" w-80 h-16 border"></div>
        <div>From</div>
        <div className=" w-80 h-16 border"></div>
        <div></div>
        <div className="flex justify-center items-center"><Image src={imageFromTo} alt="From To" width={20} height={20} /></div>
        <div>To</div>
        <div className=" w-80 h-16 border"></div>

      </div>
    </div>
  );
}
