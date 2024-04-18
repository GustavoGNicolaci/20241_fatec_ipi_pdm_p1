import React, { Component } from 'react';

export class TarefaEntrada extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novaTarefa: '' 
        };
    }

    onFormSubmit = (evento) => {
        evento.preventDefault();
        const novaTarefa = evento.target[0].value; 
        this.setState({ novaTarefa }); 
        this.props.onEnviarTarefa(novaTarefa);
        console.log(novaTarefa); 
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.props.dica}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100">OK</button>
            </form>
        )
    }
}

TarefaEntrada.defaultProps = {
    dica: 'Digite a descrição de uma nova tarefa'
}

export default TarefaEntrada;