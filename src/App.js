import React, { useEffect, useState } from 'react';
import chapp from './histroy';
import './app.css';
import MensagemPlay from './components/Logo/MensagemPlay';

function App() {
  const [chapters, setChapters] = useState('');
  const [mensager, setMensager] = useState([]);

  useEffect(() => {    

    async function loadChapters() {
      const chaptersDb = await localStorage.getItem('chapters');
      setChapters(JSON.parse(chaptersDb));
    }

    loadChapters();
            
    localStorage.setItem('chapters', JSON.stringify(chapp))
  },[]);

  
  function loopGame() {
    if(chapters[0].script.length !== 0) {

      for(let i=0; i < chapters[0].script.length; i++) {
        if(chapters[0].script[i].status && !chapters[0].script[i].passed) {
          showMensage(chapters[0].script[i], i+1);
          
          const cloneChaptersTwo = chapters;
          const cloneChapters = chapters;
          const mensagers = chapters[0].script[i];
          

          mensagers.status = false;
          mensagers.passed = true;      

          cloneChapters[0].script.splice(i,1);

          const chaptersReload = { ...cloneChapters[0], script: [ mensagers, ...cloneChapters[0].script ] };
          
          cloneChaptersTwo[0] = chaptersReload;

          delay(cloneChaptersTwo, i);

          break;          
        }
      }
    }
  }

  function delay(chap, i) {
    setTimeout(() => {

      const mensagersRight = chap[0].script[i+1];

      if(i+1 !== chapters[0].script.length) {
        mensagersRight.status = true;
        mensagersRight.passed = false;        
      }else {
        console.log('fim de jogo');
        return;
      }

      setChapters(chap);
      loopGame();

    }, 1000)
  }

  function showMensage(history) {
    
    console.log([...mensager,  history]);
    setMensager([...mensager,  history]);
  }
  

  function playGame() {
    loopGame();
    return true
  }

  return (
    <div className="App">
      <h1>Undetermined Studios</h1>
      <div className="container">
        <div className="container-tela">
          <div className="header-tela">

          </div>

          <div className="tela-jogo">
            {chapters ?
              playGame() ? mensager.map( (h, index) => (<MensagemPlay key={index} menssager={h} />)) : ''
             : ''}
          </div>

          <div className="footer-tela">
            {/* <input className="input-jogo" type="text" placeholder="mensagem"/>
            <button className="button-jogo" onClick={()=> false}>send</button> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
