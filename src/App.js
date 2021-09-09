import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Agency from './pages/agency'

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
        <Route exact path='/agencies'
          render={()=> 
          <Agency>

          </Agency>}
        
        >

        </Route>

      </Switch>
    
    
    </BrowserRouter>
  );
}

export default App;
