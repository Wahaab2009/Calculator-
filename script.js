function insert(value) {
    document.getElementById("output").value += value;
}

function clearDisplay() {
    document.getElementById("output").value = "";
}

function deleteLast() {
    let display = document.getElementById("output").value;
    document.getElementById("output").value = display.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("output").value);
        document.getElementById("output").value = result;
    } catch (error) {
        document.getElementById("output").value = "Error";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}