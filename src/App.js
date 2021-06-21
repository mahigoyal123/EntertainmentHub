import './App.css';
import Header from './Components/Header';
import SimpleBottomNavigation from './Components/MainNav'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Trending from './Components/Pages/Trending/Trending'
import Movies from './Components/Pages/Movies'
import Search from './Components/Pages/Search'
import Series from './Components/Pages/Series'

function App() {
  return (
    <BrowserRouter>
        <Header/>
    <div className="app">
    <Container>
      <Switch>
        <Route exact path='/' component={Trending}></Route>
        <Route exact path='/movies' component={Movies}></Route>
        <Route exact path='/series' component={Series}></Route>
        <Route exact path='/search' component={Search}></Route>
      </Switch>
    </Container>


    <SimpleBottomNavigation/>
    </div>
    </BrowserRouter>
  );
}

export default App;
