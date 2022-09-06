import { useState } from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import SideContent from "../../components/side-content";
import About from "../../sections/about";
import Hero from "../../sections/hero";
import Skills from "../../sections/skills";
import "./home.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Page className="home-page">
      <Header toggle={toggle} />
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
      <Hero />
      <About />
      <Skills />
    </Page>
  );
};

export default Home;
