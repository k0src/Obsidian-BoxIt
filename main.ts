import { Plugin } from "obsidian";
import { BOXIT_STYLES } from "./src/styles";
import { BoxItProcessor } from "./src/processor";
import { BoxItCommands } from "./src/commands";

export default class BoxItPlugin extends Plugin {
	private lastUsedStyle: string = "boxit";
	private processor: BoxItProcessor;
	private commands: BoxItCommands;

	async onload() {
		this.processor = new BoxItProcessor(
			this.app,
			(style: string) => (this.lastUsedStyle = style)
		);
		this.commands = new BoxItCommands(
			() => this.lastUsedStyle,
			(style: string) => (this.lastUsedStyle = style)
		);

		this.commands.getCommands().forEach((command) => {
			this.addCommand(command);
		});

		BOXIT_STYLES.forEach((style) => {
			this.registerMarkdownCodeBlockProcessor(
				style.name,
				this.processor.createProcessor(style.name)
			);
		});
	}
}
