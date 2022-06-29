import inquirer from "inquirer";
// const inquirer = import('inquirer')
// const updateNotifier = import('update-notifier.js')
import handle from "./handle";
import updateNotifier from "update-notifier";
import pkgjson from "../package.json";

export function cli(args) {
  console.log(updateNotifier);
  updateNotifier({ pkg: pkgjson }).notify();
  console.log("前端后台管理系统项目生成工具 v" + pkgjson.version);
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "project name",
        default: "project_name",
      },
      {
        type: "list",
        name: "template",
        message: "choose a template",
        choices: [
          "vue2-project"
        ],
        default: "vue2-project",
      },
      {
        type: "input",
        name: "host",
        message: "host",
        default: "template.cli.com",
        when(answers) {
          return (
            answers.template === "vue2-project"
          );
        },
      },
      {
        type: "input",
        name: "proxy",
        message: "proxy",
        default: "server.proxy.com",
        when(answers) {
          return (
            answers.template === "vue2-project" 
            // ||
            // answers.template === "vue3-project" ||
            // answers.template === "react-project" ||
            // answers.template === "react-ts-project" ||
            // answers.template === "craco-react-ts"
          );
        },
      },
      {
        type: "confirm",
        name: "install",
        message: "install now?",
      },
    ])
    .then(handle)
    .then(() => {
      console.log("项目创建完成,依赖安装中.......");
    });
}
