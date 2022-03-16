"use strict";

/** @module device */

/**
 * Detect the current device type.
 * @returns {String} "Mobile" or "Desktop".
 */
function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
}

/**
 * Check if the current device type is mobile or not.
 * @returns {Boolean} True: Mobile. / False: Not mobile.
 */
function isMobile() {
  return detectDeviceType() === "Mobile";
}

/**
 * Check if the current device type is desktop or not.
 * @returns {Boolean} True: Desktop. / False: Not desktop.
 */
function isDesktop() {
  return detectDeviceType() === "Desktop";
}

export { detectDeviceType, isMobile, isDesktop };
