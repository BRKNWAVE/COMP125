// Function shows a popup dialog box that prompts the user to specify the dimensions of a multiplication table & provides a button to generate the table
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // We set the display property to "flex" so it will be centered on the page/within the container
}

// Function initializes and then dynamically generates a multiplication table (up to 10x10) based on the values specified by the user using sliders. Nested loops then generate cells matching the slider values whenever the generate button is clicked
function generateTable() {
    let rows = document.getElementById("rowSlider").value;
    let columns = document.getElementById("columnSlider").value;
    let table = '<table>';
    for (var i = 1; i <= rows; i++) {
        table += '<tr>';
        for (var ii = 1; ii <= columns; ii++) {
            table += '<td>' + (i * ii) + '</td>';
        }
        table += '</tr>';
    }
    table += '</table>';

    const multiplicationTable = document.getElementById("multiplication-table");
    multiplicationTable.innerHTML = table;
}

// Event listeners are used to update the values displayed below the sliders based on values specified by the user
document.getElementById("rowSlider").addEventListener("input", function () {
    document.getElementById("rowCount").innerText = this.value;
});

document.getElementById("columnSlider").addEventListener("input", function () {
    document.getElementById("columnCount").innerText = this.value;
});
