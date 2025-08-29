import { Component, MarkdownRenderer } from "obsidian";

export class BoxItProcessor {
	constructor(
		private app: any,
		private updateLastUsedStyle?: (style: string) => void
	) {}

	async processBoxItBlock(
		source: string,
		el: HTMLElement,
		ctx: any,
		style: string
	) {
		// Update last used style if it's not the default
		if (style !== "boxit" && this.updateLastUsedStyle) {
			this.updateLastUsedStyle(style);
		}

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

	createProcessor(style: string) {
		return async (source: string, el: HTMLElement, ctx: any) => {
			await this.processBoxItBlock(source, el, ctx, style);
		};
	}
}
