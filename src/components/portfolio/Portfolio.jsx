import { useState, React } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import Wave from "react-wavify";
import { featuredPortfolio } from "../../data.js";
export default function Portfolio() {
  const [selected, setSelected] = useState(1);
  const projectList = [
    {
      id: 1,
      title: "My Projects",
    },
    {
      id: 2,
      title: "Also My Projects",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
   
 
      <Wave
      className="waves1"
      fill="#15023a"
      paused={false}
      options={{height: 80,amplitude: 20, speed: 0.15, points: 5}}
      ></Wave>
       <Wave
      className="waves2"
      fill="#15023a"
      paused={false}
      options={{height: 80,width: 100,amplitude: 50, speed: 0.15, points: 5}}
      ></Wave>
      <h1>Portfolio</h1>
      
      <ul>
        {projectList.map((item) => (
          <PortfolioList
            item={item}
            active={item.id === selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {featuredPortfolio
          .filter(
            (item) =>
              item.id >= (selected - 1) * 6 + 1 && item.id < selected + 6
          )
          .map((item) => {
            return (
              <a href={item.gh} target="_blank">
                {" "}
                <div className="item">
                  <img src={item.img} alt="" />
                  <h3>{item.title}</h3>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
}
