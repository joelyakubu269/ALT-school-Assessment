function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  }

  return obj;
}

const user = deepFreeze({ name: "Ada", address: { city: "Lagos" }, tags: ["a"] });
user.address.city = "Abuja";
console.log(user.address.city);          // Lagos
console.log(Object.isFrozen(user.tags)); // true