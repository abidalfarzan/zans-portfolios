import About from "./sections/About";
import Experiences from "./sections/Experience";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Navbar from "./components/Navbar"
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


function Home() {

    return (
        <>
            <Navbar />

            <Hero id="home" />
            <About id="about" />
            <Experiences id="experiences" />
            <Project id="projects" />
            <Certificates id="certificates" />
            <Contact id="contact" />

            <Footer />
        </>
    );
}

export default Home;