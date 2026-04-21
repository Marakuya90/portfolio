import styles from './NewButton.module.css';
interface NewButtonProps {
  text: string;
  onClick?: () => void;
}

const NewButton = ({ text, onClick }: NewButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}>
      {text}
    </button>
  );
};

export default NewButton;