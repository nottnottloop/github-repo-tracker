import './App.css';
import './image.css'
import Form from './components/Form'
import spooky from './spooky.webp'

function App() {
  return (
    <div>
      <p>Welcome to the scary darkmode github repo tracker</p>
      <img className="spooky" src={spooky} width="500" alt="Spooky" />
      
      <Form />
    </div>
  );
}

export default App;