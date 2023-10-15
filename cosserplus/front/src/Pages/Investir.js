import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
function Investir() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  return (
    <div className="portfolio"  style={{ paddingTop:"200px"}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage text_align_left">
          <h2>Investir en Tunisie</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure style={{height:"350px"}}>
            <img  src="images/prot1.jpg" alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
                <Link to={"/business"}><i className="fa fa-link" aria-hidden="true" /></Link>
              </div>
              <h3>Doing Business</h3>
              <p>La Tunisie fait figure de pays exemplaire dans le bassin méditerranéen et le monde arabe et africain, par le dynamisme de son économie.</p>
            </div>
          </figure>
        </div>
      </div>
   
      <div className="col-md-6">
        <div id="ho_nf" className="portfolio_main text_align_left">
          <figure style={{height:"350px"}}>
            <img  src="images/prot3.jpg" alt="#" />
            <div className="portfolio_text">
              <div className="li_icon">
              <Link to={"/Liens"}><i className="fa fa-link" aria-hidden="true" /></Link>
              </div>
              <h3>Liens utiles</h3>
              <p>Sites d’incitation à l’investissement,sites etatiques techniques,sites professionnels et autres</p>
            </div>
          </figure>
        </div>
      </div>
    
     
    </div>
  </div>
</div>

  )
}

export default Investir