import Logo from "../logo";

const navList = [
  'Send Money',
  'Converter',
  'Currency API',
  'Tools',
  'Resources'
]

export default function Header() {
  return (
    <div className="fixed top-0 bg-blue-950 w-screen">
      <header className="flex flex-row items-center gap-10 h-16 max-w-8xl justify-center">
        <div className="flex flex-row px-4 py-3 items-center">
          <Logo />

          <div className="px-3 py-2 ml-3 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md">Personal</div>
            |
          <div className="px-3 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md">Business</div>
        </div>

        <nav className="px-10">
          <ul className="flex flex-row gap-0 p-2">
            {navList.map(item =>
              <li key={item} className="px-4 py-2 cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300 rounded-md">{item}</li>
            )}
          </ul>
        </nav>

        <div className="flex gap-3 h-10 text-center items-center">
          <div className="flex w-24 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-white hover:bg-opacity-20 transition duration-300">
            Sigh In
          </div>
          <div className="flex w-24 bg-blue-600 h-10 items-center justify-center rounded-md cursor-pointer hover:bg-blue-500 transition duration-300">
            Register
          </div>
        </div>
      </header>
    </div>
  );
}
