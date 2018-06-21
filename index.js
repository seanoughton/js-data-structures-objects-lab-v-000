// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  //const newObj = { ...obj };
  //newObj[key] = value;
  //return newObj;
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  //deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
  const newObj = { ...obj };
  newObj
}
