"use strict";

/** @module promise */

/**
 * Get the promise state.
 * @param {Promise} p
 * @returns {String} The promise state.
 */
function getPromiseState(p) {
  const t = {};
  return Promise.race([p, t]).then(
    (v) => (v === t ? "pending" : "fulfilled"),
    () => "rejected"
  );
}

export { getPromiseState };
