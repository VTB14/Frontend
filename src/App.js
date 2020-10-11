import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';

function App(props) {
  return (
    <HashRouter>
      <div className='wrapper'>
        <Route exact path='/first' render={ () => <FirstPage store={props.store}/>} />
        <Route path='/second'  render={ () => <SecondPage /> }/>
        <Redirect from='/' to='/first'/>
      </div>
    </HashRouter>
  )
}

export default App;
