import { Plugin } from "obsidian";
import { BoxItProcessor } from "./src/processor";
import { BoxItCommands } from "./src/commands";
import { DynamicStyleManager } from "./src/styleManager";

export default class BoxItPlugin extends Plugin {
	private lastUsedUtilityClasses: string = "";
	private processor: BoxItProcessor;
	private commands: BoxItCommands;
	private styleManager: DynamicStyleManager;

	async onload() {
		this.styleManager = new DynamicStyleManager();

		this.processor = new BoxItProcessor(
			this.app,
			(utilityClasses: string) =>
				(this.lastUsedUtilityClasses = utilityClasses),
			this.styleManager
		);

		this.commands = new BoxItCommands(
			() => this.lastUsedUtilityClasses,
			(utilityClasses: string) =>
				(this.lastUsedUtilityClasses = utilityClasses)
		);

		this.commands.getCommands().forEach((command) => {
			this.addCommand(command);
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
					this.lastUsedUtilityClasses = customClasses;
					await this.processor.processCustomBoxItBlock(
						content,
						el,
						ctx,
						customClasses
					);
				} else {
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
		this.styleManager?.cleanup();
	}
}
