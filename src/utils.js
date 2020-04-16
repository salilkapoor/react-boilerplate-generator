export function capitalize(str) {
  if (typeof str !== "string") {
    return;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isValidName(name) {
  if (!/^[A-Za-z]+$/.test(name)) {
    console.log(`${name} is not expected, please pass on valid string`);
    return null;
  }
  return name;
}
