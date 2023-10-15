import React from 'react'
import { useState , useRef } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h3kdead', 'template_kubjq65', form.current, 'YjmQWR_aDHBTftS3g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      window.location.href = '/'
  };
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  // });
 const [name , setName] = useState("");
 const [num, setNum]= useState("");
 const [Email, setEmail]= useState("");
 const [Message, setMessage]= useState("");
 
  return (
    <div className='contactt'>
    <div className="about"  style={{ paddingTop:"130px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="titlepage text_align_center">
            <h2>COSERPLUS</h2>
            <p>Cabinet de Comptabilité COSERPLUS Transformons vos chiffres en succès Le cabinet de comptabilité COSERPLUS a été fondé par ZOUAI NABIL est une entreprise dédiée à fournir des services comptables de haute qualité et des solutions financières adaptées aux besoins spécifiques de ses clients. Nous comprenons que la comptabilité est le pilier fondamental de toute entreprise prospère, et c'est pourquoi nous nous efforçons d'offrir des services professionnels, précis et fiables pour aider nos clients à prendre des décisions éclairées et à atteindre leurs objectifs financiers.
            <br/>Le cabinet offre une gamme de services comptables, tels que la tenue de livres, l'établissement des états financiers, la préparation des déclarations fiscales, la gestion de la paie, le conseil en planification financière et fiscale, ainsi que la consultation sur des questions financières spécifiques.
            </p>
          </div>
        </div>
        <div className="col-md-6">
            <div className=" text_align_center">
              <img src='images/affiche.png' /><br/>
             <br/> <Link to="/contact"className="read_more" >Contactez-Nous </Link>
            </div>
          </div>
      </div>
    </div>
  </div>
  
    <div className='row'>
      <div className='col-sm-6'>
      <div className="contact" style={{ paddingTop:"120px"}}>
  <div className="container">
    <div className="row "style={{borderRight:"2px grey solid"}}>
      <div className="col-md-8 offset-md-2">
        <div className="titlepage text_align_left">
          <h2>CONTACT</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} id="request" className="main_form">
          <div className="row">
            <div className="col-md-12">
              <input className="contactus" placeholder="from_name" onChange={e=>{setName(e.target.value);console.log(e.target.value)}} type="type" name="from_name" /> 
            </div>
            <div className="col-md-12">
              <input className="contactus" placeholder="numtel"onChange={e=>{setNum(e.target.value);console.log(e.target.value)}} type="type" name="numtel" />                          
            </div>
            <div className="col-md-12">
              <input className="contactus" name='email' placeholder="Email"onChange={e=>{setEmail(e.target.value);console.log(e.target.value)}} type="type" />                          
            </div>
            <div className="col-md-12">
              <textarea className="textarea" name='message' placeholder="Message" onChange={e=>{setMessage(e.target.value);console.log(e.target.value)}} type="type" message="Name" defaultValue={""} />
            </div>
            <div className="col-md-12">
              <button type='submit' className="send_btn">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className='col-sm-6'>
      <div className="contact" style={{ paddingTop:"120px"}}>
  <div className="container">
    <div className="row " style={{justifyContent:"center"}}>
      <div className="col-md-12 offset-md-2">
        <div className="titlepage text_align_left">
          <h2>Trouvez-Nous</h2>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.8044368054072!2d10.968829824292577!3d35.637872846923656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302175ea284e8db%3A0xdaf21b0f8b045dbe!2sCabinet%20Nabil%20Zouai!5e0!3m2!1sen!2stn!4v1689687564997!5m2!1sen!2stn"     width={550} height={550} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
    </div>
  </div>
</div>
</div>

    </div>
    
</div>
  )
}

export default Contact