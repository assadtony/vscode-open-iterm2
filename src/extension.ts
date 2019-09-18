'use strict';
import { exec } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.openTower', (e: vscode.Uri) => {
        if (process.platform === "darwin") {

            console.log(e);
            fs.stat(e.fsPath, (err, stats) => {
                if (err) return;

                let dirPath = e.fsPath;
                if (stats.isFile()) {
                    dirPath = path.dirname(dirPath);
                }

                console.log(dirPath);
                let childProcess = exec(`gittower ${dirPath}`);

            });
        } else {
            vscode.commands.executeCommand("workbench.action.terminal.openNativeConsole", e);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
