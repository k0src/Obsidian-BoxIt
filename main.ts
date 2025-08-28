import {
	Plugin,
	Editor,
	MarkdownView,
	Component,
	MarkdownRenderer,
} from "obsidian";

export default class BoxItPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "box-selected-text",
			name: "Box selected text",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.boxSelectedText(editor);
			},
		});

		this.registerMarkdownCodeBlockProcessor(
			"box",
			async (source, el, ctx) => {
				el.empty();

				const boxDiv = el.createEl("div", { cls: "boxit-container" });
				const component = new Component();

				try {
					await MarkdownRenderer.render(
						this.app,
						source.trim(),
						boxDiv,
						ctx.sourcePath || "",
						component
					);
					component.load();
				} catch (error) {
					boxDiv.textContent = source;
				}
			}
		);
	}

	boxSelectedText(editor: Editor) {
		const selection = editor.getSelection();
		if (!selection) return;
		const boxedContent = `\`\`\`box\n${selection}\n\`\`\``;
		editor.replaceSelection(boxedContent);
	}
}
