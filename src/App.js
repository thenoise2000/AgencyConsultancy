import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, InfoSection } from './components';
import  Navbar  from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>    
  );
}

export default App;
