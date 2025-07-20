import { useState } from "react";

function List(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    // Dodawanie zadania do tablicy
    function addTask(e){
        e.preventDefault();

        if(input.trim() == ""){ // sprawdzanie czy input nie jest pusty / wyciananie wielu spacji
            return;
        }

        setTasks([...tasks, input]); // dodawanie nowego zadania do tablicy z poprzednimi zadaniami
        setInput(""); // wyczyszczenie inputa
    }


    // Usuwanie zadania z tablicy
    function deleteTask(index){
        setTasks(tasks.filter((tresc, taskIndex) => taskIndex !== index)); // filter - filtruje tablice i sprawdza dla kazdego elementu czy spelnia warunek po =>

    }

    return(
        <div id="toDoList">
            <h1> Lista zadań </h1>

            <form onSubmit={addTask}> {/* wywolanie funkcji przy przeslaniu */}
                <h3>
                    Dodaj zadanie: &nbsp;
                    <input type="text" placeholder="Zadanie..." value={input} onChange={(e) => setInput(e.target.value)}/> 
                        {/* onchange ustawia wartosc input za pomoca funkcji */}
                        {/* value jest tu potrzebne po to zeby wyczyscic co jest wpisane w input za pomoca funkcji addTask ( setInput("") ) */}
                </h3>
                
                <button type="submit"> Zapisz </button>
            </form>

            <ul id="taskDisplay">
                {/* Wypisanie z tablicy wartosci */}
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className="liTask"> {/* div display: flex */}
                            <p>{task}</p>
                            <button type="button" className="btnDeleteTask" onClick={() => deleteTask(index)}>Usuń</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default List