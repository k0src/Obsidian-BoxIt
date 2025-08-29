import { Component, MarkdownRenderer } from "obsidian";
import { CustomStyleParser } from "./customStyles";
import { DynamicStyleManager } from "./styleManager";

export class BoxItProcessor {
	constructor(
		private app: any,
		private updateLastUsedStyle?: (style: string) => void,
		private styleManager?: DynamicStyleManager
	) {}

	async processBoxItBlock(
		source: string,
		el: HTMLElement,
		ctx: any,
		style: string
	) {
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

	async processCustomBoxItBlock(
		source: string,
		el: HTMLElement,
		ctx: any,
		customClasses: string
	) {
		const customStyle = CustomStyleParser.createCustomStyle(customClasses);
		if (this.styleManager) {
			this.styleManager.addCustomStyle(
				customStyle.className,
				customStyle.css
			);
		}

		el.empty();

		const boxDiv = el.createEl("div", {
			cls: `boxit-container ${customStyle.className}`,
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
