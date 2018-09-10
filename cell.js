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