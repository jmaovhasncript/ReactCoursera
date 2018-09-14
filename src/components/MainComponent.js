import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishdetailComponent from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {Switch,Route,Redirect} from 'react-router-dom';

class Main extends Component {      
  constructor (props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }
 
  render() {

    const HomePage = ()=>{
        alert("home");
        return (
            <Home/>
        );
    }

    return (
      <div className="App">
      <Header />
        <Switch>
            <Route path='/home' Component={HomePage}></Route>
            <Route exact path='/menu' Component={()=><Menu  dishes={this.state.dishes}/>}></Route>
            <Redirect to='/home' />
        </Switch>
     <Footer />
      </div>
    );
  }
}

export default Main;
