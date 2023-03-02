import React from 'react';
import ColorBox from './ColorBox.jsx';
import './ColorContainer.css';

function ColorContainer(){
    const number = 18;
    const colors = ['#000', '#FFB6C1', '#FF0000', '#290be6', '#fabc02'];

    const boxes = Array.from({length : number}).map(() => {
        return <ColorBox color={colors}/>
    })
    return (<div className="ColorContainer">{boxes}</div>);
}

export default ColorContainer;