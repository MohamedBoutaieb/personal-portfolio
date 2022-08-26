import {React, useState }from 'react'
import "./works.scss"
import ChevronRight  from "@material-ui/icons/ChevronRight";
export default function Works() {
  const [currentSlider,setCurrentSlider] = useState(0);
  const data = [
    {
      id:1,
      icon: "icon",
      title:"title smttsdh"
      ,desc:"https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000",
      img:"https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg"
    },
    {
      id:2,
      icon: "icon",
      title:"title smtthddd"
      ,desc:"https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000",
      img:"https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000"
    },
    {
      id:3,
      icon: "icon",
      title:"title smtthdddssd"
      ,desc:"https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000",
      img:"https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg"
    },
    {
      id:4,
      icon: "icon",
      title:"title smtthsljkdfd"
      ,desc:"https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000",
      img:"https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg"
    },
  ]
  return (
    <div className="works"  id="works">
       <div className="slider" style = {{transform:`translateX(-${currentSlider*100}vw)`}}>
        {data.map(
          item =>(

         <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                 <div className="imgContainer">
                   <img src={item.icon} alt="" />
                 </div>
                 <h2>{item.title}</h2>
                 <p>
                 {item.desc}
                 </p>
                 <span>Projectdd</span>
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
        </div>
         )
         )}
      </div>
      <img src="assets/arrow.png" className="arrow right" onClick = {()=>setCurrentSlider((currentSlider+1) %4)} />
      <img src="assets/arrow.png" className="arrow left" onClick = {()=>setCurrentSlider((currentSlider-1 +4) %4)}/>
    </div>
  )
}
