import React from 'preact';
import { render } from 'preact';
import { useState } from 'preact/hooks';
import { signal } from '@preact/signals';

function Message() {
    const [cravePoints, setPoints] = useState(0);

    function increment() {
        setPoints(cravePoints+1)
    }

    return (
        <div>
            <h5>{cravePoints} crave points</h5>
            <button id="pressable" onClick={increment}></button>
        </div>     
    );
}

const target = document.getElementById('message');
render(<Message />, target);

