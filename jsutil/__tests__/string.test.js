"use strict";

import { capitalize, escapeHtml } from "../string.js";

// capitalize
it("capitalize string", () => {
  expect(capitalize("my name is taro.")).toEqual("My name is taro.");
});

// generateRandomString
// Do not need the test because of just generate a random string.

// escapeHtml
it("escapte html code", () => {
  expect(
    escapeHtml(`<html>
  <head>
  <title>"String in double quotations"</title>
  </head>
  <body>
  <div>'String in single quotations'</div>
  <div>A&B</div>
  <div>\`Test\`</div>
  </body>
  </html>`)
  ).toEqual(`&lt;html&gt;
  &lt;head&gt;
  &lt;title&gt;&quot;String in double quotations&quot;&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;div&gt;&#x27;String in single quotations&#x27;&lt;/div&gt;
  &lt;div&gt;A&amp;B&lt;/div&gt;
  &lt;div&gt;&#x60;Test&#x60;&lt;/div&gt;
  &lt;/body&gt;
  &lt;/html&gt;`);
});
