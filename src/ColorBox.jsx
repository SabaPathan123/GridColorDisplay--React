import React, { useState } from 'react';
import {choice} from './helpers.jsx';
import './ColorBox.css';

function ColorBox(props){
    
    const [color, setColor] = useState(choice(props.color));
   
    function changeColor(){
             
        setColor(() => {
            let newColor;
            do {
                newColor = choice(props.color);
            }while(newColor === color);
            
            return newColor;
        })
    }

    function handleClick(){
        changeColor();
    }

    return <div className="ColorBox" onClick={handleClick} style={{backgroundColor : color}}></div>
}

export default ColorBox;