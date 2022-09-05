import { useState } from "react";
import Header from "../../components/header";
import Page from "../../components/page";
import Hero from "../../sections/hero";
import Tech from "../../sections/tech";
import "./home.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <Page className="home-page">
      <Header toggle={toggle} />
      <Hero/>
      <Tech />
    </Page>
  );
};

export default Home;
