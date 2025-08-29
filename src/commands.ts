import { Editor, MarkdownView } from "obsidian";

export class BoxItCommands {
	constructor(
		private lastUsedUtilityClassesCallback: () => string,
		private updateLastUsedUtilityClasses: (utilityClasses: string) => void
	) {}

	boxSelectedText(editor: Editor, utilityClasses?: string) {
		const selection = editor.getSelection();
		if (!selection) return;

		let boxedContent: string;
		if (utilityClasses && utilityClasses.trim()) {
			this.updateLastUsedUtilityClasses(utilityClasses);
			boxedContent = `\`\`\`boxit\n${utilityClasses}\n${selection}\n\`\`\``;
		} else {
			boxedContent = `\`\`\`boxit\n${selection}\n\`\`\``;
		}

		editor.replaceSelection(boxedContent);
	}

	getCommands() {
		const commands = [
			{
				id: "box-selected-text-default",
				name: "Box selected text (default)",
				editorCallback: (editor: Editor, view: MarkdownView) => {
					this.boxSelectedText(editor);
				},
			},
			{
				id: "box-selected-text-last-used",
				name: "Box selected text (last used utility classes)",
				editorCallback: (editor: Editor, view: MarkdownView) => {
					const lastUsedClasses =
						this.lastUsedUtilityClassesCallback();
					this.boxSelectedText(editor, lastUsedClasses);
				},
			},
		];

		return commands;
	}
}
