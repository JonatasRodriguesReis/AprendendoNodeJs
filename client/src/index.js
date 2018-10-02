import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Provider} from 'react-redux';
import {Store} from './store';
import registerServiceWorker from './registerServiceWorker';
/*class HelloWorld extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World {1+2+3}</h1>
                <p>Testando aplicação</p>
            </div>
        );
    }
};*/

/*const HelloWorld = (props)=>(
    <div>
        <h1>Hello World {props.name}!</h1>
    </div>
);

class Hello extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "Jonatas",
            numero : 0
        };
        this.addCont = this.addCont.bind(this);
    }

    addCont(){
        const contagem = this.state.numero;
        this.setState({numero : contagem+1});
    }

    render(){
        return(
            <div>
                <HelloWorld name = {this.state.nome}/>
                <br/>
                {this.state.numero}<br/>
                <button onClick={this.addCont}>+</button>
            </div>
        );
    }
};*/

ReactDOM.render(
    <Provider store = {Store}>
       <App/>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
    