import './App.css'
import ClickCounter from './components/ClickCounter';


function App(){

  return(
    <>  
      <ClickCounter />
      <ClickCounter incrementBy={5}/>
      <ClickCounter initialValue={10}/>
    </>
  );

}

export default App
