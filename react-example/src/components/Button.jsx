import { useState } from "react";

export const Button = (props) => { 

    const { text } = props;

    const [count, setCount] = useState(0);

    function handlerButton()  { 
        const randomValue = Math.floor(Math.random() * 100) + 1; // Genera un valor aleatorio entre 1 y 100
        alert(`El valor aleatorio es: ${randomValue}`); // Muestra el valor aleatorio en una alerta
        setCount(count + 1); // Incrementa el contador (si deseas mantener esta funcionalidad)
    }

    return (
        <button onClick={ handlerButton }>
           { text } { count }
        </button>
    );
}
