'use client'

import styles from './Projects.module.css';
import {useState} from "react";
import NewButton from "@/app/components/ui/buttons/NewButton/NewButton";
import Link from 'next/link'

const links = [
  { href: '/shop/electronics', label: 'Electronics' },
  { href: '/shop/clothing', label: 'Clothing' },
  { href: '/shop/books', label: 'Books' },
]

const Projects = () => {
  const [project, setProject] = useState(0);

  return (
    <div className={styles.projects}>

      <h2>{project}</h2>
      <div>
        {links.map((link) => (
          <Link key={link.label} href={link.href}>
            <span className="label">{link.label}</span> <LoadingIndicator />
          </Link>
        ))}
      </div>
      <NewButton text={'Add project'}
                 onClick={() => setProject(n=>n+1)}/>
    </div>
  );
}

export default Projects;