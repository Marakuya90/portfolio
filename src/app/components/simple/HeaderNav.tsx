import {FC} from "react";

interface HeaderNavProps {
  links: string[]
}

const HeaderNav: FC<HeaderNavProps> = ({links}) => {
  return (<nav className={'flex'}>
    <ul className={'flex justify-between gap-4 items-center'} >{links.map((item: string, index: number) => (
      <li key={index} className={'cursor-pointer hover:text-orange-400'}>{item}</li>
    ))}</ul>
  </nav>);
}

export default HeaderNav