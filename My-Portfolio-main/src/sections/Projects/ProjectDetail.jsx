// ProjectDetail.jsx
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectDetailStyles.module.css';

// Educator images
import bing from '../../assets/bing.jpg';
import bingoo from '../../assets/bingoo.jpg';

// Leads images
import kitaaab from '../../assets/kitaaab.png';
import leads2 from '../../assets/leads2.png';

// Travel images
// import travel1 from '../../assets/travel1.png';
// import travel2 from '../../assets/travel2.png';

// DH images
// import dh1 from '../../assets/dh1.png';
// import dh2 from '../../assets/dh2.png';

// Voice images
import fooddd from '../../assets/fooddd.jpg';
import foodie from '../../assets/foodie.png';

const projectData = {
  educator: {
    title: "Bingo",
    description: "BingoGo is a fun and interactive digital version of the classic Bingo game. Players receive a randomized Bingo card and mark off numbers as they’re called out. The first player to complete a winning pattern (row, column, diagonal, or special shape) shouts and wins the round.",
    tech: ["Android Studio, Java, Firebase (for authentication & real-time database), Retrofit (for API calls)."],
    images: [bing, bingoo],
    github: "https://github.com/anuragyadav7905",
  },

  kitaab: {
    title: "Kitaab E-commerce Platform",
    description: "Kitaab is an E-commerce platform, providing the best quality of Stationary all over the market.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: [kitaaab, ],
    github: "https://github.com/anuragyadav7905",
  },
  
  // travel: {
  //   title: "Travel ToGetHer",
  //   description: "Travel ToGetHer is a women-centric car rental platform focused on providing safe, affordable, and convenient travel solutions. The application allows users—especially women—to book verified rental vehicles with women drivers or vetted safety protocols. With its elegant UI/UX and seamless booking flow, the platform offers location-based car selection, real-time availability updates, and booking confirmations. It is designed to break barriers in solo or group travel for women by promoting safety, trust, and independence. This project showcases my front-end finesse and understanding of secure, responsive design with a strong emphasis on user empowerment.",
  //   tech: ["NodeJS", "Tailwind CSS", "MongoDB", "REST API"],
  //   images: [travel1, travel2],
  //   github: "https://github.com/Udayydv/TravelToGetHer",
  // },
  // dh: {
  //   title: "DH Clothing",
  //   description: "DH Clothing is an end-to-end e-commerce platform tailored for a modern fashion brand. From displaying trendy clothing items to managing user carts, order tracking, and admin inventory control, the website delivers a polished shopping experience. Users can browse collections, apply filters, add items to the cart, and complete secure checkouts. Admins can manage product listings, view user orders, and handle stock updates. The application integrates database management, secure login systems, and responsive UI to function seamlessly across devices. This project is a showcase of how I handle multi-role systems (user/admin), cart logic, and real-time inventory features in a retail environment.",
  //   tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  //   images: [dh1, dh2],
  //   github: "https://github.com/Udayydv/DH-Traders",
  // },
  voice: {
    title: "Food Delivery App",
    description: "QuickBite is a user-friendly, on-demand food delivery app that connects hungry customers with their favorite local restaurants. With a sleek interface, real-time order tracking, and personalized recommendations, QuickBite offers a seamless experience from browsing to delivery.",
    tech: ["Android Studio, Java, Firebase (Authentication, Firestore, Storage), Retrofit (API calls), GoogleMaps API (Order tracking), Room Database (Local storage). ",],
    images: [fooddd, foodie],
    github: "https://github.com/anuragyadav7905",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h2 className={styles.notFound}>Project not found</h2>;

  return (
    <div className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <Link to="/" className={styles.backButton}>&larr; Back to Projects</Link>
        <h1 className={styles.title}>{project.title}</h1>
        <a href={project.github} target="_blank" rel="noopener" className={styles.githubButton}>
          View on GitHub
        </a>
      </header>

      <section className={styles.cardBody}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <div className={styles.images}>
          {project.images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
