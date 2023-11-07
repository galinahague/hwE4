
function createEmptyObjectWithoutPrototype() {
  return Object.create(null);
}

// Пример использования:
const emptyObject = createEmptyObjectWithoutPrototype();

console.log(Object.getPrototypeOf(emptyObject));
