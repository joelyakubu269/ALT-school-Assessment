function validateSchema(obj, schema) {
  const errors = [];

  for (const key in schema) {
    if (!(key in obj)) {
      errors.push(`Missing key: ${key}`);
    } else if (typeof obj[key] !== schema[key]) {
      errors.push(`Wrong type for ${key}: expected ${schema[key]}, got ${typeof obj[key]}`);
    }
  }

  return errors;
}

const schema = { name: "string", age: "number" };
console.log(validateSchema({ name: "Ada", age: 30 }, schema)); // []
console.log(validateSchema({ name: "Ada", age: "30" }, schema));
console.log(validateSchema({ name: "Ada" }, schema));