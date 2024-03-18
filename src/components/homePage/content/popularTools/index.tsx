import imgSend from '@/images/homePage/toolSend.svg';
import imgChart from '@/images/homePage/toolChart.svg';
import imgAlert from '@/images/homePage/toolAlert.svg';
import Image from 'next/image';

const popularTools = [
  [
    imgSend,
    "Xe International Money Transfer",
    "Send money online fast, secure and easy. Live tracking and notifications + flexible delivery and payment options.",
    "Send Money"
  ],
  [
    imgChart,
    "Xe Currency Charts",
    "Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable.",
    "View Charts"
  ],
  [
    imgAlert,
    "Xe Rate Alerts",
    "Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs.",
    "Create Alert"
  ]
]

export default function PopularTools() {
  return (
    <div className="mb-10 mt-28 justify-center text-center w-[1200px] h-max">
      <h2 className="t24a31 font-bold">
        The world&apos;s most popular currency tools
      </h2>

      <div className="flex justify-center items-center text-center gap-[75px] mt-4">
        {popularTools.map((tool) => (
          <div key={tool[1]} className="flex flex-col w-[300px] h-[420px] items-center text-center justify-around shadow-md rounded-lg px-8 py-4">
            <Image src={tool[0]} alt={tool[1]} width={90} height={90} />
            <h3 className="t20a26 font-bold">{tool[1]}</h3>
            <p className="t16a27 text-left">{tool[2]}</p>
            <button className="t14a18 w-[220px] h-9 border-[2px] font-bold border-blue-800 bg-white text-blue-500 rounded-lg hover:bg-blue-100 transition-colors duration-300">{tool[3]}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
