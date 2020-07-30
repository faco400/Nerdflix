import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Home from './Page/Home';
import CadastroVideo from './Page/Cadastro/Video';
import CadastroCategoria from './Page/Cadastro/Categoria';
const Pagina404 = () => (<div>Pagina404</div>)

ReactDOM.render(
// exact faz com que o navegador abra aquela pagina quando inserido
// o caminho exatamento como estar. sem o exact ele abre a pagina
// por exemplo no caminho "/" pois foi esta em ordem de prioridade.
// portanto cuidado com a ordem e a questao do exact
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/Cadastro/Video" component={CadastroVideo}/> 
      <Route path="/Cadastro/Categoria" component={CadastroCategoria}/> 
      <Route component={Pagina404}/>
      
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


