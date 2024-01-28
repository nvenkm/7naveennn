import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <header
      className={`${bebasNeue.className} py-6 px-[60px] border-b border-solid border-neutral-800`}
    >
      <nav className="flex justify-between items-center">
        <div className="text-3xl">Naveen.</div>
        <div>
          <ul className="flex gap-8 items-start text-base">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
