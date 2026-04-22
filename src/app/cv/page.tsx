import styles from './cv.module.css'

const skills = [
  {
    title: 'Frontend разработка:',
    stack: ['Vue.js(2,3)', 'Nuxt.js(SSR)',
      'React', 'Next.js (SSR)', 'JavaScript',
      'TypeScript', 'HTML5', 'CSS3', 'SCSS',
      'Tailwind CSS', 'Webpack', 'Vite']
  },
  {
    title: 'Управление состоянием:',
    stack: ['Vuex', 'Pinia']
  },
  {
    title: 'UI/UX:',
    stack: ['Figma', 'Адаптивный/Отзывчивый дизайн', 'Кроссбраузерность']
  },
  {
    title: 'Контейнеризация::',
    stack: ['Docker', 'Docker-compose']
  },
  {
    title: 'Системы контроля версий:',
    stack: ['Git (Git Flow, GitLab, GitHub)']
  }

]
const experience = [
  {
    name: 'Новострой-М',
    position: 'Веб - разработчик',
    period: 'январь 2024 - наст. время'
  }
]
const meetups = ['photo', 'photo', 'photo']
const Cv = () => {
  return (
    <div className={styles.cv}>
      <section>
        <h2 className={`${styles.heading} text-3xl`}>Ключевые навыки</h2>
        <ul className="space-y-2">
          {skills.map(skill =>
            <li key={skill.title}>
              <strong>{skill.title}</strong>
              {skill.stack.map(stack =>
                <span key={stack} className="pe-2">{stack}</span>)}
            </li>)}
        </ul>
      </section>
      <section>
        <h2 className={`${styles.heading} text-3xl`}>Опыт работы</h2>
        <ul className="space-y-2">
          {experience.map(experience =>
            <li key={experience.name} className="space-y-1">
              <strong>{experience.name}</strong>
              <p>{experience.period}</p>
              <h3>{experience.position}</h3>
            </li>)}
        </ul>
      </section>
      <section>
        <h2 className={`${styles.heading} text-3xl`}>Участие в конференциях</h2>
        <p>здесь слайдер с фотками с митапов</p>
      </section>
    </div>
  );
}

export default Cv