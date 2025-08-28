import {
	Plugin,
	Editor,
	MarkdownView,
	Component,
	MarkdownRenderer,
} from "obsidian";

export default class BoxItPlugin extends Plugin {
	private lastUsedStyle: string = "boxit";

	async onload() {
		this.addCommand({
			id: "box-selected-text-default",
			name: "Box selected text (default)",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.boxSelectedText(editor, "boxit");
			},
		});

		this.addCommand({
			id: "box-selected-text-last-used",
			name: "Box selected text (last used style)",
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.boxSelectedText(editor, this.lastUsedStyle);
			},
		});

		this.registerMarkdownCodeBlockProcessor(
			"boxit",
			async (source, el, ctx) => {
				this.processBoxItBlock(source, el, ctx, "boxit");
			}
		);

		this.registerMarkdownCodeBlockProcessor(
			"boxit-fancy",
			async (source, el, ctx) => {
				this.processBoxItBlock(source, el, ctx, "boxit-fancy");
			}
		);

		this.registerMarkdownCodeBlockProcessor(
			"boxit-minimal",
			async (source, el, ctx) => {
				this.processBoxItBlock(source, el, ctx, "boxit-minimal");
			}
		);

		this.registerMarkdownCodeBlockProcessor(
			"boxit-highlight",
			async (source, el, ctx) => {
				this.processBoxItBlock(source, el, ctx, "boxit-highlight");
			}
		);
	}

	boxSelectedText(editor: Editor, style: string) {
		const selection = editor.getSelection();
		if (!selection) return;
		this.lastUsedStyle = style;
		const boxedContent = `\`\`\`${style}\n${selection}\n\`\`\``;
		editor.replaceSelection(boxedContent);
	}

	async processBoxItBlock(
		source: string,
		el: HTMLElement,
		ctx: any,
		style: string
	) {
		if (style !== "boxit") this.lastUsedStyle = style;

		el.empty();

		const boxDiv = el.createEl("div", {
			cls: `boxit-container ${style}`,
		});
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
}
