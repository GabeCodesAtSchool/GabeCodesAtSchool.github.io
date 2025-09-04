let x = 0;
function furstSupply() {
    x = Math.floor(Math.random() * 5);
    if (x === 0) {
        document.getElementById("supply1").innerHTML = "Knowledge";
        document.getElementById("supply1").className = "goals";
        alert(hi);
    } else if (x === 1) {
        document.getElementById("supply1").innerHTML = "Paper";
        document.getElementById("supply1").className = "sheet";
    } else if (x === 2) {
        document.getElementById("supply1").innerHTML = "Notebook";
        document.getElementById("supply1").className = "notes";
    } else if (x === 3) {
        document.getElementById("supply1").innerHTML = "Pencil";
        document.getElementById("supply1").className = "write";
    } else if (x === 4) {
        document.getElementById("supply1").innerHTML = "Happiness And Enthusiasm!";
        document.getElementById("supply1").className = "joy";
    }
}
