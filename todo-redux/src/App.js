import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <h2 className="App-title">{this.props.title}</h2>
                </div>
                <div>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
