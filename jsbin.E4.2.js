
function hasProperty(obj, propertyName) {
  return obj.hasOwnProperty(propertyName);
}

// Пример использования:
const sampleObject = {
  name: "John",
  age: 30,
};

console.log(hasProperty(sampleObject, "name"));
console.log(hasProperty(sampleObject, "email"));
