import { createDirectory } from "./createDirectory";
import { isValidName } from "./utils";
import compose from "./functional";

export function generateBoilerplate(args) {
  const createBP = compose(createDirectory, isValidName);
  createBP(args.name);
  console.log(args);
}
