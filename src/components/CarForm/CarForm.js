import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import carros from '../CarDetail/CarDetail';
import '../CarForm/CarForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarForm = () => {
  const [carData, setCarData] = useState({
    marca: '',
    modelo: '',
    tipo: '',
    cor: '',
    ano: ''
  });

  const [carsArray, setCarsArray] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const adicionaCarro = () => {
    if (!carData.marca || !carData.modelo || !carData.tipo || !carData.cor || !carData.ano) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novoCarro = {
      id: carsArray.length + 1,
      ...carData,
    };

    // Adicionar o novo carro ao array importado
    carros.push(novoCarro);

    // Adicionar o novo carro ao array do estado local
    setCarsArray((prevCars) => [...prevCars, novoCarro]);

    // Limpar o formulário
    setCarData({
      marca: '',
      modelo: '',
      tipo: '',
      cor: '',
      ano: ''
    });

    // Mostrar mensagem de sucesso
    setSuccessMessage("Carro adicionado com sucesso!");
    // Limpar a mensagem após alguns segundos
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Limpa a mensagem após 3 segundos
  };

  const handleCancelAdd = () => {
    setCarData({
      marca: '',
      modelo: '',
      tipo: '',
      cor: '',
      ano: ''
    });
  };

  return (
    <div>
      <NavBar />
      <div className='CarForm'>
        <h1>Adicione os carros: </h1>
        <div className='formulario'>
          <form>
            <label>
              <div className='nome'>Marca:</div><br />
              <input id='input' type="text" placeholder="Digite a marca do veiculo" name="marca" value={carData.marca} onChange={handleInputChange} required minLength="2" />
            </label>
            <br /><br />
            <label>
              <div className='nome'>Modelo:</div><br />
              <input id='input' type="text" placeholder="Digite o modelo do veiculo:" name="modelo" value={carData.modelo} onChange={handleInputChange} required minLength="2" />
            </label>
            <br /><br />
            <label>
              <div className='nome'>Tipo:</div><br />
              <input id='input' type="text" placeholder="Digite o tipo do veiculo:" name="tipo" value={carData.tipo} onChange={handleInputChange} required minLength="2" />
            </label>
            <br /><br />
            <label>
              <div className='nome'>Cor:</div><br />
              <input id='input' type="text" placeholder="Digite a cor do veiculo:" name="cor" value={carData.cor} onChange={handleInputChange} required minLength="2" />
            </label>
            <br /><br />
            <label>
              <div className='nome'>Ano:</div><br />
              <input id='input' type="number" placeholder="Digite o ano do veiculo:" name="ano" value={carData.ano} onChange={handleInputChange} required min="1900" max="2099" />
            </label>
            <br /><br />
            <button id='danger' className='btn btn-success' type="button" onClick={adicionaCarro}>
              Adicionar
            </button><br /><br />
            <button id='cancel' className='btn btn-danger' type="button" onClick={handleCancelAdd}>
              Cancelar
            </button>
          </form>
          {successMessage && <div className="success-message">{successMessage}</div>}
          <br />
        </div>
        <div className='CarrosAdd'></div><br /><br />
      </div>
    </div>
  );
};

export default CarForm;
