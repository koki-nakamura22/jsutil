"use strict";

function detectDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";
}

function isMobile() {
  return detectDeviceType() === "Mobile";
}

function isDesktop() {
  return detectDeviceType() === "Desktop";
}

export { detectDeviceType, isMobile, isDesktop };
