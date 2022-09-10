import Chip from "../chip";
import "./card.scss";

const chips = ["AWS", "Swift", "iOS", "SwiftUI", "Blockchain"];

const Card = () => {
  return (
    <div className="card">
      <img src="assets/digital-market.png" alt="" />
      <div className="details">
        <div className="content">
          <h3>Digital Market</h3>
          <div className="chips">
            {chips.map((chip) => (
              <Chip text={chip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
