import React from "react";
import styled from 'styled-components';
import { preProcessFile } from "typescript";
import { BoardState, useGameState, Value } from "./GameState";

type LayoutProps = {
    gap: number,
};

const Row = styled.div<LayoutProps>`
    display: flex;
    flex-direction: row;
    gap: ${(porps) => porps.gap}px;
    `;

    const Column = styled.div<LayoutProps>`
    display: flex;
    flex-direction: column;
    gap: ${(porps) => porps.gap}px;
    `;

const Game = () => {
    const {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo} = useGameState();

    return (
        <Row gap={20}>
            <Column gap={20}>
                <div>
                    {
                        winner ? `Winner ${winner}`: `Next Player ${xIsNext ? 'X' : 'O'}`
                    }
                </div>
                <Board board={current} onClick={handleClick} />
            </Column>
            <Log history={gameState.history} jumpTo={jumpTo} />
        </Row>
    );
};

type BoardProps = {
    board: BoardState,
    onClick: (square: number) => void,
}

function Board({board, onClick}: BoardProps) {

    const createProps = (Square: number): SquareProps => {
        return {
            value: board[Square],
            onClick: () => onClick(Square)
        }
    }

    return (
        <Column gap={0}>
            <Row gap={0}>
                <Square {...createProps(0)} />
                <Square {...createProps(1)}/>
                <Square {...createProps(2)} />
            </Row>
            <Row gap={0}>
                <Square {...createProps(3)} />
                <Square {...createProps(4)} />
                <Square {...createProps(5)} />
            </Row>
            <Row gap={0}>
                <Square {...createProps(6)} />
                <Square {...createProps(7)} />
                <Square {...createProps(8)} />
            </Row>
        </Column>
    );
};

const StyledSquare = styled.button`
    width: 34px;
    height: 34px;
    background: #fff;
    border: 1px solid #999;
    padding: 0;
    font-size: 24px;
    font-weight: bold;
`;

type LogProps = {
    history: BoardState[],
    jumpTo: (step: number) => void
}

function Log(porps: LogProps) {
    return(
        <ol>
            {porps.history.map((_, index)=>{
                return (
                    <li key={index}>
                        <button onClick={() => porps.jumpTo(index)}>
                            Go To {index === 0 ? 'start': `move ${index}`}
                        </button>
                    </li>
                )
            })}
        </ol>
    );
};

type SquareProps = {
    value: Value,
    onClick: () => void
}

function Square(props: SquareProps) {
    return(
        <StyledSquare onClick={props.onClick}>
            {props.value}
        </StyledSquare>
    );
};

export default Game;