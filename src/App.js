// import logo from './logo.svg';
import React, { useState } from 'react';
import './Appa.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
}
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title='TextUtils- Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      //document.title='TextUtils- Light Mode';
    }
  }
  return (
    <> 
    <Router>
<Navbar title="TextUtils" aboutText="About-textutils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">

<Switch>
  <Route exact path="/about">
    <About mode={mode}/>
  </Route>
          
  <Route exact path="/">
    <Textform showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
  </Route>
</Switch>

</div>
</Router>
  </>
  );
}

export default App;
