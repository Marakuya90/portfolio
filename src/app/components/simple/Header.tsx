'use client';

import HeaderNav from "@/app/components/simple/HeaderNav";
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
      <p>Юлия Щёголева</p>
      <HeaderNav links={navLinks}/>
    </header>
  )
}

export default Header