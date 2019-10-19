import React from 'react';
import '../App.css';
import '../colorPage.css';

let ControlBar = (props) => {
    let { open, close } = props;
    let className = (open) ? 'far fa-arrow-alt-circle-left' : 'far  fa-arrow-alt-circle-right'
    console.log(1)
    return (
        <div className="control-bar" >
               <div onClick={() => close()} className="icon-container">
                   <i className={className}></i>
                </div>
         </div>
    )
}

export default ControlBar;