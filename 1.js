let figure = prompt('Введите любое число');
if (isNumeric(figure) === true) {
    if (figure % 2 == 0) {
        console.log('Это число - четное');
    } else {
        console.log('Это число - нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись')
}
function isNumeric(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && 
           !isNaN(parseFloat(str)) 
  }