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

// const [project,setProject] = useState ("Elegant Workspace");
// const [slogan,setSlogan] = useState ("Exclusive designs");
// const [repo,setRepo] = useState ("");
// const [demo,setDemo] = useState ("");
// const [tecno,setTecno] = useState ("React JS, MongoDB");
// const [desc,setDesc] = useState ("Lorem, ipsum dolor sit amet consectetur adipisicing elit.Libero, delectus? Voluptates at hic aliquam porro ad suscipitharum laboriosam saepe earum doloribus aperiam, ullam culpaaccusantium placeat odit corrupti ipsum!");
// const [nameAuthor,setNameAuthor] = useState ("Emmelie Björklund");
// const [job,setJob] = useState ("Full Stack Developer");

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

//  console.log (dataForm) )}




// const handleForm = (ev) => {
//   ev.preventDefault()
// }


// const handleProject = (ev) => {
//   if (ev.targe.value === "") setProject(ev.target.value);
// };

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
