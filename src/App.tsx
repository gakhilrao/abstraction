import React from 'react';
import logo from './logo.svg';
import './App.css';
import Upsc from './classes/Upsc';
import Ias from './classes/Ias';
import ips from './classes/Ips';

function App() {

      //let upsc1 = new Upsc();

      let collector = new Ias();

      let police = new ips();
      police.responsibilities()
      collector.selectedcandidates()


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
