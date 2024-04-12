import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

export default class App extends React.Component {
    render() {
        return (
            <div className='container col-10 mt-5 p-2'>
                <div className='row justify-content-center'>
                    <div className='col-8'>

                        <TarefaEntrada />
                        <TarefaLista tarefa = 'Preparar aula de programação'/>
                        <TarefaLista tarefa = 'Fazer feira'/>
                        <TarefaLista tarefa = 'Preparar marmitas'/>

                    </div>
                </div>
            </div>
        );
    }
}