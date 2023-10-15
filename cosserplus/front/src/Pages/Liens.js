import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
export default function Liens() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  return (
    <div className="portfolio"  style={{ paddingTop:"200px"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_left">
            <h2>SITES D’INCITATION À L’INVESTISSEMENT</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/APII.jfif" alt="#" /> 
              <div className="portfolio_text">
                <div className="li_icon">
                <a href="http://www.tunisieindustrie.nat.tn/fr/home.asp"  target='_blank'><img src="images/we1.png" /></a>
                </div>
                <h3>APII</h3>
                <p>Agence de Promotion de l’Industrie et de l’Innovation</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/APIA.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.apia.com.tn/" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>APIA</h3>
                <p>Agence de Promotion des Investissements Agricoles</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/CEPEX.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="http://www.cepex.nat.tn/content/accueil" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>CEPEX</h3>
                <p>Centre de Promotion des Exportations</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/FIPA.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="http://www.investintunisia.tn/Fr/accueil_46_33"target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>FIPA</h3>
                <p>Agence de Promotion de l’Investissement Extérieur</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/ANETI.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.emploi.nat.tn/fo/Fr/global.php" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>ANETI</h3>
                <p>Agence Nationale pour l’Emploi et le Travail Indépendant</p>
              </div>
            </figure>
          </div>
          
        </div>
      </div>
        <div className="row">
  <div className="col-md-12">
    <div className="titlepage text_align_left">
      <h2>SITES ETATIQUES TECHNIQUES</h2>

    </div>
  </div>
</div>
<div className="row">
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/impot.jpg" alt="#" /> 
              <div className="portfolio_text">
                <div className="li_icon">
                <a href="http://www.impots.finances.gov.tn/index.php/fr/"target='_blank'><img src="images/we1.png" /></a>
                </div>
                <h3>IMPOTS</h3>
                <p>Administration Fiscale</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/iort.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="http://www.iort.gov.tn/WD120AWP/WD120Awp.exe/CONNECT/SITEIORT"target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>IORT</h3>
                <p>Imprimerie Officielle de la République Tunisienne</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/cnss.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.cnss.tn/" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>CNSS</h3>
                <p>Caisse Nationale de Sécurité Sociale</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/ministere.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="http://www.finances.gov.tn/fr"target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>MINISTERE DES FINANCES</h3>
                <p>République Tunisienne</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/rne.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.registre-entreprises.tn/rne-public/#/"  target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>RCT</h3>
                <p>Registre du Commerce Tunisien</p>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/bvmt.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="http://www.bvmt.com.tn/"  target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>BVMT</h3>
                <p>Bourse des Valeurs Mobilières de Tunisie</p>
              </div>
            </figure>
          </div>
        </div>
                <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/ins.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.ins.tn/"  target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>INS</h3>
                <p>Institue National des Statistique</p>
              </div>
            </figure>
          </div>
        </div>
               <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/bct.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.bct.gov.tn/bct/siteprod/index.jsp"  target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>BCT</h3>
                <p>Banque Centrale de Tunisie</p>
              </div>
            </figure>
          </div>
        </div>
  
    </div>
    <div className="row">
  <div className="col-md-12">
    <div className="titlepage text_align_left">
      <h2>SITES PROFESSIONNELS ET AUTRES</h2>
 
  </div>
</div> 

<div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/UTICA.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.utica.org.tn/Fr/" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>UTICA</h3>
                <p>Union Tunisienne de l’Industrie, du Commerce et de l’Artisanat</p>
              </div>
            </figure>
          </div>
        </div>
            
  
        <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/aptbef.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.apbt.org.tn/laptbef-2/"  target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>APTBEF</h3>
                <p>Banques et Etablissements financiers</p>
              </div>
            </figure>
          </div>
        </div>
               <div className="col-md-3">
          <div id="ho_nf" className="portfolio_main text_align_left">
            <figure style={{height:"350px"}}>
              <img  src="images/ATAP.jpg" alt="#" />
              <div className="portfolio_text">
                <div className="li_icon">
                  <a href="https://www.tap.info.tn/ar" target='_blank'><img src="images/we1.png"aria-hidden="true" /></a>
                </div>
                <h3>ATAP</h3>
                <p>Agence Tunis Afrique Presse</p>
              </div>
            </figure>
          </div>
        </div>
  

        
    </div>
 
  </div>
  </div>
  
  )
}
