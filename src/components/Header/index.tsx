import searchLogo from '../../assets/images/searchIcon.svg'
import styles from './index.module.scss'

export interface CenterProps {
  center: number[];
  setCenter?: React.Dispatch<React.SetStateAction<number[]>>;
  setSearch: (search: string) => void;
}

const Header = ({center,setSearch}: CenterProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <span className={styles.header__title}>Interactive Map</span>
        <label className={styles.header__search}>
          <input 
            placeholder="Enter location, let's find hotels" 
            className={styles.header__input} 
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="header__search-icon">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
          </div>
        </label>
        <div className={styles.header__example}> For example: Berlin or New York</div>
      </div>
    </header>
  );
};

export { Header };
