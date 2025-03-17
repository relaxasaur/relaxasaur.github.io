import React from 'preact';
import { render } from 'preact';
import { useState } from 'preact/hooks';
import cravePoints from './Points';

function Message() {
    const [points, setPoints] = useState(cravePoints);
    function increment() {
        setPoints(points+1);
    };
    if (points>=1000) {
        document.getElementById("pick").style.opacity = 1;
        document.getElementById("pick").innerHTML = "";
    
    }
    
    return (
        <div>
            <button id="pick">1000</button>
            <h5>{points} crave points</h5>
            <button id="pressable" onClick={increment}></button>
        </div>     
    );
}

const target = document.getElementById('message');
render(<Message />, target);

