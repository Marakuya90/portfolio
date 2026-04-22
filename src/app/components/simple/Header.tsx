'use client';

import HeaderNav from "@/app/components/simple/HeaderNav";
import Link from "next/link";
interface Props {
  className?: string
}
const navLinks: { label: string, href: string }[] = [
  {label: "Портфолио", href: '/'},
  {label: "Резюме", href: '/cv'},
  {label: "Контакты", href: '/contacts'}
]
const Header = ({className}: Props) => {
  return (
    <header className={`${className} flex w-2/5`}>
      <Link href={"/"}>schegolevayulya_</Link>
      <HeaderNav links={navLinks}/>
    </header>
  )
}

export default Header