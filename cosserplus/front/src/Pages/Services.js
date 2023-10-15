import React from 'react'
import "./Services.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect } from 'react';
import { useLocation,useHref } from 'react-router';

function Services() {
  const location = useLocation();


  let defaultIndex = 0;

  if(window.location.href.toString()?.includes('#service-COMPTABILITEETFINANCE-id')){

    defaultIndex=0
  
   }
   

 if(window.location.href.toString()?.includes('#service-fiscal-id')){
  defaultIndex=1

  
 }
 if(window.location.href.toString()?.includes('#service-juridique-id')){
  defaultIndex=2

 
 }
 if(window.location.href.toString()?.includes('#service-social-id')){
  defaultIndex=3
 }

 const [index,setIndex]=React.useState(defaultIndex)
  React.useEffect(()=>{
    if(window.location.href.toString()?.includes('#service-COMPTABILITEETFINANCE-id')){

   
    setIndex(0)
  
   }
   

 if(window.location.href.toString()?.includes('#service-fiscal-id')){
  setIndex(1)

  
 }
 if(window.location.href.toString()?.includes('#service-juridique-id')){
  setIndex(2)

 
 }
 if(window.location.href.toString()?.includes('#service-social-id')){
  setIndex(3)
 }

  },[location])

  

 useEffect(() => {


if(defaultIndex===0 && !window.location.href.toString()?.includes('#')){
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
}else{
  var activeTabElement = document.getElementById('tabsIdForScroll');
  var topPos = activeTabElement.offsetTop;

setTimeout(()=>{
  window.scrollTo({ top: topPos, left: 0, behavior: 'smooth' });
},50)
}

},[defaultIndex]);
  
  return (
    <>
    <div className='row' style={{ paddingTop:"200px"}}>
      <div className='col-md-6 sect'>
       <h1 style={{color:'#808080' , padding:"20px"}}>Nos services</h1>
       <hr/>
       <p>Notre société comptable offre une gamme complète de services pour répondre à vos besoins financiers. Que vous soyez une entreprise individuelle ou une grande société, nous pouvons vous aider. Nos services comprennent </p>
       <ul style={{padding:"20px" , color:"black"}}>
        <li style={{fontWeight:"500" , fontSize:"20px"}}>la tenue de livres</li>
        <li style={{fontWeight:"500" , fontSize:"20px"}}>la préparation des états financiers</li>
        <li style={{fontWeight:"500" , fontSize:"20px"}}>la gestion de la paie</li>
        <li style={{fontWeight:"500" , fontSize:"20px"}}>la planification fiscale et les conseils financiers</li>
        </ul><p>Nous travaillons avec précision et professionnalisme pour garantir que vos comptes soient en ordre et conformes aux normes comptables en vigueur. Faites confiance à notre équipe expérimentée pour vous fournir des services comptables fiables et personnalisés qui vous permettront de prendre des décisions éclairées et de développer votre entreprise.</p>
        
      </div>
      
      <div className='col-md-6' style={{textAlign:"center"}}>
       <img src='images/acc.jpg' height={"600px"} width={"600px"} />
      </div>
    </div>
    <br/>


   

   <div id="tabsIdForScroll"/>
<Tabs defaultIndex={index} selectedIndex={index} selectedTabClassName={"sss"} >
    <TabList  >
      <Tab onClick={()=>setIndex(0)} >COMPTABVFVILITE ET FINANCE</Tab>
      <Tab onClick={()=>setIndex(1)}>SERVICES  FISCAUX</Tab>
      <Tab onClick={()=>setIndex(2)}> SERVICES JURIDIQUES</Tab>
      <Tab onClick={()=>setIndex(3)}>SERVICES SOCIAUX</Tab>
    </TabList>

    <TabPanel>
      <div className='row' style={{padding:"30px"}}>
<div className='col-md-5'>
<h1  id='service-COMPTABILITEETFINANCE-id'>COMPTABILITE ET FINANCE </h1>
       <hr/>
       <ul style={{listStyle:"circle"}}>
        <li>Tenue de la comptabilité générale</li>
        <li>Tenue des livres comptables légaux</li>
        <li>Tenue de la comptabilité analytique</li>
        <li>Etablissement des états financiers</li>
        <li>Assistance et supervision comptable</li>
        <li>Commissariat aux comptes</li>
        <li>Assistance pour les dossiers de crédits bancaires</li>
       </ul>
      </div>
      <div className='col-md-7' style={{textAlign:"center"}}>
<img style={{width:'500px'}} src='images/finance.jpg'/>
</div>
</div>

    </TabPanel>
    <TabPanel >
    <div className='row' style={{padding:"30px"}}>
<div className='col-md-6'>
<h1  id='service-fiscal-id'>SERVICES  FISCAUX</h1>
       <hr/>
       <ul style={{listStyle:"circle"}}>
        <li>Accompagnement des sociétés en matière de respect du Droit Fiscal Tunisien</li>
        <li>Assistance en matière de respect des conventions fiscales internationales</li>
        <li>Etablissement des diverses déclarations fiscales</li>
        <li>Optimisation du résultat fiscal</li>
        <li>Assistance en cas de contrôle de l’administration fiscale</li>
       </ul>      </div>
       <div className='col-md-6'>
<img style={{width:'500px'}} src='images/fisc.jpg'/>
</div>
</div>

    </TabPanel>
    <TabPanel >
    <div className='row' style={{padding:"30px"}} >
<div className='col-md-6'>
<h1 id='service-juridique-id'>SERVICES JURIDIQUES</h1>
       <hr/>
       <ul style={{listStyle:"circle"}}>
        <li>Accomplissement  des formalités de constitution de société auprès des différentes administrations</li>
        <li>Accompagnement des sociétés étrangères en matière de respect des lois et réglementations Tunisiennes</li>
        <li>Conseil en droit des sociétés</li>
        <li>Conseil en droit commercial</li>
        <li>Conseil en droit du travail et de la Sécurité Sociale</li>
        <li>Conseil en droit de change</li>
        <li>Rédaction des statuts, Procès Verbaux et autres actes et documents</li>
        <li>Formalités relatives à la Banque Centrale de Tunisie</li>

       </ul>
      </div>
      <div className='col-md-6'>
<img style={{width:'500px' , height:'100%'}} src='images/juri.jpg'/>
</div>
</div>
    </TabPanel>
    <TabPanel id='divvv'>
    <div className='row' style={{padding:"30px"}}>
<div  className='col-md-6'>
<h1 id='service-social-id'>SERVICES SOCIAUX</h1>
       <hr/>
       <ul style={{listStyle:"circle"}}>
        <li>Etablissement des déclarations sociales</li>
        <li>Etablissement des fiche de paie</li>
        <li>Elaboration de contrats de travail</li>
        <li>Assistance lors de contrôle d’inspection de travail ou de sécurité sociale</li>
        <li>audit sociale</li>
        <li>conseils et organisation en GRH</li>
        
     

       </ul>      </div>
       <div className='col-md-6' >
<img style={{width:'500px'}} src='images/admin.jpg'/>
</div>
</div>
    </TabPanel>
  </Tabs>

</>
  )
}

export default Services