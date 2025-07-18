import { useState } from 'react';

function ClickCounter( {incrementBy = 1, initialValue = 0} ){
    const [counter, setCounter] = useState(initialValue);
    
    return(
        <>  
            <h1> Prosty licznik w React! </h1>
            <h2> Liczba kliknięć: {counter} </h2>
    
            <button type="button" onClick={() => setCounter(counter - 1)}> [ - ] </button>
            &nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => setCounter(counter + incrementBy)}> [ + ] </button>
                
            <br /><br />
            <button type="button" onClick={() => setCounter(0)}> Resetuj </button>
    
        </>
    );

}

export default ClickCounter