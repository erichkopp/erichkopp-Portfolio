import {
  DiHtml5,
  DiCss3,
  DiPython,
  DiReact,
  DiRuby,
  DiJsBadge
} from "react-icons/di";
// import { FaFigma } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export default function About() {
  return (
    <div className="About">
      <h2>ABOUT</h2>
      <div className="skills">
        <div>
          <DiHtml5 />
          <span>HTML</span>
        </div>
        <div>
          <DiCss3 />
          <span>CSS</span>
        </div>
        <div>
          <DiReact />
          <span>REACT</span>
        </div>
        <div>
          <DiPython />
          <span>PYTHON</span>
        </div>
        <div>
          <FiFigma />
          <span>FIGMA</span>
        </div>
        <div>
          <DiRuby />
          <span>RUBY</span>
        </div>
        <div>
          <DiJsBadge />
          <span>JAVASCRIPT</span>
        </div>{" "}
      </div>
    </div>
  );
}
