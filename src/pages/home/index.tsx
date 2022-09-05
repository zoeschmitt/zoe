import { useState } from "react";
import Header from "../../components/header";
import Page from "../../components/page";
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
      <Hero />
      <About />
      <Skills />
    </Page>
  );
};

export default Home;
