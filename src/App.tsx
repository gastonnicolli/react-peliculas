import React from 'react';
import {  } from 'react-router';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import Menu from './utils/Menu';
import rutas from './route-config';
import configurarValidaciones from './Validaciones';

configurarValidaciones();

function App() {

  return (
    <>
    <BrowserRouter>
      <Menu/>
      <div className='container'>
        <Switch>  
          {rutas.map(ruta => <Route key={ruta.path} path={ruta.path} 
          exact={ruta.exact}>
            <ruta.componente />
          </Route>)}
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
