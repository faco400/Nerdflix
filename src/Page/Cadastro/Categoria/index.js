import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const[categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue (chave, valor) {
    //chave: nome, descricão, bla bla
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function HandleChange (infoDosEventos){
    setValue(
      infoDosEventos.target.getAttribute('name'),
      infoDosEventos.target.value
    );
  }
  
  return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
  
        <form onSubmit = {function handleSubmit(infoDosEventos){
          infoDosEventos.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          setValues(valoresIniciais)
        }}>

          <FormField
            label = "Nome Da Categoria" 
            type = "text"
            name = "nome"
            value = {values.nome}
            onChange = {HandleChange}
          />
            
          {/* <div>
            <label>
              Nome da Categoria:
              <input
                type="text"
                name="nome"
                value = {values.nome}
                onChange = {HandleChange}
              />
            </label>
          </div>     */}
          
          <FormField
            label = "Descrição" 
            type = "????" //descobrir
            name = "descricao"
            value = {values.descrição}
            onChange = {HandleChange}
          />


          {/* <div>
            <label>
                Descrição:
                <input
                  type="text"
                  name="descrição"
                  value = {values.descrição}
                  onChange = {HandleChange}
                />
            </label>
          </div> */}

          <FormField
            label = "Cor"
            type = "color" 
            name = "cor"
            value = {values.cor}
            onChange = {HandleChange}
          />    
          
          {/* <div>
            <label>
                  Cor:
                  <input
                    type="color"
                    name="cor"
                    value = {values.cor}
                    onChange = {HandleChange}
                  />
            </label>
          </div> */}
  
  
          <button>
            Cadastrar
          </button>
        </form>
  
  
        <ul>
          {categorias.map((categoria, ) =>{
              return(
                <li key={categoria}>
                  {categoria.nome}
                </li>
              )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    );
}

  export default CadastroCategoria;
