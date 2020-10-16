import React from 'react';
import  './Backdrop.css'

const backdrop =(props)=>
<div className="BackDrop" id="back"onClick={props.clicked}></div>

export default backdrop;