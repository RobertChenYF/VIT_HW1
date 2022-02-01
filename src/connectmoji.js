// implement your functions here
// ...don't forget to export functions!
const wcwidth = require('wcwidth');

function generateBoard(rows, cols, fill){
 
    if (fill === undefined) {
        fill = null;
    }

    let array = Array(0);

    for(let i = rows*cols; i > 0 ; i--){

        array.push(fill);
    }

    let board = {data: array, rows: rows, cols: cols};

    return board;
}

function rowColToIndex(board, row, col){

    let index = row * board.cols + col;

    return index;
}

function indexToRowCol(board, i){

    let boardRow = board.rows;


    let pos = {row: Math.floor(i/boardRow), col: i%boardRow};
    return pos;
}

function setCell(board, row, col, value){

    let arr = board.data.slice();
    
    let newB =  {data: arr, rows: board.rows, cols: board.cols};

    newB.data[rowColToIndex(newB,row,col)] = value;
    return newB;
}

function setCells(board, ...args){

    let arr = board.data.slice();

    for(let i = 0; i < args.length; i++){

        arr[rowColToIndex(board,args[i].row,args[i].col)] = args[i].val;

    }

let newB =  {data: arr, rows: board.rows, cols: board.cols};
return newB;
}

function boardToString(board){

    const boardRow = board.rows;
    const boardCol = board.cols;
    let index = 0;
    let boardString = '';
    const space = ' ';


    for(let i = 0; i < boardRow; i++){
        boardString += '|';

        for(let j = 0; j < boardCol; j++){


            if(board.data[index] === null){

                boardString += space.repeat(4);
            }
            else{
                boardString += space;
                boardString += board.data[index];
                boardString += space.repeat(3 - wcwidth(board.data[index]))

            }

            boardString += '|';
            index++;
        }
        boardString += '\n';
    }
    boardString += '|';
    for(j = 0; j < boardCol-1; j++){

        boardString += '----+';

    }
    boardString += '----|\n';
    boardString += '|';
    for(j = 0; j < boardCol; j++){

        boardString += space;
        boardString += String.fromCharCode(65+j);
        boardString += space.repeat(2);
        boardString += '|';

    }

return boardString;
}




module.exports = {

generateBoard: generateBoard,
rowColToIndex: rowColToIndex,
indexToRowCol: indexToRowCol,
setCell: setCell,
setCells: setCells,
boardToString: boardToString,

}


