function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  for (const key in oldObj) {
    if (!(key in newObj)) {
      removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key in newObj) {
    if (!(key in oldObj)) {
      added[key] = newObj[key];
    }
  }

  return { added, removed, changed };
}

console.log(diffObjects({ a: 1, b: 2, d: 5 }, { a: 1, b: 3, c: 4 }));