import Row from "../../components/row";
import "./tech.scss";

const Tech = () => {
  return (
    <Row className="tech">
      <img src="assets/js.svg" alt="javascript" />
      <img src="assets/ts.svg" alt="typescript" />
      <img src="assets/swift.svg" alt="swift programming language" />
      <img src="assets/python.svg" alt="python programming language" />
      <img src="assets/flutter.svg" alt="flutter" />
      <img src="assets/react.svg" alt="react js" />
      <img src="assets/angular.svg" alt="angular" />
    </Row>
  );
};

export default Tech;