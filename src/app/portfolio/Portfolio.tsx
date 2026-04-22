import ProjectCard from "@/app/components/ordinary/Card/ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    name: 'Квадрум',
    description: 'Агрегатор новостроек',
    image: 'images/kvadroom.png',
    link: 'https://kvadroom.ru',
    year: '2024'
  },
  {
    id: 2,
    name: 'Квизард',
    description: 'Агрегатор новостроек',
    image: '/images/qwizard.png',
    link: 'https://novostroy-m.ru',
    year: '2025'
  },
  {
    id: 3,
    name: 'Новострой-М',
    description: 'Агрегатор новостроек',
    image: '/images/novostroy.png',
    link: 'https://novostroy-m.ru',
    year: '2026'
  },
  {
    id: 4,
    name: 'ZODIA',
    description: 'Астрологический сервис',
    image: '',
    link: 'https://novostroy-m.ru',
    year: '2026'
  }
]

const Portfolio = () => {
  return (
    <>
      <h2 className="text-3xl self-center mb-8">Проекты</h2>
      <div className="grid grid-flow-col gap-8">
        {projects
          .filter(project => project.image)
          .map(project => (
            <ProjectCard card={project} key={project.id}/>
          ))}
      </div>
    </>
  );
}

export default Portfolio