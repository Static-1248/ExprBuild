import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "exprbuild" is now active!');

	const disposable = vscode.commands.registerCommand('exprbuild.helloWorld', () => {

		vscode.window.showInputBox({
			placeHolder: 'Enter the expression to evaluate'
		}).then((expression) => {
			if (expression === undefined) {
				return;
			} else {
				try {
					const result = eval(expression);
					vscode.window.showInformationMessage(`The result is: ${result}`);
				} catch (error) {
					vscode.window.showErrorMessage('Invalid expression');
				}
			}
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('Extension "exprbuild" has been deactivated. Bruh');
}
