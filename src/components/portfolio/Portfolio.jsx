import {useState, React } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import "./portfolio.scss";
import  {featuredPortfolio} from '../../data.js';
export default function Portfolio() {
  const [selected,setSelected] = useState("featured1")
  const projectList = [
    {
      id: "featured1",
      title: "My Projects"
    }
  ]
  return (
    <div className="portfolio" id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
      { projectList.map((item)=>(
        <PortfolioList   item= {item} active ={item.id === selected} setSelected={setSelected}/>)
      )
      }  
      </ul>  
      <div className="container">
        { featuredPortfolio.map( (item)=> {
          return ( 
                     <div className="item">
                        <img src={item.img} alt="" />
                        <h3><a href={item.gh} target="_blank">{item.title}</a></h3>
                    </div>
                    )
        })}
   
      </div>
    </div>
  )
}
