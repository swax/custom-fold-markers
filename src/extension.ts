import * as vscode from 'vscode';
import { CustomFoldingRangeProvider } from './foldingProvider';
import { toggleAllCustomFolds } from './commands';

export function activate(context: vscode.ExtensionContext) {
	console.log('Custom Fold Markers extension is now active!');

	const provider = new CustomFoldingRangeProvider();
	const foldingDisposable = vscode.languages.registerFoldingRangeProvider(
		{ pattern: '**/*' },
		provider
	);

	const commandDisposable = vscode.commands.registerCommand(
		'customFoldMarkers.toggleAll',
		toggleAllCustomFolds
	);

	context.subscriptions.push(foldingDisposable, commandDisposable);
}

export function deactivate() {}
