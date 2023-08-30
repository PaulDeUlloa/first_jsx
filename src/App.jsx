import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const personName = "Paul";

  return (
    <div className="App">
      <PersonCard />
    </div>
  );
}

export default App;
