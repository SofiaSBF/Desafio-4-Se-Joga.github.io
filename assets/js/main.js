const input = document.querySelector('input')

input.addEventListener('keypress', () => {

    let inputLength = input.value.length;

    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    } else if (inputLength == 11) {
        input.value += '-'
    } else if (inputLength == 14 || input == String) {
        document.getElementById("result").style.backgroundColor = "#FF1515";
    } else if (inputLength == 13) {
        document.getElementById("result").style.backgroundColor = "#00FF38";
    }
})