import Nav from "../../sections/nav";
import Page from "../../components/page";
import SideContent from "../../components/side-content";
import About from "../../sections/about";
import Hero from "../../sections/hero";
import "./home.scss";
import Footer from "../../sections/footer";
import Tech from "../../sections/tech";
import Projects from "../../sections/projects";

const Home = () => {
  return (
    <Page className="home-page">
      <a className="skip" href="#content">
        Skip to Content
      </a>
      <Nav />
      <main role="main">
        <SideContent>
          <a
            href="https://github.com/zoeschmitt"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            <img src="assets/github.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/zmschmitt/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="assets/linkedin.svg" alt="" />
          </a>
        </SideContent>
        <div id="content">
          <Hero />
          <About />
          <Projects />
          <Tech />
        </div>
      </main>
      <Footer />
    </Page>
  );
};

export default Home;
