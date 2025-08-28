import { Plugin } from "obsidian";

export default class ToggleDevToolsPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "toggle-dev-tools",
			name: "Toggle Developer Tools",
			callback: () => {
				const { remote } = require("electron");
				const currentWindow = remote.getCurrentWindow();

				if (currentWindow.webContents.isDevToolsOpened()) {
					currentWindow.webContents.closeDevTools();
				} else {
					currentWindow.webContents.openDevTools();
				}
			},
		});
	}
}
