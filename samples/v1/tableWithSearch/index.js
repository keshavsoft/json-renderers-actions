import data from "../common/data.json" with { type: "json" };
import columns from "../common/columns.json" with { type: "json" };

const start = () => {
  try {
    window.ks.jsonRenderers.render({
      type: "table.simple",
      data,
      columns,
      options: {
        showSerial: true,
        showSearch: true,
        showOptions: true
      },
      targetHtmlId: "dom-render-container",
      classToApply: "",
      appendPosition: "replace"
    });

    const actionLog = document.getElementById("action-log");

    window.ks.jsonRenderersActions.applyActions("dom-render-container", {
      columns,
      actions: {
        rowClick: (rowData, event, target) => {
          console.log("Extracted row via json-renderers-actions:", rowData);
          if (actionLog) {
            actionLog.innerHTML = `Extracted Row via <span class="text-success">actions.rowClick</span>: <span class="text-warning">${JSON.stringify(rowData)}</span>`;
          }
        },
        searchKeydown: (searchData) => {
          console.log("Search query via json-renderers-actions:", searchData);
          if (actionLog) {
            actionLog.innerHTML = `Search Query via <span class="text-success">actions.searchKeydown</span>: <span class="text-info">${JSON.stringify(searchData)}</span>`;
          }
        }
      }
    });

  } catch (err) {
    console.error("Render error:", err);
    const container = document.getElementById("dom-render-container");
    if (container) {
      container.innerHTML = `<div class="alert alert-danger font-monospace small">${err.message}</div>`;
    }
  }
};

start();

