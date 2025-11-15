# Custom Fold Markers

Define custom folding regions in your code using configurable markers. Perfect for creating collapsible sections in any file type with custom comment styles or markers.

## Features

- **Custom Fold Markers**: Define your own start and end markers for code folding using regular expressions
- **Toggle All Folds**: Quickly collapse or expand all custom fold regions with a keyboard shortcut
- **Universal Language Support**: Works with any file type - configure markers to match your language's comment syntax
- **Flexible Configuration**: Use regex patterns for maximum flexibility in marker definitions

### Example Usage

With the default configuration (`//{` and `//}`), you can create foldable regions:

```javascript
//{ Main function
function doSomething() {
    // Your code here
}
//}

//{ Helper functions
function helper1() { }
function helper2() { }
//}
```

## Extension Settings

This extension contributes the following settings:

* `editor.customFoldMarkers.start`: Regular expression pattern for fold start marker (default: `//\\{`)
* `editor.customFoldMarkers.end`: Regular expression pattern for fold end marker (default: `//\\}`)

### Configuration Example

Add this to your `settings.json` to customize the markers:

```json
{
  "editor.customFoldMarkers": {
    "start": "//\\{",
    "end": "//\\}"
  }
}
```

For different languages, you can use workspace or language-specific settings:

```json
{
  "[python]": {
    "editor.customFoldMarkers": {
      "start": "#\\{",
      "end": "#\\}"
    }
  },
  "[html]": {
    "editor.customFoldMarkers": {
      "start": "<!--\\{",
      "end": "<!--\\}"
    }
  }
}
```

## Commands

This extension contributes the following commands:

* `customFoldMarkers.toggleAll`: Toggle collapse/expand of all custom fold markers in the active document

## Keyboard Shortcuts

* `Ctrl+K Ctrl+C` (Windows/Linux) or `Cmd+K Cmd+C` (Mac): Toggle all custom fold markers

You can customize this keybinding in your `keybindings.json`:

```json
{
  "key": "ctrl+k ctrl+c",
  "command": "customFoldMarkers.toggleAll",
  "when": "editorTextFocus"
}
```

## Usage

1. Install the extension
2. Configure your custom fold markers in VS Code settings (or use the defaults)
3. Add start and end markers in your code to define foldable regions
4. Use the folding controls in the editor gutter or press `Ctrl+K Ctrl+C` to toggle all folds

## Requirements

VS Code version 1.85.0 or higher

## Known Issues

None at this time. Please report issues on the [GitHub repository](https://github.com/yourusername/custom-fold-markers/issues).

## Release Notes

### 0.0.1

Initial release with the following features:
- Custom fold marker configuration using regex patterns
- Automatic folding range detection
- Toggle all custom folds command with keyboard shortcut

## License

MIT License - see the [LICENSE](LICENSE) file for details
