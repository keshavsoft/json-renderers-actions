# json-renderers-actions

A high-level declarative actions bridge that wires **json-renderers**, **dom-primitive-bindings**, and **dom-primitive-engine** into a unified, zero-boilerplate developer API.

---

## The Big Idea

When building UI components from JSON, applications must balance three separate responsibilities:
1. **Rendering DOM** (`json-renderers`): Mounting HTML elements from columns, data, and options.
2. **Event Delegation** (`dom-primitive-bindings`): Attaching a single container listener instead of individual listeners per element.
3. **Data Extraction** (`dom-primitive-engine`): Traversing the DOM from the event target to reconstruct the underlying row data.

`json-renderers-actions` coordinates these responsibilities. The developer supplies declarative keys:

```js
{
  data,     // Array of data records
  columns,  // Column schemas
  options,  // Visual / behavior options
  actions   // Event callbacks
}
```

Behind the scenes, `json-renderers-actions` automatically configures event delegation on the container and extracts structured data from table rows before delivering it cleanly to your action callbacks.

---

## Installation

```bash
npm install json-renderers-actions
```

Or consume in browser via CDN / `<script>`:

```html
<script src="dist/min.js"></script>
<!-- Registers on window.ks.jsonRenderersActions -->
```

---

## 4-Key Contract

| Key | Type | Description |
|---|---|---|
| `data` | `Array<Object>` | Raw rows to be rendered. |
| `columns` | `Array<Object>` | Column metadata specifying `field` and display names. |
| `options` | `Object` | Render configuration (e.g. search box, footer, styles). |
| `actions` | `Object` | Handlers: `{ rowClick, searchKeydown, footerClick }`. |

---

## Quick Start

```js
import applyActions from "json-renderers-actions";

applyActions("my-table-container", {
  columns: [
    { field: "id", name: "ID" },
    { field: "name", name: "Name" },
    { field: "role", name: "Role" }
  ],
  actions: {
    rowClick: (rowData, event) => {
      console.log("Clicked row data:", rowData);
    },
    searchKeydown: (query, event) => {
      console.log("Search query:", query);
    },
    footerClick: (footerData, event) => {
      console.log("Footer button clicked:", footerData);
    }
  }
});
```

---

## Integration with `json-renderers`

When used with `json-renderers`:

```js
import render from "json-renderers";

render({
  targetHtmlId: "my-table-container",
  columns: columnsJson,
  data: dataJson,
  options: { search: true },
  actions: {
    rowClick: (row) => console.log("Row clicked:", row),
    searchKeydown: (query) => console.log("Filter:", query)
  }
});
```

`json-renderers` automatically delegates to `json-renderers-actions` after mounting the DOM.

---

## Architecture Disciplines

- **Zero Inline Comments:** Clean code with self-descriptive structure.
- **Single-Function Default Exports:** Every modular file exports exactly one function as default.
- **Directory Index Structure:** Every folder has an `index.js` coordinating its public surface.
- **Pure Event Delegation:** Exactly 1 event listener per container, zero memory leaks.

---

## License

MIT © [KeshavSoft](https://github.com/keshavsoft)

