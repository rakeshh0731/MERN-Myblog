import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import NotFound from "./pages/NotFound";
//components
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
        <NavBar/>
        <div className='max-w-screen-md mx-auto pt-20'>
      <Switch>
              <Route path="/" exact component = {Home} >
              </Route>
              <Route path="/about" exact component = {About} >
              </Route>
              <Route path="/articles-list" exact component = {ArticlesList} >
              </Route>
              <Route path="/article/:name" exact component={Article}></Route>
              <Route component={NotFound}></Route>
      </Switch> 
        </div>
    </Router>
  );
}

export default App;
