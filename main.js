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

        console.table(this.board)


    },

    //appends the grid to the page
    createElement: function () {

        this.element = document.createElement("div");
        this.element.id = "grid";
        this.gridElement.appendChild(this.element);

    },
    //handles the click event 
    clickEvent: function (event) {
        console.log(event.target.dataset.rowIndex)
        const cellData = this.findLocation(event.target.dataset.rowIndex, event.target.dataset.colIndex)

    },

    //finds the location of the target Cell
    findLocation: function (rowIndex, colIndex) {
       
        console.log(colIndex)
        return this.board[rowIndex];

    },
    constructor: Grid,
}


//The Cell constructor function. Appends the new div on the page.
function Cell(rowIndex, colIndex, rowElement) {

    this.putOnPage(rowIndex, colIndex, rowElement);
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
}

Cell.prototype = {


    putOnPage: function (rowIndex, colIndex, rowElement) {

        const colElement = document.createElement("div");
        colElement.classList.add("column");
        rowElement.appendChild(colElement)
        colElement.dataset.colIndex = colIndex;
        colElement.dataset.rowIndex = rowIndex;
    },
    constructor: Cell,

}
const inputs = new Grid(10, 10, document.getElementById("main"));

inputs.createGrid();