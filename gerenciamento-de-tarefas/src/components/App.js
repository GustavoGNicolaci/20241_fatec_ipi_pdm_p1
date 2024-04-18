import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaTarefaDefault: ['Preparar aula de programação', 'Fazer feira', 'Preparar marmitas'],
            listaTarefaUsuario: []
        };
    }

    adicionarTarefaUsuario = (novaTarefa) => {
        this.setState(StateAnterior => ({
            listaTarefaUsuario: [...StateAnterior.listaTarefaUsuario, novaTarefa]
        }));
    }

    render() {
        if (this.state.listaTarefaUsuario.length > 0) {
            return (
                <div className='container col-10 mt-5 p-2'>
                    <div className='row justify-content-center'>
                        <div className='col-8'>
                            <TarefaEntrada onEnviarTarefa={this.adicionarTarefaUsuario} />

                            {this.state.listaTarefaUsuario.map((tarefa, index) => (
                                <TarefaLista key={index} tarefa={tarefa} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='container col-10 mt-5 p-2'>
                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <TarefaEntrada onEnviarTarefa={this.adicionarTarefaUsuario} />

                        {this.state.listaTarefaDefault.map((tarefa, index) => (
                            <TarefaLista key={index} tarefa={tarefa} />
                        ))}
                    </div>
                </div>
            </div>
        );   
    }
}