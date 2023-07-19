import React,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import LearnMore from './Components/LearnMore';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled !","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled !","success");
    }
  }

  return (
    <>    
      <Router>
        <Navbar title = "Learn-React" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        {/* <Navbar/> */}
        <div className="container mt-3">
          <TextForm showAlert ={showAlert} heading = "Enter your text!" mode={mode}/>
          {/* <About/> */}
        </div>
        <Routes>
          <Route path="/about" element={<About/>} />            
          <Route path="/learnMore" element={<LearnMore  mode={mode}/>} />            
        </Routes>
    </Router>
    </>
   
  );
}

export default App;
