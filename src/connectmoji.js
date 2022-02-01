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


module.exports = {

generateBoard: generateBoard,


}



