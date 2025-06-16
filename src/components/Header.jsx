import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';

function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_img}>
                <img src={Logo} alt="logo" className={styles.logo} />
            </div>

            <div className={styles.header_links}>
                <a href="#">Home</a>
                <a href="./About.jsx">About</a>
                <a href="#">Lab</a>
            </div>
        </div>
    )
}

export default Header