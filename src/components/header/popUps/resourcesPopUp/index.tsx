import Link from "next/link";

const items = [
  "Help Center",
  "Refer A Friend",
  "Blog",
  "Money Transfer Tips",
  "Currency Encyclopedia",
  "Currency Newsletters",
  "Glossary",
  "More Resources",
];

export default function ResourcesPopUp() {
  return (
    <div className="grid grid-cols-1 top-12 absolute -translate-x-20 bg-white text-black py-5 px-5 rounded-md">
      {items.map((item, index) => (
        <Link href='#' key={index} className="p-4 cursor-pointer hover:bg-blue-300 hover:bg-opacity-20 transition duration-300 rounded-md">
          <div key={index}>
            <h2>{item}</h2>
          </div>
        </Link>
    ))}
    </div>
  );
}
