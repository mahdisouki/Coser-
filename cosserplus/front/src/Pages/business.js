import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect } from 'react';
import './Business.css'
export default function Business() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  return (
    <>
    <div className='row' style={{ paddingTop:"200px"}}>
    <div className='col-md-6 sect'>
    <h1 style={{color:'#808080' , padding:"20px"}}>Doing Business</h1>
       <hr/>
     <p style={{fontWeight:"500" , fontSize:"20px"}}>Investir en Tunisie, c’est bénéficier de plusieurs avantages :</p>
<ul style={{padding:"20px" , color:"black"}}>
    <li >un pays convivial, dynamique et ouvert .</li>
<li  >une liberté d’investir dans de nombreux secteurs .</li>
<li >une législation claire et très favorable à l’investissement .</li>
<li >un guichet unique pour simplifier toutes les procédures administratives .</li>
<li >de nombreux avantages pour plusieurs secteurs d’activité .</li>
<li >un personnel compétent avec une aptitude à maîtriser rapidement les nouvelles technologies .</li>
<li >une véritable protection juridique pour l’investisseur .</li>
<li >un marché de change avec une liberté de transfert .</li>
<li >une infrastructure fonctionnelle sans cesse en amélioration.</li>
</ul>

    </div>
    <div className='col-md-6' style={{textAlign:"center"}}>
     <img src='images/tunisie.png' style={{ paddingTop: "100px"}}/>
    </div>
  </div>



 
<Tabs selectedTabClassName={"sss"}>
  <TabList>
    <Tab>La Tunisie en Bref</Tab>
    <Tab>Cadre de vie</Tab>
    <Tab> Investissement Etranger</Tab>
    <Tab>Cadre social</Tab>
    <Tab>Emploi d'étrangers</Tab>
    <Tab></Tab>
  </TabList>

  <TabPanel>
    <div className='row' style={{padding:"30px"}}>
<div className='col-md-5'>
<h1>    La Tunisie en Bref</h1>
     <hr/>
     <ul   style={{listStyle:"circle"}}>
<li>Capitale : Tunis</li>

<li>Langue officielle : Arabe</li>

<li>Autres langues : Français, anglais, italien et allemand</li>

<li>Monnaie : Dinar Tunisien (TND)</li>

<li>Taux de change moyen : 1 TND = 0.30 Euro = 0.33 USD (Mars 2023)</li>

<li>Horaire : GMT+1</li>

<li>Climat : Méditerranéen, 12°C en hiver et 30°C en été (en moyenne)</li>

<li>Population : 12 millions d’habitants</li>
</ul>
    </div>
    <div className='col-md-7' style={{textAlign:"center"}}>
<img style={{width:'500px'}} src='images/77.jpg'/>
</div>
</div>

  </TabPanel>
  <TabPanel>
  <div className='row' style={{padding:"30px"}}>
<div className='col-md-6'>
<h1>Cadre de vie Agréable</h1>
     <hr/>
   
      <p style={{fontWeight:"500" , fontSize:"20px"}}>La Tunisie offre les commodités nécessaires à un confort idéal :</p> <br/>
      <ul style={{listStyle:"circle"}}>
      <li>Un riche patrimoine culturel, artistique, historique et archéologique.</li>
      <li>Des quartiers résidentiels modernes de haut standing à des coûts compétitifs.</li>
      <li>De nombreux centres commerciaux et hypermarchés d’enseignes internationales.</li>
      <li>Des écoles étrangères : française, américaine, canadienne, russe, anglaise, italienne…</li>
      <li>Des infrastructures touristiques, de loisirs et de sports variées et développées.</li>
      <li>Des prestations médicales très développées en termes de compétences médicales et d’infrastructures de santé aux normes internationales.</li>
    </ul></div>
     <div className='col-md-6'>
<img style={{width:'500px'}} src='images/99.jpg'/>
</div>
</div>

  </TabPanel>
  <TabPanel>
  <div className='row' style={{padding:"30px"}} >
<div className='col-md-6'>
<h1>Facilité de l’Investissement Etranger</h1>
     <hr/>
     <ul style={{listStyle:"circle"}}>
      <li>La TUNISIE est signataire de 54 accords bilatéraux de promotion et de protection des investissements</li>
      <li>Egalité entre les investisseurs tunisiens et étrangers au niveau des obligations et des garanties.</li>
      <li>Liberté d’investissement dans la majorité des secteurs.</li>
      <li>Libre détention par les étrangers de 100% du capital social (à l’exception de quelques activités).</li>
      <li>Aucune autorisation préalable requise (à l’exception de quelques activités).</li>
      <li>Facilité d’Importation et d’Exportation.</li>
      <li>Importation libre des matériels usés.</li>
      <li>Liberté d’acquisition de bâtiments et de terrains non agricoles pour des opérations d’investissement direct.</li>
      <li>Affectation d’un douanier personnel à l’usine (évitant ainsi le retard des formalités d’import/export).</li>
      <li>Libre gestion de comptes en devises ou en dinars convertibles.</li>
      <li>Libre Rapatriement du capital et des revenus.</li>
      

     </ul>
    </div>
    <div className='col-md-6'>
<img style={{width:'500px'}} src='images/19724.jpg'/>
</div>
</div>
  </TabPanel>
  <TabPanel id='divvv'>
  <div className='row' style={{padding:"30px"}}>
<div  className='col-md-6'>
<h1>Cadre Social Avantageux</h1>
     <hr/>
     <ul style={{listStyle:"circle"}}>
     <li> Salaire minimum d’un ouvrier : près de 130€ (toutes charges incluses).</li>
     <li>Possibilité de recruter de jeunes apprentis.</li>
     <li>Encouragement de recrutement des jeunes diplômés: à travers des primes et exonérations.</li>
     <li>Ingénieurs, techniciens, ouvriers qualifiés disponibles sur le marché</li>
     <li>Personnel trilingue parmi  arabe/français/anglais/italien/allemand.</li>
     <li>Centres sectoriels de formation professionnelle disponibles sur tout le territoire.</li>
     <li>Pas de syndicat au sein de l’entreprise en deçà de 40 ouvriers permanents.</li>
     <li>Possibilité de recruter à plein temps ou en temps partiel, sous contrat à durée déterminée ou indéterminée.</li>
     <li>Possibilité de sous-traiter la main d’œuvre auprès de sociétés spécialisées.</li>
     <li>Code de travail clair, précisant les droits et obligations de l’employeur et l’employé.</li>
   

     </ul>      </div>
     <div className='col-md-6' >
<img style={{width:'500px'}} src='images/66.jpg'/>
</div>
</div>
  </TabPanel>
  <TabPanel id='divvv'>
  <div className='row' style={{padding:"30px"}}>
<div  className='col-md-6'>
<h1>Cadre Règlementaire Incitatif</h1>
     <hr/>
     <ul style={{listStyle:"circle"}}>
     
     <li>La TUNISIE est signataire de 52 conventions de non-double imposition.</li>
     <li>Exonération fiscale jusqu’à 10 ans pour certains investissements</li>
     <li>Une imposition des bénéfices à un taux de 15 %.</li>
     <li>Prise en charge des contributions sociales et patronales pour certains investissements jusqu’à 10 ans.</li>
     <li>Retenue à la source de 10% sur les dividendes perçus.</li>
     <li>Exonération des droits de douane et de la TVA, quelle que soit le pays d’origine des biens et matériels importés.</li>
     <li>Achat des biens et services locaux en hors TVA.</li>
     <li>Incitations financières jusqu’à 1/3 du coût du projet.</li>
     <li>Primes d’investissement pour les projets industriels dans les zones de développement régional et pour les projets touristiques et agricoles.</li>
     <li>Subventions à l’investissement pour la protection de l’environnement, la promotion de la technologie et de la R&D, le développement régional ou agricole.</li>
   

     </ul>      </div>
     <div className='col-md-6' >
<img style={{width:'500px'}} src='images/88.jpg'/>
</div>
</div>
</TabPanel>

</Tabs>
</>
  )
}
