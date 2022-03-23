import './App.css';

function App() {

  function clickA(){
   alert("Hellommxmxccm");
  }
  return (
    
    <div className="App">
      <button type= "Submit" id="button-a" onSubmit={clickA}>Buttton</button>
    </div>
  );
}

export default App;
