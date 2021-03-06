"use strict";

/** @module cookie */

/**
 * Clear the browser cookies
 */
function clearCookies() {
  document.cookie
    .split(";")
    .forEach(
      (cookie) =>
        (document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    );
}

export { clearCookies };
