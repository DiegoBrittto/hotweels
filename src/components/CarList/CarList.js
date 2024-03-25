import '../CarList/CarList.module.css';
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import carros from "../CarDetail/CarDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function CarList() {
  const [listaDeCarros, setListaDeCarros] = useState([...carros]);
  const [carroEditado, setCarroEditado] = useState(null);

  const excluiCarro = (id) => {
    const novaListaDeCarros = listaDeCarros.filter(carro => carro.id !== id);
    setListaDeCarros(novaListaDeCarros);
    carros.splice(0, carros.length, ...novaListaDeCarros);
  };

  const editarCarro = (carro) => {
    setCarroEditado(carro);
    // Aqui você pode abrir um modal ou fazer qualquer outra ação para edição
    console.log("Editar carro:", carro);
  };
  return (
    <div>
      <NavBar />
        <br />
        <h2>Lista De Carros</h2>
        <br />
        <br />
        <br></br>
        {listaDeCarros.map((carro, id) => {
          return (
            <div className="">
              <div className='listcar'>
                    <span>Marca: {carro.marca}</span>
                    <br />
                    <span>Modelo: {carro.modelo}</span>
                    <br />
                    <span>Tipo: {carro.tipo}</span>
                    <br />
                    <span>Tipo: {carro.cor}</span>
                    <br />
                    <span>Ano: {carro.ano}</span>
                    <br /><br/>
              </div>
                    <button id='danger'className='btn btn-danger' onClick={() => excluiCarro(carro.id)}>
                      Excluir
                    </button> <br/><br/>
                    <button id='cancel'className='btn btn-primary ml-2' onClick={() => editarCarro(carro)}>
                      Editar
                    </button>
              
            </div>
          );
        })}
      </div>
  );
}

export default CarList;
