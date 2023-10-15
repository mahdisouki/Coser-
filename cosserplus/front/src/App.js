import {Route , BrowserRouter as Router , Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Investir from './Pages/Investir';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Business from './Pages/business';
import Liens from './Pages/Liens';
import { useEffect } from 'react';
import Actualites from './Pages/Actualites';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import {DataProvider} from './GlobalState'

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  
  });
  return (
    
    <Router>
      <Navbar/>
      <DataProvider>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/investir' element={<Investir/>}/>
<Route path='/business'element={<Business/>}/>
<Route path='/Liens'element={<Liens/>}/>
<Route path='/actualité' element={<Actualites/>}/>
<Route path='/loginnabil' element={<Login/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>
   </DataProvider>
   <Footer/>
    </Router>
  );
}

export default App;
