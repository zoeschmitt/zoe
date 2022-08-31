import Background from "../../components/background";
import Page from "../../components/page";
import "./home.scss";

const Home = () => {
  return (
    <Page className="home-page">
      <div className="bg">
        <Background />
        <div className="bg-offset">
          <Background />
        </div>
      </div>
    </Page>
  );
};

export default Home;
