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

class Board extends React.Component {
    renderSquare(index) {
        return <Square value={this.props.squares[index]} onClick={() => this.props.onClick(index)}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
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
            squares: Array(9).fill(null),
            nextMove: 'X'
        };
    }

    handleClick(index) {
        const squares = this.state.squares;

        if (squares[index]) {
            return;
        }

        squares[index] = this.state.nextMove;

        const nextMove = this.state.nextMove === 'X' ? 'O' : 'X';

        // Atualiza o estado do componente, passando um novo objeto para ele
        this.setState({ nextMove });
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.state.squares} onClick={(i) => this.handleClick(i)}/>
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
