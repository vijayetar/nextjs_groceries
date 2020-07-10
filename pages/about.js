import Nav from '../components/Nav'
import styles from '../components/scss/AboutPage.module.scss'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Nav page="about"/>
            <div className ={styles.aboutpage}>
            <h1>About</h1>
            <main></main>
            </div>
            <Footer />
        </>
    )
}

export default About