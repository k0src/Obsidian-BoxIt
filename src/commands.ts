import { Editor, MarkdownView } from "obsidian";
import { BOXIT_STYLES } from "./styles";

export class BoxItCommands {
	constructor(
		private lastUsedStyleCallback: () => string,
		private updateLastUsedStyle: (style: string) => void
	) {}

	boxSelectedText(editor: Editor, style: string) {
		const selection = editor.getSelection();
		if (!selection) return;

		this.updateLastUsedStyle(style);
		const boxedContent = `\`\`\`${style}\n${selection}\n\`\`\``;
		editor.replaceSelection(boxedContent);
	}

	getCommands() {
		const commands = [
			{
				id: "box-selected-text-default",
				name: "Box selected text (default)",
				editorCallback: (editor: Editor, view: MarkdownView) => {
					this.boxSelectedText(editor, "boxit");
				},
			},
			{
				id: "box-selected-text-last-used",
				name: "Box selected text (last used style)",
				editorCallback: (editor: Editor, view: MarkdownView) => {
					this.boxSelectedText(editor, this.lastUsedStyleCallback());
				},
			},
		];

		BOXIT_STYLES.forEach((style) => {
			if (style.name !== "boxit") {
				commands.push({
					id: `box-selected-text-${style.name}`,
					name: `Box selected text (${style.displayName})`,
					editorCallback: (editor: Editor, view: MarkdownView) => {
						this.boxSelectedText(editor, style.name);
					},
				});
			}
		});

		return commands;
	}
}
