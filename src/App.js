import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import RepoDetails from './containers/RepoDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCodeBranch, faEye, faSearch} from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faCodeBranch, faEye, faSearch);

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Github Repository Search</h1>
        <div className="app-container">
          <SearchBar />
          <RepoDetails />
        </div>
      </div>
    );
  }
}

export default App;
