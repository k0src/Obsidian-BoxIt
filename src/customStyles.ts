// Utility classes mapping to CSS properties
export const UTILITY_CLASSES: { [key: string]: string } = {
	// Background colors
	"bg-red": "background-color: var(--color-red);",
	"bg-green": "background-color: var(--color-green);",
	"bg-blue": "background-color: var(--color-blue);",
	"bg-yellow": "background-color: var(--color-yellow);",
	"bg-orange": "background-color: var(--color-orange);",
	"bg-purple": "background-color: var(--color-purple);",
	"bg-pink": "background-color: var(--color-pink);",
	"bg-cyan": "background-color: var(--color-cyan);",
	"bg-accent": "background-color: var(--color-accent);",
	"bg-base": "background-color: var(--color-base-20);",
	"bg-base-light": "background-color: var(--color-base-10);",
	"bg-transparent": "background-color: transparent;",

	// Border colors and styles
	"border-red": "border-color: var(--color-red);",
	"border-green": "border-color: var(--color-green);",
	"border-blue": "border-color: var(--color-blue);",
	"border-yellow": "border-color: var(--color-yellow);",
	"border-orange": "border-color: var(--color-orange);",
	"border-purple": "border-color: var(--color-purple);",
	"border-pink": "border-color: var(--color-pink);",
	"border-cyan": "border-color: var(--color-cyan);",
	"border-accent": "border-color: var(--color-accent);",
	"border-base": "border-color: var(--color-base-30);",

	border: "border: 1px solid;",
	"border-2": "border: 2px solid;",
	"border-4": "border: 4px solid;",
	"border-l": "border-left: 1px solid;",
	"border-l-2": "border-left: 2px solid;",
	"border-l-4": "border-left: 4px solid;",
	"border-r": "border-right: 1px solid;",
	"border-r-2": "border-right: 2px solid;",
	"border-r-4": "border-right: 4px solid;",
	"border-t": "border-top: 1px solid;",
	"border-t-2": "border-top: 2px solid;",
	"border-t-4": "border-top: 4px solid;",
	"border-b": "border-bottom: 1px solid;",
	"border-b-2": "border-bottom: 2px solid;",
	"border-b-4": "border-bottom: 4px solid;",

	// Padding
	"p-1": "padding: var(--size-2-1);",
	"p-2": "padding: var(--size-2-2);",
	"p-3": "padding: var(--size-2-3);",
	"p-4": "padding: var(--size-4-2);",
	"p-6": "padding: var(--size-4-3);",
	"p-8": "padding: var(--size-4-4);",
	"px-1": "padding-left: var(--size-2-1); padding-right: var(--size-2-1);",
	"px-2": "padding-left: var(--size-2-2); padding-right: var(--size-2-2);",
	"px-3": "padding-left: var(--size-2-3); padding-right: var(--size-2-3);",
	"px-4": "padding-left: var(--size-4-2); padding-right: var(--size-4-2);",
	"px-6": "padding-left: var(--size-4-3); padding-right: var(--size-4-3);",
	"px-8": "padding-left: var(--size-4-4); padding-right: var(--size-4-4);",
	"py-1": "padding-top: var(--size-2-1); padding-bottom: var(--size-2-1);",
	"py-2": "padding-top: var(--size-2-2); padding-bottom: var(--size-2-2);",
	"py-3": "padding-top: var(--size-2-3); padding-bottom: var(--size-2-3);",
	"py-4": "padding-top: var(--size-4-2); padding-bottom: var(--size-4-2);",
	"py-6": "padding-top: var(--size-4-3); padding-bottom: var(--size-4-3);",
	"py-8": "padding-top: var(--size-4-4); padding-bottom: var(--size-4-4);",

	// Margin
	"m-1": "margin: var(--size-2-1);",
	"m-2": "margin: var(--size-2-2);",
	"m-3": "margin: var(--size-2-3);",
	"m-4": "margin: var(--size-4-2);",
	"m-6": "margin: var(--size-4-3);",
	"m-8": "margin: var(--size-4-4);",
	"mx-1": "margin-left: var(--size-2-1); margin-right: var(--size-2-1);",
	"mx-2": "margin-left: var(--size-2-2); margin-right: var(--size-2-2);",
	"mx-3": "margin-left: var(--size-2-3); margin-right: var(--size-2-3);",
	"mx-4": "margin-left: var(--size-4-2); margin-right: var(--size-4-2);",
	"mx-6": "margin-left: var(--size-4-3); margin-right: var(--size-4-3);",
	"mx-8": "margin-left: var(--size-4-4); margin-right: var(--size-4-4);",
	"my-1": "margin-top: var(--size-2-1); margin-bottom: var(--size-2-1);",
	"my-2": "margin-top: var(--size-2-2); margin-bottom: var(--size-2-2);",
	"my-3": "margin-top: var(--size-2-3); margin-bottom: var(--size-2-3);",
	"my-4": "margin-top: var(--size-4-2); margin-bottom: var(--size-4-2);",
	"my-6": "margin-top: var(--size-4-3); margin-bottom: var(--size-4-3);",
	"my-8": "margin-top: var(--size-4-4); margin-bottom: var(--size-4-4);",

	// Border radius
	rounded: "border-radius: var(--radius-s);",
	"rounded-md": "border-radius: var(--radius-m);",
	"rounded-lg": "border-radius: var(--radius-l);",
	"rounded-full": "border-radius: 50%;",
	"rounded-none": "border-radius: 0;",

	// Shadows
	shadow: "box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);",
	"shadow-md": "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);",
	"shadow-lg": "box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);",
	"shadow-xl": "box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);",
	"shadow-none": "box-shadow: none;",

	// Text colors
	"text-red": "color: var(--color-red);",
	"text-green": "color: var(--color-green);",
	"text-blue": "color: var(--color-blue);",
	"text-yellow": "color: var(--color-yellow);",
	"text-orange": "color: var(--color-orange);",
	"text-purple": "color: var(--color-purple);",
	"text-pink": "color: var(--color-pink);",
	"text-cyan": "color: var(--color-cyan);",
	"text-accent": "color: var(--color-accent);",
	"text-muted": "color: var(--text-muted);",

	// Text weight and style
	"font-bold": "font-weight: bold;",
	"font-semibold": "font-weight: 600;",
	"font-medium": "font-weight: 500;",
	"font-normal": "font-weight: normal;",
	italic: "font-style: italic;",

	// Special effects
	blur: "backdrop-filter: blur(10px);",
	"blur-sm": "backdrop-filter: blur(4px);",
	"blur-lg": "backdrop-filter: blur(16px);",
	"opacity-50": "opacity: 0.5;",
	"opacity-75": "opacity: 0.75;",
	"opacity-90": "opacity: 0.9;",

	// Gradients
	"gradient-accent":
		"background: linear-gradient(135deg, var(--color-accent), var(--color-accent-2));",
	"gradient-blue":
		"background: linear-gradient(135deg, var(--color-blue), var(--color-cyan));",
	"gradient-green":
		"background: linear-gradient(135deg, var(--color-green), var(--color-cyan));",
	"gradient-red":
		"background: linear-gradient(135deg, var(--color-red), var(--color-orange));",
	"gradient-purple":
		"background: linear-gradient(135deg, var(--color-purple), var(--color-pink));",
};

export class CustomStyleParser {
	static parseClasses(classes: string): string {
		const classArray = classes.split(/\s+/).filter((c) => c.length > 0);
		const cssRules: string[] = [];

		for (const className of classArray) {
			if (UTILITY_CLASSES[className]) {
				cssRules.push(UTILITY_CLASSES[className]);
			}
		}

		return cssRules.join(" ");
	}

	// Generate a unique class name for each custom style
	static generateUniqueId(): string {
		return `boxit-custom-${Math.random().toString(36).slice(2, 11)}`;
	}

	static createCustomStyle(classes: string): {
		css: string;
		className: string;
	} {
		const uniqueId = this.generateUniqueId();
		const css = this.parseClasses(classes);

		return {
			css: `.${uniqueId} { ${css} }`,
			className: uniqueId,
		};
	}
}
