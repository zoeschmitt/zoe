import Nav from "../../sections/nav";
import Page from "../../components/page";
import SideContent from "../../components/side-content";
import About from "../../sections/about";
import Hero from "../../sections/hero";
import Skills from "../../sections/skills";
import "./home.scss";

const Home = () => {
  return (
    <Page className="home-page">
      <a className="skip" href="#content">
        Skip to Content
      </a>
      <Nav />
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
        <Skills />
      </div>
    </Page>
  );
};

export default Home;
