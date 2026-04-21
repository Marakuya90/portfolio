'use client';

import PrimaryButton from "@/app/components/ui/buttons/PrimaryButton";
import HeaderNav from "@/app/components/simple/HeaderNav";

const navLinks: string[] = [
  "Home",
  "About me",
  "Services",
  "Projects",
  "Testimonials",
  "Contact",
]
const Header = () => {
  return(<header className={'flex justify-between w-full align-baseline mb-[120px]'}>
    <HeaderNav links={navLinks} />
    <PrimaryButton onClick={() => console.log("click")} text={"Download CV"} />
    </header>)
}

export default Header