import { Plugin } from "obsidian";
import { BOXIT_STYLES } from "./src/styles";
import { BoxItProcessor } from "./src/processor";
import { BoxItCommands } from "./src/commands";
import { DynamicStyleManager } from "./src/styleManager";

export default class BoxItPlugin extends Plugin {
	private lastUsedStyle: string = "boxit";
	private processor: BoxItProcessor;
	private commands: BoxItCommands;
	private styleManager: DynamicStyleManager;

	async onload() {
		this.styleManager = new DynamicStyleManager();

		this.processor = new BoxItProcessor(
			this.app,
			(style: string) => (this.lastUsedStyle = style),
			this.styleManager
		);

		this.commands = new BoxItCommands(
			() => this.lastUsedStyle,
			(style: string) => (this.lastUsedStyle = style)
		);

		this.commands.getCommands().forEach((command) => {
			this.addCommand(command);
		});

		BOXIT_STYLES.forEach((style) => {
			if (style.name !== "boxit") {
				this.registerMarkdownCodeBlockProcessor(
					style.name,
					this.processor.createProcessor(style.name)
				);
			}
		});

		this.registerMarkdownCodeBlockProcessor(
			"boxit",
			async (source, el, ctx) => {
				const lines = source.split("\n");
				let customClasses = "";
				let content = source;

				const firstLine = lines[0]?.trim();
				if (firstLine && this.isUtilityClassLine(firstLine)) {
					customClasses = firstLine;
					content = lines.slice(1).join("\n");
				}

				if (customClasses) {
					await this.processor.processCustomBoxItBlock(
						content,
						el,
						ctx,
						customClasses
					);
				} else {
					// Use default boxit style
					await this.processor.processBoxItBlock(
						content,
						el,
						ctx,
						"boxit"
					);
				}
			}
		);
	}

	private isUtilityClassLine(line: string): boolean {
		// Check if line contains utility class patterns and no markdown
		const utilityPatterns = [
			/\b(bg-|border-|text-|p-|m-|px-|py-|mx-|my-|rounded|shadow|gradient-|blur|opacity-)/,
			/\b(font-|italic|bold)/,
		];

		return (
			utilityPatterns.some((pattern) => pattern.test(line)) &&
			!line.includes("#") &&
			!line.includes("*") &&
			!line.includes("[") &&
			!line.includes("`")
		);
	}

	onunload() {
		// Cleanup dynamic styles
		this.styleManager?.cleanup();
	}
}
