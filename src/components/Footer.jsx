import styles from './Footer.module.css';
import instagram_logo from '../assets/instagram_logo.svg';
import second_logo from '../assets/second_logo.svg';
import google_logo from '../assets/google_logo.svg';

function Footer () {
    return (
        <div className={styles.footer_container}>
                <div>
                    <h3>Contact</h3>
                    <p>ibrhaimmemon930@gmail.com</p>
                    <p>+55 43 XXXXX-XXXX</p>
                </div>
                <div>
                    <p>
                        I'm currently looking to join a cross-functional team that values improving people's lives <br />
                        through accessible design. or have a project in mind? Let's connect.
                        ibrhaimmemon930@gmail.com
                    </p>
                </div>
                <div className={styles.logos_footer}>
                    <a href="" target='_blank'>
                        <img src={instagram_logo}/>
                    </a>
                    <a href="" target='_blank'>
                        <img src={second_logo}/>
                    </a>
                    <a href="" target='_blank'>
                        <img src={google_logo}/>
                    </a>
                </div>
        </div>
    )
}

export default Footer