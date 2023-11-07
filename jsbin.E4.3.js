
function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
    }
  }
}

// Пример использования:
const sampleObject = {
  name: "John",
  age: 30,
};

printOwnProperties(sampleObject);
