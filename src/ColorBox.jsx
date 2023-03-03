import React, { useState } from 'react';
import {choice} from './helpers.jsx';
import './ColorBox.css';

function ColorBox(props){
    
    const [color, setColor] = useState(choice(props.color));
   
    function changeColor(e){
        let clickedColor = e.target.style.backgroundColor;
        console.log(clickedColor);
        setColor(() => {
            let newColors = props.color.filter(c => c !== clickedColor);

            console.log(newColors);
            return choice(newColors);
        });
    }

    // function changeColor(){
             
    //     setColor(() => {
    //         let newColor;
    //         do {
    //             newColor = choice(props.color);
    //         }while(newColor === color);
            
    //         return newColor;
    //     })
    // }

    function handleClick(e){
        changeColor(e);
    }

    return <div className="ColorBox" onClick={handleClick} style={{backgroundColor : color}}></div>
}

export default ColorBox;