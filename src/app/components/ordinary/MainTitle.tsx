import Image from "next/image";
import PrimaryButton from "@/app/components/ui/buttons/PrimaryButton";

const MainTitle = () => {
  return (<div className={'flex justify-between'}>
    <div className={'mb-[32px] self-end w-1/2'}>
      <p>Hi I am <br />
        <span className={'text-orange-500 font-bold'}>Frontend Developer </span>
      </p>
      <p className={'font-bold text-7xl'}>Schegoleva</p>
      <p className={'font-bold text-7xl ps-[230px] mb-[28px]'}>Yulya</p>
      <p className={'mb-[22px]'}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
      <PrimaryButton text={'Hire me'} />
    </div>
    <div>
      <div>
        <Image src={'/images/circle.svg'}
               alt={'circle'} width={486} height={486} priority/>
      </div>
    </div>
  </div>);
}

export default MainTitle