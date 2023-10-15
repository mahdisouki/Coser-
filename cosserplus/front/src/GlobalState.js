import React , {createContext , useState , useEffect} from 'react'

import axios from 'axios'


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
  const [token , setToken] = useState('');
  
  useEffect(()=>{
    // const isLogged = localStorage.getItem("isLogged");
    // if(isLogged){ 
    //     try{
    //         const refreshToken = async () => {
    //             const res = await axios.get('http://localhost:5000/user/refresh_token' , {withCredentials:true})
    //             console.log("ref" , res.data.accesstoken)
    //             setToken(res.data.accesstoken)
          
    //             setTimeout(() =>{
    //               refreshToken()
    //             }, 10 * 60 * 1000)
    //           }
    //            refreshToken()
        
        
             
    //         }catch(err){
    //             console.log(err.response.data.msg)
    //         }
        
    //     }   
      
  },[])
  
   const state ={
    token : [token , setToken],



  }

  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}