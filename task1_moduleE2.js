let a = prompt();
a = +a;
if (a != 0 && a) {
    if (a % 2 == 0) {
        console.log('четное');
    } else {
        console.log('не четное');
    }
}else {
    console.log('Упс, кажется, вы ошиблись!')
}