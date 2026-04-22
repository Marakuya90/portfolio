import {FC} from "react";
import Link from "next/link";

interface HeaderNavProps {
  links: {href: string, label: string}[]
}

const HeaderNav: FC<HeaderNavProps> = ({links}) => {
  return (<nav className={'flex ms-auto'}>
    <ul className={'flex justify-between gap-4 items-center'}>
      {links.map(({label, href}) => (
        <Link key={label} href={href}>
          {label}
        </Link>
      ))}
    </ul>
  </nav>);
}

export default HeaderNav