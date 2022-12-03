import styles from './index.module.scss'

export const AddIndicator = () => {
    return(
        <div className={styles.addindicator}>
            <p className={styles.addindicator__text}>Card was added successfully 👌</p>
        </div>
    )
}