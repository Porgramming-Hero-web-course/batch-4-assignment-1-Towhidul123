{
  function getProperty<T>(object: T, propertyName: keyof T): T[keyof T] {
    return object[propertyName];
  }

  const person = { name: "Alice", age: 30 };

  console.log(getProperty(person, "name"));
}
