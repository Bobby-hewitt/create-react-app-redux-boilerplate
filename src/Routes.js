import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'

import styles from './App.css'

const Routes = () => (
  <div style={{padding:'20px'}}>
    <header>
      <Link style={{paddingRight: '10px'}}to="/">Home</Link>
      <Link style={{paddingRight: '10px'}}to="/about">About</Link>
    </header>

    <main>
      <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      </div>
    </main>
  </div>
)

export default Routes;
