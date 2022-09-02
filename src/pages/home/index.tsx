import Header from "../../components/header";
import Page from "../../components/page";
import Hero from "../../sections/hero";
import Tech from "../../sections/tech";
import "./home.scss";

const Home = () => {
  return (
    <Page className="home-page">
      <Header />
      <Hero />
      <Tech />
    </Page>
  );
};

export default Home;
