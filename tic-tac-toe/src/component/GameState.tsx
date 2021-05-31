import { useState } from 'react';

export type Value = 'X' | 'O' | null;

export type BoardState = Value[];

const createBoardState = () => Array<Value>(9).fill(null);

function calculateWinner(boardState: BoardState) {
    const winnerCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    console.log(winnerCombination[0] + typeof winnerCombination[0]);

    /*for(let j=0; j<=winnerCombination.length; j++){
        const [s,p,q] = Object.keys(winnerCombination[j]);
        //if(boardState[s])
        console.log(s + p + q);
    }*/

    for (let i = 0; i <= winnerCombination.length; i++) {
        const p: number[] = [];
        for(let j in winnerCombination[i]) {
            console.log(j + typeof j);
            p.push(Number(j));
        }
        console.log(p);

        if (boardState[p[0]] && boardState[p[0]] === boardState[p[1]] && boardState[p[0]] === boardState[p[2]]) {
            return boardState[p[0]];
        }
    }
    return null;
}

export type GameState = {
    history: BoardState[],
    step: number,
}


export function useGameState() {
    const [gameState, setGameState] = useState<GameState>({
        history: [createBoardState()],
        step: 0
    });

    const current = gameState.history[gameState.step];
    const xIsNext = (gameState.step % 2) === 0;
    const winner = calculateWinner(current);

    function handleClick(square: number) {
        const history = gameState.history.slice(0, gameState.step + 1);
        const boardState = history[history.length - 1];

        if (calculateWinner(boardState) || boardState[square]) {
            return;
        }

        const newBoardState = boardState.slice();
        newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }

    function jumpTo(step: number) {
        setGameState({
            history: gameState.history,
            step,
        });
    };

    return {
        gameState,
        current,
        xIsNext,
        winner,
        handleClick,
        jumpTo
    };
};