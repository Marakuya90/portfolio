import styles from './ProjectCard.module.css'
import Link from "next/link";

const ProjectCard = ({card}: {card: {name: string, image: string, id: number, year: string, link: string}}) => {
  return (
    <Link href={card.link} className={styles.card}>
      <span className="text-sm text-gray-400">
        {card.year}
      </span>
      <strong className="text-md">{card.name}</strong>
      <div key={card.id} style={{
        backgroundImage: `url(${card.image})`,
        aspectRatio: '16/9',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px',
        overflow: 'hidden'
      }} className={''}/>
    </Link>
  )
}

export default ProjectCard