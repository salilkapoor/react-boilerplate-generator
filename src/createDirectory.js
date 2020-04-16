import fs from "fs";
import path from "path";

import { copyAssets } from "./copyAssets";

export function createDirectory(name) {
  fs.mkdir(path.join(__dirname, name), (err) => {
    if (err) {
      console.error(err);
      return null
    }
    console.log(`Directory -> ${name} was created successfully!`);
    copyAssets(name)
  });
}
