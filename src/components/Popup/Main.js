import React,{ useState } from 'react';
import Dialog from './Dialog';
import './MainApp.css';

const Main = () => {
  const [ pop, setPop ] = useState(false)
  const Jump = () =>{
    setPop(true)
  }
  const Off = () =>{
    setPop(false)
  }
  return <div>
    	<div className='MainApp'>
                <div className='Title'>Example Draggable Popper</div>
				<div className='button' onClick={Jump}> Show Popup </div>
                <Dialog onClose={Off} show={pop}/>
			</div>
  </div>;
};

export default Main;
