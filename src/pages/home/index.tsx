import Col from "../../components/col";
import Page from "../../components/page";
import "./home.scss";

const Home = () => {
  return (
    <Page className="home-page">
      <div className="hero content">
        <div className="hero-grid">
          <Col>
            <h1 className="title">hi, i'm zoe</h1>
            <p className="subtitle">software engineer + designer</p>
          </Col>
          <div className="end">
            <div className="circle" aria-hidden="true">
              <img src="assets/skills.svg" alt="" />
              <p className="emoji">👩🏼‍💻</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
