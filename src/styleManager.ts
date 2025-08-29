export class DynamicStyleManager {
	private styleElement: HTMLStyleElement | null = null;
	private customStyles: Map<string, string> = new Map();

	constructor() {
		this.createStyleElement();
	}

	private createStyleElement() {
		this.styleElement = document.createElement("style");
		this.styleElement.id = "boxit-dynamic-styles";
		document.head.appendChild(this.styleElement);
	}

	addCustomStyle(className: string, css: string) {
		this.customStyles.set(className, css);
		this.updateStyleElement();
	}

	removeCustomStyle(className: string) {
		this.customStyles.delete(className);
		this.updateStyleElement();
	}

	private updateStyleElement() {
		if (this.styleElement) {
			const allStyles = Array.from(this.customStyles.values()).join("\n");
			this.styleElement.textContent = allStyles;
		}
	}

	cleanup() {
		if (this.styleElement) {
			this.styleElement.remove();
			this.styleElement = null;
		}
		this.customStyles.clear();
	}
}
