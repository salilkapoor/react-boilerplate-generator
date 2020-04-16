import Yargs from "yargs";
import { generateBoilerplate } from "./generateBoilerplate";
import { capitalize } from "./utils";

const args = Yargs.scriptName("react-boilerplate-generator")
  .usage("$0 --name 'Name of the app'")
  // .command(
  //   "hello [name]",
  //   "welcome ter yargs!",
  //   (yargs) => {
  //     yargs.positional("name", {
  //       type: "string",
  //       default: "Cambi",
  //       describe: "the name to say hello to",
  //     });
  //   },
  //   function (argv) {
  //     console.log("hello", argv.name, "welcome to yargs!");
  //   }
  // )
  .options("name", {
    alias: "n",
    describe: "Name of the app",
    nargs: 1,
    demand: "name of the app",
    type: "string",
  }).argv;

args.name = capitalize(args.name);

generateBoilerplate(args);
