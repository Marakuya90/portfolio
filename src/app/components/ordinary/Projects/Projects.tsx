'use client'

import styles from './Projects.module.css';
import Link from 'next/link'
import Image from "next/image";

const links = [
  { href: 'https://kvadroom.ru', label: 'Квадрум', icon: 'kvadroom' },
  { href: 'https://novostroy-m.ru', label: 'Новострой-М', icon: 'nvs-m' },
  { href: 'https://novostroy-spb.ru', label: 'Новострой-Спб', icon: 'nvs-spb' },
  { href: 'https://qwizard.ru', label: 'Квизард', icon: 'qwizard' },
]

const Projects = () => {

  return (
    <div className={`${styles.projects} flex w-full justify-between items-center` }>

        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <Image src={`/icons/${link.icon}.svg`}
                   alt={link.icon} width={150} height={180} priority/>
          </Link>
        ))}

    </div>
  );
}

export default Projects;