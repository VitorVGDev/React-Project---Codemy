import styles from './About2.module.css';
import lines from '../assets/lines.png';
import center_img from '../assets/center_img.svg';
export default function About_2() {
  return (
    <section className={styles.about2_container}>
      <div className={styles.about2_content}>
        <hr className={styles.about2_line} />
        <h2>
          I'm currently looking to join a <span className={styles.cross_functional}>cross-functional</span> team
        </h2>
        <p>that values improving people's lives through accessible design</p>
        <div className={styles.icons_row}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-line-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"/>
          <img alt="Gatsby" />
          <img alt="AI" />
          <img alt="Express" />
          <img alt="MongoDB" />

        </div>
        <div className={styles.orbitals}>
          <div className={styles.central_logo}>
            <img src={center_img} />
          </div>
          <span className={styles.lines}>
            <img src={lines}/>
          </span>
          <span>
            <img src="" alt="" />
          </span>
          <svg className={styles.orbit_svg} width="700" height="300">
            <ellipse cx="350" cy="180" rx="320" ry="90" fill="none" stroke="#a97cf7" strokeOpacity="0.2" />
            <ellipse cx="350" cy="200" rx="250" ry="70" fill="none" stroke="#a97cf7" strokeOpacity="0.2" />
            <ellipse cx="350" cy="220" rx="180" ry="50" fill="none" stroke="#a97cf7" strokeOpacity="0.2" />
          </svg>
          <div className={styles.orbital_icon} style={{ left: '10%', top: '60%' }}><img alt="icon" /></div>
          <div className={styles.orbital_icon} style={{ left: '25%', top: '40%' }}><img alt="icon" /></div>
          <div className={styles.orbital_icon} style={{ left: '40%', top: '70%' }}><img alt="icon" /></div>
          <div className={styles.orbital_icon} style={{ left: '60%', top: '70%' }}><img alt="icon" /></div>
          <div className={styles.orbital_icon} style={{ left: '75%', top: '40%' }}><img alt="icon" /></div>
          <div className={styles.orbital_icon} style={{ left: '90%', top: '60%' }}><img alt="icon" /></div>
        </div>
      </div>
    </section>
  );
}