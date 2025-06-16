import styles from './About2.module.css';

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
          <img alt="Figma" />
          <img alt="React" />
          <img alt="Node" />
          <img alt="Sass" />
          <img alt="JS" />
          <img alt="CSS" />
          <img alt="XD" />
          <img alt="Next" />
          <img alt="Gatsby" />
          <img alt="AI" />
          <img alt="Express" />
          <img alt="MongoDB" />
        </div>
        <div className={styles.orbitals}>
          <div className={styles.central_logo}>
            <img alt="Logo central" />
          </div>
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