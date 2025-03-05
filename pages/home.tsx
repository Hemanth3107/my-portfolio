import styles from '../src/styles/Home.module.css';

const HomePage: React.FC = () => {
    
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1>Welcome to My Blog</h1>
                <h2>Experience</h2>
                <p>3.5 years as a Full Stack Developer...</p>
                <h2>Projects</h2>
                <p>1. Cybersecurity Framework...</p>
            </div>
        </div>
    );
};

export default HomePage;