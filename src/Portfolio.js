import { FaGithub } from "react-icons/fa";

import photo from "./images/photo610.png";
import ecommerce from "./images/ecommerce610.png";
import slippery from "./images/slippery610.png";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h2>PORTFOLIO</h2>
      <PortfolioCard
        title="Photography Portfolio"
        description="My portfolio for one of my other interests—35mm and medium-format film photography."
        image={photo}
      />
      <PortfolioCard
        title="Slippery-Hill Player"
        description="An extension of a non-profit project, Slippery-Hill.com, which catalogs old-time fiddle tunes and serves as an educational resource. Created as a mobile-friendly way to listen to these tunes. Data is periodically scraped and cleaned with a Python script."
        image={slippery}
      />
      <PortfolioCard
        title="e-Commerce Store"
        description="A demo example of an e-Commerce store / theme."
        image={ecommerce}
      />
    </div>
  );
}

function PortfolioCard({ title, description, image }) {
  return (
    <div className="PortfolioCard">
      <div className="image-container">
        <img src={image} className="image" alt={image} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="description">{description}</div>

        <div className="portfolio-buttons">
          <div>
            <FaGithub />
            <span>GitHub</span>
          </div>
          <div>
            <span>Visit Site</span>
          </div>
        </div>
      </div>
    </div>
  );
}
