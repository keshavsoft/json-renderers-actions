import test from "node:test";
import assert from "node:assert/strict";
import checkContainer from "../src/v1/guards/container/index.js";
import checkActions from "../src/v1/guards/actions/index.js";
import buildBindings from "../src/v1/builders/index.js";
import applyActions from "../src/v1/index.js";

test("guards/container: resolves element or returns null", () => {
  const mockContainer = { addEventListener: () => {} };
  assert.equal(checkContainer(mockContainer), mockContainer);
  assert.equal(checkContainer(null), null);
});

test("guards/actions: validates actions object with function handlers", () => {
  assert.equal(checkActions(null), null);
  assert.equal(checkActions({}), null);
  assert.equal(checkActions({ notAFunc: "string" }), null);

  const valid = { rowClick: () => {} };
  assert.equal(checkActions(valid), valid);
});

test("builders: builds bindings array from actions configuration", () => {
  const actions = {
    rowClick: () => {},
    searchKeydown: () => {},
    footerClick: () => {}
  };

  const bindings = buildBindings({ actions, columns: ["id", "name"] });
  assert.equal(bindings.length, 3);
  assert.equal(bindings[0].event, "click");
  assert.equal(bindings[1].event, "keydown");
  assert.equal(bindings[2].event, "click");
});

test("v1 applyActions: delegates table button click and delivers matchElement without traversal", () => {
  const listeners = {};
  const mockContainer = {
    addEventListener: (type, handler) => {
      listeners[type] = handler;
    },
    contains: () => true
  };

  const mockButton = {
    className: "btn-action",
    closest: (sel) => {
      if (sel.includes("button")) return mockButton;
      return null;
    }
  };

  let receivedTarget = null;
  let receivedEvent = null;

  applyActions(mockContainer, {
    actions: {
      rowClick: (target, event) => {
        receivedTarget = target;
        receivedEvent = event;
      }
    }
  });

  assert.equal(typeof listeners["click"], "function");

  const clickEvent = {
    type: "click",
    target: mockButton
  };

  listeners["click"](clickEvent);

  assert.equal(receivedTarget, mockButton);
  assert.equal(receivedEvent, clickEvent);
});
