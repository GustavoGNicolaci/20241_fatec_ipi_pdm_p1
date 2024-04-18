import React, { Component } from 'react'

export class TarefaLista extends Component {

    render() {
        return (
            <div className='container col-9 mt-3 p-2'>
                <div className='row justify-content-center'>
                    <div className='col-12 border border-black rounded p-2'>
                        <center>{this.props.tarefa}</center>
                    </div>
                </div>
            </div>
        )
    }
}

export default TarefaLista