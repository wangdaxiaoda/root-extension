import * as vscode from "vscode";
import { testWindow } from "./menus/contentMenu";

export function activate(context: vscode.ExtensionContext) {
  console.log("入口进入了");
  let disposable1 = vscode.commands.registerCommand(
    "root-extensions.helloWorld",
    () => {
      vscode.window.showWarningMessage("mingling shi keyi de ");
    }
  );
  let disposable2 = vscode.commands.registerCommand(
    "root-extensions.commandTest2",
    () => {
      vscode.window.showInformationMessage("it`s success");
    }
  );
  let disposable3 = vscode.commands.registerCommand(
    "root-extensions.contentMenu",
    () => {
      vscode.window.showInformationMessage("it`s contentMenu");
    }
  );
  let showWindowMenu = vscode.commands.registerCommand(
    "root-extensions.showMenu",
    testWindow
  );

  context.subscriptions.push(
    disposable1,
    disposable2,
    disposable3,
    showWindowMenu
  );

  let api = {
    sum(a: number, b: number) {
      return a + b;
    },
  };
  return api;
}

export function deactivate() {}
