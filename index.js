// index.js

// Collection Functions (Arrays or Objects)
function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    
    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }
    
    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions
function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    }
    return array.slice(-n);
}

// Object Functions
function myKeys(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}

function myValues(object) {
    const result = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.push(object[key]);
        }
    }
    return result;
}

// Bonus Functions (Optional)
function mySortBy(array, callback) {
    const mapped = array.map((item, index) => ({ original: item, value: callback(item) }));
    mapped.sort((a, b) => {
        if (typeof a.value === 'string' && typeof b.value === 'string') {
            return a.value.localeCompare(b.value);
        }
        return a.value - b.value;
    });
    return mapped.map(item => item.original);
}

function myFlatten(array, shallow, newArr = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) && !shallow) {
            myFlatten(array[i], false, newArr);
        } else if (Array.isArray(array[i]) && shallow) {
            newArr.push(...array[i]);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}