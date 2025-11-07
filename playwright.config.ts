// This File is not used because the tests are ran with cucumber-js and not playwright directly

import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
  },
};

export default config;

// This is how an updated config would look if we were running the tests with Playwright
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   use: {
//     // Run browser in headless mode.
//     headless: false,

//     // Change the default data-testid attribute.
//     testIdAttribute: 'data-test',
//   },
// });