// implement your functions here
// ...don't forget to export functions!
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

module.exports = {

generateBoard: generateBoard,
rowColToIndex: rowColToIndex,
indexToRowCol: indexToRowCol,
setCell: setCell,
setCells: setCells,

}



