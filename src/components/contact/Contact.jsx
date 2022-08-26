import {React,useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss"
export default function Contact() {
  const [message,setMessage] = useState(false)
  const [mail,setMail] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylnetjm', 'template_af65aij', form.current, '5U69omnQAxARe6NzN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      //setMessage(true);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)

  }
  return (
    <div className="contact" id ="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
         {/* <form onSubmit={sendEmail} ref={form}>
            <input type="email" placeholder="Email"   name="user_email"/>
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit" value="Send">Send</button>
            {message && <span>Thanks , I will reply ASAP :)</span>}
  </form>*/}
  
        <div className= "ressources">
          <img src ="assets/linkedin.png" alt/>
          <a href="https://www.linkedin.com/in/mohamed-boutaieb-034ba21a4/"target="_blank"> LinkedIn Account</a> 
        </div>
        <div className= "ressources">
          <img src ="assets/github.png" alt/>
          <a href=" https://github.com/MohamedBoutaieb"target="_blank"> GitHub Account</a>  
        </div>
        <div className= "ressources mail">
          <img src ="assets/mail.png" alt/>
          <a onClick = {()=>setMail(true) } className={!mail ?"active":"inactive"}>Institutional Mail</a>
         <div className= {mail ?"active email":"inactive email"} onClick = {()=>setMail(false)}>mohamed.boutaieb@insat.ucar.tn</div> 
        </div>
        <span></span>
       
        </div>
    </div>
  )
}
