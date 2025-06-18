import styles from './Lab.module.css';
import project_icon from '../assets/project_container_icon.svg';
import project1_img from '../assets/project1_img.png';

function Lab () {
    return (
        <div className={styles.lab_container}>
            <div className={styles.project_container}>
                <div className={styles.project_text}>
                    <span>Featured Project</span>
                    <h2>Example Project</h2>
                    <p>
                        A web app for visualizing personalized Spotify data. View your
                        top artists, top tracks, recently played tracks, and detailed audio
                        information about each track. Create and save new playlists of
                        recommended tracks based on your existing playlists and more.
                    </p>
                    <div className={styles.icons}>
                        <img src={project_icon}/>
                        <img src={project_icon}/>
                    </div>
                </div>

                <div className={styles.project_img_container}>
                    <div>
                        <img src={project1_img}/>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Lab