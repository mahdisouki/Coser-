import React, { useContext } from 'react'
import { useState , useEffect, useRef } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
import './Dashboard.css'
// import { GlobalState } from '../GlobalState'
function Dashboard() {
    // const state = useContext(GlobalState) ;
    // const token = state.token.token;
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const token = localStorage.getItem('token');

  //functions
  const getItems = async () => {
    setLoading(true);
    console.log(token);
    try {
      const res = await axios.get("http://localhost:5000/file" , {
        headers : {Authorization: token}
     
    });
      
      setItems(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("desc", desc);
      formData.append("file", fileInputRef.current.files[0]);
      const res = await axios.post(
        "http://localhost:5000/file/add",formData , {headers : {Authorization: token}});
      console.log("res",res);
      Swal.fire({
        title: 'fichier enregistré avec succes!',
        confirmButtonText: 'ok',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          window.location.reload();
        } 
      })
    // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/file/download/${id}`,
        { responseType: "blob" }
      );
      const blob = new Blob([res.data], { type: res.data.type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "file1";
    //   link.download = res.headers["content-disposition"].split("filename=")[1];
      link.click();
    } catch (error) {
      console.log(error);
    }
  };
  const removeFile = async(id) =>{
   try{
    const res = await axios.delete(`http://localhost:5000/file/${id}` , {headers : {Authorization: token}});
    // alert(res.data)
    // window.location.reload();
     }catch (error) {
    console.log(error);
  }
  }
  const removed = (id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFile(id);
        Swal.fire(
          {
            title: 'Supprimé!',
            text: "votre fichier a eté supprimé avec succes",
            icon: 'success',
            showConfirmButton:false
          }
        );
        window.location.reload();
      }
    })
  }

  useEffect(() => {
    getItems();
  }, []);
  if(token){
    return (

    
      <div className='dash' style={{paddingTop: "200px"}}>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Ajouter un fichier
  </button>
      <div className="row" style={{padding: "0px" , margin:"0px"}}>
        {/* {items &&
          items.map((item) => (
            <div className="item" key={item._id}>
              <h3>{item.name}</h3>
              <button onClick={() => downloadFile(item._id)}>
                Download File
              </button>
            </div>
          ))} */}
          {
            items&& items.map((item)=>(
  <div className="col-lg-4" style={{textAlign:"center" , alignItems:"center" , margin:"0px"}} key={item._id}>
          <div class="card">
          <h3>{item.name}</h3>
    <div class="card__content">
    <p class="card__description">{item.description}</p>
    </div>
  </div>
  <button id='download'  onClick={() => downloadFile(item._id)} >
                Download File
              </button>
              <button id='remove'   onClick={() => removed(item._id)} >
                Remove File
              </button>
      </div>
            ))
          }
          
      </div>
     
  
  
  
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ajouter un nouveau fichier</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div className="addItems">
        <input
          type="text"
          placeholder="titre de fichier"
          onChange={(e) => setName(e.target.value)}
        /><br/>
         <select id="framework" style={{width:"100%" , marginLeft:"10px"}} onChange={(e) => setCategory(e.target.value)}>
      <option value="lois">lois</option>
      <option value="news">Actualites</option>
      <option value="default">par defaut</option>
      
  </select>
         <br/>
         <textarea
          type="text"
          placeholder="Description"
          onChange={(e) => setDesc(e.target.value)}
        /><br/>
        <input type="file" ref={fileInputRef} />
       
      </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={addItem}>Add</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    )
  }else{
    return(
      
      <div style={{height:"100vh" , paddingTop:"30%"}}><h1>vous devez connecter!!!!</h1><br></br></div>
    );
  }

}

export default Dashboard