## BoxIt For Obsidian

Create customizable boxes around markdown content. Style with Tailwind-like utility classes.

### Custom Styling

Define custom styles using utility classes with the `boxit` code block:

````
```boxit
bg-blue p-4 rounded shadow border-l-4 border-accent
Your custom styled content here!
```
````

[Available utility classes](UTIL_CLASSES.md)

### Examples

````
```boxit
gradient-accent text-white p-6 rounded-lg shadow-xl
# Custom Gradient Box
```
````

````
```boxit
bg-yellow border-l-4 border-orange p-3 text-orange font-bold
⚠️ Warning!
```
````

### Commands

-   Box selected text (default styles)
-   Box selected text (apply last used custom styles)
