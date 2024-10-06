import { useState } from "react";

export const RandomComponent = () => {
    const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setBackgroundColor(colors[randomIndex]);
    };

    return (
        <div style={{ backgroundColor, padding: '20px', textAlign: 'center' }}>
            <h2>Random Background Color</h2>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
};
