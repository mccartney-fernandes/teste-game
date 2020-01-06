import React, { useEffect, useState } from 'react';
// import chapters from './histroy';
import './app.css';
import MensagemPlay from './components/Logo/MensagemPlay';

function Chapters() {
  const [chapters, setChapters] = useState('');
  const [charpterEd, setChapterEd] = useState([]);

  useEffect(() => {    

    async function loadChapters() {
      const chaptersDb = await localStorage.getItem('chapters');
      setChapters(JSON.parse(chaptersDb));
    }

    loadChapters()
    
    // localStorage.setItem('chapters', JSON.stringify(chapters))
  },[]);

  function loopGame() {
    // if(chapter.length !== 0) {
    //   chapter.map(c => console.log(c.actor))
    // } 
  
    console.log(chapters);
  }

  return (
    <div className="Chapters">
      <h1>Undetermined Studios</h1>
      <div className="container">
        <div className="container-tela">
          <div className="header-tela">

          </div>

          <div className="tela-jogo">
            {chapters ? loopGame() : ''}
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

export default Chapters;
