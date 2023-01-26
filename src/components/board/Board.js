import "./Board.css"
import {useEffect, useState} from "react";
import {v4} from "uuid"

const Board = () => {
    const [globalBoard, setGlobalBoard] = useState(null)



    useEffect(()=>{
     initializeGame()
    },[])

    useEffect(()=>{
        const handleGame = (e, board) => {


            if (e.key !== "ArrowUp" &&
                e.key !== "ArrowDown" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight"
            ) return


            if (e.key === "ArrowUp") {

                //take all numbers up
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 4; j++) {

                        let k = 0
                        while (board[i][j] === 0 && k < 3) {
                            if (i === 0) {
                                board[i][j] = board[i + 1][j]


                                board[i + 1][j] = board[i + 2][j]
                                board[i + 2][j] = board[i + 3][j]
                                board[i + 3][j] = 0
                            }
                            if (i === 1) {
                                board[i][j] = board[i + 1][j]
                                board[i + 1][j] = board[i + 2][j]
                                board[i + 2][j] = 0
                            }

                            if (i === 2) {
                                board[i][j] = board[i + 1][j]
                                board[i + 1][j] = 0
                            }
                            k++
                        }
                    }
                }
                //summarize all numbers
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 4; j++) {


                        if (board[i][j] !== 0 && board[i][j] === board[i + 1][j]) {
                            board[i][j] *= 2


                            if (i === 0) {
                                board[i + 1][j] = board[i + 2][j]
                                board[i + 2][j] = board[i + 3][j]
                                board[i + 3][j] = 0
                            }

                            if (i === 1) {
                                board[i + 1][j] = board[i + 2][j]
                                board[i + 2][j] = 0
                            }

                            if (i === 2) {
                                board[i + 1][j] = 0
                            }
                        }

                    }
                }
            }

            if (e.key === "ArrowDown") {


                //take all numbers down
                for (let i = 3; i > 0; i--) {
                    for (let j = 0; j < 4; j++) {

                        let k = 0
                        while (board[i][j] === 0 && k < 3) {
                            if (i === 3) {
                                board[i][j] = board[i - 1][j]
                                board[i - 1][j] = board[i - 2][j]
                                board[i - 2][j] = board[i - 3][j]
                                board[i - 3][j] = 0
                            }
                            if (i === 2) {
                                board[i][j] = board[i - 1][j]
                                board[i - 1][j] = board[i - 2][j]
                                board[i - 2][j] = 0
                            }

                            if (i === 1) {
                                board[i][j] = board[i - 1][j]
                                board[i - 1][j] = 0
                            }
                            k++
                        }
                    }
                }
                //summarize all numbers
                for (let i = 3; i > 0; i--) {
                    for (let j = 0; j < 4; j++) {


                        if (board[i][j] !== 0 && board[i][j] === board[i - 1][j]) {
                            board[i][j] *= 2


                            if (i === 3) {
                                board[i - 1][j] = board[i - 2][j]
                                board[i - 2][j] = board[i - 3][j]
                                board[i - 3][j] = 0
                            }

                            if (i === 2) {
                                board[i - 1][j] = board[i - 2][j]
                                board[i - 2][j] = 0
                            }

                            if (i === 1) {
                                board[i - 1][j] = 0
                            }
                        }
                    }
                }
            }

            if (e.key === "ArrowLeft") {


                //take all numbers to the left
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 3; j++) {

                        let k = 0
                        while (board[i][j] === 0 && k < 3) {
                            if (j === 0) {
                                board[i][j] = board[i][j + 1]
                                board[i][j + 1] = board[i][j + 2]
                                board[i][j + 2] = board[i][j + 3]
                                board[i][j + 3] = 0
                            }
                            if (j === 1) {
                                board[i][j] = board[i][j + 1]
                                board[i][j + 1] = board[i][j + 2]
                                board[i][j + 2] = 0
                            }

                            if (j === 2) {
                                board[i][j] = board[i][j + 1]
                                board[i][j + 1] = 0
                            }
                            k++
                        }
                    }
                }
                //summarize all numbers
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 3; j++) {


                        if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
                            board[i][j] *= 2


                            if (j === 0) {
                                board[i][j + 1] = board[i][j + 2]
                                board[i][j + 2] = board[i][j + 3]
                                board[i][j + 3] = 0
                            }

                            if (j === 1) {
                                board[i][j + 1] = board[i][j + 2]
                                board[i][j + 2] = 0
                            }

                            if (j === 2) {
                                board[i][j + 1] = 0
                            }
                        }
                    }
                }
            }

            if (e.key === "ArrowRight") {


                //take all numbers to the left
                for (let i = 0; i < 4; i++) {
                    for (let j = 3; j > 0; j--) {

                        let k = 0
                        while (board[i][j] === 0 && k < 3) {
                            if (j === 3) {
                                board[i][j] = board[i][j - 1]
                                board[i][j - 1] = board[i][j - 2]
                                board[i][j - 2] = board[i][j - 3]
                                board[i][j - 3] = 0
                            }
                            if (j === 2) {
                                board[i][j] = board[i][j - 1]
                                board[i][j - 1] = board[i][j - 2]
                                board[i][j - 2] = 0
                            }

                            if (j === 1) {
                                board[i][j] = board[i][j - 1]
                                board[i][j - 1] = 0
                            }
                            k++
                        }
                    }
                }
                //summarize all numbers
                for (let i = 0; i < 4; i++) {
                    for (let j = 3; j > 0; j--) {

                        if (board[i][j] !== 0 && board[i][j] === board[i][j - 1]) {
                            board[i][j] *= 2

                            if (j === 3) {

                                board[i][j - 1] = board[i][j - 2]
                                board[i][j - 2] = board[i][j - 3]
                                board[i][j - 3] = 0
                            }

                            if (j === 2) {
                                board[i][j] = board[i][j - 1]
                                board[i][j - 1] = board[i][j - 2]
                                board[i][j - 2] = 0
                            }

                            if (j === 1) {
                                board[i][j] = board[i][j - 1]
                                board[i][j - 1] = 0
                            }
                        }
                    }
                }
            }


//check if previous board differs from the current one (if it does not, we don't want to add extra number)


            console.log(globalBoard)
            let arrayChanged = false
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (globalBoard[i][j] !== board[i][j]){


                        arrayChanged = true
                    }
                }
            }

            if (arrayChanged){
                //draw a spot on the board
                let number1 = Math.floor(Math.random() * 4)
                let number2 = Math.floor(Math.random() * 4)


                //check if the spot is empty - does not contain a number
                while (board[number1][number2] !==0){
                    number1 = Math.floor(Math.random() * 4)
                    number2 = Math.floor(Math.random() * 4)
                }

                //create a new number: 2 or 4 (with 80% chance that it will be 2) and place it in the selected spot
                board[number1][number2] = (Math.floor(Math.random() * 10) >= 8) ? 4 : 2;



                setGlobalBoard([...board])
            }
        }
            let board;

        const beginHandleGame = (e) => {
            handleGame(e,board)
        }


        if (globalBoard){
            board = [[...globalBoard[0]],[...globalBoard[1]],[...globalBoard[2]],[...globalBoard[3]]]

                window.addEventListener("keydown", beginHandleGame)

        }

        return ()=> window.removeEventListener("keydown", beginHandleGame)

    },[globalBoard])

    const initializeGame = () => {
        let board = []
        for (let i = 0; i < 4; i++) {
            board.push([])
            for (let j = 0; j < 4; j++){
                board[i].push(0)
            }
        }

        let randomNr1 = Math.floor(Math.random()*4)
        let randomNr2 = Math.floor(Math.random()*4)

        //push first number
        board[randomNr1][randomNr2] = 2;
        let newRandomNr1;
        let newRandomNr2;

       do {
           newRandomNr1 = Math.floor(Math.random()*4)
           newRandomNr2 = Math.floor(Math.random()*4)

       }while (randomNr1===newRandomNr1 && randomNr2===newRandomNr2)

        board[newRandomNr1][newRandomNr2] = (Math.floor(Math.random()*10) >= 8) ? 4 : 2
        setGlobalBoard(board)

        return board
    }


    return (
        <div className="board">
            {globalBoard && globalBoard.map((array)=>{
              return array.map((el)=>{
                   return <div key={v4()} className={`
                        ${el===2 ? "two" : ""}
                        ${el===4 ? "four" : ""}
                        ${el===8 ? "eight" : ""}
                        ${el===16 ? "sixteen" : ""}
                        ${el===32 ? "thirty-two" : ""}
                        ${el===64 ? "sixty-four" : ""}
                        ${el===128 ? "one-twenty-right" : ""}
                        ${el===256 ? "two-fifty-six" : ""}
                        ${el===512 ? "five-twelve" : ""}
                        ${el===1024 ? "one-zero-twenty-four" : ""}
                        ${el===2048 ? "two-zero-forty-eight" : ""}
                       element`}>{el === 0 ? "" : el}</div>
               })
            })}
        </div>
    );
};


export default Board;