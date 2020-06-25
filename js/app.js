let output = document.getElementById('output');

function insert(value) {
    output.value += value;
}
function showResult() {
    output.value = eval(output.value);
}