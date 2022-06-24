import React, { useState } from "react";
// import "../EstilosCss/Inicio.css"
import { useDispatch } from "react-redux";
export default function Inicio() {

  const dispatch = useDispatch();
  const [nombre, setNombre] = useState(""); // declaro un estado inicial nombre, inicialmente vacio
  // en nombre guardo, lo que escribo en la busqueda
  // function handleSubmit(e) { // cuando se accione, reseteo el estado 
  //     e.preventDefault();
  //     setNombre(""); 
  // }
  
  function buscar (){
      if(nombre != ''){
         
          dispatch(search(nombre));
          
          // console.log('llego aqiii')
          setNombre("")
          alert("Muchas Gracias por Participar!")
      }
      
  }
 

  return (
    <div className="div1">
      <div className="div">
        <h1>LA CALLE ANDA DICIENDO</h1>
        <h2>"La universidad está atravesada por problemáticas del mundo contemporáneo. <br/>Sumate a evidenciar públicamente las problemáticas que te afectan"</h2>
        <input type="input" className="input" placeholder="Frase..." value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <button type="submit" className="button" onClick={() => buscar()}> Enviar </button>
      </div>
      </div>



  );
}

