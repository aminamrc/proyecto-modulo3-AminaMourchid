import "../scss/App.scss";
// import cover from '../images/cover.jpeg';
// import user from '../images/user.jpeg';
import logo from '../images/logo.png';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from "./Footer";
import { useState } from "react";

function App() {



const [dataForm, setDataForm] = useState ({
  project: "", //Elegant Workspace
  slogan: "", //Exclusive designs
  repo: "",
  demo:"",
  tecno: "", //React JS, MongoDB
  desc: " ", //"Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpaaccusantium placeat odit corrupti ipsum!",
  author: "",//Emmelie Björklund
  job: "",//Full Stack Developer

});


const fillForm = (key, value) => {
setDataForm ({ ...dataForm, [key]: value}) }


  return (
  <>
  <body>
    <div className="container">
       <Header/>
     
      <main className="main">
        <Card dataForm={dataForm} /> 
        
        <Form dataForm={dataForm} setDataForm = {setDataForm } fillForm= {fillForm} />
        
      
    
    </main>
      
    
   </div> 
   <Footer/>
  </body>
  </>
  )

}

export default App
