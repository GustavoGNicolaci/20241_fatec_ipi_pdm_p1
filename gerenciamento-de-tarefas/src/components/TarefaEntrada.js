import React, { Component } from 'react'

export class TarefaEntrada extends Component {
    render() {
        return (
            <form>
                <div class="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={this.props.dica} />
                </div>
                <button type="button" class="btn btn-outline-primary w-100">OK</button>
            </form>
        )
    }
}

export default TarefaEntrada

TarefaEntrada.defaultProps = {
    dica: 'Digite a descrição de uma nova tarefa'
}