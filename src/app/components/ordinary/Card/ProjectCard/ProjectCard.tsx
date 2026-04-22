import styles from './ProjectCard.module.css'

const ProjectCard = ({card}: {card: {name: string, image: string, id: number, year: string}}) => {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  )
}

export default ProjectCard