import React from 'react'
import axios from 'axios'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom';
import './Actualites.css'
export default function Actualites() {
const [news, setNews] = useState(null);

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
const getData = async ()=>{
  try{
    const  res =  await  axios.get("http://localhost:5000/file/news");
    setNews(res.data);
    console.log(res.data)
  }
  catch
  (err) {
    console.log(err);
  }
}
  useEffect(  () => {
   getData();
   }, [] );
  return (
    <div className='row' style={{paddingTop:"150px", paddingLeft:"10px",paddingRight:"10px"}}>
    {
      news && news.map((newt)=>(
        <div  className="cardss col-sm-3" key={newt._id}>
  <div className="headerss">
    <span className="iconss">
      <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" fill-rule="evenodd"></path>
      </svg>
    </span>
    <p className="alertss">{newt.name}</p>
  </div>

  <p className="messagess">
    {newt.description}
  </p>

  <div className="actionsss">
    <button onClick={() => downloadFile(newt._id)} className="read">
      Telecharger
    </button>

   
  </div>
</div>


      )
      )}
    </div>
  )
}
