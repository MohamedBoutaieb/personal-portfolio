import {useState, React } from 'react';
import PortfolioList from '../portfoliolist/PortfolioList';
import "./portfolio.scss";
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
    },
    {
      id: "featured6",
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
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
        <div className="item">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
          <h3>banking app</h3>
        </div>
      </div>
    </div>
  )
}
