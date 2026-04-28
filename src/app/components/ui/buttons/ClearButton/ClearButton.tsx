import styles from './ClearButton.module.css'

const ClearButton = ({className, link = '#'}: {className: string, link: string}) => {
  return (
    <a href={link} download className={`${className} ${styles.button} text-md`}>Скачать CV</a>
  )
}

export default ClearButton
