let map = new Map([[key1, 'value1'], [key2, 'value2'], [key3, 'value3']]);

for (let key of map.keys()) {
    console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}