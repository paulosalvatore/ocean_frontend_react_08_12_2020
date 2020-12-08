import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function Board(props) {
    return (
        <div>
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
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
}

class Game extends React.Component {

    // Criamos um construtor sempre que precisamos obter as propriedades
    // de um componente do React que seja uma class
    // Também fazemos isso quando precisamos declarar o estado inicial
    // O construtor será executado sempre que o componente for criado
    // Caso contrário, não precisamos nem declarar o construtor
    constructor(props) {
        // Props são as propriedades iniciais daquele componente
        // Envia as props e constrói o React.Component
        super(props);

        // Declaração do estado inicial com um objeto inicial
        // Estados servem para serem alterados depois da inicialização do componente
        this.state = {
            nextMove: props.nextMove
        };
    }

    clique() {
        let nextMove;

        if (this.state.nextMove === 'X') {
            nextMove = 'O';
        } else {
            nextMove = 'X';
        }

        // Atualiza o estado do componente, passando um novo objeto para ele
        this.setState({
            nextMove: nextMove
        });
    }

    render() {
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
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
