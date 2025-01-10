import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';



function Consulta() {
  let consul = localStorage.getItem('mamografia');

  setTimeout(() => {
    window.print();
  }, 1000);
 
  const navigate = useNavigate();
 setTimeout(() => {
  navigate('/App');
 }, 10000);
  return (
    <div id="Cons">
      <div className="bloco">
        <div id="titulo2">
         HOSPITAL DA MULHER.
       </div>
       <div id="subtitulo2">
       MAMOGRAFIA:
       </div>
       <div id="consulta">
        <strong>{consul}</strong>
       </div>
      </div>
    </div>
  );
}



export default Consulta;
