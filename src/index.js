import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {

    constructor(props) {
        // Envia as props e constrói o React.Component
        super(props);

        // Declaração do estado inicial com um objeto inicial
        this.state = {
            nextMove: props.value
        };
    }

    clique() {
        // Atualiza o estado do componente, passando um novo objeto para ele
        this.setState(
            {
                nextMove: 'O'
            }
        )
    }

    render() {
        return (
            <button className="square" onClick={() => this.clique()}>
                {this.state.nextMove}
            </button>
        );
    }
}

function Board(props) {
    return (
        <div>
            <div className="board-row">
                <Square value="X"/>
                <Square value="O"/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
}

function Game(props) {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                Info
            </div>
        </div>
    );
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
