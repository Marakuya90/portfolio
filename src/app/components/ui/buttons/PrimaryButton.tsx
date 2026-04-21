import {FC} from "react";

interface PrimaryButtonProps {
  text: string,
  onClick?: () => void
}

const PrimaryButton:FC<PrimaryButtonProps> = ({text, onClick}) => {
  return(<button onClick={ onClick } className={'bg-orange-400 text-white px-4 py-2 rounded h-[52px] w-[188px]'}>
    {text}
  </button>);
}

export default PrimaryButton