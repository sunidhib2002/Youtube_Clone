import Header from './header.js';
import './App.css';
import Sidebar from './sidebar.js'
import RecommendedVideos from './RecommendedVideos.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchPage from './SearchPage.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
          <Switch>
            <Route path="/search/:searchTerm">
              <div className = "app__page">
                <Sidebar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            </Route>
          </Switch>
        </Router>
     
    </div>
  );
}

export default App;
