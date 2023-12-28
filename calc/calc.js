function display(val) {
    document.getElementById("Result").value += val;
    return val;
}

function solve() {
    let x = document.getElementById("Result").value;
    let y = eval(x);
    document.getElementById("Result").value = y;
    return y;
}

function clearScreen() {
    document.getElementById("Result").value = "";
}