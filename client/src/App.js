import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './components/Detail';
import Edit from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        < Main default path="/" />
        < Detail path="/projects/:id" /> 
        < Edit path="/projects/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;