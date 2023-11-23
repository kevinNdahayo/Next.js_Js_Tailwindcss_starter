import Image from "next/image";
import Logo from "../public/Navigation/N.Kevin.svg";
import Icon from "../public/Navigation/Icon_ahead.svg";
import { urbanist } from "../fonts/fonts"
import Link from "next/link"

function NavBar() {
  return <nav className="flex flex-row w-full justify-between pb-[128px]">
    {/* Logo */}
    <Link href={"/"}>
      <Image src={Logo} width={120.67} height={28} alt="Logo" />
    </Link>
    {/* Navigation */}
    <ul className="flex flex-row space-x-[46px] items-center">
      <Link href={"/"} className={`${urbanist.className} hover:border-b-2 hover:pb-2 border-black`}>Projects</Link>
      <Link href={"/talk"} className="flex flex-row space-x-2 border-2 border-black rounded-3xl px-[25px] py-[8px]">
        <span>Let's Talk</span>
        <Image src={Icon} width={8} height={8} alt="icon_ahead"/>
      </Link>
    </ul>
  </nav>;
}

export default NavBar;
