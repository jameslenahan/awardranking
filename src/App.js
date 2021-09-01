import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
function App() {
  return (
<BrowserRouter>
      <Switch>
        <Route exact path='/'
          render={() =>
          <Home>

          </Home>
          }>
        
        </Route>

      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
