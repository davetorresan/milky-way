import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Blog from './components/blog/blog'
import Team from './components/team/team'
import './responsive.css'


import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



const App = () => {


  return(
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={ Home }/>
        <Route path="/about" exact component={ About }/>
        <Route path="/blog" exact component={ Blog }/>
        <Route path="/team" exact component={ Team }/>
      </Router>
    </div>
  )

}

export default App;