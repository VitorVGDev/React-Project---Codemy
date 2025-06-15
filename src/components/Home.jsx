import styles from './Home.module.css';
import Person_img from '../assets/person.png';
import Curvy_arrow from '../assets/curvy_arrow.svg';

function Home() {
    return (
        <div className={styles.home_container}>
            <div className={styles.img_home_div}>
                <span className={styles.blur}></span>
                <img 
                    src={Person_img} alt="person using computer" 
                    className={styles.person_img}
                />
            </div>

            <div className={styles.text_home}>
                <img 
                    src={Curvy_arrow}
                    className={styles.curvy_arrow}
                />

                <p className={styles.presentation_home}>Hello! I am <span>Ibrahim Memon</span>
                </p>

                <p className={styles.top_home_text}>A Designer who</p>
                <h1>Judges a book <br/>
                    by its <span>cover</span>
                    ...
                </h1>
                <p className={styles.footer_home_text}>Because if the cover does not impress you what else can?</p>  
            </div>
        </div>
    )
}

export default Home