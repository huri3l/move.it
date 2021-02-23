import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/huri3l.png" alt="Foto Huriel"/>
      <div>
        <strong>Huriel Lopes</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}