let x = {n:'jkk'};
if (typeof x == 'number') {
    console.log('x - число');
}else if (typeof x == 'boolean') {
    console.log('x - логический');
}else if (typeof x == 'string') {
    console.log('x - строка');
}else {
    console.log('тип не определён')
}