"use strict";

import { detectDeviceType, isMobile, isDesktop } from "../device.js";

function setMockUserAgent(mockUserAgent) {
  const userAgentForRestore = window.navigator.userAgent;

  Object.defineProperty(window.navigator, "userAgent", {
    get: function () {
      return mockUserAgent;
    },
    configurable: true,
  });

  function restore() {
    Object.defineProperty(window.navigator, "userAgent", {
      get: function () {
        return userAgentForRestore;
      },
    });
  }
  return restore;
}

// detectDeviceType
// This function's test is not needed because it includes in isMobile and isDesktop functions.

// isMobile
it("device type is mobile (Android Phone)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Mobile Safari/{WebKit Rev}"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (Android Tablet)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Safari/{WebKit Rev}"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (webOS)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 Pre/3.0"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (iPhone)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (iPad)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPad; CPU OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPad7,2;FBMD/iPad;FBSN/iOS;FBSV/15.3.1;FBSS/2;FBCR/AT&T;FBID/tablet;FBLC/en_US;FBOP/5]"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (iPod)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPod; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (BlackBerry)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (BlackBerry; U; BlackBerry 9300; en) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.448 Mobile Safari/534.8+"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (IEMobile)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 630) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

it("device type is mobile (Opera Mini)", () => {
  const restore = setMockUserAgent(
    "Opera/9.80 (Android; Opera Mini/7.5.33361/95.109; U; en) Presto/2.12.423 Version/12.16"
  );
  expect(isMobile()).toBeTruthy();
  restore();
});

describe.each([
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", // Windows
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML%2C like Gecko) Home Assistant/2022.3 (io.robbie.HomeAssistant; build:2022.358; macOS 11.6.0) Mobile/HomeAssistant%2C like Safari", // Mac (Intel)
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36", // Mac (M1)
  "Mozilla/5.0 (Linux; 6.0.1; Le X527) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36", // Linux
])("device type is not mobile", (userAgent) => {
  const restore = setMockUserAgent(userAgent);
  expect(isMobile()).toBeFalsy();
  restore();
});

// isDesktop
describe.each([
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", // Windows
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML%2C like Gecko) Home Assistant/2022.3 (io.robbie.HomeAssistant; build:2022.358; macOS 11.6.0) Mobile/HomeAssistant%2C like Safari", // Mac (Intel)
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.67 Safari/537.36", // Mac (M1)
  "Mozilla/5.0 (Linux; 6.0.1; Le X527) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.143 Mobile Safari/537.36", // Linux
])("device type is desktop", (userAgent) => {
  const restore = setMockUserAgent(userAgent);
  expect(isMobile()).toBeFalsy();
  restore();
});

it("device type is not desktop (Android Phone)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Mobile Safari/{WebKit Rev}"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (Android Tablet)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; {Android Version}; {Build Tag etc.}) AppleWebKit/{WebKit Rev} (KHTML, like Gecko) Chrome/{Chrome Rev} Safari/{WebKit Rev}"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (webOS)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Linux; webOS/2.2.4; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.56 Safari/534.6 Pre/3.0"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (iPhone)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (iPad)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPad; CPU OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 [FBAN/FBIOS;FBDV/iPad7,2;FBMD/iPad;FBSN/iOS;FBSV/15.3.1;FBSS/2;FBCR/AT&T;FBID/tablet;FBLC/en_US;FBOP/5]"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (iPod)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (iPod; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (BlackBerry)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (BlackBerry; U; BlackBerry 9300; en) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.448 Mobile Safari/534.8+"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (IEMobile)", () => {
  const restore = setMockUserAgent(
    "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 630) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});

it("device type is not desktop (Opera Mini)", () => {
  const restore = setMockUserAgent(
    "Opera/9.80 (Android; Opera Mini/7.5.33361/95.109; U; en) Presto/2.12.423 Version/12.16"
  );
  expect(isDesktop()).toBeFalsy();
  restore();
});
