import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Projects from "./projects/Projects";
import Employees from './employees/Employees';
import Timesheets from './timesheets/Timesheets';
import Navigation from './nav/Navigation';

class App extends React.Component {
  state = {
    counter: 0,
  }
  crementor = (val, e) => {
    // this.setState({counter: this.state.counter + val});
    // the better way to do it to ensure events dont get skipped and that the 
    // prev state is always referenced when running the next set state
    this.setState((state) => {
      return { counter: state.counter + val }
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <div className="container">
              <Navigation />
              <Switch>
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/employees' component={Employees} />
                <Route exact path='/timesheets' component={Timesheets} />
                <Redirect to='/employees' />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
        <h2>{this.state.counter}</h2>
        <button onClick={this.crementor.bind(this, -1)}>-</button>
        <button onClick={this.crementor.bind(this, 1)}>+</button>
      </div>

    );
  }
}

export default App;
