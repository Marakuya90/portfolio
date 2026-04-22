const skills = [
  {
    title: 'Frontend разработка:',
    stack: ['Vue.js (2, 3)', 'Nuxt.js (SSR)',
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
    title: 'Системы контроля версий:',
    stack: ['Git (Git Flow, GitLab)']
  },
  {
    title: 'Контейнеризация::',
    stack: ['Docker', 'Docker-compose']
  },
  {
    title: 'Системы контроля версий:',
    stack: ['Git (Git Flow, GitLab)']
  },
  {
    title: 'Системы контроля версий:',
    stack: ['Git (Git Flow, GitLab)']
  },

]

const Portfolio = () => {
  return (
    <div>
      <section>
        <h2>Ключевые навыки</h2>
        <ul>
          {skills.map(skill => <li key={skill.title}>
            <strong>{skill.title}</strong>
            {skill.stack.map(stack => <span key={stack}>{stack}</span>)}
          </li>)}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio