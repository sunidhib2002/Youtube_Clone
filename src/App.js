import Header from './header.js';
import './App.css';
import Sidebar from './sidebar.js'
import RecommendedVideos from './RecommendedVideos.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
