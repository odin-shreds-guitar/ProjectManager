import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import Detail from './views/Detail';
import Edit from './views/Update';

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