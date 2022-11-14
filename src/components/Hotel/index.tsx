import styles from './index.module.scss'
import { hotelDataTypes } from '../../types/types'

const Hotel = ({hotel}:any) => {
    return(
        <div className = {styles.object}>
			<h4 className={styles.object__header}>{hotel?.result_object?.name}</h4>
			<p className={styles.object__description}></p>
			<span className={styles.object__description}></span>
		</div>
    )
}

export {Hotel}