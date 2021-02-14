function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}
const x = prompt("Введите значение")


if (x === "true" || x === "false") {
    console.log('Логический тип');
} else if (isNumeric(x)) {
    console.log('Цифра')
} else {
    console.log('Строка')
}