import styles from './ProjectCard.module.css'
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({card}: {card: {name: string, image: string, id: number, year: string, link: string}}) => {
  return (
    <Link href={card.link} className={styles.card}>
      <span className="text-sm text-gray-400">
        {card.year}
      </span>
      <strong className="text-md">{card.name}</strong>
      <Image src={card.image} alt={card.name} width={300} height={180} priority/>
    </Link>
  )
}

export default ProjectCard