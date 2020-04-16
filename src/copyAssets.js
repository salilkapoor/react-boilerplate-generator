import copyDir from "copy-dir";
import path from "path";
import chalk from "chalk";

export function copyAssets(name) {
  const fromPath = path.join(__dirname, "assets", "cra-js");
  const toPath = path.join(__dirname, name);

  console.log(
    `Content copied started from ${chalk.bgYellow.black.bold(
      fromPath
    )} -> to ${chalk.bgYellow.black.bold(toPath)}`
  );

  copyDir.sync(fromPath, toPath, {
    utimes: true, // keep add time and modify time
    mode: true, // keep file mode
    cover: true, // cover file when exists, default is true
  });

  console.log(
    `Content copied completed ${chalk.bgYellow.black.bold(
      fromPath
    )} -> to ${chalk.bgYellow.black.bold(toPath)}`
  );
}
