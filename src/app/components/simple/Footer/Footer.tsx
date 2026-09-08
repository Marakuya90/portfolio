import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>

          {/* О разработчике */}
          <div className={styles.footerSection}>
            <h3>Щеголева Юлия</h3>
            <p>
              Frontend разработчик, создаю современные и удобные интерфейсы.
            </p>
          </div>

          {/* Навигация */}
          <div className={styles.footerSection}>
            <h4>Навигация</h4>
            <ul className={styles.list}>
              <li><a href="/portfolio/cv">Обо мне</a></li>
              <li><a href="/portfolio">Проекты</a></li>
              {/*<li><a href="#skills">Навыки</a></li>*/}
              {/*<li><a href="#contact">Контакты</a></li>*/}
            </ul>
          </div>

          {/* Соцсети */}
          <div className={styles.footerSection}>
            <h4>Контакты</h4>
            <div className={styles.socials}>
              <a href="https://github.com/Marakuya90" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://t.me/Schegoleva_Yulya" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Schegolevayulya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;