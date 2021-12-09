import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Router>
        < Main path="/" />
        < Detail path="/projects/id" /> 
      </Router>
    </div>
  );
}

export default App;
