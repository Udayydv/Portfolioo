import styles from './ProjectsStyles.module.css';
import ecom from '../../assets/ecom.jpg';
import bing from '../../assets/bing.webp'
import educator from '../../assets/educator_logo.png';
// import dh from '../../assets/dh.jpeg';
// import voice from '../../assets/voice.png';
import khatabook from '../../assets/khatabook.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bing}
          to="/projects/educator"
          h3="Bingo"
          p={
            <>
              Bingooo <br />
              
            </>
          }
        />
        {/* <ProjectCard
          src={ecom}
          to="/projects/leads"
          h3="Kitaab"
          p="Stationary E-commerce platform"
        /> */}
        {/* <ProjectCard
          src={travel}
          to="/projects/travel"
          h3="Travel ToGetHer"
          p="Car Rental Website"
        /> */}
        {/* <ProjectCard
          src={dh}
          to="/projects/dh"
          h3="DH Clothing"
          p="E - commerce Platform"
        /> */}
        <ProjectCard
          src={khatabook}
          to="/projects/voice"
          h3="Foodie"
          p="Food Delivery App"
        />
      </div>
    </section>
  );
}

export default Projects;
