import styles from './ProjectCard.module.css'
import Link from "next/link";
import Image from "next/image";

const basePath = '/portfolio'

const ProjectCard = ({card}: {card: {name: string, image: string, id: number, year: string, link: string, color: string}}) => {
  return (
    <Link href={card.link} className={styles.card}>
      <span className="text-sm text-gray-400">
        {card.year}
      </span>
      <strong className="text-md">{card.name}</strong>
      <div
        style={{backgroundColor: `${card.color}`}}
        className="flex justify-center items-center w-full h-[300px] rounded-2xl">
      <Image src={`${basePath}${card.image}`} alt={card.name}
             width={180} height={180} priority/>
      </div>
    </Link>
  )
}

export default ProjectCard