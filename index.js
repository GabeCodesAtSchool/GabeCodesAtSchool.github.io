let x = 0;
function furstSupply() {
    x = Math.floor(Math.random) * 2;
    if (x === 0) {
        document.getElementById("supply1").innerHTML = "Knowledge";
        document.getElementById("supply1").className = "goals";
        alert(hi);
    } else if (x === 1) {
        document.getElementById("supply1").innerHTML = "Paper";
        document.getElementById("supply1").className = "sheet";
    }
}