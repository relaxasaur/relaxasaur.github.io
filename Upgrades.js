import React from 'preact';
import { render } from 'preact';

function Upgrades() {
    const points = window.points;
    const pick = document.getElementById("pick")

    if (points>=1000) {
        pick.style.opacity = 1;
    } 
    
    return (
        <div>
            <button id="pick" >1000</button>
        </div>
    );
}

const target = document.getElementById('upgrades');
render(<Upgrades />, target);