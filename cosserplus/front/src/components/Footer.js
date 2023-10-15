import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <footer>
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link to='/'><img style={{height:"130px"}} src="images/coserpluss.svg" /></Link>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className="Informa helpful">
            <h3>liens utiles</h3>
            <ul style={{  listStyleType: "none"}}>
              <li><Link to={'/'}>Accueil</Link></li>
              <li><Link to={"/service"}>Services</Link></li>
              <li><Link to={"/investir"} >Investir en tunisie</Link></li>
              <li><Link to={"/contact"} >Contactez-nous</Link></li>
              <li><Link to={"/actualité"} >Actualités</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="Informa">
            <h3>A propos</h3>
            <ul style={{  listStyleType: "none"}}>
              <li> Bienvenue chez COSERPLUS Accounting Company,</li>
              <li> ou nous proposons des services comptables complets adaptés</li>
              <li>aux besoins uniques de nos clients.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="Informa conta">
            <h3>Contactez-Nous</h3>
            <ul>
              <li> <a href="https://goo.gl/maps/RCYDoDsQMnLFZZH4A"> <i className="fa fa-map-marker" aria-hidden="true" /> Location
                </a>
              </li>
              <li> <a href="#"><i className="fa fa-phone" aria-hidden="true" />  +21673492353
                </a>
              </li>
              <li> <a href="#"><i className="fa fa-phone" aria-hidden="true" />  +21655978185
                </a>
              </li>
              <li> <a href="#"> <i className="fa fa-envelope" aria-hidden="true" /> coserplus@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-md-3 col-sm-6'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.8044368054072!2d10.968829824292577!3d35.637872846923656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302175ea284e8db%3A0xdaf21b0f8b045dbe!2sCabinet%20Nabil%20Zouai!5e0!3m2!1sen!2stn!4v1689687564997!5m2!1sen!2stn"     width={320} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

       
        </div>
      </div>
    </div>
    <div className="copyright text_align_left">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-6">
            <p>© 2023 All Rights Reserved. " <Link to={"/"}> COSERPLUS </Link></p>
          </div>
          <div className="col-md-6">
            <ul className="social_icon text_align_center" style={{  listStyleType: "none"}}>
          
              <li> <a href=""><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer