function deepEqual(objA, objB) {
  // same value or same reference
  if (objA === objB) return true;

  // if either one is not an object (or is null), they are not equal
  if (typeof objA !== "object" || objA === null ||
      typeof objB !== "object" || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // they must have the same number of keys
  if (keysA.length !== keysB.length) return false;

  // every key in A must exist in B with an equal value
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                      // false