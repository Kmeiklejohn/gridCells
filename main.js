//parameters of the grid
function Grid(height, width, gridElement) {
    this.height = Number(height);
    this.width = Number(width);
    this.gridElement = gridElement;
    this.board = [];
}

Grid.prototype = {

    //creates the board and calls the new Cell constructor function
    createGrid: function (height, width, gridElement) {
        this.createElement();
        this.gridElement.addEventListener("click", this.clickEvent.bind(this));
        for (let rowIndex = 0; rowIndex < this.height; rowIndex++) {

            this.board.push([])
            const rowElement = document.createElement("div");
            rowElement.classList.add("row");
            this.gridElement.appendChild(rowElement);


            for (let colIndex = 0; colIndex < this.width; colIndex++) {
                let cell = new Cell(rowIndex, colIndex, rowElement)

                this.board[rowIndex].push(cell)
            }
        }
    },

    //appends the grid to the page
    createElement: function () {

        this.element = document.createElement("div");
        this.element.id = "grid";
        this.gridElement.appendChild(this.element);

    },
    //handles the click event 
    clickEvent: function (event) {
        // console.log(event.target.dataset.rowIndex)
        const cellData = this.findLocation(event.target.dataset.rowIndex, event.target.dataset.colIndex)
        const neighborCellData = this.findNeighbor(event.target.dataset.rowIndex, event.target.dataset.colIndex)
    },

    //finds the location of the target Cell
    findLocation: function (rowIndex, colIndex) {
        if (this.board[rowIndex] && this.board[rowIndex][colIndex]) {
            console.log(this.board[rowIndex][colIndex])
            this.board[rowIndex][colIndex]
        } else {
            return null
        }
    },

    findNeighbor: function (rowIndex, colIndex) {
        rowIndex = Number(rowIndex)
        colIndex = Number(colIndex)
        
        
        if(this.board[rowIndex] && this.board[rowIndex][colIndex]){
        let neighborDown = this.findLocation(rowIndex + 1, colIndex); // todo: do this for the next three lines
        let neighborUp = this.findLocation(rowIndex - 1,colIndex);
        let neighborLeft = this.findLocation(rowIndex,colIndex - 1);
        let neighborRight = this.findLocation(rowIndex, colIndex + 1);
        }else{
            return null;
        }
    },

    constructor: Grid,
}

const inputs = new Grid(8, 8, document.getElementById("main"));

inputs.createGrid();