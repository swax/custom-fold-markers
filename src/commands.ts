import * as vscode from 'vscode';
import { CustomFoldingRangeProvider } from './foldingProvider';

let areCustomFoldsCollapsed = false;

export async function toggleAllCustomFolds() {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		return;
	}

	const provider = new CustomFoldingRangeProvider();
	const foldingRanges = provider.getCustomFoldingRanges(editor.document);

	if (foldingRanges.length === 0) {
		vscode.window.showInformationMessage('No custom fold markers found in this document.');
		return;
	}

	const lineNumbers = foldingRanges.map(range => range.start);

	if (areCustomFoldsCollapsed) {
		// Unfold all custom fold markers
		await vscode.commands.executeCommand('editor.unfold', {
			selectionLines: lineNumbers
		});
		areCustomFoldsCollapsed = false;
	} else {
		// Fold all custom fold markers
		await vscode.commands.executeCommand('editor.fold', {
			selectionLines: lineNumbers
		});
		areCustomFoldsCollapsed = true;
	}
}
