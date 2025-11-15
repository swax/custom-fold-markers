import * as vscode from 'vscode';

class CustomFoldingRangeProvider implements vscode.FoldingRangeProvider {
	provideFoldingRanges(
		document: vscode.TextDocument,
		context: vscode.FoldingContext,
		token: vscode.CancellationToken
	): vscode.ProviderResult<vscode.FoldingRange[]> {
		const config = vscode.workspace.getConfiguration();
		const customMarkers = config.get<{ start: string; end: string }>('editor.customFoldMarkers');

		if (!customMarkers || !customMarkers.start || !customMarkers.end) {
			return [];
		}

		const foldingRanges: vscode.FoldingRange[] = [];
		const startPattern = new RegExp(customMarkers.start);
		const endPattern = new RegExp(customMarkers.end);
		const stack: number[] = [];

		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i);
			const text = line.text;

			if (startPattern.test(text)) {
				stack.push(i);
			} else if (endPattern.test(text)) {
				const startLine = stack.pop();
				if (startLine !== undefined) {
					foldingRanges.push(new vscode.FoldingRange(startLine, i));
				}
			}
		}

		return foldingRanges;
	}
}

export function activate(context: vscode.ExtensionContext) {
	console.log('Custom Fold Markers extension is now active!');

	const provider = new CustomFoldingRangeProvider();
	const disposable = vscode.languages.registerFoldingRangeProvider(
		{ pattern: '**/*' },
		provider
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}
