import Nav from '../components/Nav'
import styles from '../components/scss/AboutPage.module.scss'

function About() {
    return (
        <>
            <Nav page="about"/>
            <div className ={styles.aboutpage}>
            <h1>About</h1>
            </div>
        </>
    )
}

export default About