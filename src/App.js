import './App.css';
import { Route, Switch } from 'react-router-dom';
import Movies from './containers/Movies/Movies';
import CharacterDetail from './containers/CharacterDetail/CharacterDetail';

function App() {
  return (
      <div>
        <Switch>
          <Route path="/characters/:characterId" component={CharacterDetail}/>
          <Route path="/" exact component={Movies}/>
        </Switch>
      </div>
  );
}

export default App;
