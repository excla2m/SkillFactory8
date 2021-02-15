let text = prompt('Введите свой текст')
function reverseStr(str) {
    return str.split("").reverse().join("");
}

alert(reverseStr(text));