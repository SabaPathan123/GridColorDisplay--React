import React from 'react';
import ColorBox from './ColorBox.jsx';
import './ColorContainer.css';

function ColorContainer(){
    const number = 18;
    const colors = ['black', 'red', 'green', 'blue', 'orange'];

    const boxes = Array.from({length : number}).map(() => {
        return <ColorBox color={colors}/>
    })
    return (<div className="ColorContainer">{boxes}</div>);
}

export default ColorContainer;