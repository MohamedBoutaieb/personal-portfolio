import {useState, React } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import "./portfolio.scss";
import  {featuredPortfolio} from '../../data.js';
export default function Portfolio() {
  const [selected,setSelected] = useState("featured")
  const projectList = [
    {
      id: "featured1",
      title: "Featured"
    },
    {
      id: "featured2",
      title: "Featured"
    },
    {
      id: "featured3",
      title: "Featured"
     },
    {
      id: "featured4",
      title: "Featured"
    },
    {
      id: "featured5",
      title: "Featured"
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
                        <h3>{item.title}</h3>
                    </div>
                    )
        })}
   
      </div>
    </div>
  )
}
